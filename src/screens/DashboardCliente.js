import { View, Text, StyleSheet } from "react-native";

export default function DashboardCliente() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Panel Cliente</Text>
      <Text>Bienvenido a InnovacionComercialX</Text>
      <Text>Acceso sin token</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 26, marginBottom: 20, textAlign: "center" }
});
