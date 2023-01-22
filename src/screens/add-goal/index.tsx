import { useNavigation } from "@react-navigation/native";
import ArrowBackIcon from "../../components/icons/arrow-back-icon";
import { Text } from "../../components/Text";
import {
  BackButton,
  Container,
  DateContainer,
  FielDescriptionContainer,
  FieldContainer,
  Header,
  InputContainer,
  LabelsContainer,
  MainContainer,
  Separator,
  Wrapper,
} from "./styles";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView } from "react-native";
import AddLabelModal from "../../components/AddLabelModal/index";
import TaskItem from "../../components/TaskItem";
import Button from "../../components/Button";
import Label from "../../components/Label";
import DatePickerModal from "../../components/DatePickerModal/index";
import Input from "../../components/Input";

export default function AddGoalScreen({ route }: any) {
  const { goBack, navigate } = useNavigation();
  const [selectedDate, setSelectedDate] = useState("");
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isAddLabelModalVisible, setIsAddLabelModalVisible] = useState(false);
  const [labels, setLabels] = useState<Label[]>([]);

  function handleDatePicker() {
    setIsDatePickerVisible((prev) => {
      return !prev;
    });
  }

  function handleAddTask() {
    navigate("AddTaskScreen" as never);
  }
  return (
    <Container>
      <ScrollView>
        <Header>
          <BackButton onPress={goBack}>
            <ArrowBackIcon />
          </BackButton>
          <Text weight="600" align="left" size={24} color="white">
            {"Add goal"}
          </Text>
        </Header>
        <MainContainer>
          <InputContainer>
            <Input
              placeholder="Goal title"
              placeholderTextColor="#9CA3AD"
              defaultValue={""}
            />
          </InputContainer>
          <Wrapper>
            <FieldContainer onPress={handleDatePicker}>
              <FielDescriptionContainer>
                <Feather name="clock" size={24} color="#4792FF" />
                <Text color="white" weight="400" style={{ marginLeft: 10 }}>
                  dateline
                </Text>
              </FielDescriptionContainer>
              <DateContainer>
                <Text color="white" weight={selectedDate ? "600" : "400"}>
                  {selectedDate || "set date"}
                </Text>
              </DateContainer>
            </FieldContainer>
            <Separator />
            <FieldContainer
              onPress={() => {
                setIsAddLabelModalVisible(true);
              }}
            >
              <FielDescriptionContainer
                style={{ width: "100%", marginBottom: 24 }}
              >
                <Feather name="plus" size={24} color="#4792FF" />
                <Text color="white" weight="400" style={{ marginLeft: 10 }}>
                  add label
                </Text>
              </FielDescriptionContainer>
              <LabelsContainer>
                {labels.map(({ title, color }) => {
                  return <Label key={title} color={color} title={title} />;
                })}
              </LabelsContainer>
            </FieldContainer>
          </Wrapper>

          <Wrapper>
            <FieldContainer
              onPress={handleDatePicker}
              style={{
                marginTop: 4,
              }}
            >
              <FielDescriptionContainer>
                <Feather name="activity" size={24} color="#4792FF" />
                <Text color="white" weight="400" style={{ marginLeft: 10 }}>
                  select progress viewer
                </Text>
              </FielDescriptionContainer>
              <Feather name="chevron-right" size={24} color="#9CA3AD" />
            </FieldContainer>
          </Wrapper>

          <Text weight="600" align="left" size={16} color="white">
            Tasks
          </Text>
          <TaskItem title="100x sit-Up" />
          <TaskItem title="100x sit-Up" />
          <DatePickerModal
            isVisible={isDatePickerVisible}
            onClose={() => setIsDatePickerVisible(false)}
            onSelectedChange={(date) => {
              setSelectedDate(date);
            }}
          />

          <AddLabelModal
            isVisible={isAddLabelModalVisible}
            onClose={() => setIsAddLabelModalVisible(false)}
            onAddLabel={(label) => {
              setLabels((prev) => {
                return [...prev, label];
              });
            }}
          />
          <Button
            title="Add task"
            icon="plus"
            onPress={handleAddTask}
            style={{ marginTop: 20 }}
          />
        </MainContainer>
      </ScrollView>
    </Container>
  );
}
