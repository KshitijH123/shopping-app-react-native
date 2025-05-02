import { useRouter } from "expo-router";
import React from "react";
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useCart } from "./cart-provider";

export default function OrderConfirmation() {
  const { items, getTotal, clearCart } = useCart();
  const router = useRouter();
  const orderNumber = Math.floor(Math.random() * 10000);

  const handlePay = () => {
    Alert.alert(
      "Order Successful",
      "Your order has been placed successfully!",
      [
        {
          text: "OK",
          onPress: () => {
            clearCart();
            router.push("/home");
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Order Confirmation</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Number:</Text>
        <Text style={styles.orderNumber}>{orderNumber}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shipping Details:</Text>
        <Text style={styles.shippingAddress}>ccc</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Details:</Text>
        {items.map((item) => (
          <View key={item.id} style={styles.orderItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>
              ₹{item.price} x {item.quantity} = ₹
              {(item.price * item.quantity).toFixed(2)}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total:</Text>
        <Text style={styles.totalAmount}>₹ {getTotal().toFixed(2)}</Text>
      </View>

      <Pressable style={styles.payButton} onPress={handlePay}>
        <Text style={styles.payButtonText}>Pay</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 8,
  },
  orderNumber: {
    fontSize: 16,
  },
  shippingAddress: {
    fontSize: 16,
    lineHeight: 24,
  },
  orderItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "500",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 30,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "500",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  payButton: {
    backgroundColor: "#90EE90",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  payButtonText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
