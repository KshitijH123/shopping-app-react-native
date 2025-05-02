import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View
} from "react-native";
import { useCart } from "./provider/cart-provider";
import { cartStyles, commonStyles } from "./styles/styles";

export default function Cart() {
  const { items, updateQuantity, getTotal } = useCart();
  console.log("dddd" + items);
  const router = useRouter();

  const handleCheckout = () => {
    router.push("/order-confirmation");
  };

  const filteredList = items.filter((item) => item.quantity > 0);

  if (filteredList.length === 0) {
    return (
      <View style={cartStyles.emptyContainer}>
        <Text style={cartStyles.emptyText}>Your cart is empty</Text>
      </View>
    );
  }

  return (
    <View style={commonStyles.container}>
      <ScrollView style={cartStyles.itemsList}>
        {filteredList.map((item) => (
          <View key={item.id} style={cartStyles.cartItem}>
            <Image
              source={{ uri: item.imageUrl }}
              style={cartStyles.itemImage}
            />
            <View style={cartStyles.itemInfo}>
              <Text style={cartStyles.itemName}>{item.name}</Text>
              <Text style={cartStyles.itemPrice}>₹ {item.price}</Text>
              <View style={cartStyles.quantityContainer}>
                <Pressable
                  onPress={() =>
                    item.id &&
                    updateQuantity(
                      item.id,
                      Math.max(
                        0,
                        (typeof item.quantity === "number"
                          ? item.quantity
                          : 0) - 1
                      )
                    )
                  }
                >
                  <Text style={cartStyles.quantityButton}>-</Text>
                </Pressable>
                <Text style={cartStyles.quantity}>{item.quantity}</Text>
                <Pressable
                  onPress={() =>
                    item.id &&
                    updateQuantity(
                      item.id,
                      (typeof item.quantity === "number" ? item.quantity : 0) +
                        1
                    )
                  }
                >
                  <Text style={cartStyles.quantityButton}>+</Text>
                </Pressable>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={cartStyles.footer}>
        <View style={cartStyles.totalContainer}>
          <Text style={cartStyles.totalLabel}>Total:</Text>
          <Text style={cartStyles.totalAmount}>₹ {getTotal().toFixed(2)}</Text>
        </View>
        <Pressable style={cartStyles.paymentButton} onPress={handleCheckout}>
          <Text style={cartStyles.paymentButtonText}>Payment</Text>
        </Pressable>
      </View>
    </View>
  );
}
