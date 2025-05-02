import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { useCart } from "./cart-provider";

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
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Your cart is empty</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.itemsList}>
        {filteredList.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>₹ {item.price}</Text>
              <View style={styles.quantityContainer}>
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
                  <Text style={styles.quantityButton}>-</Text>
                </Pressable>
                <Text style={styles.quantity}>{item.quantity}</Text>
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
                  <Text style={styles.quantityButton}>+</Text>
                </Pressable>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalAmount}>₹ {getTotal().toFixed(2)}</Text>
        </View>
        <Pressable style={styles.paymentButton} onPress={handleCheckout}>
          <Text style={styles.paymentButtonText}>Payment</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "#666",
  },
  itemsList: {
    flex: 1,
    padding: 16,
  },
  cartItem: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "500",
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 4,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  quantityButton: {
    fontSize: 20,
    paddingHorizontal: 10,
  },
  quantity: {
    fontSize: 16,
    paddingHorizontal: 15,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "500",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  paymentButton: {
    backgroundColor: "#90EE90",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  paymentButtonText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
