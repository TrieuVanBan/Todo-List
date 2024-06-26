import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from "react-redux";
import TodoScreen from '../screens/Todo';
import ProfileScreen from '../screens/Profile';
import LoginScreen from '../screens/Login';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Router() {
  const user = useSelector((state) => state.auth.user);
  const TabHome = () => {
    return (
      <Tab.Navigator
        initialRouteName='Todo'
        // https://reactnavigation.org/docs/tab-based-navigation/
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Todo') {
              iconName = focused
                ? 'list'
                : 'list-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      // tabBar={props => <CustomTabBar {...props} />}
      >
        <Tab.Screen name="Todo" component={TodoScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {!user ?
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          : <Stack.Screen name="Home" options={{ headerShown: false }} component={TabHome} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}