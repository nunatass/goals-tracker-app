import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigation } from "./tab.navigation";
import { useAuth } from "../hooks/useAuth";
import SignInScreen from "../screens/signin";
import AddGoalScreen from "../screens/add-goal/index";
import AddTaskScreen from "../screens/add-task";
import SelectDisciplineScreen from "../screens/SelectDiscipline/index";
const Stack = createStackNavigator();

export function Navigation() {
  const { isAuth } = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {isAuth ? (
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
        ) : (
          <>
            <Stack.Screen
              name="TabNavigation"
              component={TabNavigation}
              options={{ gestureEnabled: false }}
            />
            <Stack.Screen name="AddGoalScreen" component={AddGoalScreen} />
            <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} />
            <Stack.Screen
              name="SelectDisciplineScreen"
              component={SelectDisciplineScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
