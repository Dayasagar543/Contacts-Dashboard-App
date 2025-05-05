import React, { useState, useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { getFavorites } from "../utils/storage";

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      const data = await getFavorites();
      setFavorites(data);
    };
    loadFavorites();
  }, []);

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.email}
      renderItem={({ item }) => (
        <Text>
          {item.name.first} {item.name.last}
        </Text>
      )}
    />
  );
};

export default FavoritesScreen;
