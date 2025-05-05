import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ContactsStack from "./ContactsStack"; // Stack including ContactDetail
import StatsScreen from "../screens/StatsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Contacts" component={ContactsStack} />
      <Tab.Screen name="Stats" component={StatsScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
};

export default MainTabs;
