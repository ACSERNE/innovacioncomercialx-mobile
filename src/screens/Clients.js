import { View, Text, StyleSheet } from "react-native";

export default function Clients() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clientes</Text>
      <Text>No hay clientes registrados.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" }
});
