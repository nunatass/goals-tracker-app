import styled from "styled-components/native";
type ColorProps = {
  color: string;
  selected?: boolean;
};
export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: center;
  padding: 16px 32px;
  flex-direction: row;
  flex-wrap: no-wrap;
  align-content: center;
  justify-content: center;
`;

export const Color = styled.TouchableOpacity<ColorProps>`
  background: ${(props) => props.color};
  width: 24px;
  height: 24px;
  border-radius: 8px;
  margin: 0 8px;
  border: ${(props) => (props.selected ? "2px solid #fff" : "none")};
`;
