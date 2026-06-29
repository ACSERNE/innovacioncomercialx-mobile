import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function RegistroCliente({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState("");

  async function handleRegister() {
    if (!email || !password || !nombre) {
      setError("Todos los campos son obligatorios");
      return;
    }

    // Cliente NO usa token
    navigation.replace("DashboardCliente");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro Cliente</Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Clave"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Crear cuenta" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 26, textAlign: "center", marginBottom: 20 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  error: {
    color: "red",
    marginBottom: 10,
    textAlign: "center"
  }
});
