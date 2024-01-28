import React, { useState } from "react";
import { View, Text, TextInput, Button, Modal, StyleSheet } from "react-native";

const GoalModal = ({ visible, onClose, onConfirm }) => {
  const [inputValue, setInputValue] = useState("");

  const handleConfirm = () => {
    if (inputValue.trim() !== "") {
      onConfirm(inputValue);
      setInputValue("");
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ajouter un nouvel objectif"
          onChangeText={(text) => setInputValue(text)}
          value={inputValue}
        />
        <View style={styles.buttonContainer}>
          <Button title="Confirmer" onPress={handleConfirm} />
          <Button title="Annuler" onPress={onClose} color="red" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
});

export default GoalModal;
