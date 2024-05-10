import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from 'swiper/modules';
import "swiper/swiper-bundle.css";
import { ProductDetailContainer, ProductImage,TitleWrap,ContentWrap } from "./product.style";
import YellowChair from "./yellowchair.webp";
import { BackIcon, StarIcon } from "../../images/image";

// Initialize Swiper modules
// SwiperCore.use([Pagination]);

const ProductDetail = () => {
    return (
        <>
        <div style={{display:"flex",justifyContent:'space-between',margin:'20px 20px 0px'}}>
                <BackIcon/>
                <StarIcon/>
            </div>
        <ProductDetailContainer>
            <Swiper
                style={{
                    "--swiper-pagination-color": "#F8A819",
                    "--swiper-pagination-bullet-inactive-color": "#ACACAC",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "6px",
                    "--swiper-pagination-bullet-padding-top": "25px",
                    "--swiper-pagination-bullet-padding-bottom": "51px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px",
                }}
                modules={[Pagination, A11y]}
                slidesPerView={1} // Ensure only one image is displayed at a time
                pagination={{ clickable: true }}
                lazyPreloadPrevNext={5}
                autoHeight={true}
                centeredSlides={true}
                loop={true}
                speed={2500}
            >
                <SwiperSlide>
                    <ProductImage src={YellowChair} alt="Product Image 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductImage src={YellowChair} alt="Product Image 2" />
                </SwiperSlide>
                {/* Add more SwiperSlide components for additional images */}
            </Swiper>
        </ProductDetailContainer>
        <ContentWrap>
                <TitleWrap>
                    <p style={{fontSize:"26px"}}><strong>Yellow Chair</strong></p>
                    <p style={{color:'lightgray',fontSize:"13px"}}>Dimensions: H33 x W 18 x D 22: </p>
                    <p style={{color:'lightgray',fontSize:"13px"}}>Seating Height - 17.9</p>
                <p style={{color:'lightgray',fontSize:"13px"}}>(all dimensions in inches)</p>
                <div style={{display:'flex',justifyItems:'baseline',alignItems:'center',wordSpacing:'2px',color:'gray'}}>
                <StarIcon/><p style={{fontSize:'14px'}}> &nbsp;4.2 | 234 Reviews</p>
                </div>
                
                    
                </TitleWrap>
                <div style={{display:"flex",flexDirection : 'column', alignItems:'center',justifyItems:'center'}}>
                <p style={{fontSize:"22px",margin:'0px',color:'#747bff'}}><sup><b>$</b></sup><b>33</b></p>
                    <p style={{fontSize:'13px'}}>Offer Price</p><br></br>
                </div>
                
        </ContentWrap>
        </>
        
    );
};

export default ProductDetail;
