import { DisciplineContainer } from "./styles";
import { Text } from "../../components/Text";

type DisciplineItemProps = {
  type: "Fixed" | "Accumulated" | "Randomly";
  description: string;
  value?: string;
  isSelected?: boolean;
};

export default function DisciplineItem({
  type,
  description,
  value,
  isSelected,
}: DisciplineItemProps) {
  return (
    <DisciplineContainer selected={isSelected}>
      <Text weight="600" align="center" size={16} color="white">
        {type}
      </Text>
      <Text
        weight="400"
        align="left"
        size={12}
        color="white"
        style={{
          marginTop: 8,
        }}
      >
        {description}
      </Text>
      <Text
        weight="600"
        align="right"
        size={24}
        color="white"
        style={{
          position: "absolute",
          right: 16,
          bottom: 6,
        }}
      >
        {value}
      </Text>
    </DisciplineContainer>
  );
}
