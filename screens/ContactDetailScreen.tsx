import React, { useState, useEffect } from "react";
import { Button, Image, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { markFavorite } from "../utils/storage";

const ContactDetailScreen = () => {
  const { params } = useRoute();
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    markFavorite(params.contact, !isFavorite);
    setIsFavorite(!isFavorite);
  };

  return (
    <View>
      <Image
        source={{ uri: params.contact.picture.large }}
        style={{ width: 100, height: 100 }}
      />
      <Text>
        {params.contact.name.first} {params.contact.name.last}
      </Text>
      <Text>{params.contact.email}</Text>
      <Text>{params.contact.phone}</Text>
      <Button
        title={isFavorite ? "Unmark as Favorite" : "Mark as Favorite"}
        onPress={toggleFavorite}
      />
    </View>
  );
};

export default ContactDetailScreen;
