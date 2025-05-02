import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { CartItem, useCart } from "./cart-provider";

const PRODUCTS: {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}[] = [
  {
    id: "1",
    name: "Product 1",
    price: 100.99,
    quantity: 0,
    imageUrl:
      "https://i.pinimg.com/564x/7a/0b/8e/7a0b8e716ff86321c989fa5c3802dec5.jpg",
  },
  {
    id: "2",
    name: "Product 2",
    price: 150.5,
    quantity: 0,
    imageUrl:
      "https://media.istockphoto.com/id/1354031012/photo/red-t-shirt-mockup-men-as-design-template-tee-shirt-blank-isolated-on-white-front-view.jpg?s=612x612&w=0&k=20&c=_5QLLkUa0-ZzSK1rp6Ie-ZRBPOEku4as4ZMrZg-y2GI=",
  },
  {
    id: "3",
    name: "Product 3",
    price: 120.0,
    quantity: 0,
    imageUrl:
      "https://i.pinimg.com/736x/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.jpg",
  },
  {
    id: "4",
    name: "Product 4",
    price: 180.5,
    quantity: 0,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShxqfanJ0ztwBQz_j58ZxsMi0lvG3bNK7XMQ&s",
  },
];

export default function Home() {
  const { items, updateQuantity } = useCart();
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  // Update local quantities state when items change
  React.useEffect(() => {
    const newQuantities: { [key: string]: number } = {};
    items.forEach(item => {
      if (item.quantity > 0) {
        newQuantities[item.id] = item.quantity;
      }
    });
    setQuantities(newQuantities);
  }, [items]);

  const allProducts = PRODUCTS.map((product) => {
    const existingItem = items.find((item) => item.id === product.id);
    return {
      ...product,
      quantity: existingItem ? existingItem.quantity : 0,
    };
  });

  items.splice(0, items.length, ...allProducts);

  const updateQty = (id: string, qty: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: qty,
    }));
    updateQuantity(id, qty);
  };

  const renderProduct = ({ item }: { item: CartItem }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>₹ {item.price}</Text>
      {quantities[item.id] > 0 ? (
        <>
          <View style={styles.quantityContainer}>
            <Pressable onPress={() => updateQty(item.id, item.quantity - 1)}>
              <Text style={styles.quantityButton}>-</Text>
            </Pressable>
            <Text style={styles.quantity}>{quantities[item.id]}</Text>
            <Pressable onPress={() => updateQty(item.id, item.quantity + 1)}>
              <Text style={styles.quantityButton}>+</Text>
            </Pressable>
          </View>
        </>
      ) : (
        <Pressable
          style={styles.addButton}
          onPress={() => updateQty(item.id, item.quantity + 1)}
        >
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </Pressable>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  row: {
    justifyContent: "space-between",
  },
  productCard: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    marginTop: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 4,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    padding: 5,
  },
  quantityButton: {
    fontSize: 20,
    paddingHorizontal: 10,
  },
  quantity: {
    fontSize: 16,
    paddingHorizontal: 15,
  },
  addButton: {
    backgroundColor: "#90EE90",
    padding: 10,
    borderRadius: 20,
    marginTop: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "#000",
  },
});
