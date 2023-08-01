import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./MainNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CommentsScreen from "./Screens/CommentsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={MainNavigation} />
        <Stack.Screen
          options={{ headerShown: true, animation: "fade_from_bottom", presentation:"modal" }}
          name="Comments"
          component={CommentsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
