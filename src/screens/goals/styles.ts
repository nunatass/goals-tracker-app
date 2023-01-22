import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
  background: #071018;
  flex: 1;
`;

export const MainContainer = styled.View`
  padding: 24px;
  flex: 1;
`;

export const NoGoalContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
`;
