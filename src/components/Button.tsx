import React from "react";
import styled from "styled-components/native";
import { Text } from "./Text";
import { TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  onPress: () => void;
  color?: string;
  backgroundColor?: string;
  icon?: any;
}

const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  background-color: ${(props) => props.backgroundColor || "#4792FF"};
  width: 100%;
  height: 50px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  flex-direction: row;
`;

export default function Button({
  title,
  onPress,
  color,
  backgroundColor,
  icon,
  ...props
}: ButtonProps) {
  return (
    <ButtonContainer {...props} onPress={onPress}>
      <Text color={color || "white"} weight="600">
        {title}
      </Text>
      {icon && <Feather name={icon} size={24} color="white" />}
    </ButtonContainer>
  );
}
