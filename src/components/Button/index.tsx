import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Text } from "../Text";
import { ButtonContainer } from "./styles";

import { Feather } from "@expo/vector-icons";

export interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  onPress?: () => void;
  color?: string;
  backgroundColor?: string;
  icon?: any;
}

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
