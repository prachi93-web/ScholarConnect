import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Resources from './components/Resources';
import Contact from './components/Contact';
import ScholarshipEssayTips from './components/ScholarshipEssayTips';
import FreeCv from './components/FreeCv';
import Visa from './components/Visa';
import BudgetPlanner from './components/BudgetPlanner';
import CompareCountry from './components/CompareCountry';
import TrendingCourses from './components/TrendingCourses';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Resources />
              <About />
              <Contact />
            </>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resources/scholarship-essay-tips" element={<ScholarshipEssayTips />} />
        <Route path="/resources/free-cv-template" element={<FreeCv />} />
        <Route path="/resources/visa-admission-guides" element={<Visa />} />
        <Route path="/resources/student-budget-planner" element={<BudgetPlanner />} />
        <Route path="/resources/compare-country" element={<CompareCountry />} />
        <Route path="/resources/trending-courses" element={<TrendingCourses />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
