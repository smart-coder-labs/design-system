# LoginForm

> **v1.0.13** · stable

A complete login form component with email and password fields, remember me functionality, and forgot password link. Designed with Apple Minimal aesthetic and built-in validation.

## Installation

```bash
# The component is copied to your project with the add cli command
import { LoginForm } from '@/components/ui/LoginForm';
```

## Basic Usage

```tsx
import { LoginForm } from '@/components/ui/LoginForm';

function Example() {
  const handleSubmit = async (data) => {
    // Handle login with { email, password, rememberMe }
    console.log(data);
  };

  return (
    <LoginForm onSubmit={handleSubmit} />
  );
}
```

## With Loading State

```tsx
import { useState } from 'react';
import { LoginForm } from '@/components/ui/LoginForm';

function Example() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    setLoading(true);
    await login(data.email, data.password);
    setLoading(false);
  };

  return (
    <LoginForm onSubmit={handleSubmit} isLoading={loading} />
  );
}
```

## With Error Message

```tsx
<LoginForm 
  onSubmit={handleLogin} 
  error="Invalid email or password. Please try again."
/>
```

## With Forgot Password Handler

```tsx
<LoginForm 
  onSubmit={handleLogin}
  onForgotPassword={() => navigate('/forgot-password')}
/>
```

## Full Example with Custom Styling

```tsx
import { LoginForm } from '@/components/ui/LoginForm';

function BankingLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-secondary">
      <LoginForm
        onSubmit={async ({ email, password, rememberMe }) => {
          // API call here
        }}
        onForgotPassword={() => console.log('Navigate to reset')}
        isLoading={false}
        error={null}
      />
    </div>
  );
}
```

## API

### Props

| Prop              | Type                                                     | Default   | Description                                      |
|-------------------|----------------------------------------------------------|-----------|--------------------------------------------------|
| `onSubmit`        | `(data: { email: string; password: string; rememberMe: boolean }) => void \| Promise<void>` | - | Called when form is submitted |
| `onForgotPassword`| `() => void`                                            | -         | Called when "Forgot password" is clicked        |
| `isLoading`      | `boolean`                                               | `false`   | Shows loading state on submit button            |
| `error`          | `string`                                                | -         | Display an error message at the top of the form |
| `className`      | `string`                                                | -         | Additional CSS classes for the form container   |

### Return Data from onSubmit

The `onSubmit` callback receives an object with:

| Field         | Type      | Description                        |
|---------------|-----------|------------------------------------|
| `email`       | `string`  | The entered email address          |
| `password`    | `string`  | The entered password               |
| `rememberMe`  | `boolean` | Whether "Remember me" was checked |

## Examples

### Standard Login

```tsx
<LoginForm
  onSubmit={async ({ email, password, rememberMe }) => {
    await authenticate(email, password, rememberMe);
  }}
/>
```

### With Error Handling

```tsx
<LoginForm
  onSubmit={async ({ email, password }) => {
    try {
      await login(email, password);
    } catch (err) {
      throw new Error('Invalid credentials');
    }
  }}
/>
```

### Dark Mode

```tsx
<div className="dark bg-gray-950 min-h-screen p-8 flex items-center justify-center">
  <LoginForm onSubmit={handleLogin} />
</div>
```

## Notes

- Uses built-in form validation (requires both email and password)
- Email field supports HTML5 email validation
- "Remember me" checkbox is optional and defaults to false
- Submit button shows loading state during async operations
- Error messages display in a red alert box with icon
- Fully accessible with proper labels and ARIA attributes
- Dark mode compatible via design tokens
- Uses `forwardRef` for the form element