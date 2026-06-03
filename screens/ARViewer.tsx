import React from 'react';
import { View, Text } from 'react-native';

type Blueprint = {
  name: string;
  dimensions: { width: number; height: number };
};

export default function ARViewer({ route }: { route: { params: { blueprint: Blueprint } } }) {
  const { blueprint } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
      <Text style={{ color: '#fff', fontSize: 22 }}>🧭 AR Viewer</Text>
      <Text style={{ color: '#fff' }}>Blueprint: {blueprint.name}</Text>
      <Text style={{ color: '#fff' }}>
        Dimensions: {blueprint.dimensions.width} x {blueprint.dimensions.height}
      </Text>
    </View>
  );
}
