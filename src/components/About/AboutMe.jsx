import React from 'react';
import currentCompany from '../../Utils/companyDetails';
import AboutCompany from '../Experience/AboutCompany';
import Headings from '../Headings';
import Mrq from '../maquee/Mrq';

const AboutMe = () => {
  return (
    <section id="experience" className="bg-[#020d0be5] text-yellow-50 min-h-screen relative py-12">
      <div className="container mx-auto text-center">
        <Headings name={"Experience"} />

        <AboutCompany 
          organisation={currentCompany.organisation}
          role={currentCompany.role}
          noticePeriod={currentCompany.noticePeriod}
          experience={currentCompany.experience}
          teamSize={currentCompany.teamSize}
          payrollCompany={currentCompany.payrollCompany}
          achievements={currentCompany.achievements}
          backendSkills={currentCompany.backendSkills}
          frontendSkills={currentCompany.frontendSkills}
          databaseSkills={currentCompany.databaseSkills}
          otherSkills={currentCompany.otherSkills}
        />

        <section id="skills">
        </section>
          <Mrq />
      </div>
    </section>
  );
};

export default AboutMe;
