import { View, Text, StyleSheet } from "react-native";

export default function Products() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos</Text>
      <Text>No hay productos disponibles.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" }
});
