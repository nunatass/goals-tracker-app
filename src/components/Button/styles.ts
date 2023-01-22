import styled from "styled-components/native";
import { ButtonProps } from "./index";

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  background-color: ${(props) => props.backgroundColor || "#4792FF"};
  width: 100%;
  height: 50px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  flex-direction: row;
`;
