import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { ScreenProps } from '../types/navigation';
import CustomButton from '../components/Buttons/Button';

const RoleSelection: React.FC<ScreenProps<'RoleSelection'>> = ({ navigation }) => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  // Function to handle navigation based on role selection
  const handleContinue = () => {
    if (selectedRole === 'owner') {
      navigation.navigate('VehicleOwnerSignUp'); // 🚗 Navigate to Vehicle Owner Page
    } else if (selectedRole === 'provider') {
      navigation.navigate('ServiceProviderSignUpStep1'); // 🛠 Navigate to Service Provider Page
    }
  };

  return (
    <ImageBackground
      source={require('../assets/audiR8.jpeg')}
      style={styles.background}
    >
      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text style={styles.title}>Choose your Role</Text>

        {/* Vehicle Owner Option */}
        <TouchableOpacity
          style={[styles.option, selectedRole === 'owner' && styles.selectedOption]}
          onPress={() => setSelectedRole('owner')}
        >
          <Image source={require('../assets/owner_icon.png')} style={styles.icon} />
          <Text style={styles.optionText}>Vehicle Owner</Text>
        </TouchableOpacity>

        {/* Service Provider Option */}
        <TouchableOpacity
          style={[styles.option, selectedRole === 'provider' && styles.selectedOption]}
          onPress={() => setSelectedRole('provider')}
        >
          <Image source={require('../assets/provider_icon.png')} style={styles.icon} />
          <Text style={styles.optionText}>Service Provider</Text>
        </TouchableOpacity>

        {/* Continue Button */}
        <CustomButton
          title="Continue"
          onPress={handleContinue} // ✅ Call handleContinue function
          disabled={!selectedRole} // Disable button if no role is selected
        />
      </View>
    </ImageBackground>
  );
};

export default RoleSelection;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    width: '80%',
    justifyContent: 'center',
  },
  selectedOption: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  optionText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
