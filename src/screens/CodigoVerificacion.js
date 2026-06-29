import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { verificarCodigo } from "../services/auth";

export default function CodigoVerificacion({ route, navigation }) {
  const { contacto } = route.params;
  const [codigo, setCodigo] = useState("");
  const [error, setError] = useState("");

  async function verificar() {
    if (!codigo) return;

    const res = await verificarCodigo(contacto, codigo);

    if (res?.ok) {
      navigation.replace("Dashboard");
    } else {
      setError(res?.message || "Código incorrecto");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Código de verificación</Text>
      <Text style={styles.subtitle}>Enviado a: {contacto}</Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Código"
        keyboardType="number-pad"
        value={codigo}
        onChangeText={setCodigo}
      />

      <Button title="Verificar" onPress={verificar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 26, textAlign: "center", marginBottom: 10 },
  subtitle: { textAlign: "center", marginBottom: 20 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  error: { color: "red", textAlign: "center", marginBottom: 10 }
});
