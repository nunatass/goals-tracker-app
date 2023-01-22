import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeIcon } from "../components/icons/homeIcon";
import { GoalsIcon } from "../components/icons/goalsIcon";
import { ProgressIcon } from "../components/icons/progressIcon";
import HomeTab from "../screens/home/index";
import GoalsTab from "../screens/goals";
import ProgressTab from "../screens/progress/index";

const { Screen, Navigator } = createBottomTabNavigator();

const homeTabOptions = {
  tabBarIcon: ({ size, color }: any) => <HomeIcon size={size} color={color} />,
};

const goalsTabOptions = {
  tabBarIcon: ({ size, color }: any) => <GoalsIcon size={size} color={color} />,
};

const progressTabOptions = {
  tabBarIcon: ({ size, color }: any) => (
    <ProgressIcon size={size} color={color} />
  ),
};

const tabBarOptions = {
  headerShown: false,
  tabBarStyle: {
    backgroundColor: "#20282D",
    borderTopWidth: 0,
  },
};

export function TabNavigation() {
  return (
    <Navigator screenOptions={tabBarOptions}>
      <Screen name="HomeTab" component={HomeTab} options={homeTabOptions} />
      <Screen name="GoalsTab" component={GoalsTab} options={goalsTabOptions} />
      <Screen
        name="ProgressTab"
        component={ProgressTab}
        options={progressTabOptions}
      />
    </Navigator>
  );
}
