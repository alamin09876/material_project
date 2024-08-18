import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import Accessories from "./pages/Accessories";
import CategoryPage from "./pages/CategoryPage";
import HeadPhones from "./pages/HeadPhones";
import RelatedPage from "./pages/RelatedPage";
import SectionTwo from "./pages/SectionTwo";
import ShopBrands from "./pages/ShopBrands";
import TelevisionPage from "./pages/TelevisionPage";
import ToDaysDeal from "./pages/ToDaysDeal";
import Header from "./shared/Header/Header";

export default function App() {
  return (
    <Container>
      <Box>
        <Header></Header>
        <CategoryPage></CategoryPage>
        {/* <SectionOne></SectionOne> */}
        <ToDaysDeal></ToDaysDeal>
        <RelatedPage></RelatedPage>
        <TelevisionPage></TelevisionPage>
        <ShopBrands></ShopBrands>
        <HeadPhones></HeadPhones>
        <Accessories></Accessories>
        <SectionTwo></SectionTwo>
      </Box>
    </Container>
  );
}
