// screens/OwnerSignUp.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import InputField from "../../components/Input/Inputfield";
import CustomButton from "../../components/Buttons/Button";
import { useNavigation } from "@react-navigation/native";

const OwnerSignUp: React.FC = () => {
  const navigation = useNavigation<any>();
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    password: "",
    brand: "",
    model: "",
    year: "",
    vin: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (value.trim()) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const digitRegex = /^\d+$/;
    const alphaNumRegex = /^[a-zA-Z0-9]+$/;

    Object.entries(form).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = "This field is required";
        return;
      }

      switch (key) {
        case "email":
          if (!emailRegex.test(value)) {
            newErrors[key] = "Enter a valid email address";
          }
          break;
        case "mobile":
          if (!digitRegex.test(value) || value.length !== 10) {
            newErrors[key] = "Enter a valid 10-digit mobile number";
          }
          break;
        case "year":
          if (!digitRegex.test(value) || value.length !== 4) {
            newErrors[key] = "Enter a valid 4-digit year";
          }
          break;
        case "vin":
          if (!alphaNumRegex.test(value) || value.length !== 17) {
            newErrors[key] = "Enter a valid 17-character VIN";
          }
          break;
        case "password":
          if (value.length < 6) {
            newErrors[key] = "Password must be at least 6 characters";
          }
          break;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      // Assume success
      Alert.alert("Success", "Vehicle owner account created successfully!");
      // Reset form or navigate
    }
  };

  const handleLogin = () => {
    navigation.navigate("OwnerLogin"); // Make sure this route exists in your navigator
  };

  const handleGoogleLogin = () => {
    Alert.alert("Google Login", "Show Google account picker here.");
    // Integrate Google auth SDK if needed
  };

  const handleFacebookLogin = () => {
    Alert.alert("Facebook Login", "Show Facebook account picker here.");
    // Integrate Facebook auth SDK if needed
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sign Up as Vehicle Owner</Text>

      {Object.entries(form).map(([field, value]) => (
        <View key={field}>
          <InputField
            placeholder={
              field === "vin"
                ? "Vehicle Identification Number"
                : field.charAt(0).toUpperCase() + field.slice(1)
            }
            secureTextEntry={field === "password"}
            value={value}
            onChangeText={(text) => handleChange(field, text)}
          />
          {errors[field] ? (
            <Text style={styles.errorText}>{errors[field]}</Text>
          ) : null}
        </View>
      ))}

      <CustomButton title="Sign Up" onPress={handleSubmit} />

      <Text style={styles.loginText}>
        Already have an account?{" "}
        <Text style={styles.loginLink} onPress={handleLogin}>
          Login
        </Text>
      </Text>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.divider} />
      </View>

      {/* Google Login */}
      <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
        <Image
          source={require("../../assets/google_logo.png")} // Make sure you have this image
          style={styles.icon}
        />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Facebook Login */}
      <TouchableOpacity
        style={styles.socialButton}
        onPress={handleFacebookLogin}
      >
        <Image
          source={require("../../assets/fb_logo.png")} // Make sure you have this image
          style={styles.icon}
        />
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 24,
    backgroundColor: "#000",
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 24,
  },
  errorText: {
    color: "red",
    fontSize: 13,
    marginTop: -12,
    marginBottom: 12,
    marginLeft: 4,
  },
  loginText: {
    color: "#aaa",
    textAlign: "center",
    marginTop: 16,
  },
  loginLink: {
    color: "#4A90E2",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#333",
  },
  orText: {
    color: "#aaa",
    marginHorizontal: 12,
  },
  socialButton: {
    borderColor: "#fff",
    borderWidth: 1,
    paddingVertical: 12,
    borderRadius: 30,
    marginBottom: 12,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  socialButtonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 12,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default OwnerSignUp;
