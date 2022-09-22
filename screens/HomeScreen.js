import { View, Text, FlatList, ActivityIndicator, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";

const HomeScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getBooks = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <SearchBar />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          numColumns={2}
          renderItem={({ item }) => (
            <ProductCard
              key={category._id}
              year={item.releaseYear}
              title={item.title}
              imgUrl={item.albumId}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
