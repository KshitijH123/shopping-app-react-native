import { useRouter } from "expo-router";
import React from "react";
import { Alert, Image, Pressable, ScrollView, Text, View } from "react-native";
import { useCart } from "./provider/cart-provider";
import { cartStyles, commonStyles } from "./styles/styles";

export default function OrderConfirmation() {
  const { items, getTotal, address } = useCart();

  const router = useRouter();
  const orderNumber = Math.floor(Math.random() * 10000);

  const handlePay = () => {
    Alert.alert(
      "Order Successful",
      "Your order has been placed successfully!",
      [
        {
          text: "OK",
          onPress: () => {},
        },
      ]
    );
  };

  const filteredList = items.filter((item) => item.quantity > 0);

  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
      }}
    >
      <Text style={commonStyles.title}>Confirm Your Order</Text>

      <View style={commonStyles.section}>
        <Text style={commonStyles.sectionTitle}>•Order Number:</Text>
          <Text> {orderNumber}</Text>
      </View>

      <View style={commonStyles.section}>
        <Text style={commonStyles.sectionTitle}>•Order Details:</Text>
        {filteredList.map((item) => (
          <View key={item.id} style={cartStyles.cartItem}>
            <Image source={{ uri: item.imageUrl }} style={cartStyles.itemImg} />
            <Text> {item.name} </Text>
            <Text>
              ₹{item.price} x {item.quantity} = ₹
              {(item.price * item.quantity).toFixed(2)}
            </Text>
          </View>
        ))}
      </View>
      <View style={commonStyles.section}>
        <Text style={commonStyles.sectionTitle}>•Shipping Details:</Text>
        <Text>{address}</Text>
      </View>

      <View style={cartStyles.totalContainer}>
        <Text style={cartStyles.totalLabel}>•Total:</Text>
        <Text style={cartStyles.totalAmount}>₹ {getTotal().toFixed(2)}</Text>
      </View>

      <Pressable style={commonStyles.button} onPress={handlePay}>
        <Text style={commonStyles.buttonText}>Pay</Text>
      </Pressable>
    </ScrollView>
  );
}
