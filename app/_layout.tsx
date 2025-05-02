import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { CartProvider } from "./provider/cart-provider";

export default function RootLayout() {
  return (
    <CartProvider>
      <Stack
        screenOptions={{
          statusBarBackgroundColor: "#FF8C00",
          headerStyle: {
            backgroundColor: "orange",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Sign Up",
          }}
        />
        <Stack.Screen
          name="home"
          options={{
            title: "Product List",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  router.push("/cart");
                }}
                style={{
                  marginRight: 12,
                  padding: 5,
                  height: 36,
                  width: 36,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons name="cart" size={24} color="#fff" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="cart"
          options={{
            title: "Cart",
          }}
        />
        <Stack.Screen
          name="order-confirmation"
          options={{
            title: "Order Confirmation",
          }}
        />
      </Stack>
    </CartProvider>
  );
}
