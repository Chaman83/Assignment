import React from "react";
import { FooterMainWrapper,IconDis } from "./footer.style";
import { CartIcon, Starred, UserIcon } from "../../images/image";

const Footer = () =>{
    return(
        <>
        <FooterMainWrapper>
        <IconDis>
                <Starred/>
            </IconDis>
            <IconDis>
                <CartIcon/>
            </IconDis>
            <IconDis>
                <UserIcon/>
            </IconDis>
        </FooterMainWrapper>
        
        </>
    )

};

export default Footer;
