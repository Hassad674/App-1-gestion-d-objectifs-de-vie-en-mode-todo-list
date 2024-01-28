import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal, Button } from "react-native";

const GoalItem = ({ goal, onDelete }) => {
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  const handleDelete = () => {
    setIsConfirmVisible(true);
  };

  const handleConfirmDelete = () => {
    setIsConfirmVisible(false);
    onDelete();
  };

  const handleCancelDelete = () => {
    setIsConfirmVisible(false);
  };

  return (
    <View style={styles.listItemContainer}>
      <Text style={styles.listItem}>{goal}</Text>
      <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>

      {/* Modal de confirmation */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isConfirmVisible}
        onRequestClose={handleCancelDelete}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Êtes-vous sûr de vouloir supprimer cet objectif ?</Text>
            <View style={styles.buttonContainer}>
              <Button title="Oui" onPress={handleConfirmDelete} />
              <Button title="Non" onPress={handleCancelDelete} color="red" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  listItem: {
    fontSize: 18,
  },
  deleteButton: {
    backgroundColor: "red",
    borderRadius: 5,
    padding: 5,
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
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

export default GoalItem;
