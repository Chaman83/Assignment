import React from "react";
import { DealMainWrapper, DealTextWrap, CardWrap, InnerText } from "./deal.style";
import chair from './yellowchair.webp';

const TodayDeal = () => {
    return (
        <DealMainWrapper>
            <DealTextWrap>
                <strong style={{ fontSize: '18px' }}>Today's Deals</strong>
                <span style={{ color: '#747bff', fontFamily: 'sans-serif', fontSize: '16px' }}>See All</span>
            </DealTextWrap>
            <div style={{ display: 'flex', overflowX: 'auto', padding: '10px 0' }}>
                <CardWrap>
                    <InnerText>
                        <p><strong>Chairs starting from</strong></p>
                        <p style={{ fontSize: "20px" }}><sup>$</sup><strong>33</strong></p>
                        <p>Ends in 02:10:00</p>
                    </InnerText>
                    <div>
                        <img src={chair} style={{ width: '120px', height: '130px', marginTop: '33px', marginLeft: '0px' }} />
                    </div>
                </CardWrap>
                <CardWrap>
                    <InnerText>
                        <p><strong>Chairs starting from</strong></p>
                        <p style={{ fontSize: "20px" }}><sup>$</sup><strong>33</strong></p>
                        <p style={{ color: 'gray' }}>Ends in 02:10:00</p>
                    </InnerText>
                    <div>
                        <img src={chair} style={{ width: '120px', height: '130px', marginTop: '33px', marginLeft: '0px' }} />
                    </div>
                </CardWrap>
            </div>
        </DealMainWrapper>
    );
};

export default TodayDeal;
