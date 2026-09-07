import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Footer, FooterTop, FooterBottom, FooterColumn, FooterLink, FooterContent } from './Footer';

/**
 * Real destinations used by the demos below. Entries with no real page are marked
 * `disabled` so they render as plain text instead of dead `href="#"` links.
 */
const DOCS_URL = 'https://smart-coder-labs.github.io/design-system/';
const REPO_URL = 'https://github.com/smart-coder-labs/design-system';
const ISSUES_URL = 'https://github.com/smart-coder-labs/design-system/issues';
const RELEASES_URL = 'https://github.com/smart-coder-labs/design-system/releases';

const meta: Meta<typeof Footer> = {
    title: 'Layout/Footer',
    component: Footer,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <FooterTop
                    title="FinTechApp"
                    description="Modern financial tools for everyone. Secure, fast, and reliable."
                />
                <FooterContent>
                    <FooterColumn title="Product">
                        <FooterLink href={DOCS_URL} target="_blank">Features</FooterLink>
                        <FooterLink href={RELEASES_URL} target="_blank">Changelog</FooterLink>
                        <FooterLink disabled>Pricing</FooterLink>
                        <FooterLink disabled>Integrations</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Company">
                        <FooterLink href={REPO_URL} target="_blank">About</FooterLink>
                        <FooterLink disabled>Careers</FooterLink>
                        <FooterLink disabled>Press</FooterLink>
                        <FooterLink disabled>Blog</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Support">
                        <FooterLink href={DOCS_URL} target="_blank">Help Center</FooterLink>
                        <FooterLink href={DOCS_URL} target="_blank">API Docs</FooterLink>
                        <FooterLink href={ISSUES_URL} target="_blank">Contact</FooterLink>
                        <FooterLink disabled>Status</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Legal">
                        <FooterLink disabled>Privacy</FooterLink>
                        <FooterLink disabled>Terms</FooterLink>
                        <FooterLink disabled>Cookies</FooterLink>
                    </FooterColumn>
                </FooterContent>
                <FooterBottom>
                    <span>© 2026 FinTechApp. All rights reserved.</span>
                </FooterBottom>
            </>
        ),
    },
};

/**
 * Links without a real destination degrade to non-interactive, muted plain text
 * (`<span aria-disabled="true">`) — either explicitly via `disabled`, or automatically
 * when `href` is missing, empty or `"#"`.
 */
export const NoDestinationLinks: Story = {
    parameters: {
        docs: {
            description: {
                story:
                    'Demonstrates the no-destination state. `disabled`, a missing `href`, an empty `href` and `href="#"` all render a non-focusable `<span aria-disabled="true">` instead of a dead link, keeping the same typography and spacing as a real link.',
            },
        },
    },
    args: {
        children: (
            <>
                <FooterTop
                    title="Acme Inc."
                    description="Pages that do not exist yet are not presented as links."
                />
                <FooterContent>
                    <FooterColumn title="Real destinations">
                        <FooterLink href={DOCS_URL} target="_blank">Documentation</FooterLink>
                        <FooterLink href={REPO_URL} target="_blank">Source code</FooterLink>
                        <FooterLink href={ISSUES_URL} target="_blank">Report an issue</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="No destination">
                        <FooterLink disabled>Explicitly disabled</FooterLink>
                        <FooterLink>No href at all</FooterLink>
                        <FooterLink href="">Empty href</FooterLink>
                        <FooterLink href="#">Placeholder href=&quot;#&quot;</FooterLink>
                    </FooterColumn>
                </FooterContent>
                <FooterBottom>
                    <span>© 2026 Acme Inc.</span>
                </FooterBottom>
            </>
        ),
    },
};

export const MinimalFooter: Story = {
    args: {
        children: (
            <>
                <FooterTop
                    title="NeoBank"
                    description="Built for people who love money."
                />
                <FooterBottom>
                    <span>© 2026 NeoBank. All rights reserved.</span>
                </FooterBottom>
            </>
        ),
    },
};

export const LegalHeavyFooter: Story = {
    args: {
        children: (
            <>
                <FooterTop
                    title="ComplianceCorp"
                    description="Regulatory-compliant financial infrastructure for enterprises."
                />
                <FooterContent>
                    <FooterColumn title="Legal">
                        <FooterLink disabled>Privacy Policy</FooterLink>
                        <FooterLink disabled>Terms of Service</FooterLink>
                        <FooterLink disabled>Cookie Policy</FooterLink>
                        <FooterLink disabled>GDPR Compliance</FooterLink>
                        <FooterLink disabled>CCPA Notice</FooterLink>
                        <FooterLink disabled>SLA</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Regulatory">
                        <FooterLink disabled>FINRA</FooterLink>
                        <FooterLink disabled>SEC Filings</FooterLink>
                        <FooterLink disabled>Anti-Money Laundering</FooterLink>
                        <FooterLink disabled>KYC Policy</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Security">
                        <FooterLink href={ISSUES_URL} target="_blank">Bug Bounty</FooterLink>
                        <FooterLink disabled>Responsible Disclosure</FooterLink>
                        <FooterLink disabled>Certifications</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Contact">
                        <FooterLink href={ISSUES_URL} target="_blank">Legal Team</FooterLink>
                        <FooterLink disabled>DPO</FooterLink>
                        <FooterLink disabled>Compliance</FooterLink>
                    </FooterColumn>
                </FooterContent>
                <FooterBottom>
                    <span>© 2026 ComplianceCorp Inc. All rights reserved.</span>
                    <span>Built with ❤️ for regulatory excellence</span>
                </FooterBottom>
            </>
        ),
    },
};

export const DarkMode: Story = {
    decorators: [
        (Story) => (
            <div className="dark">
                <Story />
            </div>
        ),
    ],
    args: {
        children: (
            <>
                <FooterTop
                    title="DarkBank"
                    description="Banking that respects your privacy. No tracking, no gimmicks."
                />
                <FooterContent>
                    <FooterColumn title="Services">
                        <FooterLink disabled>Checking</FooterLink>
                        <FooterLink disabled>Savings</FooterLink>
                        <FooterLink disabled>Credit</FooterLink>
                        <FooterLink disabled>Investments</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Company">
                        <FooterLink href={REPO_URL} target="_blank">About</FooterLink>
                        <FooterLink disabled>Careers</FooterLink>
                        <FooterLink disabled>Press</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Support">
                        <FooterLink href={DOCS_URL} target="_blank">Help</FooterLink>
                        <FooterLink href={ISSUES_URL} target="_blank">Contact</FooterLink>
                        <FooterLink disabled>Status</FooterLink>
                    </FooterColumn>
                </FooterContent>
                <FooterBottom>
                    <span>© 2026 DarkBank Inc.</span>
                    <span>🌙 Dark mode native</span>
                </FooterBottom>
            </>
        ),
    },
};

export const SingleColumn: Story = {
    args: {
        children: (
            <>
                <FooterTop
                    title="Simple Finance"
                    description="One product. One price. All access."
                />
                <FooterContent>
                    <FooterColumn title="All Links">
                        <FooterLink href={DOCS_URL} target="_blank">Documentation</FooterLink>
                        <FooterLink href={REPO_URL} target="_blank">Source code</FooterLink>
                        <FooterLink href={ISSUES_URL} target="_blank">Help</FooterLink>
                        <FooterLink disabled>Dashboard</FooterLink>
                        <FooterLink disabled>Transactions</FooterLink>
                        <FooterLink disabled>Cards</FooterLink>
                        <FooterLink disabled>Settings</FooterLink>
                    </FooterColumn>
                </FooterContent>
                <FooterBottom>
                    <span>© 2026 Simple Finance</span>
                </FooterBottom>
            </>
        ),
    },
};

export const WithLongLinkTexts: Story = {
    args: {
        children: (
            <>
                <FooterTop
                    title="International Wealth Management Platform"
                    description="Cross-border wealth management solutions for high-net-worth individuals and institutional investors."
                />
                <FooterContent>
                    <FooterColumn title="International Offices & Services">
                        <FooterLink disabled>United States — New York HQ</FooterLink>
                        <FooterLink disabled>European Union — Frankfurt Office</FooterLink>
                        <FooterLink disabled>Asia Pacific — Singapore Branch</FooterLink>
                        <FooterLink disabled>Latin America — São Paulo Desk</FooterLink>
                        <FooterLink disabled>Middle East — Dubai International Center</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Wealth Management Solutions">
                        <FooterLink disabled>Private Banking &amp; Advisory Services</FooterLink>
                        <FooterLink disabled>Hedge Fund &amp; Alternative Investments</FooterLink>
                        <FooterLink disabled>Real Estate &amp; Infrastructure Fund</FooterLink>
                        <FooterLink disabled>Estate &amp; Tax Planning Optimization</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Corporate & Institutional Banking">
                        <FooterLink disabled>Corporate Treasury &amp; Cash Management</FooterLink>
                        <FooterLink disabled>Trade Finance &amp; Supply Chain Solutions</FooterLink>
                        <FooterLink disabled>Capital Markets &amp; Advisory Services</FooterLink>
                    </FooterColumn>
                </FooterContent>
                <FooterBottom>
                    <span>© 2026 International Wealth Management Platform Inc. All rights reserved. Member FDIC.</span>
                </FooterBottom>
            </>
        ),
    },
};

export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
export const FintechUseCase: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Footer used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.',
      },
    },
  },
};
