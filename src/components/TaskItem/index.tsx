import React from "react";
import { Container } from "./styles";
import { Text } from "../Text";
import { Feather } from "@expo/vector-icons";

type TaskItemProps = {
  title: string;
};

export default function TaskItem({ title }: TaskItemProps) {
  return (
    <Container>
      <Text color="white">{title}</Text>
      <Feather name="edit-3" size={24} color="#9CA3AD" />
    </Container>
  );
}
