import { useState } from "react";
import { Color, Container } from "./styles";

type ColorPickerProps = {
  colors: string[];
  onSelectColor: (color: string) => void;
};

export default function ColorPicker({
  colors,
  onSelectColor,
}: ColorPickerProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return (
    <Container>
      {colors.map((color, index) => {
        return (
          <Color
            color={color}
            key={color}
            selected={index === selectedIndex}
            onPress={() => {
              setSelectedIndex(index);
              onSelectColor(color);
            }}
          />
        );
      })}
    </Container>
  );
}
