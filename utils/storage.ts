import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchContacts = async () => {
  const response = await fetch("https://randomuser.me/api/?results=10");
  const data = await response.json();
  return data.results;
};

export const markFavorite = async (contact, isFavorite) => {
  let favorites = await getFavorites();
  if (isFavorite) {
    favorites.push(contact);
  } else {
    favorites = favorites.filter((item) => item.email !== contact.email);
  }
  await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
};

export const getFavorites = async () => {
  const favorites = await AsyncStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};
