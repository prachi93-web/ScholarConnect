import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  return (
    <section id='home'
      className='min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 px-6'>
      <div className='text-center max-w-2xl'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
          Welcome to <span className='text-blue-600'>ScholarConnect</span>
        </h1>
        <p className='text-gray-600 text-lg mb-3'>
          Your trusted companion in the journey of academic excellence.
        </p>
        <p className='text-gray-500 text-base mb-6'>
          Discover verified scholarships, gain expert advice, and connect with students worldwide. Let us help you achieve your dreams, one opportunity at a time.
        </p>
        <button
          onClick={handleGetStarted}
          className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300'
        >
          Get Started <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}

export default Home;
