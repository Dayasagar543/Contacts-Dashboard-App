import React from "react";
import { Image, Text, View } from "react-native";

const ContactCard = ({ contact }) => (
  <View style={{width:300,height:400}}>
    <Image
      source={{ uri: contact.picture.thumbnail }}
      style={{ width: 50, height: 50 }}
    />
    <Text>
      {contact.name.first} {contact.name.last}
    </Text>
    <Text>{contact.email}</Text>
  </View>
);

export default ContactCard;
