import styled from "styled-components/native";

type DisciplineProps = {
  selected?: boolean;
};

export const DisciplineContainer = styled.TouchableOpacity<DisciplineProps>`
  width: 47%;
  height: 170px;
  background: ${(props) => (props.selected ? "#4792FF" : "#20282d")};
  border-radius: 24px;
  margin-top: 16px;
  padding: 12px;
`;
