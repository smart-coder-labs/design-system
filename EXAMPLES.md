# 📖 Guía de Ejemplos - Apple Design System

Esta guía contiene ejemplos de código listos para copiar y pegar.

---

## 🔘 Button

### Ejemplo básico

```tsx
import { Button } from '@smart-coder-labs/design-system';

// Primary button
<Button variant="primary">
  Continue
</Button>

// Secondary button
<Button variant="secondary">
  Cancel
</Button>

// Ghost button
<Button variant="ghost">
  Learn More
</Button>

// Subtle button
<Button variant="subtle">
  Settings
</Button>
```

### Con íconos

```tsx
// Left icon
<Button 
  variant="primary" 
  leftIcon={
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0L10 6H16L11 10L13 16L8 12L3 16L5 10L0 6H6L8 0Z"/>
    </svg>
  }
>
  Star
</Button>

// Right icon
<Button 
  variant="secondary" 
  rightIcon={
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M6 4L10 8L6 12"/>
    </svg>
  }
>
  Next
</Button>
```

### Estados

```tsx
// Loading
<Button variant="primary" loading>
  Processing...
</Button>

// Disabled
<Button variant="primary" disabled>
  Disabled
</Button>

// Full width
<Button variant="primary" fullWidth>
  Sign In
</Button>
```

### Tamaños

```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

---

## 🎴 Card

### Card básica

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@smart-coder-labs/design-system';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>
      This is a description of the card content
    </CardDescription>
  </CardHeader>
  
  <CardContent>
    <p>Your content goes here...</p>
  </CardContent>
  
  <CardFooter>
    <Button variant="ghost">Cancel</Button>
    <Button variant="primary">Save</Button>
  </CardFooter>
</Card>
```

### Variantes

```tsx
// Elevated (default)
<Card variant="elevated">
  <p>Elevated card with shadow</p>
</Card>

// Glass effect
<Card variant="glass">
  <p>Glass card with blur</p>
</Card>

// Outlined
<Card variant="outlined">
  <p>Outlined card</p>
</Card>

// Flat
<Card variant="flat">
  <p>Flat card</p>
</Card>
```

### Con hover

```tsx
<Card variant="elevated" hoverable>
  <CardContent>
    <p>Hover me to see elevation effect</p>
  </CardContent>
</Card>
```

### Padding personalizado

```tsx
<Card padding="none">No padding</Card>
<Card padding="sm">Small padding</Card>
<Card padding="md">Medium padding</Card>
<Card padding="lg">Large padding</Card>
```

---

## 📝 Input

### Input básico

```tsx
import { Input } from '@smart-coder-labs/design-system';

<Input
  label="Email"
  type="email"
  placeholder="your@email.com"
/>
```

### Con íconos

```tsx
// Left icon
<Input
  label="Search"
  placeholder="Search..."
  leftIcon={
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <circle cx="7" cy="7" r="6" stroke="currentColor" fill="none"/>
      <path d="M11 11L15 15"/>
    </svg>
  }
/>

// Right icon
<Input
  label="Password"
  type="password"
  rightIcon={
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 4C4 4 1 8 1 8s3 4 7 4 7-4 7-4-3-4-7-4z"/>
      <circle cx="8" cy="8" r="2"/>
    </svg>
  }
/>
```

### Con error

```tsx
<Input
  label="Username"
  error="Username is required"
/>
```

### Con helper text

```tsx
<Input
  label="Username"
  helperText="Choose a unique username"
/>
```

### Tamaños

```tsx
<Input inputSize="sm" placeholder="Small" />
<Input inputSize="md" placeholder="Medium" />
<Input inputSize="lg" placeholder="Large" />
```

### Textarea

```tsx
import { Textarea } from '@smart-coder-labs/design-system';

<Textarea
  label="Message"
  placeholder="Write your message..."
  rows={4}
/>
```

---

## 🪟 Modal

### Modal básico

```tsx
import { useState } from 'react';
import { 
  Modal, 
  ModalHeader, 
  ModalTitle, 
  ModalDescription,
  ModalContent,
  ModalFooter,
  ModalClose,
  ModalCloseButton,
  Button 
} from '@smart-coder-labs/design-system';

function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open Modal
      </Button>

      <Modal open={open} onOpenChange={setOpen}>
        <ModalCloseButton />
        
        <ModalHeader>
          <ModalTitle>Modal Title</ModalTitle>
          <ModalDescription>
            This is a description of the modal
          </ModalDescription>
        </ModalHeader>
        
        <ModalContent>
          <p>Modal content goes here...</p>
        </ModalContent>
        
        <ModalFooter>
          <ModalClose>
            <Button variant="ghost">Cancel</Button>
          </ModalClose>
          <Button variant="primary">Confirm</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
```

### Tamaños

```tsx
<Modal size="sm">Small modal</Modal>
<Modal size="md">Medium modal</Modal>
<Modal size="lg">Large modal</Modal>
<Modal size="xl">Extra large modal</Modal>
<Modal size="full">Full width modal</Modal>
```

---

## 📋 Dropdown

### Dropdown básico

```tsx
import { 
  Dropdown, 
  DropdownItem, 
  DropdownSeparator,
  DropdownLabel,
  Button 
} from '@smart-coder-labs/design-system';

<Dropdown
  trigger={
    <Button variant="secondary">
      Options
    </Button>
  }
>
  <DropdownLabel>Actions</DropdownLabel>
  
  <DropdownItem>
    Edit
  </DropdownItem>
  
  <DropdownItem>
    Duplicate
  </DropdownItem>
  
  <DropdownSeparator />
  
  <DropdownItem destructive>
    Delete
  </DropdownItem>
</Dropdown>
```

### Con íconos

```tsx
<Dropdown trigger={<Button>Menu</Button>}>
  <DropdownItem 
    leftIcon={<EditIcon />}
  >
    Edit
  </DropdownItem>
  
  <DropdownItem 
    leftIcon={<CopyIcon />}
    rightIcon={<span className="text-xs">⌘C</span>}
  >
    Copy
  </DropdownItem>
</Dropdown>
```

### Con checkbox

```tsx
import { DropdownCheckboxItem } from '@smart-coder-labs/design-system';

const [showPanel, setShowPanel] = useState(false);

<Dropdown trigger={<Button>View</Button>}>
  <DropdownCheckboxItem 
    checked={showPanel} 
    onCheckedChange={setShowPanel}
  >
    Show Panel
  </DropdownCheckboxItem>
</Dropdown>
```

### Con radio group

```tsx
import { DropdownRadioGroup, DropdownRadioItem } from '@smart-coder-labs/design-system';

const [sortBy, setSortBy] = useState('name');

<Dropdown trigger={<Button>Sort</Button>}>
  <DropdownRadioGroup value={sortBy} onValueChange={setSortBy}>
    <DropdownRadioItem value="name">Name</DropdownRadioItem>
    <DropdownRadioItem value="date">Date</DropdownRadioItem>
    <DropdownRadioItem value="size">Size</DropdownRadioItem>
  </DropdownRadioGroup>
</Dropdown>
```

---

## 💬 Tooltip

### Tooltip básico

```tsx
import { TooltipProvider, Tooltip, Button } from '@smart-coder-labs/design-system';

// Wrap your app with TooltipProvider
<TooltipProvider>
  <Tooltip content="This is a tooltip">
    <Button>Hover me</Button>
  </Tooltip>
</TooltipProvider>
```

### Posiciones

```tsx
<Tooltip content="Top tooltip" side="top">
  <Button>Top</Button>
</Tooltip>

<Tooltip content="Right tooltip" side="right">
  <Button>Right</Button>
</Tooltip>

<Tooltip content="Bottom tooltip" side="bottom">
  <Button>Bottom</Button>
</Tooltip>

<Tooltip content="Left tooltip" side="left">
  <Button>Left</Button>
</Tooltip>
```

### Con contenido rico

```tsx
<Tooltip
  content={
    <div>
      <p className="font-semibold">Rich Tooltip</p>
      <p className="text-text-secondary text-xs">
        With multiple lines
      </p>
    </div>
  }
>
  <Button>Hover me</Button>
</Tooltip>
```

---

## 📑 Tabs

### Tabs default

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@smart-coder-labs/design-system';

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
  </TabsList>
  
  <TabsContent value="tab1">
    <p>Content for tab 1</p>
  </TabsContent>
  
  <TabsContent value="tab2">
    <p>Content for tab 2</p>
  </TabsContent>
  
  <TabsContent value="tab3">
    <p>Content for tab 3</p>
  </TabsContent>
</Tabs>
```

### Segmented control (iOS style)

```tsx
<Tabs defaultValue="overview">
  <TabsList variant="segmented">
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="details">Details</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  
  <TabsContent value="overview">
    Overview content
  </TabsContent>
  
  <TabsContent value="details">
    Details content
  </TabsContent>
  
  <TabsContent value="settings">
    Settings content
  </TabsContent>
</Tabs>
```

### Controlled tabs

```tsx
const [activeTab, setActiveTab] = useState('tab1');

<Tabs value={activeTab} onValueChange={setActiveTab}>
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

---

## 🔄 Switch

### Switch básico

```tsx
import { Switch } from '@smart-coder-labs/design-system';

const [enabled, setEnabled] = useState(false);

<Switch 
  checked={enabled} 
  onCheckedChange={setEnabled} 
/>
```

### Con label

```tsx
<Switch
  checked={enabled}
  onCheckedChange={setEnabled}
  label="Enable notifications"
/>
```

### Con label y description

```tsx
<Switch
  checked={darkMode}
  onCheckedChange={setDarkMode}
  label="Dark Mode"
  description="Toggle between light and dark theme"
/>
```

### Tamaños

```tsx
<Switch size="sm" checked={enabled} onCheckedChange={setEnabled} />
<Switch size="md" checked={enabled} onCheckedChange={setEnabled} />
<Switch size="lg" checked={enabled} onCheckedChange={setEnabled} />
```

---

## 🏷️ Badge

### Badges básicos

```tsx
import { Badge } from '@smart-coder-labs/design-system';

<Badge>Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>
```

### Con dot

```tsx
<Badge variant="success" dot>Active</Badge>
<Badge variant="error" dot>Offline</Badge>
```

### Tamaños

```tsx
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>
```

### Notification Badge

```tsx
import { NotificationBadge } from '@smart-coder-labs/design-system';

<NotificationBadge count={5}>
  <Button>Messages</Button>
</NotificationBadge>

// With max count
<NotificationBadge count={150} max={99}>
  <Button>Notifications</Button>
</NotificationBadge>

// Dot only
<NotificationBadge count={3} dot>
  <Button>Alerts</Button>
</NotificationBadge>
```

---

## 🧭 NavBar

### NavBar básico

```tsx
import { 
  NavBar, 
  NavBarBrand, 
  NavBarContent, 
  NavBarItem,
  NavBarSeparator,
  Button 
} from '@smart-coder-labs/design-system';

<NavBar>
  <NavBarBrand href="/">
    <Logo />
    <span>Brand</span>
  </NavBarBrand>
  
  <NavBarContent align="center">
    <NavBarItem active href="/">Home</NavBarItem>
    <NavBarItem href="/products">Products</NavBarItem>
    <NavBarItem href="/about">About</NavBarItem>
  </NavBarContent>
  
  <NavBarContent align="right">
    <Button variant="ghost">Sign In</Button>
    <Button variant="primary">Sign Up</Button>
  </NavBarContent>
</NavBar>
```

### Variantes

```tsx
// Default
<NavBar variant="default">
  {/* ... */}
</NavBar>

// Glass effect
<NavBar variant="glass">
  {/* ... */}
</NavBar>

// Transparent
<NavBar variant="transparent">
  {/* ... */}
</NavBar>
```

### Con separador

```tsx
<NavBar>
  <NavBarBrand>Brand</NavBarBrand>
  
  <NavBarContent align="right">
    <Button variant="ghost">Item 1</Button>
    <NavBarSeparator />
    <Button variant="primary">Item 2</Button>
  </NavBarContent>
</NavBar>
```

---

## 🎨 Formulario Completo

### Ejemplo de formulario de contacto

```tsx
import { 
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Textarea,
  Switch,
  Button 
} from '@smart-coder-labs/design-system';

function ContactForm() {
  const [subscribe, setSubscribe] = useState(false);

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>
          Fill out the form below and we'll get back to you soon
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
          
          <Input
            label="Subject"
            placeholder="What is this about?"
          />
          
          <Textarea
            label="Message"
            placeholder="Write your message..."
            rows={4}
          />
          
          <Switch
            checked={subscribe}
            onCheckedChange={setSubscribe}
            label="Subscribe to newsletter"
            description="Get updates about new features and releases"
          />
        </form>
      </CardContent>
      
      <CardFooter>
        <Button variant="ghost">Cancel</Button>
        <Button variant="primary">Send Message</Button>
      </CardFooter>
    </Card>
  );
}
```

---

## 🌓 Dark Mode Toggle

```tsx
import { Switch } from '@smart-coder-labs/design-system';
import { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Switch
      checked={darkMode}
      onCheckedChange={setDarkMode}
      label="Dark Mode"
      description="Toggle between light and dark theme"
    />
  );
}
```

---

## 🎯 Composición Completa

### Dashboard Example

```tsx
import {
  NavBar,
  NavBarBrand,
  NavBarContent,
  NavBarItem,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  Button,
  NotificationBadge,
} from '@smart-coder-labs/design-system';

function Dashboard() {
  return (
    <div className="min-h-screen bg-background-primary">
      <NavBar variant="glass">
        <NavBarBrand href="/">Dashboard</NavBarBrand>
        
        <NavBarContent align="center">
          <NavBarItem active>Overview</NavBarItem>
          <NavBarItem>Analytics</NavBarItem>
          <NavBarItem>Settings</NavBarItem>
        </NavBarContent>
        
        <NavBarContent align="right">
          <NotificationBadge count={3}>
            <Button variant="ghost" size="sm">
              🔔
            </Button>
          </NotificationBadge>
        </NavBarContent>
      </NavBar>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Total Users</CardTitle>
              <CardDescription>Active users this month</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">1,234</p>
              <Badge variant="success" dot className="mt-2">
                +12% from last month
              </Badge>
            </CardContent>
          </Card>
          
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Revenue</CardTitle>
              <CardDescription>Total revenue this month</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">$45,678</p>
              <Badge variant="success" dot className="mt-2">
                +8% from last month
              </Badge>
            </CardContent>
          </Card>
          
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Conversion</CardTitle>
              <CardDescription>Conversion rate</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">3.2%</p>
              <Badge variant="warning" dot className="mt-2">
                -2% from last month
              </Badge>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
```

---

## 📋 PropertyList

### Ejemplo básico

```tsx
import { PropertyList } from '@smart-coder-labs/design-system';

function FileInfo() {
  const sections = [
    {
      id: 'general',
      title: 'General',
      items: [
        { label: 'Kind', value: 'JPEG Image' },
        { label: 'Size', value: '2.4 MB' },
        { label: 'Created', value: 'Nov 15, 2025' },
      ],
      defaultExpanded: true,
    },
  ];

  return (
    <PropertyList 
      sections={sections}
      variant="bordered"
    />
  );
}
```

### Variantes

```tsx
// Default
<PropertyList 
  sections={sections}
  variant="default"
/>

// Bordered (con borde y sombra)
<PropertyList 
  sections={sections}
  variant="bordered"
/>

// Inset (fondo secundario)
<PropertyList 
  sections={sections}
  variant="inset"
/>
```

### Secciones colapsables

```tsx
import { PropertyList } from '@smart-coder-labs/design-system';

function SystemInfo() {
  const sections = [
    {
      id: 'hardware',
      title: 'Hardware',
      items: [
        { label: 'Model', value: 'MacBook Pro 16"' },
        { label: 'Chip', value: 'Apple M3 Max' },
        { label: 'Memory', value: '64 GB' },
      ],
      defaultExpanded: true, // Expandida por defecto
    },
    {
      id: 'software',
      title: 'Software',
      items: [
        { label: 'System', value: 'macOS Sonoma 14.1' },
        { label: 'Kernel', value: 'Darwin 23.1.0' },
      ],
      defaultExpanded: false, // Colapsada por defecto
    },
  ];

  return (
    <PropertyList 
      sections={sections}
      variant="bordered"
      collapsible={true}
    />
  );
}
```

### Con iconos

```tsx
import { PropertyList } from '@smart-coder-labs/design-system';
import { File, HardDrive, Calendar, User } from 'lucide-react';

function FileInspector() {
  const sections = [
    {
      id: 'general',
      title: 'General',
      items: [
        { 
          label: 'Kind', 
          value: 'Folder',
          icon: <File className="w-3.5 h-3.5" />
        },
        { 
          label: 'Size', 
          value: '1.2 GB',
          icon: <HardDrive className="w-3.5 h-3.5" />
        },
        { 
          label: 'Created', 
          value: 'Nov 15, 2025',
          icon: <Calendar className="w-3.5 h-3.5" />
        },
      ],
      defaultExpanded: true,
    },
  ];

  return (
    <PropertyList 
      sections={sections}
      variant="bordered"
    />
  );
}
```

### Propiedades editables

```tsx
import { PropertyList } from '@smart-coder-labs/design-system';
import { useState } from 'react';

function AppSettings() {
  const [theme, setTheme] = useState('Auto');
  const [fontSize, setFontSize] = useState('14px');

  const sections = [
    {
      id: 'display',
      title: 'Display',
      items: [
        { 
          label: 'Theme', 
          value: theme,
          editable: true,
          onChange: (val) => setTheme(val)
        },
        { 
          label: 'Font Size', 
          value: fontSize,
          editable: true,
          onChange: (val) => setFontSize(val)
        },
      ],
      defaultExpanded: true,
    },
  ];

  return (
    <PropertyList 
      sections={sections}
      variant="bordered"
      collapsible={false}
    />
  );
}
```

### Tamaños

```tsx
// Pequeño
<PropertyList 
  sections={sections}
  size="sm"
/>

// Mediano (default)
<PropertyList 
  sections={sections}
  size="md"
/>

// Grande
<PropertyList 
  sections={sections}
  size="lg"
/>
```

### Sin divisores

```tsx
<PropertyList 
  sections={sections}
  variant="bordered"
  dividers={false}
/>
```

### Caso de uso: Inspector de archivo macOS

```tsx
import { PropertyList } from '@smart-coder-labs/design-system';
import { File, HardDrive, Calendar, User } from 'lucide-react';

function MacOSFileInspector() {
  const sections = [
    {
      id: 'general',
      title: 'General',
      items: [
        { 
          label: 'Kind', 
          value: 'JPEG Image',
          icon: <File className="w-3.5 h-3.5" />
        },
        { 
          label: 'Size', 
          value: '2.4 MB (2,456,789 bytes)',
          icon: <HardDrive className="w-3.5 h-3.5" />
        },
        { 
          label: 'Where', 
          value: '/Users/ana/Pictures',
          icon: <File className="w-3.5 h-3.5" />
        },
        { 
          label: 'Created', 
          value: 'November 15, 2025 at 10:30 AM',
          icon: <Calendar className="w-3.5 h-3.5" />
        },
        { 
          label: 'Modified', 
          value: 'November 23, 2025 at 2:45 PM',
          icon: <Calendar className="w-3.5 h-3.5" />
        },
      ],
      defaultExpanded: true,
    },
    {
      id: 'more',
      title: 'More Info',
      items: [
        { label: 'Dimensions', value: '4032 × 3024' },
        { label: 'Color space', value: 'Display P3' },
        { label: 'Alpha channel', value: 'No' },
      ],
      defaultExpanded: false,
    },
    {
      id: 'permissions',
      title: 'Sharing & Permissions',
      items: [
        { 
          label: 'Owner', 
          value: 'Ana García',
          icon: <User className="w-3.5 h-3.5" />
        },
        { label: 'Access', value: 'Read & Write' },
        { label: 'Group', value: 'staff' },
      ],
      defaultExpanded: false,
    },
  ];

  return (
    <PropertyList 
      sections={sections}
      variant="bordered"
      collapsible={true}
      dividers={true}
    />
  );
}
```

---

## 🔑 KeyValueInfo

### Ejemplo básico

```tsx
import { KeyValueInfo } from '@smart-coder-labs/design-system';

function UserInfo() {
  const userInfo = [
    { key: 'Nombre', value: 'Ana García' },
    { key: 'Email', value: 'ana@example.com', copyable: true },
    { key: 'Teléfono', value: '+52 33 1234 5678', copyable: true },
    { key: 'Ciudad', value: 'Guadalajara' },
  ];

  return (
    <KeyValueInfo 
      items={userInfo}
      variant="card"
    />
  );
}
```

### Variantes

```tsx
// Default
<KeyValueInfo 
  items={items}
  variant="default"
/>

// Card (con borde y fondo)
<KeyValueInfo 
  items={items}
  variant="card"
/>

// Inline (horizontal)
<KeyValueInfo 
  items={items}
  variant="inline"
/>

// Grid (múltiples columnas)
<KeyValueInfo 
  items={items}
  variant="grid"
  columns={2}
/>
```

### Con iconos

```tsx
import { KeyValueInfo } from '@smart-coder-labs/design-system';
import { User, Mail, Phone, MapPin } from 'lucide-react';

function ProfileInfo() {
  const items = [
    { 
      key: 'Nombre', 
      value: 'Ana García',
      icon: <User className="w-4 h-4" />
    },
    { 
      key: 'Email', 
      value: 'ana@example.com',
      icon: <Mail className="w-4 h-4" />,
      copyable: true
    },
    { 
      key: 'Teléfono', 
      value: '+52 33 1234 5678',
      icon: <Phone className="w-4 h-4" />,
      copyable: true
    },
    { 
      key: 'Ciudad', 
      value: 'Guadalajara',
      icon: <MapPin className="w-4 h-4" />
    },
  ];

  return (
    <KeyValueInfo 
      items={items}
      variant="card"
      hoverable={true}
      divider={true}
    />
  );
}
```

### Con badges

```tsx
import { KeyValueInfo } from '@smart-coder-labs/design-system';
import { Badge } from '@smart-coder-labs/design-system';

function OrderStatus() {
  const orderInfo = [
    { 
      key: 'Pedido', 
      value: '#ORD-2025-1234',
      badge: <Badge variant="success" size="sm">Entregado</Badge>
    },
    { key: 'Fecha', value: '23 de noviembre, 2025' },
    { key: 'Total', value: '$1,299.00 MXN' },
  ];

  return (
    <KeyValueInfo 
      items={orderInfo}
      variant="card"
      divider={true}
    />
  );
}
```

### Tamaños

```tsx
// Pequeño
<KeyValueInfo 
  items={items}
  size="sm"
/>

// Mediano (default)
<KeyValueInfo 
  items={items}
  size="md"
/>

// Grande
<KeyValueInfo 
  items={items}
  size="lg"
/>
```

### Grid con múltiples columnas

```tsx
import { KeyValueInfo } from '@smart-coder-labs/design-system';
import { Server, Hash, Package } from 'lucide-react';

function SystemSpecs() {
  const specs = [
    { key: 'CPU', value: 'M3 Max', icon: <Server className="w-4 h-4" /> },
    { key: 'RAM', value: '64 GB', icon: <Hash className="w-4 h-4" /> },
    { key: 'Storage', value: '1 TB', icon: <Package className="w-4 h-4" /> },
    { key: 'GPU', value: '40 cores', icon: <Server className="w-4 h-4" /> },
    { key: 'Display', value: '16.2"', icon: <Package className="w-4 h-4" /> },
    { key: 'Weight', value: '2.15 kg', icon: <Hash className="w-4 h-4" /> },
  ];

  return (
    <KeyValueInfo 
      items={specs}
      variant="grid"
      columns={3}
    />
  );
}
```

### Caso de uso: Credenciales API

```tsx
import { KeyValueInfo } from '@smart-coder-labs/design-system';
import { Badge } from '@smart-coder-labs/design-system';

function APICredentials() {
  const credentials = [
    { 
      key: 'API Key', 
      value: 'sk_live_51H8xYZ...abc123',
      copyable: true,
      badge: <Badge variant="success" size="sm" dot>Activa</Badge>
    },
    { 
      key: 'Secret', 
      value: 'whsec_def456...xyz789',
      copyable: true,
      badge: <Badge variant="warning" size="sm">Sensible</Badge>
    },
    { 
      key: 'Webhook URL', 
      value: 'https://api.example.com/webhooks',
      copyable: true
    },
  ];

  return (
    <KeyValueInfo 
      items={credentials}
      variant="card"
      hoverable={true}
      divider={true}
    />
  );
}
```

---

## 📋 DefinitionList

### Ejemplo básico

```tsx
import { DefinitionList } from '@smart-coder-labs/design-system';

function UserProfile() {
  const userInfo = [
    { term: 'Nombre', description: 'Juan Pérez' },
    { term: 'Email', description: 'juan.perez@example.com' },
    { term: 'Teléfono', description: '+52 55 1234 5678' },
    { term: 'Ciudad', description: 'Ciudad de México' },
  ];

  return (
    <DefinitionList 
      items={userInfo}
      variant="bordered"
      orientation="horizontal"
    />
  );
}
```

### Variantes

```tsx
// Default
<DefinitionList 
  items={items}
  variant="default"
/>

// Bordered (con borde y sombra)
<DefinitionList 
  items={items}
  variant="bordered"
/>

// Striped (filas alternadas)
<DefinitionList 
  items={items}
  variant="striped"
/>

// Con divisores
<DefinitionList 
  items={items}
  divider={true}
/>

// Hoverable
<DefinitionList 
  items={items}
  hoverable={true}
/>
```

### Orientaciones

```tsx
// Horizontal (término y descripción lado a lado)
<DefinitionList 
  items={items}
  orientation="horizontal"
/>

// Vertical (término arriba, descripción abajo)
<DefinitionList 
  items={items}
  orientation="vertical"
/>
```

### Densidad

```tsx
// Comfortable (espaciado amplio)
<DefinitionList 
  items={items}
  density="comfortable"
/>

// Compact (espaciado reducido)
<DefinitionList 
  items={items}
  density="compact"
/>
```

### Caso de uso: Especificaciones de producto

```tsx
import { DefinitionList } from '@smart-coder-labs/design-system';

function ProductDetails() {
  const specs = [
    { term: 'Modelo', description: 'MacBook Pro 16"' },
    { term: 'Procesador', description: 'Apple M3 Max con CPU de 16 núcleos' },
    { term: 'Memoria', description: '64 GB de memoria unificada' },
    { term: 'Almacenamiento', description: '1 TB SSD' },
    { term: 'Pantalla', description: 'Liquid Retina XDR de 16.2 pulgadas' },
    { term: 'Peso', description: '2.15 kg' },
  ];

  return (
    <DefinitionList 
      items={specs}
      variant="bordered"
      orientation="horizontal"
      hoverable={true}
    />
  );
}
```

### Caso de uso: Metadatos de documento

```tsx
import { DefinitionList } from '@smart-coder-labs/design-system';

function DocumentInfo() {
  const metadata = [
    { term: 'Título', description: 'Propuesta de Proyecto Q4 2025' },
    { term: 'Autor', description: 'Carlos Ramírez' },
    { term: 'Fecha de creación', description: '1 de noviembre de 2025' },
    { term: 'Última modificación', description: '23 de noviembre de 2025' },
    { term: 'Versión', description: '3.2' },
    { term: 'Estado', description: 'En revisión' },
  ];

  return (
    <DefinitionList 
      items={metadata}
      variant="default"
      orientation="vertical"
      divider={true}
    />
  );
}
```

---

## 📊 KPIBlock

### Ejemplo básico

```tsx
import { KPIBlock } from '@smart-coder-labs/design-system';

function DashboardKPI() {
  return (
    <KPIBlock
      label="Total Revenue"
      value="$124,500"
      trend="up"
      change="+15.7%"
      variant="elevated"
    />
  );
}
```

### Con ícono

```tsx
import { KPIBlock } from '@smart-coder-labs/design-system';
import { DollarSign, Users, ShoppingCart } from 'lucide-react';

function MetricsWithIcons() {
  return (
    <>
      <KPIBlock
        label="Revenue"
        value="$324,500"
        icon={<DollarSign className="w-5 h-5" />}
        trend="up"
        change="+15.7%"
        variant="elevated"
      />
      
      <KPIBlock
        label="Active Users"
        value="8,234"
        icon={<Users className="w-5 h-5" />}
        trend="up"
        change="+12.5%"
        variant="elevated"
      />
      
      <KPIBlock
        label="Total Orders"
        value="1,249"
        icon={<ShoppingCart className="w-5 h-5" />}
        trend="up"
        change="+18.3%"
        variant="elevated"
      />
    </>
  );
}
```

### Variantes

```tsx
// Default (sin fondo)
<KPIBlock
  label="Revenue"
  value="$124,500"
  variant="default"
  trend="up"
  change="+15.7%"
/>

// Elevated (con sombra)
<KPIBlock
  label="Revenue"
  value="$124,500"
  variant="elevated"
  trend="up"
  change="+15.7%"
/>

// Bordered (con borde)
<KPIBlock
  label="Revenue"
  value="$124,500"
  variant="bordered"
  trend="up"
  change="+15.7%"
/>

// Minimal (sin adornos)
<KPIBlock
  label="Revenue"
  value="$124,500"
  variant="minimal"
  trend="up"
  change="+15.7%"
/>
```

### Tendencias

```tsx
// Tendencia positiva (verde)
<KPIBlock
  label="Revenue"
  value="$124,500"
  trend="up"
  change="+15.7%"
/>

// Tendencia negativa (roja)
<KPIBlock
  label="Bounce Rate"
  value="32.4%"
  trend="down"
  change="-8.2%"
/>

// Tendencia neutral (gris)
<KPIBlock
  label="Conversion Rate"
  value="3.45%"
  trend="neutral"
  change="0.0%"
/>
```

### Tamaños

```tsx
// Pequeño
<KPIBlock
  label="Page Views"
  value="15,234"
  size="sm"
  trend="up"
  change="+23.1%"
/>

// Mediano (default)
<KPIBlock
  label="Total Orders"
  value="1,249"
  size="md"
  trend="up"
  change="+18.3%"
/>

// Grande
<KPIBlock
  label="Revenue"
  value="$324,500"
  size="lg"
  trend="up"
  change="+15.7%"
/>
```

### Con descripción

```tsx
<KPIBlock
  label="Monthly Revenue"
  value="$324,500"
  description="vs last month"
  trend="up"
  change="+15.7%"
  variant="elevated"
/>
```

### Estado de carga

```tsx
<KPIBlock
  label="Loading Data"
  value="$0"
  loading={true}
  variant="elevated"
/>
```

### KPI Groups (Grid)

```tsx
import { KPIGroup, KPIBlock } from '@smart-coder-labs/design-system';
import { DollarSign, Users, ShoppingCart, Target } from 'lucide-react';

function DashboardMetrics() {
  return (
    <KPIGroup columns={4}>
      <KPIBlock
        label="Total Revenue"
        value="$324,500"
        icon={<DollarSign className="w-5 h-5" />}
        trend="up"
        change="+15.7%"
        variant="elevated"
      />
      <KPIBlock
        label="Total Orders"
        value="1,249"
        icon={<ShoppingCart className="w-5 h-5" />}
        trend="up"
        change="+18.3%"
        variant="elevated"
      />
      <KPIBlock
        label="Active Users"
        value="8,234"
        icon={<Users className="w-5 h-5" />}
        trend="up"
        change="+12.5%"
        variant="elevated"
      />
      <KPIBlock
        label="Conversion Rate"
        value="3.8%"
        icon={<Target className="w-5 h-5" />}
        trend="up"
        change="+0.3%"
        variant="elevated"
      />
    </KPIGroup>
  );
}
```

### Grid de 2 columnas

```tsx
<KPIGroup columns={2}>
  <KPIBlock
    label="Total Revenue"
    value="$324,500"
    icon={<DollarSign className="w-5 h-5" />}
    trend="up"
    change="+15.7%"
    variant="elevated"
  />
  <KPIBlock
    label="Active Users"
    value="8,234"
    icon={<Users className="w-5 h-5" />}
    trend="up"
    change="+12.5%"
    variant="elevated"
  />
</KPIGroup>
```

### Grid de 3 columnas

```tsx
<KPIGroup columns={3}>
  <KPIBlock
    label="Revenue"
    value="$124,500"
    icon={<DollarSign className="w-5 h-5" />}
    trend="up"
    change="+15.7%"
    variant="elevated"
  />
  <KPIBlock
    label="Orders"
    value="1,249"
    icon={<ShoppingCart className="w-5 h-5" />}
    trend="up"
    change="+18.3%"
    variant="elevated"
  />
  <KPIBlock
    label="Users"
    value="2,543"
    icon={<Users className="w-5 h-5" />}
    trend="up"
    change="+5.2%"
    variant="elevated"
  />
</KPIGroup>
```

### Caso de uso: Dashboard completo

```tsx
import { KPIGroup, KPIBlock } from '@smart-coder-labs/design-system';
import { DollarSign, TrendingUp, Users, Activity } from 'lucide-react';

function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-text-primary">Dashboard Overview</h2>
      
      <KPIGroup columns={4}>
        <KPIBlock
          label="Total Revenue"
          value="$324,500"
          description="This month"
          icon={<DollarSign className="w-5 h-5" />}
          trend="up"
          change="+15.7%"
          variant="elevated"
        />
        <KPIBlock
          label="Growth Rate"
          value="23.5%"
          description="vs last quarter"
          icon={<TrendingUp className="w-5 h-5" />}
          trend="up"
          change="+3.2%"
          variant="elevated"
        />
        <KPIBlock
          label="Active Users"
          value="8,234"
          description="Online now"
          icon={<Users className="w-5 h-5" />}
          trend="up"
          change="+12.5%"
          variant="elevated"
        />
        <KPIBlock
          label="Conversion Rate"
          value="3.8%"
          description="Average"
          icon={<Activity className="w-5 h-5" />}
          trend="up"
          change="+0.3%"
          variant="elevated"
        />
      </KPIGroup>
    </div>
  );
}
```

### Caso de uso: Sidebar de estadísticas rápidas

```tsx
import { KPIBlock } from '@smart-coder-labs/design-system';

function QuickStatsSidebar() {
  return (
    <div className="max-w-xs space-y-4">
      <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide">
        Quick Stats
      </h3>
      <div className="space-y-3">
        <KPIBlock
          label="Today's Revenue"
          value="$12,450"
          trend="up"
          change="+8.2%"
          size="sm"
        />
        <KPIBlock
          label="New Orders"
          value="34"
          trend="up"
          change="+12.0%"
          size="sm"
        />
        <KPIBlock
          label="Active Now"
          value="156"
          trend="neutral"
          change="0.0%"
          size="sm"
        />
      </div>
    </div>
  );
}
```

### Caso de uso: Métricas con tendencias mixtas

```tsx
import { KPIGroup, KPIBlock } from '@smart-coder-labs/design-system';
import { DollarSign, Activity, Target } from 'lucide-react';

function MixedMetrics() {
  return (
    <KPIGroup columns={3}>
      <KPIBlock
        label="Revenue"
        value="$124,500"
        icon={<DollarSign className="w-5 h-5" />}
        trend="up"
        change="+15.7%"
        variant="elevated"
      />
      <KPIBlock
        label="Bounce Rate"
        value="32.4%"
        icon={<Activity className="w-5 h-5" />}
        trend="down"
        change="-8.2%"
        variant="elevated"
      />
      <KPIBlock
        label="Conversion"
        value="3.45%"
        icon={<Target className="w-5 h-5" />}
        trend="neutral"
        change="0.0%"
        variant="elevated"
      />
    </KPIGroup>
  );
}
```

---

## 📈 StatisticDisplay

### Grid básico

```tsx
import { StatisticDisplay } from '@smart-coder-labs/design-system';
import type { StatisticMetric } from '@smart-coder-labs/design-system';
import { DollarSign, ShoppingCart, Users } from 'lucide-react';

const metrics: StatisticMetric[] = [
  {
    id: 'revenue',
    label: 'Revenue',
    value: '$248K',
    description: 'Últimos 30 días',
    change: '+12.4%',
    trend: 'up',
    icon: <DollarSign className="w-5 h-5" />,
    sparkline: [180, 190, 205, 214, 230, 248],
    goal: { label: 'Meta', value: '$260K', progress: 0.82 },
  },
  {
    id: 'orders',
    label: 'Orders',
    value: '1,982',
    description: 'Pedidos completados',
    change: '+6.1%',
    trend: 'up',
    icon: <ShoppingCart className="w-5 h-5" />,
    sparkline: [1200, 1300, 1400, 1500, 1700, 1982],
  },
  {
    id: 'users',
    label: 'Active Users',
    value: '28,430',
    description: 'Usuarios activos mensuales',
    change: '+3.4%',
    trend: 'up',
    icon: <Users className="w-5 h-5" />,
    sparkline: [22000, 23000, 24000, 25000, 28430],
  },
];

export function DashboardStats() {
  return (
    <StatisticDisplay
      metrics={metrics}
      columns={3}
      variant="card"
      size="md"
    />
  );
}
```

### Variante compacta

```tsx
<StatisticDisplay
  metrics={metrics}
  columns={2}
  variant="bordered"
  size="sm"
  gap="sm"
/>
```

### Modo minimal (lista vertical)

```tsx
<StatisticDisplay
  metrics={metrics}
  columns={1}
  variant="minimal"
  size="lg"
/>
```

### Highlight hero + grid

```tsx
import { StatisticHighlight, StatisticDisplay } from '@smart-coder-labs/design-system';

function RevenueHero() {
  return (
    <div className="space-y-8">
      <StatisticHighlight
        label="Net Revenue"
        value="$428,500"
        description="Vs. last quarter"
        change="+18.2%"
        trend="up"
        sparkline={[320, 340, 360, 380, 420, 428]}
        progress={0.86}
        badge={<span className="px-2 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-semibold">Live</span>}
      />
      <StatisticDisplay metrics={metrics} columns={3} variant="soft" />
    </div>
  );
}
```

### Uso regional

```tsx
<StatisticDisplay
  metrics={[
    {
      id: 'emea',
      label: 'EMEA',
      value: '$124K',
      change: '+9.1%',
      trend: 'up',
      description: 'Ingresos región',
      sparkline: [80, 90, 102, 124],
    },
    {
      id: 'latam',
      label: 'LATAM',
      value: '$64K',
      change: '+21.4%',
      trend: 'up',
      description: 'Beta Program',
      sparkline: [28, 40, 54, 64],
    },
    {
      id: 'apac',
      label: 'APAC',
      value: '$102K',
      change: '+4.2%',
      trend: 'up',
      description: 'Mercados consolidados',
      sparkline: [70, 80, 95, 102],
    },
  ]}
  columns={3}
  variant="glass"
  size="md"
/>
```

---

**¡Todos los ejemplos están listos para copiar y usar!** 🚀

