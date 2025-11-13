import { View, Text, Pressable, TextInput } from 'react-native';
import { useState } from 'react';
import { signInAnonymously, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: '#0f172a', justifyContent: 'center', padding: 24 }}>
      <Text style={{ fontSize: 48, fontWeight: '800', color: '#2d8b57', textAlign: 'center', marginBottom: 40 }}>
        TreeTracker
      </Text>

      <Pressable onPress={() => signInAnonymously(auth)}>
        <View style={{ backgroundColor: '#2d8b57', padding: 16, borderRadius: 16, marginBottom: 20 }}>
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600' }}>
            Continue as Guest
          </Text>
        </View>
      </Pressable>

      <Text style={{ color: '#94a3b8', textAlign: 'center', marginBottom: 20 }}>or</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ backgroundColor: '#1e293b', color: '#f1f5f9', padding: 16, borderRadius: 12, marginBottom: 12 }}
        placeholderTextColor="#64748b"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ backgroundColor: '#1e293b', color: '#f1f5f9', padding: 16, borderRadius: 12, marginBottom: 20 }}
        placeholderTextColor="#64748b"
      />

      <Pressable onPress={() => signInWithEmailAndPassword(auth, email, password)}>
        <View style={{ backgroundColor: '#4ade80', padding: 16, borderRadius: 16 }}>
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600' }}>
            Sign In
          </Text>
        </View>
      </Pressable>
    </View>
  );
}