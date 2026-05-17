# ResourceMonitor

> **v1.0.14** · stable

A real-time resource monitoring dashboard displaying CPU usage, memory, and token throughput metrics with interactive time range selection.

## Installation

```bash
# The component is copied to your project with the add cli command
import { ResourceMonitor } from '@/components/ui/ResourceMonitor';
```

## Basic Usage

```tsx
import { ResourceMonitor } from '@/components/ui/ResourceMonitor';

<ResourceMonitor />
```

## With Custom Data

```tsx
const dataPoints = [
    { timestamp: Date.now(), cpu: 45, memory: 62, tokens: 8.5 },
    { timestamp: Date.now() + 60000, cpu: 52, memory: 65, tokens: 9.2 },
    // ...
];

<ResourceMonitor
    data={dataPoints}
    currentCpu={45}
    currentMemory={2.4}
    currentTokens={8.4}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `ResourceDataPoint[]` | Generated mock data | Historical data points |
| `currentCpu` | `number` | `42` | Current CPU percentage (0-100) |
| `currentMemory` | `number` | `2.4` | Current memory usage in GB |
| `currentTokens` | `number` | `8.4` | Current tokens per minute (in k) |
| `autoRefresh` | `boolean` | `true` | Enable real-time data updates |
| `refreshInterval` | `number` | `2000` | Refresh interval in milliseconds |
| `className` | `string` | - | Additional classes |

### ResourceDataPoint

| Property | Type | Description |
|----------|------|-------------|
| `timestamp` | `number` | Unix timestamp in milliseconds |
| `cpu` | `number` | CPU usage percentage (0-100) |
| `memory` | `number` | Memory usage percentage (0-100) |
| `tokens` | `number` | Tokens processed per minute |

## Examples

### High Load Scenario

```tsx
<ResourceMonitor
    currentCpu={92}
    currentMemory={88}
    currentTokens={15.5}
/>
```

### Low Resource Usage

```tsx
<ResourceMonitor
    currentCpu={12}
    currentMemory={34}
    currentTokens={3.2}
/>
```

### With Custom Time Range

```tsx
// Component manages its own time range state
// Available: 'realtime', '24h', '7d'
<ResourceMonitor autoRefresh={true} refreshInterval={3000} />
```

## Notes

- Uses SVG for chart rendering with smooth bezier curves
- Real-time updates via setInterval when autoRefresh is enabled
- Time range selector: Real-time, 24h, 7d
- CPU displayed as solid line with gradient fill area
- Memory displayed as dashed line
- Tokens/min displayed as numeric indicator
- Dark-themed component optimized for developer dashboards