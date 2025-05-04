import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#90EE90",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
    height:50,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  row: {
    justifyContent: "space-between",
  },
});

export const productStyles = StyleSheet.create({
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
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "600",
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
});

export const homeStyle = StyleSheet.create({
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

export const cartStyles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemImg: {
    width: 25,
    height: 25,
    borderRadius: 8, // just for testing
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
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "500",
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
    fontSize: 20,
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
