import React from "react";
import { TabMainWrapper } from "./tab.style";

const Tab = ()=>{
    return(
        <>
        <div style={{backgroundColor:'#f0efee'}}>
        <TabMainWrapper>
            <p className="active">Specifications</p>
            <p>FAQs</p>
            <p>Care</p>
            <p>Terms</p>
        </TabMainWrapper>
        <div style={{padding:'0px 20px 20px',margin:'0px'}}>
            <h4>Dimensions:</h4>
            <p>H 33 x W 18 x D 35 Seating Height - 17.9 (all dimensions in inches ) </p>

            <h4>Material:</h4>
        </div>
        </div>
        
        
        </>
    )
};

export default Tab;