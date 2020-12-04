import React from 'react';
import SectionTitle from './SectionTitle';
import MakeOrderCard from './MakeOrderCard';
import content from '../../content/productData.json'
// console.log(content);

export default function MakeOrderSection() {
  return (
    <section id="projects">
      <div className="container project-con">
        <SectionTitle
          title="Make an order"
          subtitle=""
        />
        <div className="row pt-2 pb-3 shadow mb-2">
          <MakeOrderCard />
          <MakeOrderCard />
        </div>
      </div>
    </section>
  );
}