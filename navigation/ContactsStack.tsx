import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactsListScreen from "../screens/ContactsListScreen";
import ContactDetailScreen from "../screens/ContactDetailScreen";

const Stack = createNativeStackNavigator();

const ContactsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ContactsList"
        component={ContactsListScreen}
        options={{ title: "Contacts" }}
      />
      <Stack.Screen
        name="ContactDetail"
        component={ContactDetailScreen}
        options={{ title: "Contact Detail" }}
      />
    </Stack.Navigator>
  );
};

export default ContactsStack;
