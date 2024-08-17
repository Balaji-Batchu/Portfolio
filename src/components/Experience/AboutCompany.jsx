import React from 'react';

const AboutCompany = ({ 
  organisation, 
  role, 
  experience,
  noticePeriod, 
  teamSize, 
  payrollCompany, 
  achievements, 
  backendSkills, 
  frontendSkills, 
  databaseSkills, 
  otherSkills 
}) => {
  return (
    <div className='px-4 md:px-8 lg:px-12 py-6'>
      <div className='flex flex-col md:flex-row justify-center gap-6 lg:gap-8'>
        
        {/* Current Profession Section */}
        <div className='bg-[#071d18b8] flex-1 rounded-lg shadow-lg p-6 flex flex-col justify-center text-white'>
          <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-[#fde68a]'>Current Profession</h3>
          <p className='mb-2 text-base md:text-lg'><strong className='text-emerald-200'>Organisation:</strong> {organisation}</p>
          <p className='mb-2 text-base md:text-lg'><strong className='text-emerald-200'>Role:</strong> {role}</p>
          <p className='mb-2 text-base md:text-lg'><strong className='text-emerald-200'>Experience:</strong> {experience}</p>
          <p className='mb-2 text-base md:text-lg'><strong className='text-emerald-200'>Notice Period:</strong> {noticePeriod}</p>
          <p className='mb-2 text-base md:text-lg'><strong className='text-emerald-200'>Team Size:</strong> {teamSize}</p>
          <p className='text-base md:text-lg'><strong className='text-emerald-200'>Payroll Company:</strong> {payrollCompany}</p>
        </div>

        {/* Technical Skills Section */}
        <div className='bg-[#071d18b8] flex-1 rounded-lg shadow-lg p-6 flex flex-col justify-center text-white'>
          <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-[#fde68a]'>Technical Skills</h3>
          <p className='mb-2 text-base md:text-lg'><strong className='text-emerald-200'>Backend:</strong> {backendSkills}</p>
          <p className='mb-2 text-base md:text-lg'><strong className='text-emerald-200'>Frontend:</strong> {frontendSkills}</p>
          <p className='mb-2 text-base md:text-lg'><strong className='text-emerald-200'>Database:</strong> {databaseSkills}</p>
          <p className='text-base md:text-lg'><strong className='text-emerald-200'>Other Technical Skills and Tools:</strong> {otherSkills}</p>
        </div>

      </div>

      {/* Achievements Section */}
      <div className='bg-[#071d18b8] rounded-lg shadow-lg p-6 mt-6 text-white'>
        <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-[#fde68a] text-center'>Achievements</h3>
        <ul className='list-disc list-inside text-base md:text-lg'>
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutCompany;
