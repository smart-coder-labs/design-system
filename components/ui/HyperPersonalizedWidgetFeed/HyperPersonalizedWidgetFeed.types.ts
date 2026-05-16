interface WidgetData {
  id: string;
  title: string;
  type: 'balance' | 'crypto' | 'spending' | 'savings';
  visible: boolean;
  order: number;
}


interface HyperPersonalizedWidgetFeedProps {
  initialWidgets?: WidgetData[];
}
