import React from 'react';
import styled from 'styled-components';


const BrandName = styled.h2`
    text-transform: uppercase;
`;

const BrandMotto = styled.span``;


function Brand() {
    return (
        <div className="brand-name">
            <BrandName>Wzb Blog</BrandName>
            <BrandMotto><em>our differences, our strength</em></BrandMotto>
            
        </div>
    )
}

export default Brand;