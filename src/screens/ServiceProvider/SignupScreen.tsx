import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import InputField from '../../components/Input/Inputfield';
import CustomButton from '../../components/Buttons/Button';
import { useNavigation } from '@react-navigation/native';

const ServiceProviderSignUpStep1: React.FC = () => {
  const navigation = useNavigation<any>();

  const [form, setForm] = useState({
    businessName: '',
    email: '',
    mobile: '',
    address: '',
    registrationNo: '',
    experienceYears: '',
    serviceArea: '',
    password: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (value.trim()) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const digitRegex = /^\d+$/;

    const requiredFields = [
      'businessName',
      'email',
      'mobile',
      'address',
      'registrationNo',
      'experienceYears',
      'serviceArea',
      'password',
    ];

    requiredFields.forEach((key) => {
      const value = form[key as keyof typeof form];
      if (!value.trim()) {
        newErrors[key] = 'This field is required';
      } else {
        if (key === 'email' && !emailRegex.test(value)) {
          newErrors[key] = 'Enter a valid email';
        }
        if (key === 'mobile' && (!digitRegex.test(value) || value.length !== 10)) {
          newErrors[key] = 'Enter a valid 10-digit mobile number';
        }
        if (key === 'experienceYears' && !digitRegex.test(value)) {
          newErrors[key] = 'Enter a valid number';
        }
        if (key === 'password' && value.length < 6) {
          newErrors[key] = 'Minimum 6 characters required';
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      navigation.navigate('ServiceProviderStep2', { form });
    }
  };

  const handleUseLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        
        const locationText = `Lat: ${latitude.toFixed(4)}, Lng: ${longitude.toFixed(4)}`;
        handleChange('serviceArea', locationText);
        Alert.alert('Location Set', locationText);
      },
      (error) => {
        Alert.alert('Location Error', error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      }
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sign Up as Service Provider</Text>

      <View style={styles.progressBar}>
        <View style={styles.activeStep} />
        <View style={styles.inactiveStep} />
        <View style={styles.inactiveStep} />
        <View style={styles.inactiveStep} />
      </View>
      <Text style={styles.progressText}>(1/4)</Text>

      <Text style={styles.sectionTitle}>Business Details</Text>

      <InputField placeholder="Business Name" value={form.businessName} onChangeText={(text) => handleChange('businessName', text)} />
      {errors.businessName && <Text style={styles.error}>{errors.businessName}</Text>}

      <InputField placeholder="Your Email Address" value={form.email} onChangeText={(text) => handleChange('email', text)} />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      <InputField placeholder="Mobile" value={form.mobile} onChangeText={(text) => handleChange('mobile', text)} keyboardType="numeric" />
      {errors.mobile && <Text style={styles.error}>{errors.mobile}</Text>}

      <InputField placeholder="Address" value={form.address} onChangeText={(text) => handleChange('address', text)} />
      {errors.address && <Text style={styles.error}>{errors.address}</Text>}

      <InputField placeholder="Business Registration No" value={form.registrationNo} onChangeText={(text) => handleChange('registrationNo', text)} />
      {errors.registrationNo && <Text style={styles.error}>{errors.registrationNo}</Text>}

      <InputField placeholder="Experience Years" value={form.experienceYears} onChangeText={(text) => handleChange('experienceYears', text)} keyboardType="numeric" />
      {errors.experienceYears && <Text style={styles.error}>{errors.experienceYears}</Text>}

      <InputField placeholder="Service Area" value={form.serviceArea} onChangeText={(text) => handleChange('serviceArea', text)} />
      {errors.serviceArea && <Text style={styles.error}>{errors.serviceArea}</Text>}

      <TouchableOpacity onPress={handleUseLocation}>
        <Text style={styles.locationButton}>📍 Use Current Location</Text>
      </TouchableOpacity>

      <InputField placeholder="Password" secureTextEntry value={form.password} onChangeText={(text) => handleChange('password', text)} />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}

      <CustomButton title="Next" onPress={handleNext} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 24,
    backgroundColor: '#000',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
    marginTop: 8,
  },
  activeStep: {
    flex: 1,
    height: 5,
    backgroundColor: '#fff',
    marginRight: 4,
    borderRadius: 5,
  },
  inactiveStep: {
    flex: 1,
    height: 5,
    backgroundColor: '#444',
    marginRight: 4,
    borderRadius: 5,
  },
  progressText: {
    color: '#888',
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 16,
  },
  error: {
    color: 'red',
    fontSize: 13,
    marginTop: -10,
    marginBottom: 10,
  },
  locationButton: {
    color: '#4A90E2',
    marginBottom: 12,
    marginLeft: 2,
  },
});

export default ServiceProviderSignUpStep1;
