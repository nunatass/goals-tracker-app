import ArrowBackIcon from "../../components/icons/arrow-back-icon";
import {
  BackButton,
  Container,
  DisciplineContainer,
  Header,
  MainContainer,
} from "./styles";
import { Text } from "../../components/Text";
import { useNavigation } from "@react-navigation/native";
import DisciplineItem from "../../components/DisciplineItem";

export default function SelectDisciplineScreen() {
  const { goBack } = useNavigation();

  return (
    <Container>
      <Header>
        <BackButton onPress={goBack}>
          <ArrowBackIcon />
        </BackButton>
        <Text weight="600" align="left" size={24} color="white">
          Discipline type
        </Text>
      </Header>
      <MainContainer>
        <Text weight="400" align="left" size={16} color="white">
          Select the type of the discipline you want in case you dont do the
          task, in time you are suppose to do!
        </Text>
        <DisciplineContainer>
          <DisciplineItem
            type="Fixed"
            description="Each time you don't do your task you lose a fixed amount stipulated by you."
            value="10$"
            isSelected
          />

          <DisciplineItem
            type="Accumulated"
            description="each time you don't do your task you lose the amount stipulated plus the amount of the last time"
            value="1,2,3$"
          />

          <DisciplineItem
            type="Randomly"
            description="each time you don't do your task you lose a random value between tow value by your choice."
            value="5€ -30€ "
          />
        </DisciplineContainer>
      </MainContainer>
    </Container>
  );
}
