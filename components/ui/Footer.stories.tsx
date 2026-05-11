import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Footer, FooterTop, FooterBottom, FooterColumn, FooterLink, FooterSection } from './Footer';

const meta: Meta<typeof Footer> = {
    title: 'Components/Footer',
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
                <FooterSection>
                    <FooterColumn title="Product">
                        <FooterLink href="#">Features</FooterLink>
                        <FooterLink href="#">Pricing</FooterLink>
                        <FooterLink href="#">Integrations</FooterLink>
                        <FooterLink href="#">Changelog</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Company">
                        <FooterLink href="#">About</FooterLink>
                        <FooterLink href="#">Careers</FooterLink>
                        <FooterLink href="#">Press</FooterLink>
                        <FooterLink href="#">Blog</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Support">
                        <FooterLink href="#">Help Center</FooterLink>
                        <FooterLink href="#">API Docs</FooterLink>
                        <FooterLink href="#">Status</FooterLink>
                        <FooterLink href="#">Contact</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Legal">
                        <FooterLink href="#">Privacy</FooterLink>
                        <FooterLink href="#">Terms</FooterLink>
                        <FooterLink href="#">Cookies</FooterLink>
                    </FooterColumn>
                </FooterSection>
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
                <FooterSection>
                    <FooterColumn title="Legal">
                        <FooterLink href="#">Privacy Policy</FooterLink>
                        <FooterLink href="#">Terms of Service</FooterLink>
                        <FooterLink href="#">Cookie Policy</FooterLink>
                        <FooterLink href="#">GDPR Compliance</FooterLink>
                        <FooterLink href="#">CCPA Notice</FooterLink>
                        <FooterLink href="#">SLA</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Regulatory">
                        <FooterLink href="#">FINRA</FooterLink>
                        <FooterLink href="#">SEC Filings</FooterLink>
                        <FooterLink href="#">Anti-Money Laundering</FooterLink>
                        <FooterLink href="#">KYC Policy</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Security">
                        <FooterLink href="#">Bug Bounty</FooterLink>
                        <FooterLink href="#">Responsible Disclosure</FooterLink>
                        <FooterLink href="#">Certifications</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Contact">
                        <FooterLink href="#">Legal Team</FooterLink>
                        <FooterLink href="#">DPO</FooterLink>
                        <FooterLink href="#">Compliance</FooterLink>
                    </FooterColumn>
                </FooterSection>
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
                <FooterSection>
                    <FooterColumn title="Services">
                        <FooterLink href="#">Checking</FooterLink>
                        <FooterLink href="#">Savings</FooterLink>
                        <FooterLink href="#">Credit</FooterLink>
                        <FooterLink href="#">Investments</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Company">
                        <FooterLink href="#">About</FooterLink>
                        <FooterLink href="#">Careers</FooterLink>
                        <FooterLink href="#">Press</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Support">
                        <FooterLink href="#">Help</FooterLink>
                        <FooterLink href="#">Contact</FooterLink>
                        <FooterLink href="#">Status</FooterLink>
                    </FooterColumn>
                </FooterSection>
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
                <FooterSection>
                    <FooterColumn title="All Links">
                        <FooterLink href="#">Dashboard</FooterLink>
                        <FooterLink href="#">Transactions</FooterLink>
                        <FooterLink href="#">Cards</FooterLink>
                        <FooterLink href="#">Settings</FooterLink>
                        <FooterLink href="#">Help</FooterLink>
                        <FooterLink href="#">Log Out</FooterLink>
                    </FooterColumn>
                </FooterSection>
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
                <FooterSection>
                    <FooterColumn title="International Offices & Services">
                        <FooterLink href="#">United States — New York HQ</FooterLink>
                        <FooterLink href="#">European Union — Frankfurt Office</FooterLink>
                        <FooterLink href="#">Asia Pacific — Singapore Branch</FooterLink>
                        <FooterLink href="#">Latin America — São Paulo Desk</FooterLink>
                        <FooterLink href="#">Middle East — Dubai International Center</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Wealth Management Solutions">
                        <FooterLink href="#">Private Banking & Advisory Services</FooterLink>
                        <FooterLink href="#">Hedge Fund & Alternative Investments</FooterLink>
                        <FooterLink href="#">Real Estate & Infrastructure Fund</FooterLink>
                        <FooterLink href="#">Estate & Tax Planning Optimization</FooterLink>
                    </FooterColumn>
                    <FooterColumn title="Corporate & Institutional Banking">
                        <FooterLink href="#">Corporate Treasury & Cash Management</FooterLink>
                        <FooterLink href="#">Trade Finance & Supply Chain Solutions</FooterLink>
                        <FooterLink href="#">Capital Markets & Advisory Services</FooterLink>
                    </FooterColumn>
                </FooterSection>
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
