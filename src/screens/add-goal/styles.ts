import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
  background: #071018;
  flex: 1;
  position: relative;
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

export const InputContainer = styled.View`
  width: 100%;
  min-height: 50px;
  background: #20282d;
  border-radius: 10px;
  padding: 0px 12px;
  margin-bottom: 48px;
  margin-top: 16px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row; ;
`;

export const Wrapper = styled.View`
  width: 100%;
  min-height: 50px;
  background: #20282d;
  border-radius: 12px;
  margin-bottom: 44px;
`;

export const FieldContainer = styled.TouchableOpacity`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 8px 12px;
`;

export const FielDescriptionContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Separator = styled.View`
  width: 85%;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  align-self: flex-end;
`;

export const DateContainer = styled.View`
  padding: 8px 8px;
  background: #cccccc70;
  border-radius: 8px;
  justify-content: center;
  align-items: flex-end;
`;

export const LabelsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;
