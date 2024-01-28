// GoalList.js

import React from "react";
import { FlatList } from "react-native";
import GoalItem from "./GoalItem";

const GoalList = ({ goals, onDeleteGoal }) => {
  const renderItem = ({ item, index }) => (
    <GoalItem goal={item} onDelete={() => onDeleteGoal(index)} />
  );

  return (
    <FlatList
      data={goals}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default GoalList;
