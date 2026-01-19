import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { NavBar, NavBarBrand, NavBarContent, NavBarItem } from '../components/ui/NavBar';
import { Footer, FooterTop, FooterContent, FooterColumn, FooterLink, FooterBottom } from '../components/ui/Footer';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Title } from '../components/ui/Title';
import Text from '../components/ui/Text';
import { Badge } from '../components/ui/Badge';
import { ReviewsList as Reviews } from '../components/ui/Reviews';
import { PriceDisplay } from '../components/ui/PriceDisplay';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/Accordion';
import { ThemeToggle } from '../components/ui/ThemeToggle';
import { Check, Zap, Shield, Globe, BarChart, Twitter, Github, Linkedin, Facebook } from 'lucide-react';

const meta: Meta = {
    title: 'Pages/Landing Page',
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj;

export const BusinessLanding: Story = {
    render: () => {
        return (
            <div className="min-h-screen font-sans text-text-primary bg-background-primary">
                {/* Navigation */}
                <NavBar variant="glass" sticky>
                    <NavBarBrand>
                        <div className="font-bold text-xl tracking-tight text-text-primary">Acme<span className="text-accent-blue">Corp</span></div>
                    </NavBarBrand>
                    
                    <NavBarContent align="center" className="hidden md:flex">
                        <NavBarItem href="#features">Features</NavBarItem>
                        <NavBarItem href="#testimonials">Testimonials</NavBarItem>
                        <NavBarItem href="#pricing">Pricing</NavBarItem>
                        <NavBarItem href="#faq">FAQ</NavBarItem>
                    </NavBarContent>
                    
                    <NavBarContent align="right">
                        <div className="flex gap-2 items-center">
                             <ThemeToggle 
                                className="w-auto border-0 p-2 bg-transparent shadow-none" 
                                label="" 
                                allowSystem={false}
                             />
                            <Button variant="ghost" size="sm">Log in</Button>
                            <Button variant="primary" size="sm">Get Started</Button>
                        </div>
                    </NavBarContent>
                </NavBar>

                {/* Hero Section */}
                <section className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 space-y-6 text-center md:text-left">
                            <Badge variant="default" className="mb-4">v2.0 is now available</Badge>
                            <Title level={1} className="leading-tight md:leading-tight">
                                Transform your workflow with <span className="text-accent-blue">Intelligence</span>
                            </Title>
                            <Text variant="lead" className="text-text-secondary max-w-2xl mx-auto md:mx-0">
                                Streamline your business operations with our all-in-one platform. 
                                Automate tasks, gain insights, and scale faster than ever before.
                            </Text>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                                <Button size="lg" variant="primary" leftIcon={<Zap className="w-4 h-4" />}>
                                    Start Free Trial
                                </Button>
                                <Button size="lg" variant="outline">
                                    View Demo
                                </Button>
                            </div>
                            <div className="pt-8 flex items-center justify-center md:justify-start gap-8 text-text-tertiary">
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-status-success" />
                                    <span className="text-sm">No credit card required</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-status-success" />
                                    <span className="text-sm">14-day free trial</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/20 to-accent-purple/20 blur-3xl rounded-full opacity-50 animate-pulse" />
                            <Card variant="glass" className="relative z-10 p-2 shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700">
                                 <img 
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                                    alt="Dashboard Preview" 
                                    className="rounded-lg shadow-inner border border-white/10"
                                />
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Logo Cloud */}
                <section className="py-12 border-y border-border-primary/50 bg-background-secondary/30">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
                        <Text variant="small" className="text-text-tertiary uppercase tracking-wider mb-8">Trusted by industry leaders</Text>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                             {['Google', 'Microsoft', 'Spotify', 'Amazon', 'Netflix'].map((company) => (
                                 <div key={company} className="text-xl font-bold font-mono text-text-secondary">{company}</div>
                             ))}
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section id="features" className="py-24 px-4 md:px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <SectionHeader 
                                title="Everything you need"
                                description="Powerful features designed to help you scale your business globally."
                                className="items-center text-center"
                            />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Zap className="w-6 h-6 text-accent-yellow" />,
                                    title: "Lightning Fast",
                                    desc: "Optimized for speed. Our platform ensures your data is always available in milliseconds."
                                },
                                {
                                    icon: <Shield className="w-6 h-6 text-status-success" />,
                                    title: "Bank-Grade Security",
                                    desc: "Enterprise readiness with ISO 27001 certification and GDPR compliance built-in."
                                },
                                {
                                    icon: <Globe className="w-6 h-6 text-accent-blue" />,
                                    title: "Global Infrastructure",
                                    desc: "Deploy your application to 35+ regions worldwide with a single click."
                                },
                                {
                                    icon: <BarChart className="w-6 h-6 text-accent-purple" />,
                                    title: "Advanced Analytics",
                                    desc: "Gain deep insights into your users' behavior with our real-time analytics engine."
                                },
                                {
                                    icon: <Check className="w-6 h-6 text-accent-pink" />,
                                    title: "99.99% Uptime",
                                    desc: "Guaranteed SLA with automated failover and redundancy across availability zones."
                                },
                                {
                                    icon: <Check className="w-6 h-6 text-accent-orange" />,
                                    title: "24/7 Support",
                                    desc: "Our dedicated support team is available around the clock to help you succeed."
                                }
                            ].map((feature, i) => (
                                <Card key={i} variant="elevated" hoverable className="h-full">
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-xl bg-background-secondary flex items-center justify-center mb-4">
                                            {feature.icon}
                                        </div>
                                        <CardTitle>{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Text className="text-text-secondary">{feature.desc}</Text>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="py-24 bg-background-secondary/50">
                    <div className="max-w-7xl mx-auto px-4 md:px-6">
                        <SectionHeader 
                            title="Loved by thousands"
                            description="Don't just take our word for it. Here's what our customers have to say."
                            className="mb-16 items-center text-center"
                        />
                        <Reviews 
                            reviews={[
                                {
                                    id: '1',
                                    author: 'Sarah Johnson',
                                    // @ts-ignore
                                    role: 'CTO at TechFlow',
                                    // @ts-ignore
                                    content: 'This platform has revolutionized how we deploy our services. The speed and reliability are unmatched in the industry.',
                                    rating: 5,
                                    date: '2 days ago',
                                    avatar: <img src="https://i.pravatar.cc/150?u=1" alt="Sarah" className="w-10 h-10 rounded-full" />
                                },
                                 {
                                    id: '2',
                                    author: 'Michael Chen',
                                    // @ts-ignore
                                    role: 'Product Manager',
                                    // @ts-ignore
                                    content: 'The analytics features alone are worth the price. We have gained so much visibility into our user journey.',
                                    rating: 5,
                                    date: '1 week ago',
                                    avatar: <img src="https://i.pravatar.cc/150?u=2" alt="Michael" className="w-10 h-10 rounded-full" />
                                },
                                 {
                                    id: '3',
                                    author: 'Emily Davis',
                                    // @ts-ignore
                                    role: 'Startup Founder',
                                    // @ts-ignore
                                    content: 'Setting up was a breeze. We were live in less than an hour. Highly recommended for any startup.',
                                    rating: 4,
                                    date: '3 weeks ago',
                                    avatar: <img src="https://i.pravatar.cc/150?u=3" alt="Emily" className="w-10 h-10 rounded-full" />
                                }
                            ].map(r => ({
                                ...r,
                                text: r.content // Mapping content to text prop as Reviews component expects text
                            }))}
                        />
                    </div>
                </section>

                 {/* Pricing */}
                 <section id="pricing" className="py-24 px-4 md:px-6">
                    <div className="max-w-7xl mx-auto">
                        <SectionHeader 
                            title="Simple, transparent pricing"
                            description="Choose the plan that's right for your business. No hidden fees."
                            className="mb-16 items-center text-center"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                            {/* Starter */}
                            <Card variant="outlined" className="p-6">
                                <CardHeader>
                                    <CardTitle>Starter</CardTitle>
                                    <CardDescription>Perfect for side projects</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="flex items-baseline">
                                        <PriceDisplay amount={29} currency="USD" />
                                        <span className="text-text-tertiary ml-1">/mo</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-status-success"/> <Text variant="small">Up to 5 projects</Text></div>
                                        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-status-success"/> <Text variant="small">Basic analytics</Text></div>
                                        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-status-success"/> <Text variant="small">Community support</Text></div>
                                    </div>
                                    <Button variant="outline" className="w-full">Choose Starter</Button>
                                </CardContent>
                            </Card>

                            {/* Pro */}
                            <Card variant="elevated" className="p-6 border-2 border-accent-blue/50 relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-accent-blue text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                                <CardHeader>
                                    <CardTitle>Professional</CardTitle>
                                    <CardDescription>For growing businesses</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="flex items-baseline">
                                        <PriceDisplay amount={99} currency="USD" />
                                        <span className="text-text-tertiary ml-1">/mo</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent-blue"/> <Text variant="small">Unlimited projects</Text></div>
                                        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent-blue"/> <Text variant="small">Advanced analytics</Text></div>
                                        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent-blue"/> <Text variant="small">Priority support</Text></div>
                                        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent-blue"/> <Text variant="small">Custom domains</Text></div>
                                    </div>
                                    <Button variant="primary" className="w-full">Choose Pro</Button>
                                </CardContent>
                            </Card>

                            {/* Enterprise */}
                            <Card variant="outlined" className="p-6">
                                <CardHeader>
                                    <CardTitle>Enterprise</CardTitle>
                                    <CardDescription>For large organizations</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="flex items-baseline">
                                        <PriceDisplay amount={299} currency="USD" />
                                        <span className="text-text-tertiary ml-1">/mo</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-status-success"/> <Text variant="small">Everything in Pro</Text></div>
                                        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-status-success"/> <Text variant="small">SSO & SAML</Text></div>
                                        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-status-success"/> <Text variant="small">Dedicated account manager</Text></div>
                                        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-status-success"/> <Text variant="small">99.99% SLA</Text></div>
                                    </div>
                                    <Button variant="outline" className="w-full">Contact Sales</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section id="faq" className="py-24 bg-background-secondary/30">
                    <div className="max-w-3xl mx-auto px-4 md:px-6">
                        <SectionHeader 
                            title="Frequently Asked Questions"
                            description="Everything you need to know about the product and billing."
                            className="mb-12 items-center text-center"
                        />
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Is there a free trial?</AccordionTrigger>
                                <AccordionContent>
                                    Yes, we offer a 14-day free trial with full access to all features on the Professional plan. No credit card required.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can I change my plan later?</AccordionTrigger>
                                <AccordionContent>
                                    Absolutely. You can upgrade or downgrade your plan at any time. Changes are effective immediately.
                                </AccordionContent>
                            </AccordionItem>
                             <AccordionItem value="item-3">
                                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                                <AccordionContent>
                                    We accept all major credit cards (Visa, Mastercard, Amex) and PayPal. For Enterprise plans, we also support invoicing.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 px-4 md:px-6">
                     <div className="max-w-5xl mx-auto bg-gradient-to-br from-accent-blue to-accent-purple rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
                        <div className="relative z-10 space-y-6">
                            <h2 className="text-4xl font-bold">Ready to get started?</h2>
                            <p className="text-xl opacity-90 max-w-2xl mx-auto">Join thousands of developers building the future today.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <Button size="lg" variant="secondary" className="bg-surface-primary text-accent-blue hover:bg-surface-primary/90">
                                    Get Started for Free
                                </Button>
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                                    Contact Sales
                                </Button>
                            </div>
                        </div>
                        {/* Abstract Shapes */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-pink/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
                     </div>
                </section>

                <Footer>
                    <FooterTop 
                        title="Acme Corp" 
                        description="Making the world a better place through constructing elegant hierarchies."
                        socials={
                            <>
                                <FooterLink href="#"><Twitter className="w-5 h-5" /></FooterLink>
                                <FooterLink href="#"><Github className="w-5 h-5" /></FooterLink>
                                <FooterLink href="#"><Linkedin className="w-5 h-5" /></FooterLink>
                                <FooterLink href="#"><Facebook className="w-5 h-5" /></FooterLink>
                            </>
                        }
                    />
                    <FooterContent>
                        <FooterColumn title="Product">
                            <FooterLink href="#">Features</FooterLink>
                            <FooterLink href="#">Integrations</FooterLink>
                            <FooterLink href="#">Pricing</FooterLink>
                            <FooterLink href="#">Changelog</FooterLink>
                        </FooterColumn>
                        <FooterColumn title="Company">
                            <FooterLink href="#">About</FooterLink>
                            <FooterLink href="#">Blog</FooterLink>
                            <FooterLink href="#">Careers</FooterLink>
                            <FooterLink href="#">Contact</FooterLink>
                        </FooterColumn>
                        <FooterColumn title="Legal">
                            <FooterLink href="#">Privacy</FooterLink>
                            <FooterLink href="#">Terms</FooterLink>
                            <FooterLink href="#">Cookie Policy</FooterLink>
                        </FooterColumn>
                    </FooterContent>
                    <FooterBottom>
                        <p>© 2025 Acme Corp Inc. All rights reserved.</p>
                        <div className="flex gap-4">
                            <FooterLink href="#">Privacy Policy</FooterLink>
                            <FooterLink href="#">Terms of Service</FooterLink>
                        </div>
                    </FooterBottom>
                </Footer>
            </div>
        );
    },
};
