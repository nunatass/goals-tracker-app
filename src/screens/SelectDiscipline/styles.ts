import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
  background: #071018;
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  margin-top: 20px;
  width: 100%;
`;

export const BackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  padding: 8px;
`;

export const MainContainer = styled.View`
  flex: 1;
  padding: 24px;
  position: relative;
`;

export const DisciplineContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;
