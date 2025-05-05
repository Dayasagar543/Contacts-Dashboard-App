import React, { useEffect, useState } from "react";
import { View, Dimensions } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import { getStats } from "../utils/timestampTracker";

const StatsScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadStats = async () => {
      const rawStats = await getStats();
      const formatted = Object.entries(rawStats).map(([hour, count]) => ({
        hour: `${hour}h`,
        count,
      }));
      setData(formatted);
    };
    loadStats();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <VictoryChart
        width={Dimensions.get("window").width - 20}
        theme={VictoryTheme.material}
      >
        <VictoryBar data={data} x="hour" y="count" />
      </VictoryChart>
    </View>
  );
};

export default StatsScreen;
