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
        <FooterBottom copyright="© 2026 FinTechApp. All rights reserved." />
      </>
    ),
  },
};
