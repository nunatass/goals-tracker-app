import React from "react";
import {
  Container,
  GoalItemIconContainer,
  GoalPropertiesContainer,
  LabelsContainer,
} from "./styles";
import { Text } from "../Text";
import { Feather } from "@expo/vector-icons";
import Label from "../Label";

export default function GoalItem({
  title,
  labels,
  emoji,
  onPress,
}: GoalItemProps) {
  const firstColor = (labels && labels[0].color) || "white";
  const secondColor = (labels && labels[1] && labels[1].color) || firstColor;

  return (
    <Container onPress={onPress}>
      <GoalItemIconContainer colors={[firstColor, secondColor]}>
        <Text color="white" weight="600" size={24}>
          {emoji}
        </Text>
      </GoalItemIconContainer>
      <GoalPropertiesContainer>
        <Text color="white" weight="600">
          {title}
        </Text>
        {labels ? (
          <LabelsContainer>
            {labels.map((label) => {
              return (
                <Label
                  color={label.color}
                  title={label.title}
                  key={label.title}
                />
              );
            })}
          </LabelsContainer>
        ) : (
          <Text weight="400" align="left" size={12} color="#9CA3AD">
            add a label
          </Text>
        )}
      </GoalPropertiesContainer>
      <Feather name="edit-3" size={24} color="#9CA3AD" />
    </Container>
  );
}
