import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useUnleashEnabled } from "./react-unleash";

const feature_key = "demoApp.step1";
export function AppFeatures() {
  const enabled = useUnleashEnabled(feature_key);

  useEffect(() => {
    console.log(feature_key, enabled);
  }, [enabled]);

  return (
    <View style={styles.container}>
      <Text>Proxy Feature ({feature_key}):</Text>
      {enabled ? <Text>Feature on</Text> : <Text>Feature off</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
