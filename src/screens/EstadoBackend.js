import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { api } from "../services/api";

export default function EstadoBackend() {
  const [loading, setLoading] = useState(true);
  const [estado, setEstado] = useState(null);

  useEffect(() => {
    async function checkBackend() {
      try {
        const start = Date.now();
        const res = await api("/status");
        const latency = Date.now() - start;

        setEstado({
          ok: true,
          mensaje: res?.message || "Backend operativo",
          version: res?.version || "N/A",
          latency
        });
      } catch (e) {
        setEstado({
          ok: false,
          mensaje: "Backend no responde",
          version: "N/A",
          latency: "N/A"
        });
      }

      setLoading(false);
    }

    checkBackend();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Estado del Backend</Text>
        <ActivityIndicator size="large" color="#0057ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estado del Backend</Text>

      <Text style={styles.label}>
        Estado: {estado.ok ? "Operativo" : "Caído"}
      </Text>

      <Text style={styles.label}>Mensaje: {estado.mensaje}</Text>
      <Text style={styles.label}>Versión: {estado.version}</Text>
      <Text style={styles.label}>Latencia: {estado.latency} ms</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 26, textAlign: "center", marginBottom: 20 },
  label: { fontSize: 18, marginBottom: 10 }
});
