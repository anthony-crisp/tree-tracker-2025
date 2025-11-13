import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';

export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: '#0f172a', paddingTop: 60, paddingHorizontal: 24 }}>
      <Text style={{ fontSize: 36, fontWeight: '800', color: '#2d8b57' }}>
        My Oaks
      </Text>
      <Text style={{ color: '#94a3b8', fontSize: 16, marginTop: 8 }}>
        Welcome, dendrologist
      </Text>

      <Link href="/tree/new" push>
        <View style={{
          position: 'absolute',
          bottom: 90,
          right: 24,
          backgroundColor: '#2d8b57',
          width: 64,
          height: 64,
          borderRadius: 32,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{ color: 'white', fontSize: 32 }}>+</Text>
        </View>
      </Link>

      <Pressable onPress={() => signOut(auth)} style={{ marginTop: 80 }}>
        <Text style={{ color: '#ef4444', textAlign: 'center' }}>Sign Out</Text>
      </Pressable>
    </View>
  );
}