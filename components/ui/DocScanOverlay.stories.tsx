import type { Meta, StoryObj } from '@storybook/react';
import { DocScanOverlay } from './DocScanOverlay';
import React from 'react';

const meta: Meta<typeof DocScanOverlay> = {
  title: 'Fintech/KYC/DocScanOverlay',
  component: DocScanOverlay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DocScanOverlay>;

export const IDCard: Story = {
  args: {
    documentType: 'ID',
    scanState: 'scanning',
  },
};

export const Selfie: Story = {
  args: {
    documentType: 'SELFIE',
    instructionMessage: 'Mueve tu rostro dentro del óvalo',
    scanState: 'scanning',
  },
};

export const PassportScan: Story = {
  args: {
    documentType: 'PASSPORT',
    instructionMessage: 'Alinea tu pasaporte dentro del marco',
    scanState: 'scanning',
  },
};

export const IdleState: Story = {
  args: {
    documentType: 'ID',
    scanState: 'idle',
    instructionMessage: 'Prepara tu identificación para comenzar',
  },
};

export const DetectingState: Story = {
  args: {
    documentType: 'ID',
    scanState: 'detecting',
    instructionMessage: 'Analizando documento...',
  },
};

export const SuccessState: Story = {
  args: {
    documentType: 'ID',
    scanState: 'success',
    instructionMessage: 'Documento verificado correctamente',
  },
};

export const ErrorState: Story = {
  args: {
    documentType: 'ID',
    scanState: 'error',
    instructionMessage: 'No pudimos leer tu documento. Intenta de nuevo.',
  },
};

export const SelfieSuccess: Story = {
  args: {
    documentType: 'SELFIE',
    scanState: 'success',
    instructionMessage: 'Rostro verificado correctamente',
  },
};

export const SelfieError: Story = {
  args: {
    documentType: 'SELFIE',
    scanState: 'error',
    instructionMessage: 'No pudimos detectar tu rostro. Asegúrate de tener buena iluminación.',
  },
};

export const PassportDetecting: Story = {
  args: {
    documentType: 'PASSPORT',
    scanState: 'detecting',
    instructionMessage: 'Procesando datos del pasaporte...',
  },
};

export const Interactive: Story = {
  render: () => {
    return (
      <div className="flex flex-col items-center gap-4">
        <p className="text-xs text-text-secondary">El componente simula automáticamente el escaneo al hacer clic en "Simular Captura"</p>
        <DocScanOverlay
          documentType="ID"
          scanState="scanning"
          instructionMessage="Haz clic en el botón de captura para simular"
        />
      </div>
    );
  },
};
