import { View, Text, StyleSheet, Switch } from "react-native";
import { useState } from "react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>

      <View style={styles.row}>
        <Text>Modo oscuro</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10
  }
});
