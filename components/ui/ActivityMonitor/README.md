# ActivityMonitor

> **v1.0.34** · stable

A system activity monitoring dashboard component that displays real-time metrics for CPU, memory, energy, disk, and network usage. Includes process lists, sparkline charts, and auto-refresh capabilities.

## Installation

```bash
import { ActivityMonitor } from '@/components/ui/ActivityMonitor';
```

## Basic Usage

```tsx
<ActivityMonitor
  cpuMetrics={{ label: 'CPU Usage', value: 45, history: [40, 42, 45, 48, 45] }}
  memoryMetrics={{ label: 'Memory', value: 62, history: [60, 61, 62, 63, 62] }}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `processes` | `ProcessData[]` | `[]` | Array of running processes |
| `cpuMetrics` | `MetricData` | - | CPU usage metrics |
| `memoryMetrics` | `MetricData` | - | Memory usage metrics |
| `energyMetrics` | `MetricData` | - | Energy consumption metrics |
| `diskMetrics` | `MetricData` | - | Disk I/O metrics |
| `networkMetrics` | `MetricData` | - | Network traffic metrics |
| `defaultTab` | `'cpu' \| 'memory' \| 'energy' \| 'disk' \| 'network'` | `'cpu'` | Initial active tab |
| `autoRefresh` | `boolean` | `false` | Enable auto-refresh |
| `refreshInterval` | `number` | `1000` | Refresh interval in ms |
| `onProcessSelect` | `(process: ProcessData) => void` | - | Process selection callback |
| `onSortChange` | `(key, direction) => void` | - | Sort change callback |
| `className` | `string` | - | Additional CSS classes |

### ProcessData

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique process identifier |
| `name` | `string` | Process name |
| `pid` | `number` | Process ID |
| `cpu` | `number` | CPU usage percentage |
| `memory` | `number` | Memory usage in MB |

### MetricData

| Prop | Type | Description |
|------|------|-------------|
| `label` | `string` | Display label |
| `value` | `number` | Current value |
| `unit` | `string` | Unit of measurement |
| `trend` | `'up' \| 'down' \| 'neutral'` | Trend direction |
| `history` | `number[]` | Historical values for sparkline |

## Examples

### Full Dashboard

```tsx
<ActivityMonitor
  cpuMetrics={{
    label: 'CPU Usage',
    value: 45,
    trend: 'down',
    history: [50, 48, 45, 47, 45]
  }}
  memoryMetrics={{
    label: 'Memory',
    value: 62,
    trend: 'neutral',
    history: [60, 61, 62, 61, 62]
  }}
  energyMetrics={{
    label: 'Energy',
    value: 15,
    unit: 'W',
    trend: 'up'
  }}
  networkMetrics={{
    label: 'Network',
    value: 120,
    trend: 'up',
    history: [100, 110, 115, 118, 120]
  }}
  processes={[
    { id: '1', name: 'Safari', pid: 1234, cpu: 12, memory: 256 },
    { id: '2', name: 'Chrome', pid: 5678, cpu: 8, memory: 512 },
  ]}
/>
```

### Simple Metrics Only

```tsx
<ActivityMonitor
  cpuMetrics={{ label: 'CPU', value: 78, history: [70, 72, 75, 78] }}
  memoryMetrics={{ label: 'RAM', value: 45, history: [40, 42, 44, 45] }}
/>
```

### With Auto-Refresh

```tsx
<ActivityMonitor
  cpuMetrics={currentCpuMetrics}
  memoryMetrics={currentMemoryMetrics}
  autoRefresh={true}
  refreshInterval={2000}
  defaultTab="memory"
/>
```

## Notes

- Uses Sparkline component for trend visualization
- Tab navigation switches between metric categories
- Process list supports sorting by name, CPU, or memory
- Auto-refresh shows a "Refreshing..." indicator
- Follows macOS Activity Monitor visual style