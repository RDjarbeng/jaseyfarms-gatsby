import React from 'react';
import SectionTitle from './SectionTitle';
import ProductCards from './ProductCards';
import content from '../../content/productData.json'
// console.log(content);

export default function ProductSection() {
    return(
        <section id="projects">
          <div className="container project-con">  
            <SectionTitle 
            title="Our Products" 
            subtitle="We highly recommend you place an order by using the option below:"
          />
          <div className="row pt-2 pb-3 shadow mb-2">
            {
              content.map(({text,image}) => (
                <ProductCards caption={text} image={image} />)
              )
            }
          {/* <ProductCards caption={content[0].text0} image={content[0].Image0} /> */}
        </div>
          </div>
        </section>
    );
}