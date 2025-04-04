import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { ScreenProps } from '../types/navigation';
import CustomButton from '../components/Buttons/Button';

const GetStarted: React.FC<ScreenProps<'GetStarted'>> = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/audiR8.jpeg')} // Ensure you have this image in assets
      style={styles.background}
    >
      <View style={styles.overlay} />
      
      <View style={styles.content}>
        <Text style={styles.title}>Experience the Exceptional Service.</Text>
        <Text style={styles.subtitle}>
          Driving a fresh perception of auto care by setting the bar high for all automotive brands in Sri Lanka.
        </Text>

        <CustomButton title="Get Started" onPress={() => navigation.navigate('RoleSelection')} />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#ddd',
    fontSize: 14,
    marginBottom: 20,
  },
});
