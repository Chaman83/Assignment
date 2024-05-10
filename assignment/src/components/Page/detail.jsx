import React from "react";
import Footer from "../Footer/footer";
import ProductDetail from "../Product/product";
import Tab from "../Tabs/tab";
import BuyButton from "../Button/button";

const Description = ()=>{
    return(
        <>
        <ProductDetail/>
        
        <Tab/>
        <BuyButton/>
        <Footer/>
        </>

    )
};

export default Description;