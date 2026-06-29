import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

export default function Sincronizacion() {
  const [status, setStatus] = useState("Sincronizando...");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += 20;
      setProgress(p);

      if (p >= 100) {
        setStatus("Sincronización completa");
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sincronización del sistema</Text>
      <Text style={styles.status}>{status}</Text>

      {progress < 100 ? (
        <ActivityIndicator size="large" color="#0057ff" />
      ) : null}

      <Text style={styles.progress}>{progress}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 26, textAlign: "center", marginBottom: 20 },
  status: { textAlign: "center", marginBottom: 10 },
  progress: { textAlign: "center", marginTop: 10, fontSize: 18 }
});
