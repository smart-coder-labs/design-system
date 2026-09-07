# SignupForm

> **v1.0.3** · experimental

A complete signup form component with built-in validation for user registration.

## Installation

```bash
# The component is copied to your project with the add cli command
import { SignupForm } from '@/components/ui/SignupForm';
```

## Basic Usage

```tsx
import { SignupForm } from '@/components/ui/SignupForm';

function Example() {
  const handleSubmit = async (data) => {
    console.log('Signup data:', data);
    // Send to your registration API
  };

  return <SignupForm onSubmit={handleSubmit} />;
}
```

## With Error Handling

```tsx
<SignupForm
  onSubmit={handleSubmit}
  error="This email is already registered"
/>
```

## Loading State

```tsx
<SignupForm
  onSubmit={handleSubmit}
  isLoading={true}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onSubmit` | `(data: SignupFormData) => void \| Promise<void>` | - | Called with form data on valid submission |
| `isLoading` | `boolean` | `false` | Shows loading state, disables form |
| `error` | `string` | - | External error message to display |
| `termsHref` | `string` | - | Destination for the "Terms and Conditions" consent link. Omit to render it as plain text |
| `privacyHref` | `string` | - | Destination for the "Privacy Policy" consent link. Omit to render it as plain text |
| `className` | `string` | - | Additional classes |

### Consent links

The consent text never renders a dead link. Provide `termsHref` / `privacyHref` to get real
anchors (absolute `http(s)` URLs open in a new tab with `rel="noopener noreferrer"`); omit them
and the labels render as plain text instead.

```tsx
<SignupForm
  onSubmit={handleSubmit}
  termsHref="/terms"
  privacyHref="https://example.com/privacy"
/>
```

### SignupFormData

```typescript
interface SignupFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}
```

## Validation

The form includes client-side validation for:

- **Required fields**: All fields are required
- **Password match**: Confirm password must match password
- **Password length**: Minimum 8 characters
- **Terms acceptance**: Must accept terms to submit

## Examples

### Complete Signup Flow

```tsx
function SignupPage() {
  const [error, setError] = useState('');

  const handleSubmit = async (data) => {
    try {
      await registerUser(data);
      // Navigate to success page
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignupForm onSubmit={handleSubmit} error={error} />
    </div>
  );
}
```

### Dark Mode

```tsx
<div className="dark bg-gray-950 min-h-screen p-8">
  <SignupForm onSubmit={handleSubmit} />
</div>
```

## Notes

- Built-in validation runs before `onSubmit` is called
- Form uses controlled inputs with internal state
- Displays error from either internal validation or external prop
- Supports dark mode via design tokens
- Uses Framer Motion for smooth transitions