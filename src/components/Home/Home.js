import React from 'react';
import ProjectSection from './ProductSection';
import Carousels from './Carousel';
import ProductBenefits from './ProductBenefits';
import InvestorSection from './InvestorSection';
import CompanyHighlight from './CompanyHighlight';

export default function Home(){
    return(
        <React.Fragment>
            <Carousels />
            <ProjectSection />
            <ProductBenefits />
            {/* <InvestorSection /> */}
            {/* <CompanyHighlight /> */}
        </React.Fragment>
    );
}