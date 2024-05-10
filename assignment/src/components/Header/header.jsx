import React from "react";
import { MainWrapper, TextWrapper, IconWrapper, ContentWrapper } from "./header.style";
import { BurgerIcon } from "../../images/image";
const Header = () => {
    return (
        <>
            <MainWrapper>
                <ContentWrapper>
                    <IconWrapper>
                        <BurgerIcon />
                    </IconWrapper>
                    <TextWrapper>
                        <p><b>Furniture</b> that fits your <b>style</b></p>
                    </TextWrapper>
                </ContentWrapper>
            </MainWrapper>
        </>
    )
}

export default Header;
