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

export const FieldContainer = styled.View`
  width: 47%;
`;

export const InputContainer = styled.View`
  min-height: 50px;
  background: #20282d;
  border-radius: 10px;
  padding: 0px 16px;
  margin-bottom: 24px;
  margin-top: 16px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row; ;
`;

export const Input = styled.TextInput`
  width: 100%;
  color: #fff;
  font-size: 18px;
  font-family: "Poppins-400";
  font-weight: 400;
`;

export const FrequencyAndTimeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
