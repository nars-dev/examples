import * as React from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ClientSideCallback,
  clientSide,
  Image,
} from "nars";

interface MenuItem {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

const mockData = [
  {
    title: "Avocado Smoothie",
    description: "Avocado | Banana | Almond Milk | Kale",
    price: 7,
    imageUrl: "http://localhost:5000/static/avocado.png",
  },
  {
    title: "100% Apple",
    description: "Freshly squeezed apple juice",
    price: 5,
    imageUrl: "http://localhost:5000/static/apple.png",
  },
  {
    title: "Mango Banana Smoothie",
    description: "Mango | Banana | Almond Milk",
    price: 5,
    imageUrl: "http://localhost:5000/static/mango_banana.png",
  },
  {
    title: "Strawberry Smoothie",
    description: "Strawberry | Almond Milk",
    price: 6,
    imageUrl: "http://localhost:5000/static/strawberry.png",
  },
  {
    title: "Raspberry Smoothie",
    description: "Raspberry | Coconut Water | Banana",
    price: 6,
    imageUrl: "http://localhost:5000/static/raspberry.png",
  },
  {
    title: "Chocolate Strawberry Milkshake",
    description: "Chocolate | Strawberry | Almond Milk",
    price: 4,
    imageUrl: "http://localhost:5000/static/chocolate_strawberry.png",
  },
  {
    title: "Spicy Orange Carrot juice",
    description: "Orange | Carrot | Ginger",
    price: 5,
    imageUrl: "http://localhost:5000/static/orange_carrot.png",
  },

];

const styles = StyleSheet.create({
  item: {
    borderBottomColor: "#e2e3e4",
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 16
  },
  title: {
    fontFamily: "System",
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    color: "#444444",
    marginBottom: 8,
  },
  price: {
    fontFamily: "System",
    fontWeight: "500",
  },
  image: { width: 70, height: 70, backgroundColor: "white" },
});

type OnPress = ClientSideCallback<void, string>;

const renderItem = (onPress: OnPress) => ({ item }: { item: MenuItem }) => (
  <TouchableOpacity onPress={clientSide(onPress, item.title)}>
    <View style={styles.item}>
      <View style={{ width: "100%", flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {item.description}
          </Text>
          <Text style={styles.price}>{`$${item.price}`}</Text>
        </View>
        <Image source={item.imageUrl} style={styles.image} />
      </View>
    </View>
  </TouchableOpacity>
);

export function Menu(props: { onMenuItemSelected: OnPress }) {
  const [posts] = React.useState(mockData);
  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.item.title}
      renderItem={renderItem(props.onMenuItemSelected)}
    />
  );
}
