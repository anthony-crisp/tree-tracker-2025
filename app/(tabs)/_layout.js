import { DripsyProvider } from 'dripsy';
import theme from '../lib/theme';
import { Slot, SplashScreen } from 'expo-router';
import { auth } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
      SplashScreen.hideAsync();
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, backgroundColor: '#0f172a', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#2d8b57', fontSize: 24 }}>Loading...</Text>
      </View>
    );
  }

  return (
    <DripsyProvider theme={theme}>
      {user ? <Slot /> : <Slot screen="auth" />}
    </DripsyProvider>
  );
}