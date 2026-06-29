import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { enviarCodigo } from "../services/auth";

export default function EnviarCodigo({ navigation }) {
  const [contacto, setContacto] = useState("");
  const [mensaje, setMensaje] = useState("");

  async function enviar() {
    if (!contacto) return;

    const res = await enviarCodigo(contacto);
    setMensaje(res?.message || "Código enviado");

    navigation.navigate("CodigoVerificacion", { contacto });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Validación segura</Text>

      <TextInput
        style={styles.input}
        placeholder="Teléfono o correo"
        value={contacto}
        onChangeText={setContacto}
        autoCapitalize="none"
      />

      <Button title="Enviar código" onPress={enviar} />

      {mensaje ? <Text style={styles.info}>{mensaje}</Text> : null}
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
  info: { textAlign: "center", marginTop: 10 }
});
