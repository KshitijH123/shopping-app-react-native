import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
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
          headerTintColor: "#333",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Sign Up",
            headerShown: false,
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
                style={{ marginRight: 15 }}
              >
                <MaterialCommunityIcons name="cart" size={26} color="#fff" />
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
