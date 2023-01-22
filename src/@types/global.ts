export {};

declare global {
  interface Label {
    color: string;
    title: string;
  }

  interface GoalItemProps {
    title: string;
    labels?: Label[];
    emoji?: string;
    onPress?: () => void;
  }
}
