import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Footer, FooterTop, FooterBottom, FooterColumn, FooterLink, FooterContent } from './Footer';

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
                        <FooterLink href="/features">Features</FooterLink>
                        <FooterLink href="/pricing">Pricing</FooterLink>
                        <FooterLink href="/integrations">Integrations</FooterLink>
                        <FooterLink href="/changelog">Changelog</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Company">
                        <FooterLink href="/about">About</FooterLink>
                        <FooterLink href="/careers">Careers</FooterLink>
                        <FooterLink href="/press">Press</FooterLink>
                        <FooterLink href="/blog">Blog</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Support">
                        <FooterLink href="/help">Help Center</FooterLink>
                        <FooterLink href="/docs/api">API Docs</FooterLink>
                        <FooterLink href="/status">Status</FooterLink>
                        <FooterLink href="/contact">Contact</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Legal">
                        <FooterLink href="/legal/privacy">Privacy</FooterLink>
                        <FooterLink href="/legal/terms">Terms</FooterLink>
                        <FooterLink href="/legal/cookies">Cookies</FooterLink>
                    </FooterColumn>
                </FooterContent>
                <FooterBottom>
                    <span>© 2026 FinTechApp. All rights reserved.</span>
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
                        <FooterLink href="/legal/privacy-policy">Privacy Policy</FooterLink>
                        <FooterLink href="/legal/terms-of-service">Terms of Service</FooterLink>
                        <FooterLink href="/legal/cookie-policy">Cookie Policy</FooterLink>
                        <FooterLink href="/legal/gdpr">GDPR Compliance</FooterLink>
                        <FooterLink href="/legal/ccpa">CCPA Notice</FooterLink>
                        <FooterLink href="/legal/sla">SLA</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Regulatory">
                        <FooterLink href="/regulatory/finra">FINRA</FooterLink>
                        <FooterLink href="/regulatory/sec-filings">SEC Filings</FooterLink>
                        <FooterLink href="/regulatory/aml">Anti-Money Laundering</FooterLink>
                        <FooterLink href="/regulatory/kyc">KYC Policy</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Security">
                        <FooterLink href="/security/bug-bounty">Bug Bounty</FooterLink>
                        <FooterLink href="/security/responsible-disclosure">Responsible Disclosure</FooterLink>
                        <FooterLink href="/security/certifications">Certifications</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Contact">
                        <FooterLink href="/contact/legal">Legal Team</FooterLink>
                        <FooterLink href="/contact/dpo">DPO</FooterLink>
                        <FooterLink href="/contact/compliance">Compliance</FooterLink>
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
                        <FooterLink href="/services/checking">Checking</FooterLink>
                        <FooterLink href="/services/savings">Savings</FooterLink>
                        <FooterLink href="/services/credit">Credit</FooterLink>
                        <FooterLink href="/services/investments">Investments</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Company">
                        <FooterLink href="/about">About</FooterLink>
                        <FooterLink href="/careers">Careers</FooterLink>
                        <FooterLink href="/press">Press</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Support">
                        <FooterLink href="/help">Help</FooterLink>
                        <FooterLink href="/contact">Contact</FooterLink>
                        <FooterLink href="/status">Status</FooterLink>
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
                        <FooterLink href="/dashboard">Dashboard</FooterLink>
                        <FooterLink href="/transactions">Transactions</FooterLink>
                        <FooterLink href="/cards">Cards</FooterLink>
                        <FooterLink href="/settings">Settings</FooterLink>
                        <FooterLink href="/help">Help</FooterLink>
                        <FooterLink href="/logout">Log Out</FooterLink>
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
                        <FooterLink href="/offices/new-york">United States — New York HQ</FooterLink>
                        <FooterLink href="/offices/frankfurt">European Union — Frankfurt Office</FooterLink>
                        <FooterLink href="/offices/singapore">Asia Pacific — Singapore Branch</FooterLink>
                        <FooterLink href="/offices/sao-paulo">Latin America — São Paulo Desk</FooterLink>
                        <FooterLink href="/offices/dubai">Middle East — Dubai International Center</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Wealth Management Solutions">
                        <FooterLink href="/wealth/private-banking">Private Banking & Advisory Services</FooterLink>
                        <FooterLink href="/wealth/alternative-investments">Hedge Fund & Alternative Investments</FooterLink>
                        <FooterLink href="/wealth/real-estate-infrastructure">Real Estate & Infrastructure Fund</FooterLink>
                        <FooterLink href="/wealth/estate-tax-planning">Estate & Tax Planning Optimization</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Corporate & Institutional Banking">
                        <FooterLink href="/corporate/treasury-cash-management">Corporate Treasury & Cash Management</FooterLink>
                        <FooterLink href="/corporate/trade-finance">Trade Finance & Supply Chain Solutions</FooterLink>
                        <FooterLink href="/corporate/capital-markets">Capital Markets & Advisory Services</FooterLink>
                    </FooterColumn>
                </FooterContent>
                <FooterBottom>
                    <span>© 2026 International Wealth Management Platform Inc. All rights reserved. Member FDIC.</span>
                </FooterBottom>
            </>
        ),
    },
};

export const PlaceholderAndExternalLinks: Story = {
    parameters: {
        docs: {
            description: {
                story:
                    'Links without a real destination (`href` missing, empty or `"#"`) render as non-navigating `<span aria-disabled="true">` elements, so they can never jump to the top of the page. Links marked `external` render as anchors with `target="_blank"` and `rel="noopener noreferrer"`.',
            },
        },
    },
    args: {
        children: (
            <>
                <FooterTop
                    title="LinkDemo"
                    description="Placeholder links degrade to plain text; real links stay navigable."
                />
                <FooterContent>
                    <FooterColumn title="Real links">
                        <FooterLink href="#pricing">Pricing (on-page anchor)</FooterLink>
                        <FooterLink href="https://github.com/smart-coder-labs/design-system" external>
                            GitHub (external)
                        </FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Placeholders">
                        <FooterLink href="#">Coming soon (href="#")</FooterLink>
                        <FooterLink>Coming soon (no href)</FooterLink>
                    </FooterColumn>
                </FooterContent>
                <FooterBottom>
                    <span>© 2026 LinkDemo. All rights reserved.</span>
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
