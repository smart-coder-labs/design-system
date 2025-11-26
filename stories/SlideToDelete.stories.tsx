import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SlideToDelete, SlideToDeleteItem } from '../components/SlideToDelete';
import { Avatar, AvatarImage, AvatarFallback } from '../components/Avatar';
import { Badge } from '../components/Badge';
import { Trash2, X, Archive, MoreVertical } from 'lucide-react';
import { Button } from '../components/Button';

const meta = {
    title: 'Interaction/SlideToDelete',
    component: SlideToDelete,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'Componente que permite deslizar un elemento para revelar acciones de eliminación o cancelación. Perfecto para listas móviles y gestos táctiles. Inspirado en iOS y aplicaciones móviles modernas.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'danger', 'warning'],
            description: 'Variante visual de la acción de eliminación',
        },
        threshold: {
            control: { type: 'number', min: 50, max: 150, step: 10 },
            description: 'Distancia en píxeles para activar la eliminación',
        },
        confirmDelete: {
            control: 'boolean',
            description: 'Mostrar confirmación antes de eliminar',
        },
        disabled: {
            control: 'boolean',
            description: 'Deshabilitar el deslizamiento',
        },
    },
} satisfies Meta<typeof SlideToDelete>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ========================================
   STORIES - BASIC
   ======================================== */

export const Default: Story = {
    args: {
        onDelete: () => {
            console.log('Item deleted');
            alert('Item deleted!');
        },
        deleteLabel: 'Delete',
        threshold: 80,
    },
    render: (args) => (
        <div className="max-w-md mx-auto">
            <SlideToDelete {...args}>
                <div className="p-4">
                    <h3 className="text-base font-semibold text-text-primary">Task Item</h3>
                    <p className="text-sm text-text-secondary mt-1">
                        Desliza hacia la derecha para eliminar este elemento
                    </p>
                </div>
            </SlideToDelete>
        </div>
    ),
};

export const WithCancel: Story = {
    name: 'Con Cancelación',
    args: {
        onDelete: () => {
            console.log('Item deleted');
            alert('Item deleted!');
        },
        onCancel: () => {
            console.log('Action cancelled');
            alert('Action cancelled!');
        },
        deleteLabel: 'Delete',
        cancelLabel: 'Cancel',
        threshold: 80,
    },
    render: (args) => (
        <div className="max-w-md mx-auto">
            <SlideToDelete {...args}>
                <div className="p-4">
                    <h3 className="text-base font-semibold text-text-primary">Task Item</h3>
                    <p className="text-sm text-text-secondary mt-1">
                        Desliza hacia la derecha para eliminar o hacia la izquierda para cancelar
                    </p>
                </div>
            </SlideToDelete>
        </div>
    ),
};

export const WithConfirmation: Story = {
    name: 'Con Confirmación',
    args: {
        onDelete: () => {
            console.log('Item deleted');
            alert('Item deleted!');
        },
        deleteLabel: 'Delete',
        confirmDelete: true,
        confirmMessage: 'Are you sure?',
        threshold: 80,
    },
    render: (args) => (
        <div className="max-w-md mx-auto">
            <SlideToDelete {...args}>
                <div className="p-4">
                    <h3 className="text-base font-semibold text-text-primary">Important Task</h3>
                    <p className="text-sm text-text-secondary mt-1">
                        Desliza para eliminar. Se pedirá confirmación antes de eliminar.
                    </p>
                </div>
            </SlideToDelete>
        </div>
    ),
};

export const DangerVariant: Story = {
    name: 'Variante Danger',
    args: {
        onDelete: () => {
            console.log('Item deleted');
            alert('Item deleted!');
        },
        deleteLabel: 'Delete',
        variant: 'danger',
        threshold: 80,
    },
    render: (args) => (
        <div className="max-w-md mx-auto">
            <SlideToDelete {...args}>
                <div className="p-4">
                    <h3 className="text-base font-semibold text-text-primary">Dangerous Action</h3>
                    <p className="text-sm text-text-secondary mt-1">
                        Variante con color rojo para acciones peligrosas
                    </p>
                </div>
            </SlideToDelete>
        </div>
    ),
};

export const WarningVariant: Story = {
    name: 'Variante Warning',
    args: {
        onDelete: () => {
            console.log('Item deleted');
            alert('Item deleted!');
        },
        deleteLabel: 'Archive',
        variant: 'warning',
        threshold: 80,
    },
    render: (args) => (
        <div className="max-w-md mx-auto">
            <SlideToDelete {...args}>
                <div className="p-4">
                    <h3 className="text-base font-semibold text-text-primary">Archive Item</h3>
                    <p className="text-sm text-text-secondary mt-1">
                        Variante con color naranja para acciones de advertencia
                    </p>
                </div>
            </SlideToDelete>
        </div>
    ),
};

export const Disabled: Story = {
    name: 'Deshabilitado',
    args: {
        onDelete: () => {
            console.log('Item deleted');
        },
        deleteLabel: 'Delete',
        disabled: true,
        threshold: 80,
    },
    render: (args) => (
        <div className="max-w-md mx-auto">
            <SlideToDelete {...args}>
                <div className="p-4">
                    <h3 className="text-base font-semibold text-text-primary">Disabled Item</h3>
                    <p className="text-sm text-text-secondary mt-1">
                        Este elemento no se puede deslizar (deshabilitado)
                    </p>
                </div>
            </SlideToDelete>
        </div>
    ),
};

/* ========================================
   STORIES - LIST ITEM VARIANT
   ======================================== */

export const ListItem: Story = {
    name: '📋 Variante List Item',
    render: () => {
        const [items, setItems] = useState([
            { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
            { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager' },
        ]);

        return (
            <div className="max-w-md mx-auto space-y-2">
                {items.map((item) => (
                    <SlideToDeleteItem
                        key={item.id}
                        title={item.name}
                        subtitle={item.email}
                        avatar={
                            <Avatar>
                                <AvatarImage src="" />
                                <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                        }
                        actions={<Badge variant="secondary" size="sm">{item.role}</Badge>}
                        onDelete={async () => {
                            setItems(items.filter(i => i.id !== item.id));
                        }}
                        deleteLabel="Delete"
                    />
                ))}
            </div>
        );
    },
};

export const ListItemWithConfirmation: Story = {
    name: '📋 List Item con Confirmación',
    render: () => {
        const [items, setItems] = useState([
            { id: 1, name: 'Important Task', status: 'Active', priority: 'High' },
            { id: 2, name: 'Regular Task', status: 'Active', priority: 'Medium' },
            { id: 3, name: 'Low Priority Task', status: 'Pending', priority: 'Low' },
        ]);

        return (
            <div className="max-w-md mx-auto space-y-2">
                {items.map((item) => (
                    <SlideToDeleteItem
                        key={item.id}
                        title={item.name}
                        subtitle={`Status: ${item.status} • Priority: ${item.priority}`}
                        actions={
                            <Badge 
                                variant={item.priority === 'High' ? 'error' : item.priority === 'Medium' ? 'warning' : 'secondary'} 
                                size="sm"
                            >
                                {item.priority}
                            </Badge>
                        }
                        onDelete={async () => {
                            setItems(items.filter(i => i.id !== item.id));
                        }}
                        deleteLabel="Delete"
                        confirmDelete={true}
                        confirmMessage="Delete this task?"
                    />
                ))}
            </div>
        );
    },
};

export const ListItemWithCancel: Story = {
    name: '📋 List Item con Cancelación',
    render: () => {
        const [items, setItems] = useState([
            { id: 1, name: 'Email Notification', type: 'Email' },
            { id: 2, name: 'SMS Notification', type: 'SMS' },
            { id: 3, name: 'Push Notification', type: 'Push' },
        ]);

        return (
            <div className="max-w-md mx-auto space-y-2">
                {items.map((item) => (
                    <SlideToDeleteItem
                        key={item.id}
                        title={item.name}
                        subtitle={`Type: ${item.type}`}
                        onDelete={async () => {
                            setItems(items.filter(i => i.id !== item.id));
                        }}
                        onCancel={() => {
                            console.log('Cancel action');
                        }}
                        deleteLabel="Delete"
                        cancelLabel="Cancel"
                    />
                ))}
            </div>
        );
    },
};

/* ========================================
   STORIES - USE CASES
   ======================================== */

export const TodoList: Story = {
    name: '✅ Caso de Uso: Lista de Tareas',
    render: () => {
        const [todos, setTodos] = useState([
            { id: 1, text: 'Complete project proposal', completed: false },
            { id: 2, text: 'Review code changes', completed: true },
            { id: 3, text: 'Update documentation', completed: false },
            { id: 4, text: 'Schedule team meeting', completed: false },
        ]);

        return (
            <div className="max-w-md mx-auto">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-2">Todo List</h1>
                    <p className="text-sm text-text-secondary">
                        Desliza hacia la derecha para eliminar tareas
                    </p>
                </div>
                <div className="space-y-2">
                    {todos.map((todo) => (
                        <SlideToDeleteItem
                            key={todo.id}
                            title={todo.text}
                            subtitle={todo.completed ? 'Completed' : 'Pending'}
                            actions={
                                <Badge variant={todo.completed ? 'success' : 'secondary'} size="sm">
                                    {todo.completed ? 'Done' : 'Todo'}
                                </Badge>
                            }
                            onDelete={async () => {
                                setTodos(todos.filter(t => t.id !== todo.id));
                            }}
                            deleteLabel="Delete"
                        />
                    ))}
                </div>
            </div>
        );
    },
};

export const MessageList: Story = {
    name: '💬 Caso de Uso: Lista de Mensajes',
    render: () => {
        const [messages, setMessages] = useState([
            { id: 1, sender: 'Alice', text: 'Hey, how are you?', time: '10:30 AM', unread: true },
            { id: 2, sender: 'Bob', text: 'Can we meet tomorrow?', time: '9:15 AM', unread: false },
            { id: 3, sender: 'Charlie', text: 'Thanks for the help!', time: 'Yesterday', unread: true },
        ]);

        return (
            <div className="max-w-md mx-auto">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-2">Messages</h1>
                    <p className="text-sm text-text-secondary">
                        Desliza para eliminar conversaciones
                    </p>
                </div>
                <div className="space-y-2">
                    {messages.map((message) => (
                        <SlideToDeleteItem
                            key={message.id}
                            title={message.sender}
                            subtitle={message.text}
                            avatar={
                                <Avatar>
                                    <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                                </Avatar>
                            }
                            actions={
                                <div className="flex flex-col items-end gap-1">
                                    <span className="text-xs text-text-tertiary">{message.time}</span>
                                    {message.unread && (
                                        <div className="w-2 h-2 bg-accent-blue rounded-full" />
                                    )}
                                </div>
                            }
                            onDelete={async () => {
                                setMessages(messages.filter(m => m.id !== message.id));
                            }}
                            deleteLabel="Delete"
                            confirmDelete={true}
                        />
                    ))}
                </div>
            </div>
        );
    },
};

export const NotificationList: Story = {
    name: '🔔 Caso de Uso: Lista de Notificaciones',
    render: () => {
        const [notifications, setNotifications] = useState([
            { id: 1, title: 'New message', description: 'You have a new message from Alice', type: 'message' },
            { id: 2, title: 'Task completed', description: 'Your task has been marked as complete', type: 'success' },
            { id: 3, title: 'Reminder', description: 'Don\'t forget about the meeting at 3 PM', type: 'warning' },
        ]);

        return (
            <div className="max-w-md mx-auto">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-2">Notifications</h1>
                    <p className="text-sm text-text-secondary">
                        Desliza para eliminar notificaciones
                    </p>
                </div>
                <div className="space-y-2">
                    {notifications.map((notification) => (
                        <SlideToDeleteItem
                            key={notification.id}
                            title={notification.title}
                            subtitle={notification.description}
                            actions={
                                <Badge 
                                    variant={
                                        notification.type === 'message' ? 'default' :
                                        notification.type === 'success' ? 'success' : 'warning'
                                    } 
                                    size="sm"
                                >
                                    {notification.type}
                                </Badge>
                            }
                            onDelete={async () => {
                                setNotifications(notifications.filter(n => n.id !== notification.id));
                            }}
                            deleteLabel="Dismiss"
                            variant="default"
                        />
                    ))}
                </div>
            </div>
        );
    },
};

export const FileList: Story = {
    name: '📁 Caso de Uso: Lista de Archivos',
    render: () => {
        const [files, setFiles] = useState([
            { id: 1, name: 'document.pdf', size: '2.4 MB', modified: '2 hours ago' },
            { id: 2, name: 'presentation.pptx', size: '5.8 MB', modified: '1 day ago' },
            { id: 3, name: 'spreadsheet.xlsx', size: '1.2 MB', modified: '3 days ago' },
        ]);

        return (
            <div className="max-w-md mx-auto">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-2">Files</h1>
                    <p className="text-sm text-text-secondary">
                        Desliza para eliminar archivos
                    </p>
                </div>
                <div className="space-y-2">
                    {files.map((file) => (
                        <SlideToDeleteItem
                            key={file.id}
                            title={file.name}
                            subtitle={`${file.size} • Modified ${file.modified}`}
                            onDelete={async () => {
                                setFiles(files.filter(f => f.id !== file.id));
                            }}
                            deleteLabel="Delete"
                            confirmDelete={true}
                            confirmMessage="Delete this file?"
                        />
                    ))}
                </div>
            </div>
        );
    },
};

/* ========================================
   STORIES - PLAYGROUND
   ======================================== */

export const Playground: Story = {
    name: '🎨 Playground',
    args: {
        onDelete: () => {
            console.log('Item deleted');
            alert('Item deleted!');
        },
        deleteLabel: 'Delete',
        threshold: 80,
        variant: 'danger',
        confirmDelete: false,
        disabled: false,
    },
    render: (args) => (
        <div className="max-w-md mx-auto">
            <SlideToDelete {...args}>
                <div className="p-4">
                    <h3 className="text-base font-semibold text-text-primary">Playground Item</h3>
                    <p className="text-sm text-text-secondary mt-1">
                        Experimenta con diferentes configuraciones usando los controles
                    </p>
                </div>
            </SlideToDelete>
        </div>
    ),
};

