import React, { useState } from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    Input,
    Textarea,
    Modal,
    ModalHeader,
    ModalTitle,
    ModalDescription,
    ModalContent,
    ModalFooter,
    ModalClose,
    ModalCloseButton,
    Dropdown,
    DropdownItem,
    DropdownSeparator,
    DropdownLabel,
    Tooltip,
    TooltipProvider,
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
    Switch,
    Badge,
    NotificationBadge,
    NavBar,
    NavBarBrand,
    NavBarContent,
    NavBarItem,
    NavBarSeparator,
} from './index';

/**
 * 🍏 Apple Design System - Demo Page
 * 
 * Esta página demuestra todos los componentes del design system
 * en acción, con ejemplos de uso real.
 */

export const DemoPage: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);
    const [activeTab, setActiveTab] = useState('overview');

    // Toggle dark mode
    React.useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <TooltipProvider>
            <div className="min-h-screen bg-background-primary">
                {/* Navigation */}
                <NavBar variant="glass">
                    <NavBarBrand>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="text-accent-blue"
                        >
                            <path
                                d="M12 2L2 7L12 12L22 7L12 2Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M2 17L12 22L22 17"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M2 12L12 17L22 12"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span>Apple DS</span>
                    </NavBarBrand>

                    <NavBarContent align="center">
                        <NavBarItem active>Overview</NavBarItem>
                        <NavBarItem>Components</NavBarItem>
                        <NavBarItem>Documentation</NavBarItem>
                    </NavBarContent>

                    <NavBarContent align="right">
                        <Switch
                            checked={darkMode}
                            onCheckedChange={setDarkMode}
                            size="sm"
                        />
                        <NavBarSeparator />
                        <NotificationBadge count={3}>
                            <Button variant="ghost" size="sm">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                                </svg>
                            </Button>
                        </NotificationBadge>
                        <Dropdown
                            trigger={
                                <Button variant="secondary" size="sm">
                                    Menu
                                </Button>
                            }
                        >
                            <DropdownLabel>Account</DropdownLabel>
                            <DropdownItem>Profile</DropdownItem>
                            <DropdownItem>Settings</DropdownItem>
                            <DropdownSeparator />
                            <DropdownItem destructive>Sign Out</DropdownItem>
                        </Dropdown>
                    </NavBarContent>
                </NavBar>

                {/* Hero Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center space-y-6">
                        <Badge variant="primary" size="lg">
                            New Release
                        </Badge>
                        <h1 className="text-6xl font-bold text-text-primary">
                            Apple Design System
                        </h1>
                        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                            Un design system completo inspirado en macOS, iOS y VisionOS.
                            Minimalista, elegante y premium.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <Button variant="primary" size="lg">
                                Get Started
                            </Button>
                            <Button variant="secondary" size="lg">
                                View Components
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Components Showcase */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                        <div className="flex justify-center mb-8">
                            <TabsList variant="segmented">
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="components">Components</TabsTrigger>
                                <TabsTrigger value="forms">Forms</TabsTrigger>
                            </TabsList>
                        </div>

                        {/* Overview Tab */}
                        <TabsContent value="overview">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <Card variant="elevated" hoverable>
                                    <CardHeader>
                                        <CardTitle>Buttons</CardTitle>
                                        <CardDescription>
                                            Botones con animaciones suaves y múltiples variantes
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            <Button variant="primary" size="sm">
                                                Primary
                                            </Button>
                                            <Button variant="secondary" size="sm">
                                                Secondary
                                            </Button>
                                            <Button variant="ghost" size="sm">
                                                Ghost
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card variant="glass" hoverable>
                                    <CardHeader>
                                        <CardTitle>Badges</CardTitle>
                                        <CardDescription>
                                            Indicadores de estado y etiquetas
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="success" dot>
                                                Active
                                            </Badge>
                                            <Badge variant="warning">Pending</Badge>
                                            <Badge variant="error">Error</Badge>
                                            <Badge variant="info">Info</Badge>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card variant="outlined" hoverable>
                                    <CardHeader>
                                        <CardTitle>Switches</CardTitle>
                                        <CardDescription>
                                            Toggles estilo iOS con animación spring
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            <Switch
                                                checked={notifications}
                                                onCheckedChange={setNotifications}
                                                label="Notifications"
                                                description="Receive push notifications"
                                            />
                                            <Switch
                                                checked={darkMode}
                                                onCheckedChange={setDarkMode}
                                                label="Dark Mode"
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        {/* Components Tab */}
                        <TabsContent value="components">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Modal Example</CardTitle>
                                        <CardDescription>
                                            Modales con animación VisionOS-like
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Button onClick={() => setModalOpen(true)} fullWidth>
                                            Open Modal
                                        </Button>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Tooltips</CardTitle>
                                        <CardDescription>
                                            Tooltips elegantes con fade rápido
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex gap-3">
                                            <Tooltip content="This is a tooltip">
                                                <Button variant="secondary">Hover me</Button>
                                            </Tooltip>
                                            <Tooltip content="Another tooltip" side="bottom">
                                                <Button variant="secondary">Or me</Button>
                                            </Tooltip>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        {/* Forms Tab */}
                        <TabsContent value="forms">
                            <Card className="max-w-2xl mx-auto">
                                <CardHeader>
                                    <CardTitle>Contact Form</CardTitle>
                                    <CardDescription>
                                        Ejemplo de formulario con todos los componentes
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form className="space-y-4">
                                        <Input
                                            label="Name"
                                            placeholder="Enter your name"
                                            helperText="Your full name"
                                        />
                                        <Input
                                            label="Email"
                                            type="email"
                                            placeholder="your@email.com"
                                        />
                                        <Textarea
                                            label="Message"
                                            placeholder="Write your message..."
                                            rows={4}
                                        />
                                        <Switch
                                            label="Subscribe to newsletter"
                                            description="Get updates about new features"
                                        />
                                    </form>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="ghost">Cancel</Button>
                                    <Button variant="primary">Send Message</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </section>

                {/* Modal */}
                <Modal open={modalOpen} onOpenChange={setModalOpen} size="md">
                    <ModalCloseButton />
                    <ModalHeader>
                        <ModalTitle>Welcome to Apple DS</ModalTitle>
                        <ModalDescription>
                            Este es un ejemplo de modal con animación suave y blur en el fondo
                        </ModalDescription>
                    </ModalHeader>
                    <ModalContent>
                        <p className="text-text-secondary">
                            Los modales utilizan Radix UI para accesibilidad y Framer Motion
                            para animaciones fluidas tipo VisionOS.
                        </p>
                    </ModalContent>
                    <ModalFooter>
                        <ModalClose>
                            <Button variant="ghost">Cancel</Button>
                        </ModalClose>
                        <Button variant="primary">Confirm</Button>
                    </ModalFooter>
                </Modal>

                {/* Footer */}
                <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20 border-t border-border-primary">
                    <div className="text-center text-text-secondary text-sm">
                        <p>
                            Built with ❤️ using Framer Motion + Radix UI
                        </p>
                        <p className="mt-2">
                            Inspired by Apple's design philosophy
                        </p>
                    </div>
                </footer>
            </div>
        </TooltipProvider>
    );
};

export default DemoPage;
