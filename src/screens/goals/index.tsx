import { Container, MainContainer, NoGoalContainer } from "./styles";
import { Text } from "../../components/Text";
import { Image, ScrollView } from "react-native";
import { useState } from "react";
import GoalItem from "../../components/GoalItem";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function GoalsTab() {
  const [goals, setGoals] = useState<GoalItemProps[]>([
    {
      title: "Be a developer",
      labels: [{ title: "coding", color: "#FD5B71" }],
      emoji: "🖥️",
    },
    {
      title: "Be in good shape",
      labels: [
        { title: "workout", color: "#FFA656" },
        { title: "personal", color: "#BDBDBD" },
      ],
      emoji: "🏋️‍♂️",
    },
    {
      title: "Get 8 hour sleep per night",
      labels: [{ title: "personal", color: "#BDBDBD" }],
      emoji: "🛌",
    },

    {
      title: "Read a book",
      labels: [
        { title: "reding", color: "#07E092" },
        { title: "personal", color: "#BDBDBD" },
      ],
      emoji: "📚",
    },
  ]);
  const { navigate } = useNavigation();

  function handleAdd() {
    navigate("AddGoalScreen" as never);
  }

  function handleClickGoalItem(goalIndex: number) {
    navigate(
      "AddGoalScreen" as never,
      {
        goal: goals[goalIndex],
      } as never
    );
  }

  return (
    <Container>
      <Text weight="600" color="white" size={24} align="center">
        Goals
      </Text>
      <MainContainer>
        {goals.length > 0 ? (
          <ScrollView>
            {goals.map((goal, index) => (
              <GoalItem
                key={goal.title}
                {...goal}
                onPress={() => {
                  handleClickGoalItem(index);
                }}
              />
            ))}
          </ScrollView>
        ) : (
          <NoGoalContainer>
            <Image
              source={require("../../../assets/images/men-arrow.png")}
              style={{
                width: 200,
                height: 200,
                alignSelf: "center",
                marginBottom: 24,
              }}
            />
            <Text weight="600" color="white" size={16} align="center">
              Add your fist goal
            </Text>
            <Text
              weight="400"
              color="white"
              size={16}
              align="center"
              style={{ marginTop: 10 }}
            >
              Define goals for your self, breaking into daily task ta helps your
              to archive what you want
            </Text>
          </NoGoalContainer>
        )}
        <Button
          icon="plus"
          onPress={handleAdd}
          style={{
            position: "absolute",
            bottom: 24,
            right: 24,
            width: 60,
            height: 60,
            borderRadius: 30,
          }}
        />
      </MainContainer>
    </Container>
  );
}
