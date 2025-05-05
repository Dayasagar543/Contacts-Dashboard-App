import AsyncStorage from "@react-native-async-storage/async-storage";

export const getStats = async () => {
  const data = await AsyncStorage.getItem("timestamps");
  return data ? JSON.parse(data) : [];
};

export const trackTimestamp = async () => {
  const timestamp = new Date().getHours();
  const stats = await getStats();
  stats[timestamp] = (stats[timestamp] || 0) + 1;
  await AsyncStorage.setItem("timestamps", JSON.stringify(stats));
};
