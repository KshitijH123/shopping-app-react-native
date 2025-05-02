import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import React from "react";
import { commonStyles } from "./styles/styles";

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
      <View style={commonStyles.container}>
        <Text style={commonStyles.title}>Sign Up</Text>
        <Text style={commonStyles.subtitle}>
          Enter your mobile number to Get OTP
        </Text>
        <TextInput
          style={commonStyles.input}
          placeholder="Enter your mobile number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <Pressable style={commonStyles.button} onPress={handleSendOTP}>
          <Text style={commonStyles.buttonText}>Send OTP</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Sign Up</Text>
      <Text style={commonStyles.subtitle}>Enter Your OTP</Text>
      <TextInput
        style={commonStyles.input}
        placeholder="000000"
        keyboardType="number-pad"
        maxLength={6}
        value={otp}
        onChangeText={setOTP}
      />
      <Pressable style={commonStyles.button} onPress={handleVerifyOTP}>
        <Text style={commonStyles.buttonText}>Verify</Text>
      </Pressable>
    </View>
  );
}

