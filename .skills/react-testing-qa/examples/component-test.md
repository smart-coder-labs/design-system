### Example 1: Component Interaction Test
**User Input**:
> "Write a test for the Login Form. It should show an error if I submit without typing anything."

**Reasoning**:
We need to render the form, attempt to submit, and verify the error message appears. This verifies the validation logic from the user's perspective.

**Action/Output**:
```tsx
// src/components/login-form.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './login-form'

describe('LoginForm', () => {
  it('shows error when submitting empty form', async () => {
    // 1. Setup User Event
    const user = userEvent.setup()
    
    // 2. Render
    render(<LoginForm onSubmit={vi.fn()} />)
    
    // 3. Interact - Find button by Role
    const submitBtn = screen.getByRole('button', { name: /sign in/i })
    await user.click(submitBtn)
    
    // 4. Assert - Look for validation error
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument()
  })

  it('calls onSubmit with valid data', async () => {
    const handleSubmit = vi.fn()
    const user = userEvent.setup()
    render(<LoginForm onSubmit={handleSubmit} />)

    // Fill inputs
    await user.type(screen.getByLabelText(/email/i), 'test@example.com')
    await user.type(screen.getByLabelText(/password/i), 'password123')
    
    // Submit
    await user.click(screen.getByRole('button', { name: /sign in/i }))
    
    // Assert
    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123'
    })
  })
})
```
