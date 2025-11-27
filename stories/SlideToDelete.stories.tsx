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
        children: <div>Sample content</div>,
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
        children: <div>Sample content</div>,
        onDelete: () => console.log('Delete clicked'),
        onCancel: () => console.log('Cancel clicked'),
        deleteLabel: 'Delete',
        cancelLabel: 'Cancel',
        threshold: 100,
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
        children: <div>Sample content</div>,
        onDelete: () => console.log('Delete confirmed'),
        deleteLabel: 'Delete',
        confirmDelete: true,
        confirmMessage: 'Are you sure you want to delete this item?',
        threshold: 100,
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
        children: <div>Sample content</div>,
        onDelete: () => console.log('Delete clicked'),
        deleteLabel: 'Delete',
        variant: 'danger',
        threshold: 100,
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
        children: <div>Sample content</div>,
        onDelete: () => console.log('Archive clicked'),
        deleteLabel: 'Archive',
        variant: 'warning',
        threshold: 100,
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
        children: <div>Sample content</div>,
        onDelete: () => console.log('Delete clicked'),
        deleteLabel: 'Delete',
        disabled: true,
        threshold: 100,
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
    args: {
        children: <div>Sample content</div>,
        onDelete: async () => { },
        deleteLabel: 'Delete'
    },
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
                        actions={<Badge variant="default" size="sm">{item.role}</Badge>}
                        onDelete={async () => {
                            setItems(items.filter(i => i.id !== item.id));
                        }}
                        deleteLabel="Delete"
                    >
                        <></>
                    </SlideToDeleteItem>
                ))}
            </div>
        );
    },
};

export const ListItemWithConfirmation: Story = {
    name: '✅ Caso de Uso: Lista con Confirmación',
    args: {
        children: <div>Sample content</div>,
        onDelete: async () => { },
        deleteLabel: 'Delete',
        confirmDelete: true
    },
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
                                variant={item.priority === 'High' ? 'error' : item.priority === 'Medium' ? 'warning' : 'default'}
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
                    >
                        <></>
                    </SlideToDeleteItem>
                ))}
            </div>
        );
    },
};

export const ListItemWithCancel: Story = {
    name: '↩️ Caso de Uso: Lista con Cancelación',
    args: {
        children: <div>Sample content</div>,
        onDelete: async () => { },
        onCancel: () => { },
        deleteLabel: 'Delete',
        cancelLabel: 'Cancel'
    },
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
                    >
                        <></>
                    </SlideToDeleteItem>
                ))}
            </div>
        );
    },
};

/* ========================================
   STORIES - USE CASES
   ======================================== */

export const TodoList: Story = {
    name: '📝 Caso de Uso: Lista de Tareas',
    render: () => {
        const [todos, setTodos] = useState([
            { id: 1, text: 'Buy groceries', completed: false },
            { id: 2, text: 'Walk the dog', completed: true },
            { id: 3, text: 'Read a book', completed: false },
        ]);

        return (
            <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Todo List</h3>
                <div className="space-y-3">
                    {todos.map((todo) => (
                        <SlideToDeleteItem
                            key={todo.id}
                            onDelete={async () => {
                                setTodos(todos.filter(t => t.id !== todo.id));
                            }}
                            deleteLabel="Delete"
                            variant="danger"
                        >
                            <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${todo.completed ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
                                    {todo.completed && <span className="text-white text-xs">✓</span>}
                                </div>
                                <span className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                                    {todo.text}
                                </span>
                                <Badge variant={todo.completed ? 'success' : 'default'} size="sm">
                                    {todo.completed ? 'Done' : 'Pending'}
                                </Badge>
                            </div>
                        </SlideToDeleteItem>
                    ))}
                </div>
            </div>
        );
    },
    args: {
        children: <div>Sample content</div>,
        onDelete: async () => { },
        deleteLabel: 'Delete'
    }
};

export const MessageList: Story = {
    name: '💬 Caso de Uso: Mensajes',
    render: () => {
        const [messages, setMessages] = useState([
            { id: 1, sender: 'Alice', text: 'Hey, how are you?', time: '10:30 AM', unread: true },
            { id: 2, sender: 'Bob', text: 'Can we meet later?', time: '09:15 AM', unread: false },
            { id: 3, sender: 'Charlie', text: 'Project update attached', time: 'Yesterday', unread: true },
        ]);

        return (
            <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Messages</h3>
                <div className="space-y-3">
                    {messages.map((message) => (
                        <SlideToDeleteItem
                            key={message.id}
                            onDelete={async () => {
                                setMessages(messages.filter(m => m.id !== message.id));
                            }}
                            deleteLabel="Delete"
                            variant="danger"
                        >
                            <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                                    {message.sender[0]}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-baseline">
                                        <h4 className={`text-sm font-medium ${message.unread ? 'text-gray-900' : 'text-gray-600'}`}>
                                            {message.sender}
                                        </h4>
                                        <span className="text-xs text-gray-400">{message.time}</span>
                                    </div>
                                    <p className={`text-sm truncate ${message.unread ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                                        {message.text}
                                    </p>
                                </div>
                                {message.unread && (
                                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mt-2"></div>
                                )}
                            </div>
                        </SlideToDeleteItem>
                    ))}
                </div>
            </div>
        );
    },
    args: {
        children: <div>Sample content</div>,
        onDelete: async () => { },
        deleteLabel: 'Delete'
    }
};

export const NotificationList: Story = {
    name: '🔔 Caso de Uso: Notificaciones',
    render: () => {
        const [notifications, setNotifications] = useState([
            { id: 1, title: 'New Message', subtitle: 'You have a new message from Alice', time: '2m ago', type: 'message' },
            { id: 2, title: 'System Update', subtitle: 'System update completed successfully', time: '1h ago', type: 'system' },
            { id: 3, title: 'Payment Failed', subtitle: 'Your payment was declined', time: '3h ago', type: 'alert' },
        ]);

        return (
            <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Notifications</h3>
                <div className="space-y-3">
                    {notifications.map((notification) => (
                        <SlideToDeleteItem
                            key={notification.id}
                            onDelete={async () => {
                                setNotifications(notifications.filter(n => n.id !== notification.id));
                            }}
                            deleteLabel="Clear"
                            variant="default"
                        >
                            <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                                <div className="p-2 bg-blue-50 rounded-full text-blue-500">
                                    <span className="text-xl">🔔</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-medium text-sm">{notification.title}</h4>
                                        <span className="text-xs text-gray-400">{notification.time}</span>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">{notification.subtitle}</p>
                                </div>
                                <Badge
                                    variant={
                                        notification.type === 'message' ? 'info' :
                                            notification.type === 'alert' ? 'error' : 'default'
                                    }
                                    size="sm"
                                >
                                    {notification.type}
                                </Badge>
                            </div>
                        </SlideToDeleteItem>
                    ))}
                </div>
            </div>
        );
    },
    args: {
        children: <div>Sample content</div>,
        onDelete: async () => { },
        deleteLabel: 'Clear'
    }
};

export const FileList: Story = {
    name: '📁 Caso de Uso: Lista de Archivos',
    render: () => {
        const [files, setFiles] = useState([
            { id: 1, name: 'Project Proposal.pdf', size: '2.4 MB', modified: '2 hours ago' },
            { id: 2, name: 'Design Assets.zip', size: '156 MB', modified: 'Yesterday' },
            { id: 3, name: 'Meeting Notes.docx', size: '14 KB', modified: '3 days ago' },
        ]);

        return (
            <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Files</h3>
                <div className="space-y-3">
                    {files.map((file) => (
                        <SlideToDeleteItem
                            key={file.id}
                            onDelete={async () => {
                                setFiles(files.filter(f => f.id !== file.id));
                            }}
                            deleteLabel="Delete"
                            confirmDelete
                            confirmMessage="Are you sure you want to delete this file?"
                        >
                            <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                                <div className="p-2 bg-gray-100 rounded-lg">
                                    <span className="text-xl">📄</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-medium">{file.name}</h4>
                                    <p className="text-sm text-gray-500">{file.size}</p>
                                </div>
                            </div>
                        </SlideToDeleteItem>
                    ))}
                </div>
            </div>
        );
    },
    args: {
        children: <div>Sample content</div>,
        onDelete: async () => { },
        deleteLabel: 'Delete'
    }
};

/* ========================================
   STORIES - PLAYGROUND
   ======================================== */

export const Playground: Story = {
    name: '🎨 Playground',
    args: {
        children: <div>Sample content</div>,
        onDelete: () => console.log('Delete clicked'),
        deleteLabel: 'Delete',
        threshold: 100,
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

