import React, { useState } from "react";
import { View, TextInput, Button, Modal, StyleSheet, TouchableOpacity, Text } from "react-native";

const GoalInput = ({ onAddGoal }) => {
  const [newGoal, setNewGoal] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false); // État pour contrôler la visibilité de la modal

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  const addGoal = () => {
    if (newGoal.trim() !== "") {
      toggleModal(); // Affiche la modal de confirmation
    }
  };

  const confirmAddGoal = () => {
    onAddGoal(newGoal);
    setNewGoal("");
    toggleModal(); // Ferme la modal après l'ajout
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ajouter un nouvel objectif"
        onChangeText={(text) => setNewGoal(text)}
        value={newGoal}
      />
      <TouchableOpacity style={styles.addButton} onPress={addGoal}>
        <Text style={styles.addButtonText}>Ajouter</Text>
      </TouchableOpacity>

      {/* Modal pour ajouter un nouvel objectif */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Êtes-vous sûr de vouloir ajouter cet objectif ?</Text>
            <View style={styles.buttonContainer}>
              <Button title="Oui" onPress={confirmAddGoal} />
              <Button title="Annuler" onPress={toggleModal} color="red" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    width: "80%",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 8,
  },
  addButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
  },
  modalText: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});

export default GoalInput;
