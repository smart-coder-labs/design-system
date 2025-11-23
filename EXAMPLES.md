# 📖 Guía de Ejemplos - Apple Design System

Esta guía contiene ejemplos de código listos para copiar y pegar.

---

## 🔘 Button

### Ejemplo básico

```tsx
import { Button } from './index';

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
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './index';

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
import { Input } from './index';

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
import { Textarea } from './index';

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
} from './index';

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
} from './index';

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
import { DropdownCheckboxItem } from './index';

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
import { DropdownRadioGroup, DropdownRadioItem } from './index';

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
import { TooltipProvider, Tooltip, Button } from './index';

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
import { Tabs, TabsList, TabsTrigger, TabsContent } from './index';

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
import { Switch } from './index';

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
import { Badge } from './index';

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
import { NotificationBadge } from './index';

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
} from './index';

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
} from './index';

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
import { Switch } from './index';
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
} from './index';

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

## 📋 DefinitionList

### Ejemplo básico

```tsx
import { DefinitionList } from './index';

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
import { DefinitionList } from './index';

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
import { DefinitionList } from './index';

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

**¡Todos los ejemplos están listos para copiar y usar!** 🚀

