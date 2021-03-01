import React from 'react';
import Tittle from '../Components/Tittle';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import aws from '../img/aws-logo.png';

function AboutPage() {
  return (
    <div className="AboutPage">
      <Tittle title={'About Me'} span={'About Me'} />
      <ImageSection />
      <br />
      <Tittle title={'My Skills'} span={'My Skills'} />
      <div className="skillsContainer">
        <SkillsSection skill={'Javascript'} progress={'80%'} width={'80%'} />
        <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
        <SkillsSection skill={'React Js'} progress={'90%'} width={'90%'} />
        <SkillsSection skill={'Node Js'} progress={'60%'} width={'60%'} />
        <SkillsSection skill={'Python'} progress={'80%'} width={'80%'} />
        <SkillsSection skill={'SQL'} progress={'60%'} width={'60%'} />
        <SkillsSection skill={'Django'} progress={'70%'} width={'70%'} />
        <SkillsSection skill={'Web Design'} progress={'65%'} width={'65%'} />
        <SkillsSection skill={'API'} progress={'70%'} width={'70%'} />
        <SkillsSection skill={'Web scraping'} progress={'60%'} width={'60%'} />

      </div>

      <Tittle title={'Services'} span={'Services'} />
      <div className="servives-container">
        <ServicesSection
          image={design}
          title={'Web development'}
          text={'I have decent knowledge about web development both back-end and front-end.'}
        />
        <ServicesSection
          image={intelligence}
          title={'Web scrapping'}
          text={'I can scrap a web site with splash and xpath expression using python language.'}
        />
        <ServicesSection
          image={aws}
          title={'Amazon web service'}
          text={'I have little bit knowledge about Amazon web service. But now I can not serve this service, in near future I can serve this service.'}
        />
      </div>
    </div>
  );
}

export default AboutPage;
