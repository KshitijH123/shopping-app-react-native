import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  View
} from "react-native";

import { CartItem, useCart } from "./provider/cart-provider";
import { commonStyles, homeStyle, productStyles } from "./styles/styles";


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
    <View style={productStyles.productCard}>
      <Image
        source={{ uri: item.imageUrl }}
        style={productStyles.productImage}
      />
      <Text style={productStyles.productName}>{item.name}</Text>
      <Text style={productStyles.productPrice}>₹ {item.price}</Text>
      {quantities[item.id] > 0 ? (
        <>
          <View style={productStyles.quantityContainer}>
            <Pressable onPress={() => updateQty(item.id, item.quantity - 1)}>
              <Text style={productStyles.quantityButton}>-</Text>
            </Pressable>
            <Text style={productStyles.quantity}>{quantities[item.id]}</Text>
            <Pressable onPress={() => updateQty(item.id, item.quantity + 1)}>
              <Text style={productStyles.quantityButton}>+</Text>
            </Pressable>
          </View>
        </>
      ) : (
        <Pressable
          style={homeStyle.addButton}
          onPress={() => updateQty(item.id, item.quantity + 1)}
        >
          <Text style={homeStyle.addButtonText}>Add to Cart</Text>
        </Pressable>
      )}
    </View>
  );

  return (
    <View style={commonStyles.container}>
      <FlatList
        data={items}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={commonStyles.row}
      />
    </View>
  );
}
