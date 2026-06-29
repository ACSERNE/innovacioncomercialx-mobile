import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Login({ navigation }) {
  const [telefono, setTelefono] = useState("");

  function enviarCodigo() {
    if (!telefono) return;
    navigation.navigate("CodigoVerificacion", { telefono });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresar</Text>

      <TextInput
        style={styles.input}
        placeholder="Número de teléfono"
        keyboardType="phone-pad"
        value={telefono}
        onChangeText={setTelefono}
      />

      <Button title="Enviar código" onPress={enviarCodigo} />

      <View style={{ marginTop: 20 }}>
        <Button
          title="Crear cuenta"
          onPress={() => navigation.navigate("Registro")}
        />
      </View>
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
  }
});
