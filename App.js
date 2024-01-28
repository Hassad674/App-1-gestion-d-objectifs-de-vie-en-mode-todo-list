import React, { useState } from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import GoalList from "./GoalList";
import GoalInput from "./GoalInput";

const defaultGoals = [
  "Faire les courses",
  "Aller à la salle de sport 3 fois par semaine",
  "Monter à plus de 5000m d'altitude",
  "Acheter mon premier appartement",
  "Perdre 5 kgs",
  "Gagner en productivité",
  "Apprendre un nouveau langage",
  "Faire une mission en freelance",
  "Organiser un meetup autour de la tech",
  "Faire un triathlon",
];

const App = () => {
  const [goals, setGoals] = useState(defaultGoals);

  const addGoal = (newGoal) => {
    if (newGoal.trim() !== "") {
      setGoals([...goals, newGoal]);
    }
  };

  const deleteGoal = (index) => {
    const updatedGoals = [...goals];
    updatedGoals.splice(index, 1);
    setGoals(updatedGoals);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.red}>Mes objectifs</Text>

      <GoalList goals={goals} onDeleteGoal={deleteGoal} />

      <GoalInput onAddGoal={addGoal} />

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  red: {
    color: "red",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
});

export default App;
