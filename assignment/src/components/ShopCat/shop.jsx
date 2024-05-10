import React from "react";
import { MainShopWrapper,ShopCatWrap,CatTextWrap,MainCat } from "./shop.style";
import {Sofa} from "../../images/image";
import bed from "./bed.png";
import chair from "./chair.png";
import sofa from "./sofa.png";
import table from "./table.png";



const ShopCat = () =>{
    return(
        <>
        <MainShopWrapper>
            <CatTextWrap>
                <strong style={{fontSize : '18px'}}>Shop for</strong>
                <span style={{color:'#747bff',fontFamily:'sans-serif',fontSize:'16px'}}>See All</span>
            </CatTextWrap>
            <MainCat>
            <ShopCatWrap>
            <img src = {chair} alt=""/>
                <p>Chair</p>
            </ShopCatWrap>
            <ShopCatWrap>
            <img src = {sofa} alt=""/>
                <p>Sofa</p>
            </ShopCatWrap>
            <ShopCatWrap>
                <img src = {bed} alt=""/>
                <p>Bed</p>
            </ShopCatWrap>
            <ShopCatWrap>
            <img src = {table} alt=""/>
                <p>Table</p>
            </ShopCatWrap>
            </MainCat>
            

        </MainShopWrapper>
        
        </>
    )

};

export default ShopCat;