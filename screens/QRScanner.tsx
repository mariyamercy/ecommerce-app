import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function QRScanner({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    try {
      const blueprint = JSON.parse(data); // QR contains blueprint JSON
      navigation.navigate("ARViewer", { blueprint });
    } catch (err) {
      console.error("Invalid QR data ❌", err);
    }
  };

  if (hasPermission === null) return <Text>Requesting camera permission...</Text>;
  if (hasPermission === false) return <Text>No access to camera</Text>;

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <Text style={styles.overlayText}>📷 Scan Blueprint QR</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  overlayText: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    color: "#fff",
    fontSize: 18,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    borderRadius: 8
  }
});
