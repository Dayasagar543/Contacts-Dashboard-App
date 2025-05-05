import React, { useState, useEffect } from "react";
import {
  FlatList,
  SectionList,Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { fetchContacts } from "../utils/storage";
import ContactCard from "../components/ContactCard";


const ContactsListScreen = () => {
  const [contacts, setContacts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const getContacts = async () => {
      const data = await fetchContacts();
      // console.log(data);
      setContacts(data);
    };
    getContacts();
  }, []);

  return (
    <FlatList
      data={contacts}
      // keyExtractor={(item) => item.email}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ContactDetail", { contact: item })
          }
        >
          <ContactCard contact={item} />
        </TouchableOpacity>
      )}
    />
  );
};

export default ContactsListScreen;
