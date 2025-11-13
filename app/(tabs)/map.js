import { View, Text } from 'react-native';

export default function Map() {
  return (
    <View style={{ flex: 1, backgroundColor: '#0f172a', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#2d8b57', fontSize: 24 }}>Map View Coming Soon</Text>
      <Text style={{ color: '#94a3b8', marginTop: 8 }}>Mapbox clustering + GPS at tree base</Text>
    </View>
  );
}