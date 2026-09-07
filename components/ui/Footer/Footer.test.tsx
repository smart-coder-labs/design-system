import type { ReactNode } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { FooterLink, type FooterLinkProps } from './Footer';
import { SignupForm } from '../SignupForm';

const noDestinationCases: Array<[string, FooterLinkProps]> = [
    ['no href', {}],
    ['an empty href', { href: '' }],
    ['a placeholder href="#"', { href: '#' }],
    ['the disabled prop', { disabled: true, href: '/real' }],
];

describe('FooterLink', () => {
    it.each(noDestinationCases)('renders a non-interactive element with %s', (_label, props) => {
        render(<FooterLink {...props}>Privacy Policy</FooterLink>);

        const el = screen.getByText('Privacy Policy');
        expect(el.tagName).toBe('SPAN');
        expect(el).toHaveAttribute('aria-disabled', 'true');
        expect(el).not.toHaveAttribute('href');
        expect(el).not.toHaveAttribute('tabindex');
        expect(screen.queryByRole('link')).toBeNull();
    });

    it('renders a real anchor when a destination is provided', () => {
        render(<FooterLink href="/privacy">Privacy Policy</FooterLink>);

        const link = screen.getByRole('link', { name: 'Privacy Policy' });
        expect(link).toHaveAttribute('href', '/privacy');
        expect(link).not.toHaveAttribute('aria-disabled');
    });

    it('defaults rel to noopener noreferrer for target="_blank"', () => {
        render(
            <FooterLink href="https://example.com" target="_blank">
                Docs
            </FooterLink>
        );

        expect(screen.getByRole('link', { name: 'Docs' })).toHaveAttribute(
            'rel',
            'noopener noreferrer'
        );
    });

    it('keeps an explicit rel', () => {
        render(
            <FooterLink href="https://example.com" target="_blank" rel="external">
                Docs
            </FooterLink>
        );
        expect(screen.getByRole('link', { name: 'Docs' })).toHaveAttribute('rel', 'external');
    });

    it('renders an active element when as is provided without an href', () => {
        const onClick = vi.fn();
        render(
            <FooterLink as="button" type="button" onClick={onClick}>
                Cookie settings
            </FooterLink>
        );

        const button = screen.getByRole('button', { name: 'Cookie settings' });
        expect(button).not.toHaveAttribute('aria-disabled');
        expect(button).not.toHaveAttribute('href');
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('spreads props through custom components given via as', () => {
        // Mimics a router Link: the destination comes from `to`, never from `href`.
        const RouterLink = ({ to, children, ...rest }: { to: string; children: ReactNode }) => (
            <a {...rest} href={to}>
                {children}
            </a>
        );

        // `to` is not part of FooterLinkProps; it is forwarded verbatim to the custom component.
        const routerProps = { to: '/about' } as unknown as FooterLinkProps;
        render(<FooterLink as={RouterLink} {...routerProps}>About</FooterLink>);

        const link = screen.getByRole('link', { name: 'About' });
        expect(link).toHaveAttribute('href', '/about');
        expect(link).not.toHaveAttribute('aria-disabled');
    });

    it('still renders an inactive element when as is combined with disabled', () => {
        render(
            <FooterLink as="button" disabled>
                Careers
            </FooterLink>
        );

        const el = screen.getByText('Careers');
        expect(el.tagName).toBe('BUTTON');
        expect(el).toHaveAttribute('aria-disabled', 'true');
        expect(el).not.toHaveAttribute('href');
        expect(screen.queryByRole('link')).toBeNull();
    });
});

describe('SignupForm consent links', () => {
    it('renders consent labels as plain text when no href props are given', () => {
        render(<SignupForm />);

        expect(screen.queryByRole('link')).toBeNull();
        expect(screen.getByText('Terms and Conditions').tagName).toBe('SPAN');
        expect(screen.getByText('Privacy Policy').tagName).toBe('SPAN');
    });

    it('renders real anchors when href props are given', () => {
        render(<SignupForm termsHref="/terms" privacyHref="https://example.com/privacy" />);

        expect(screen.getByRole('link', { name: 'Terms and Conditions' })).toHaveAttribute(
            'href',
            '/terms'
        );

        const privacy = screen.getByRole('link', { name: 'Privacy Policy' });
        expect(privacy).toHaveAttribute('href', 'https://example.com/privacy');
        expect(privacy).toHaveAttribute('target', '_blank');
        expect(privacy).toHaveAttribute('rel', 'noopener noreferrer');
    });
});
