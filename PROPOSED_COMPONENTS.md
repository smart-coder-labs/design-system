# Proposed New Components

Ideas para nuevos componentes que podrían añadir valor al design system. Cada propuesta incluye justificación, API proposal y ejemplos de uso.

---

## 1. AnimatedCounter

**Justificación**: Componente esencial para fintech — muestra números que cuentan animadamente ( balances, porcentajes,统计数据). Apple usa esto en el Dashboard de Apple Card.

```tsx
<AnimatedCounter 
  value={12500.50} 
  prefix="$" 
  decimals={2}
  duration={1500}
  easing="ease-out-cubic"
/>
```

**Props propuestas**:
- `value`: number
- `prefix` / `suffix`: string
- `decimals`: number
- `duration`: number (ms)
- `format`: 'currency' | 'percentage' | 'number'
- `animateOnMount`: boolean

**Compound Components**: No necesario — es un componente simple con variantes de formato.

---

## 2. SkeletonLoader (Enhanced)

**Justificación**: El actual Skeleton es básico. Un SkeletonLoader avanzado que reproduce el layout real mientras carga.

```tsx
<SkeletonLoader variant="card" rows={3}>
  <Card>Contenido real que aparece cuando termina</Card>
</SkeletonLoader>

<SkeletonLoader animate={false} shape="circle" size="lg" />
```

**Props propuestas**:
- `variant`: 'text' | 'card' | 'avatar' | 'image' | 'table' | 'custom'
- `rows`: number (para variantes de texto/tabla)
- `animation`: 'wave' | 'pulse' | 'shimmer' | 'none'
- `custom`: ReactNode (para replicar un layout específico)

---

## 3. GlassmorphicCard

**Justificación**: Apple Vision Pro usa mucho glassmorphism. Un componente que ofrece este efecto de manera configurable.

```tsx
<GlassmorphicCard blur={20} opacity={0.7} tint="systemMaterial">
  <CardContent>Contenido</CardContent>
</GlassmorphicCard>

<GlassmorphicCard variant="frosted" border accent>
  <FloatingControls />
</GlassmorphicCard>
```

**Props propuestas**:
- `blur`: number (0-40)
- `opacity`: number (0-1)
- `tint`: 'none' | 'systemMaterial' | 'dark' | 'light'
- `variant`: 'standard' | 'frosted' | 'vibrant'
- `border`: boolean
- `accent`: boolean

---

## 4. InteractiveGraph (D3/Framer Motion)

**Justificación**: Los charts actuales son estáticos. Un componente interactivo tipo Apple Stocks que permite zoom, pan, y mostrar tooltips en hover.

```tsx
<InteractiveGraph 
  data={priceHistory}
  type="candlestick"
  showVolume
  interactions={['zoom', 'pan', 'crosshair']}
>
  <Graph.Tooltip>
    <PriceTooltip />
  </Graph.Tooltip>
  <Graph.RangeSelector />
</InteractiveGraph>
```

**Props propuestas**:
- `data`: TimeSeriesData[]
- `type`: 'line' | 'area' | 'candlestick' | 'bar'
- `interactions`: ('zoom' | 'pan' | 'crosshair' | 'brush')[]
- `indicators`: SMAIndicator[] | EMAIndicator[]
- `showVolume`: boolean
- `timeRange`: '1D' | '1W' | '1M' | '3M' | '1Y' | 'ALL'

---

## 5. OnboardingFlow

**Justificación**: Complejo pero esencial. Un flujo de onboarding con steps, progress indicator, y animaciones de transición Apple-style.

```tsx
<OnboardingFlow totalSteps={4} initialStep={0}>
  <OnboardingFlow.Step title="Welcome">
    <WelcomeContent />
  </OnboardingFlow.Step>
  
  <OnboardingFlow.Step title="Connect">
    <BankConnection />
  </OnboardingFlow.Step>
  
  <OnboardingFlow.Navigation>
    <BackButton />
    <NextButton />
  </OnboardingFlow.Navigation>
</OnboardingFlow>
```

**Props propuestas**:
- `totalSteps`: number
- `initialStep`: number
- `onComplete`: () => void
- `onStepChange`: (step: number) => void
- `animation`: 'slide' | 'fade' | 'scale'

---

## 6. SentimentAnalysisBubble

**Justificación**: Fintech apps muestran análisis de sentimiento de transacciones/noticias. Un componente visual tipo Apple Music/ Podcasts.

```tsx
<SentimentAnalysisBubble sentiment={0.75} label="Positive">
  <SentimentChart data={sentimentHistory} />
</SentimentAnalysisBubble>

<SentimentAnalysisBubble.Meter value={0.75} />
```

**Props propuestas**:
- `sentiment`: number (-1 to 1)
- `label`: 'positive' | 'negative' | 'neutral'
- `showChart`: boolean
- `chartType`: 'timeline' | 'bar' | 'gauge'

---

## 7. DragDropList (Reorderable)

**Justificación**: Común en settings, portfolios rebalance, etc. Con haptic feedback y animaciones smooth.

```tsx
<DragDropList 
  items={portfolioItems}
  onReorder={handleReorder}
  hapticFeedback
>
  <Item>{asset.name}</Item>
</DragDropList>

<DragDropList.Group 
  onDragStart={saveState}
  onDragEnd={animateToNewPositions}
/>
```

**Props propuestas**:
- `items`: T[]
- `onReorder`: (newOrder: T[]) => void
- `hapticFeedback`: boolean
- `animation`: 'spring' | 'linear'
- `dragHandle`: boolean

---

## 8. PinCodeInput (Enhanced)

**Justificación**: El actual OTPInput es básico. Un PinCode con más features: biometric fallback, auto-submit, secure mode.

```tsx
<PinCodeInput 
  length={6} 
  secure
  autoSubmit
  onComplete={verifyCode}
  onBiometricRequest={triggerFaceID}
>
  <PinCodeInput.AssistiveText>
    Ingresa el código de 6 dígitos
  </PinCodeInput.AssistiveText>
  <PinCodeInput.BiometricButton />
</PinCodeInput>
```

**Props propuestas**:
- `length`: number (4-8)
- `secure`: boolean (ocultar caracteres)
- `autoSubmit`: boolean
- `biometricType`: 'face' | 'fingerprint' | 'iris'
- `errorMessage`: string
- `attemptsRemaining`: number

---

## 9. PullToRefresh (Native Feel)

**Justificación**: Esencial para mobile. Un PullToRefresh con el estilo de Apple (no el spinner genérico).

```tsx
<PullToRefresh onRefresh={fetchData}>
  <TransactionList />
</PullToRefresh>

<PullToRefresh.CustomIndicator>
  <AppleStyleSpinner />
</PullToRefresh.CustomIndicator>
```

**Props propuestas**:
- `onRefresh`: () => Promise<void>
- `threshold`: number
- `pullDistance`: number
- `customIndicator`: ReactNode

---

## 10. AnimatedTabs (with Indicator)

**Justificación**: Los Tabs actuales no tienen el indicador animado de Apple. Este componente lo añade con spring animation.

```tsx
<AnimatedTabs 
  tabs={['Portfolio', 'Transactions', 'Goals']}
  activeTab={0}
  onChange={setTab}
  indicatorStyle="spring"
  pill
>
  <AnimatedTabs.Panel>Contenido</AnimatedTabs.Panel>
</AnimatedTabs>
```

**Props propuestas**:
- `tabs`: string[]
- `activeTab`: number
- `indicatorStyle`: 'spring' | 'ease' | 'linear'
- `pill`: boolean (estilo pill en vez de underline)
- `fullWidth`: boolean

---

## 11. SpotlightSearch

**Justificación**: Un SearchCommand palette al estilo Spotlight/Alfred que muestra resultados instantáneos con keyboard navigation.

```tsx
<SpotlightSearch 
  placeholder="Search actions, accounts, contacts..."
  onSearch={searchAll}
  onSelect={navigateTo}
>
  <SpotlightSearch.Group title="Accounts">
    <SpotlightSearch.Result 
      icon={<BankIcon />} 
      title="Chase Checking" 
      subtitle="****4521"
    />
  </SpotlightSearch.Group>
  
  <SpotlightSearch.Footer>
    <Kbd>↑↓</Kbd> navigate
    <Kbd>↵</Kbd> select
  </SpotlightSearch.Footer>
</SpotlightSearch>
```

**Props propuestas**:
- `placeholder`: string
- `onSearch`: (query: string) => Promise<SearchResult[]>
- `onSelect`: (result: SearchResult) => void
- `maxResults`: number
- `debounce`: number
- `groupBy`: string

---

## 12. MicroAnimation (Preset Animations)

**Justificación**: Un componente que encapsula micro-interacciones reutilizables (bounce, shake, pop, pulse).

```tsx
<MicroAnimation 
  type="bounce" 
  trigger={isNewFeature}
  repeat={3}
>
  <NotificationBadge value={5} />
</MicroAnimation>

<MicroAnimation 
  type="success-check" 
  onComplete={dismiss}
/>
```

**Props propuestas**:
- `type`: 'bounce' | 'shake' | 'pop' | 'pulse' | 'wiggle' | 'slide-in' | 'success-check'
- `trigger`: boolean
- `repeat`: number
- `duration`: number
- `onComplete`: () => void

---

## 13. SwipeableCard

**Justificación**: Componente muy usado en fintech (confirmar transacciones,-archivar, delete). Con haptic feedback y thresholds configurables.

```tsx
<SwipeableCard 
  onSwipeLeft={archive}
  onSwipeRight={confirm}
  leftAction="confirm"
  rightAction="archive"
  threshold={0.3}
>
  <TransactionCard />
</SwipeableCard>

<SwipeableCard.Custom 
  leftThreshold={100}
  rightThreshold={100}
  hapticFeedback="medium"
>
  <CustomContent />
</SwipeableCard.Custom>
```

**Props propuestas**:
- `onSwipeLeft` / `onSwipeRight`: () => void
- `leftAction` / `rightAction`: 'confirm' | 'delete' | 'archive' | 'custom'
- `threshold`: number (0-1)
- `hapticFeedback`: 'light' | 'medium' | 'heavy'
- `showActions`: boolean

---

## 14. FinancialGoalRing

**Justificación**: Visualiza progreso de goals de ahorro como los Apple Watch rings. Animated y con celebración al completar.

```tsx
<FinancialGoalRing 
  current={7500}
  target={10000}
  label="Emergency Fund"
  animationDuration={2000}
>
  <Ring.Center>
    <PercentageDisplay>75%</PercentageDisplay>
  </Ring.Center>
  <Ring.Legend>
    <LegendItem label="Saved" value="$7,500" />
    <LegendItem label="Remaining" value="$2,500" />
  </Ring.Legend>
</FinancialGoalRing>
```

**Props propuestas**:
- `current`: number
- `target`: number
- `label`: string
- `currency`: string
- `animationDuration`: number
- `celebrationOnComplete`: boolean

---

## 15. DataMaskedInput

**Justificación**: Para inputs sensibles (CVV, PIN, password) con toggle para mostrar/ocultar y copy-to-clipboard opcional.

```tsx
<DataMaskedInput 
  value={cvv}
  mask="***"
  revealable
  copyable
  onCopy={trackCopyEvent}
/>

<DataMaskedInput.Type 
  type="cvv" 
  maxLength={4}
/>
<DataMaskedInput.Type 
  type="pin" 
  maxLength={6}
/>
```

**Props propuestas**:
- `value`: string
- `mask`: string
- `revealable`: boolean
- `copyable`: boolean
- `type`: 'cvv' | 'pin' | 'ssn' | 'custom'

---

## Prioritization

| Priority | Component | Rationale |
|----------|-----------|-----------|
| **P0** | AnimatedCounter | Usado en casi todas las screens financieras |
| **P0** | PullToRefresh | Mobile essential |
| **P1** | GlassmorphicCard | Apple Vision Pro support |
| **P1** | SpotlightSearch | UX diferenciador |
| **P1** | SwipeableCard | Común en transacciones |
| **P2** | OnboardingFlow | Solo si hay onboarding feature |
| **P2** | InteractiveGraph | Solo si hay charts complejos |
| **P3** | SentimentAnalysisBubble | Feature específico |

---

## ¿Te gustaría que profundice en alguno?