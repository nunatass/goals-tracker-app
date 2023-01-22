import styled from "styled-components/native";

interface TextProps {
  size?: number;
  weight?: "400" | "600" | "700";
  color?: string;
  opacity?: number;
  align?: "center" | "left" | "right";
}

export const Text = styled.Text<TextProps>`
  font-family: ${({ weight }) =>
    weight ? `Poppins-${weight}` : "Poppins-400"};
  font-size: ${({ size }) => (size ? `${size}px` : "16px")};
  color: ${({ color }) => color || "#000"};
  opacity: ${({ opacity }) => opacity || 1};
  text-align: ${({ align }) => align || "left"};
`;
