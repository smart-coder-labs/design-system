export interface DocScanOverlayProps {
  scanState?: 'idle' | 'scanning' | 'detecting' | 'success' | 'error';
  instructionMessage?: string;
  documentType?: 'ID' | 'PASSPORT' | 'SELFIE';
  onCapture?: () => void;
  onRetake?: () => void;
  onCancel?: () => void;
}