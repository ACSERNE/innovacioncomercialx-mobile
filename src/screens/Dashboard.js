import { View, Text, StyleSheet } from "react-native";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cockpit InnovacionComercialX</Text>

      <Text>Estado del sistema: OK</Text>
      <Text>Backend conectado</Text>
      <Text>Última sincronización: ahora</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 26, marginBottom: 20, textAlign: "center" }
});
