import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.TouchableOpacity`
  width: 100%;
  min-height: 80px;
  padding: 16px;
  border-radius: 12px;
  background: #20282d;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 16px;
`;

export const GoalItemIconContainer = styled(LinearGradient)`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;

export const GoalPropertiesContainer = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const LabelsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;
