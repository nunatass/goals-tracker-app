import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";

const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
  background: #071018;
  flex: 1;
`;

export const ProfileButton = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  align-self: flex-end;
  margin: 20px;
`;

export const AddGoalButton = styled.TouchableOpacity`
  background: #4792FF;
  width: 130px
  height: 50px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  margin: 24px;
  `;

export const GoalsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-between;
  margin: 24px;
`;

type GoalProps = {
  max?: boolean;
};
export const GoalWrapper = styled.TouchableOpacity<GoalProps>`
  background: #20282d;
  width: 47%;
  margin-bottom: 24px;
  height: ${({ max }) => (max ? "210px" : "170px")};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  border-radius: 20px;
  padding: 15px;
`;
