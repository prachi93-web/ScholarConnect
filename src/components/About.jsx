import React from 'react';

function About() {
  return (
    <section id='about'
    className='flex flex-col justify-center items-center px-6 py-36 bg-gray-50 text-center'>
      <h2 className='text-4xl font-bold text-blue-600 mb-10'>About ScholarConnect</h2>
      <p className='max-w-3xl text-gray-700 text-lg leading-relaxed'>
        ScholarConnect is built with a vision to bridge the gap between ambitious students and the countless scholarship
        opportunities that go unnoticed. We aim to simplify the process of finding, applying for, and securing scholarships by
        providing a centralized hub for verified listings, expert resources, and a supportive student community.
      </p>
      <p className='max-w-3xl text-gray-700 text-lg leading-relaxed mt-4'>
        Whether you're exploring undergraduate, postgraduate, or international scholarships, ScholarConnect is here to
        empower you with tools, insights, and connections to fuel your academic journey.
      </p>
    </section>
  );
}

export default About;
