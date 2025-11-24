import React from 'react';
import { ModalStackManager, ModalConfig } from '../components/ModalStackManager';
import { Button } from '../components/Button';

export default {
  title: 'Components/ModalStackManager',
  component: ModalStackManager,
};

export const Default = () => {
  const [show, setShow] = React.useState(false);
  const initialStack: ModalConfig[] = [
    {
      title: 'Modal Principal',
      description: 'Este es el modal principal. Puedes abrir otro modal encima.',
      content: <p>Contenido del modal principal.</p>,
      footer: <Button variant="ghost" onClick={() => setShow(false)}>Cerrar</Button>,
      size: 'md',
    },
  ];

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Abrir Modal Stack
      </Button>
      {show && <ModalStackManager initialStack={initialStack} />}
    </>
  );
};

export const NestedModals = () => {
  const [show, setShow] = React.useState(false);
  const initialStack: ModalConfig[] = [
    {
      title: 'Modal de Confirmación',
      description: '¿Deseas continuar con la acción?',
      content: <p>Esta acción es irreversible.</p>,
      footer: <Button variant="primary" onClick={() => setShow(false)}>Confirmar</Button>,
      size: 'sm',
    },
  ];

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Abrir Confirmación
      </Button>
      {show && <ModalStackManager initialStack={initialStack} />}
    </>
  );
};

export const MultiStepFlow = () => {
  const [show, setShow] = React.useState(false);
  const initialStack: ModalConfig[] = [
    {
      title: 'Paso 1: Información',
      description: 'Completa la información básica.',
      content: <p>Formulario de información básica.</p>,
      footer: <Button variant="primary" onClick={() => setShow(false)}>Siguiente</Button>,
      size: 'md',
    },
  ];

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Iniciar Flujo Multi-paso
      </Button>
      {show && <ModalStackManager initialStack={initialStack} />}
    </>
  );
};
