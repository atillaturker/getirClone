import React from "react";
import { ScrollView } from "react-native";
import Banner from "../components/banner/banner";
import Header from "../components/header/header";
import CategoryItem from "../components/items/categoryItem/categoryItem";
import Items from "../components/items/items";

const Home = () => {
  return (
    <ScrollView>
      <Header />
      <Banner />
      <Items />
      <CategoryItem />
    </ScrollView>
  );
};

export default Home;
