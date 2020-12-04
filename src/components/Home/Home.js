import React from 'react';
import ProductSection from './ProductSection';
import Carousels from './Carousel';
import ProductBenefits from './BenefitSection';
// import InvestorSection from './InvestorSection';
// import CompanyHighlight from './CompanyHighlight';

export default function Home(){
    return(
        <React.Fragment>
            <Carousels />
            <ProductSection />
            <ProductBenefits />
            {/* <InvestorSection /> */}
            {/* <CompanyHighlight /> */}
        </React.Fragment>
    );
}