# 🏦 Fintech Component Catalog

Este documento cataloga los componentes del sistema de diseño que son específicos o altamente relevantes para aplicaciones de banca digital, fintech y servicios financieros.

## 🛡️ Seguridad y Autenticación
Componentes diseñados para proteger la información del usuario y cumplir con normativas de seguridad.

- ✅ **OTPInput / SecurityOTPInput**: Campo de entrada optimizado para códigos de un solo uso (2FA).
- ✅ **TwoFactorAuth**: Flujo completo para la gestión de seguridad de doble factor.
- ✅ **SecurityActivityLog**: Registro visual de auditoría para actividades sospechosas o cambios de cuenta.
- ✅ **LoginForm / SignupForm**: Componentes base para el acceso y registro de usuarios.
- ✅ **PasswordInput**: Entrada de contraseña con controles de visibilidad integrados.
- ✅ **RecoveryCodeDisplay**: Visualización segura de códigos de recuperación por única vez.
- ✅ **BiometricPrompt**: Simulación visual de procesos FaceID/TouchID para mejorar la confianza del usuario.

## 💳 Gestión de Tarjetas
Componentes específicos para la experiencia de tarjetas de crédito y débito.

- ✅ **VirtualCardPreview**: Componente visual de tarjeta con animación de volteo para mostrar datos sensibles (CVV/Exp) bajo demanda.
- ✅ **CardSecurityControls**: Panel de control con toggles específicos para "Congelar Tarjeta", "Límites Diarios" y "Restricciones Geográficas".
- ✅ **CashbackWidget**: Visualización de beneficios, recompensas y ahorro acumulado.

## 💸 Transacciones y Pagos
Componentes para la gestión de flujos de dinero y pagos.

- ✅ **PaymentMethodSelector**: Selector interactivo para tarjetas de crédito, débito o cuentas bancarias.
- ✅ **BankAccountCard**: Visualización premium de cuentas vinculadas con saldo y detalles.
- ✅ **QuickTransferBar**: Carrusel de avatares de "Contactos Recientes" para realizar transferencias rápidas.
- ✅ **TransferForm**: Formulario optimizado para transferencias entre cuentas o a terceros.
- ✅ **PaymentConfirmationModal**: Pantalla de revisión final previa a la ejecución de un pago.
- ✅ **TransactionList**: Listado detallado de movimientos con categorización y estados.
- ✅ **InvoicePreview**: Previsualización detallada de facturas, recibos o comprobantes de pago.
- ✅ **PriceDisplay**: Formateo premium de divisas con soporte para estados (positivo/negativo).
- ✅ **QRCodeGenerator**: Generación dinámica de códigos para cobros y transferencias.
- ✅ **OrderSummary**: Resumen de transacciones con desglose de impuestos y comisiones.
- ✅ **SignaturePad**: Captura de firma digital para contratos o autorizaciones legales.

## 📊 Dashboard y Visualización de Datos
Componentes para mostrar el estado financiero y el comportamiento del usuario.

- ✅ **StatisticDisplay / KPIBlock**: Widgets diseñados para mostrar balances, ingresos y gastos.
- ✅ **BalanceChart**: Gráficos de área/línea para visualizar la evolución del saldo en el tiempo.
- ✅ **Chart / Sparkline**: Visualización de tendencias temporales y rendimiento de carteras.
- ✅ **PortfolioDistribution**: Gráficos de dona avanzados para mostrar la diversificación de activos o inversiones.
- ✅ **DataGrid / Table**: Tablas optimizadas para listados extensos de movimientos bancarios.
- ✅ **ActivityFeed / Timeline**: Vista cronológica de actividades y transacciones.
- ✅ **Badge**: Indicadores semánticos para estados de transacciones (Éxito, Error, Pendiente).

## 📈 Inversiones y Mercados
Componentes para productos de inversión y trading.

- ✅ **AssetPriceTicker**: Tira informativa en tiempo real para precios de acciones o criptomonedas.
- ✅ **PortfolioPerformanceCard**: Resumen de ganancias/pérdidas de instrumentos financieros.

## 🤖 IA y Análisis Avanzado
Componentes para interfaces potenciadas por Inteligencia Artificial.

- ✅ **AIThinkingIndicator**: Indicador visual para procesos de análisis financiero basado en IA.
- ✅ **FintechDashboardPreview**: Maqueta de dashboard holístico que integra múltiples servicios.

## 📋 Registro y Gestión (KYC)
Componentes para procesos de "Conoce a tu Cliente" y gestión de perfil.

- ✅ **Stepper**: Componente de navegación para flujos multipartes como el Onboarding.
- ✅ **IdentityVerificationStep**: Flujo visual para carga de documentos de identidad y biometría facial.
- ✅ **KeyValueInfo**: Presentación clara de datos como CLABE, SWIFT, IBAN o RFC.
- ✅ **AddressSelector**: Selector de direcciones físicas para verificación de domicilio.
- ✅ **ConfirmDialog**: Diálogos de confirmación de "fricción intencional" para operaciones críticas.
- ✅ **Skeleton**: Estados de carga optimizados para interfaces cargadas de datos financieros.

## 💡 Insights y Simplificación
Componentes creados para evitar la sobrecarga cognitiva y explicar conceptos financieros con Inteligencia Artificial.

- ✅ **SmartInsightsCard**: Tarjetas accionables generadas por IA que resumen información compleja.
- ✅ **JargonTooltip**: Popovers interactivos que explican términos financieros complejos.
- ✅ **ProgressiveDisclosurePanel**: Contenedores que muestran resúmenes por defecto con revelación progresiva de datos técnicos.

## 🛡️ Confianza y "Seguridad Invisible"
Componentes de seguridad que reducen la fricción en el usuario mediante transparencia de fondo.

- ✅ **BehavioralAuthSimulator**: Panel que comunica en segundo plano los análisis de comportamiento biométricos o estadísticos.
- ✅ **ContextualTrustBadge**: Elementos dinámicos que aparecen antes de operaciones críticas para asegurar coberturas de fraude o encriptación.

## 🚀 Onboarding Especializado
Herramientas enfocadas en procesos documentales (KYC).

- ✅ **DocScanOverlay**: Visor tipo AR para recolección de documentos y validación biométrica en la cámara sin fricciones.
- ✅ **MicroCommitmentStepper**: Onboarding progresivo donde se solicitan datos a medida que se usa la app.
- ✅ **AccessibleHighContrastMode**: Opciones de vista para dislexia, alto contraste y aumento tipográfico.

## 🎮 Gamificación y Superapp Financiera
Orientado a retención, cruce de productos (Cross-Selling), e involucramiento del usuario diario.

- ✅ **FinancialGoalTracker**: Barras de progreso con micro-animaciones (deposit confetti) para animar el ahorro del usuario.
- ✅ **GamifiedRewardTier**: Pantalla premium de lealtad, mostrando beneficios de niveles superiores (Estatus del usuario).
- ✅ **RoundUpSavingsToggle**: Interruptor ilustrado e interactivo dedicado a activar micro-ahorros semanales por redondeo.
- ✅ **HyperPersonalizedWidgetFeed**: Un inicio configurable de bloques drag-and-drop con saldo, inversiones y servicios combinados.
- ✅ **SubscriptionManager**: Listado avanzado e interactivo que identifica gastos recurrentes pre-cargados (Netflix/Spotify) permitiendo pausas con 1 botón.
- ✅ **VoiceCommandOverlay**: Overlay tipo "Te Escucho..." con un prototipo funcional de confirmación auditiva a texto en transferencias.
- ✅ **ExpenseCategorizer**: Interfaz drag & drop permitiendo clasificar transacciones sueltas en cubetas o carpetas maestras visualmente atractivas.
- ✅ **CreditScoreSimulator**: Tablero educativo interactivo de score de crédito tipo velocímetro con botones de "qué pasa si" para modelar el score bajo diferentes deudas o abonos a tiempo.

## 🌍 FX y Pagos Internacionales (Inspirado en Revolut / Wise)
Componentes para la gestión de múltiples divisas y transparencia total en los tipos de cambio en tiempo real.

- ✅ **CurrencyConverterWidget**: Calculadora dinámica con desglose híper transparente de la comisión "mid-market" (Spread) y tiempos estimados de llegada del dinero transfronterizo.
- ✅ **MultiCurrencyWallet**: Carrusel de tarjetas o listados de balance que diferencia visualmente billeteras locales de las extranjeras (Ej. Dólar vs Euro vs Libra).
- ✅ **FairUseLimitTracker**: Barras de progreso o anillos proporcionales para mostrar cuánto límite mensual gratuito le queda al usuario para retiros en ATMs del extranjero o cambios sin comisión.

## 💳 Crédito Inteligente y BNPL (Inspirado en Nubank / Apple Card)
Componentes enfocados en dar al usuario control absoluto sobre su deuda, fomentando el pago responsable y la educación crediticia.

- ✅ **CreditLimitManager**: Slider interactivo y animado que permite al usuario ajustar o reducir él mismo su límite de crédito disponible por motivos de seguridad temporal o control de gastos.
- ✅ **InstallmentSimulator (Buy Now Pay Later)**: Interfaz pre-compra que muestra de forma ultra-clara cómo se divide una transacción en meses, graficando el interés acumulado en una línea de tiempo.
- ✅ **EarlyPaymentDiscount**: Widget de "ahorro psicológico" que calcula en tiempo real cuánto dinero dejará de pagar en intereses el usuario si decide adelantar cuotas de una compra a plazos.

## 👥 Pagos Sociales y P2P (Inspirado en Venmo / CashApp)
Componentes para viabilizar el cobro y envío de dinero de forma casual, rápida y libre de fricciones.

- ✅ **InteractiveBillSplitter**: Interfaz muy visual con avatares "drag & drop" de contactos para dividir una cuenta (restaurante, viaje), con soporte para matemáticas complejas y propinas iteradas.
- ✅ **SocialPaymentFeed**: Línea de tiempo pública/privada de micropagos entre amigos, parecida a un muro de red social, con soporte nativo para notas, emojis o GIFs (removiendo el aburrimiento típico bancario).
- ✅ **PeerTagInput (Ej. $Cashtag)**: Input de búsqueda de destinatarios ultra-optimizado con autocompletado en milisegundos y un badge verde de validación confirmada de seguridad.

## 🪙 Wealth, Trading y Cripto (Inspirado en Robinhood / Coinbase)
Interfaces sofisticadas pero abstractas para la compra, venta o mantenimiento de activos retail (acciones, fondos, crypto).

- ✅ **RetailSwapInterface**: Vista simple de conversión (Token A a Token B) que "oculta" complejidades de exchange avanzados (Slippage, Spread, Gas fee) traduciéndolos a simple texto o tooltips amigables.
- ✅ **RecurringInvestConfigurator (DCA)**: Flujo de 2 pasos estilo "rule builder" para configurar ahorros automáticos y compra promediada ("Compra $50 de S&P500 cada quincena").
- ✅ **AssetAllocationChart**: Gráfico interactivo moderno y lúdico (burbujas con físicas 2D, panal de abejas, o treemap) para que el inversor novato entienda la exposición de su riesgo financiero.
