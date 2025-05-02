import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import React from "react";

export default function SignUp() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState("");
  const router = useRouter();

  const handleSendOTP = () => {
    if (phoneNumber.length < 10) {
      alert("Invalid number. Please enter a valid 10-digit mobile number.");
      return;
    }
    setShowOTP(true);
  };

  const handleVerifyOTP = () => {
    if (otp === "000000") {
      router.replace("/home");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  if (!showOTP) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Enter your mobile number to Get OTP</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your mobile number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <Pressable style={styles.button} onPress={handleSendOTP}>
          <Text style={styles.buttonText}>Send OTP</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Enter Your OTP</Text>
      <TextInput
        style={styles.input}
        placeholder="000000"
        keyboardType="number-pad"
        maxLength={6}
        value={otp}
        onChangeText={setOTP}
      />
      <Pressable style={styles.button} onPress={handleVerifyOTP}>
        <Text style={styles.buttonText}>Verify</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#e0e0e0",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#666",
    fontSize: 16,
  },
});
