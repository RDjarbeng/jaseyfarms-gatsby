import React from 'react';
import SectionTitle from './SectionTitle';
import AboutCard from './AboutCard';
import content from '../../content/BenefitsData.json'

export default function AboutSection() {
  return (
    <section id="projects-benefits" className="">
      <div className="container project-con section-title-2">
        <SectionTitle
          title="About Us"
        />
        <div className="row mt-2 mb-3 px-1 benefits-section">
          {
            // content.map(value => (
            //   <AboutCard text={value} />
            // ))
          }
          <AboutCard/>
          <AboutCard/>
        </div>
      </div>
    </section>
  );
}