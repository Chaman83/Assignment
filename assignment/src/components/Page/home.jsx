import React from "react";
import Header from "../Header/header";
import ShopCat from "../ShopCat/shop";
import TodayDeal from "../Deal/deal";
import Footer from "../Footer/footer";
import Search from "../Search/search";

const Home = () =>{
    return(
        <>
        <Header/>
        <Search/>
        <ShopCat/>
        <TodayDeal/>
        <Footer/>
        </>
    )
};

export default Home;