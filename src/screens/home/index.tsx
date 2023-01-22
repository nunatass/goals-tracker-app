import {
  AddGoalButton,
  Container,
  GoalWrapper,
  GoalsContainer,
  ProfileButton,
} from "./styles";
import { Text } from "../../components/Text";
import { Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeTab() {
  const { navigate } = useNavigation();

  function handleAddGoal() {
    navigate("AddGoalScreen" as never);
  }

  return (
    <Container>
      <ScrollView>
        <ProfileButton>
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/25155064?v=4",
            }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 100,
            }}
          />
        </ProfileButton>
        <Text
          size={24}
          weight="600"
          color="white"
          style={{
            marginLeft: 20,
          }}
        >
          Achieve your life goals by consistent habits
        </Text>
        <AddGoalButton onPress={handleAddGoal}>
          <Text size={16} weight="600" color="white" align="center">
            Add Goal
          </Text>
        </AddGoalButton>
        <GoalsContainer>
          <GoalWrapper>
            <Text size={16} weight="600" color="white">
              Read a book
            </Text>
          </GoalWrapper>
          <GoalWrapper max>
            <Text size={16} weight="600" color="white">
              Have a good shape
            </Text>
          </GoalWrapper>
          <GoalWrapper
            style={{
              transform: [{ translateY: -40 }],
            }}
          >
            <Text size={16} weight="600" color="white">
              Meditation every morning
            </Text>
          </GoalWrapper>
          <GoalWrapper>
            <Text size={16} weight="600" color="white">
              Get 8 hours sleep
            </Text>
          </GoalWrapper>
        </GoalsContainer>
      </ScrollView>
    </Container>
  );
}
