### Example 1: Compound Components (Modal)
**User Input**:
> "I need a flexible Modal component where I can put the title, body, and footer in different orders depending on the page."

**Reasoning**:
A rigid `Modal` component taking `title`, `body`, `footer` as props is too limiting. The **Compound Component** pattern allows the user to compost the UI freely while sharing the open/close state.

**Action/Output**:
```tsx
// src/components/ui/modal.tsx
import * as React from "react";

interface ModalContextValue {
  isOpen: boolean;
  close: () => void;
}

const ModalContext = React.createContext<ModalContextValue | undefined>(undefined);

function Root({ children, isOpen, onClose }: { children: React.ReactNode; isOpen: boolean; onClose: () => void }) {
  return (
    <ModalContext.Provider value={{ isOpen, close: onClose }}>
      {isOpen && <div className="overlay">{children}</div>}
    </ModalContext.Provider>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return <div className="modal-content">{children}</div>;
}

function Header({ children }: { children: React.ReactNode }) {
  const ctx = React.useContext(ModalContext);
  return (
    <div className="modal-header">
        {children}
        <button onClick={ctx?.close}>X</button>
    </div>
  );
}

// Usage
export const Modal = { Root, Content, Header };

// In App:
// <Modal.Root isOpen={open} onClose={close}>
//   <Modal.Content>
//     <Modal.Header>Title</Modal.Header>
//     <p>Body...</p>
//   </Modal.Content>
// </Modal.Root>
```
