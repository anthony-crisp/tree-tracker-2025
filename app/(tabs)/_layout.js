import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2d8b57',
        tabBarInactiveTintColor: '#94a3b8',
        tabBarStyle: { backgroundColor: '#1e293b' },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'My Oaks',
          tabBarIcon: () => <Text style={{ color: '#2d8b57' }}>Home</Text>,
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: 'Map',
          tabBarIcon: () => <Text style={{ color: '#2d8b57' }}>Map</Text>,
        }}
      />
    </Tabs>
  );
}