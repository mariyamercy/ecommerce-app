import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import QRScanner from "./screens/QRScanner";
import ARViewer from "./screens/ARViewer";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="QRScanner" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="QRScanner" component={QRScanner} />
        <Stack.Screen name="ARViewer" component={ARViewer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
