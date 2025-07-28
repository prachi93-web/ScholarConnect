import React from 'react';
import { Link } from 'react-router-dom';

const resources = [
  {
    title: 'Scholarship Essay Tips',
    description: 'Learn how to write essays that impress scholarship committees.',
    path: '/resources/scholarship-essay-tips',
  },
  {
    title: 'Free CV Template',
    description: 'Download a professional, student-friendly CV template.',
    path: '/resources/free-cv-template',
  },
  {
    title: 'Country Cost Comparison',
    description: 'Compare the cost of studying between two countries to make a smart choice.',
    path: '/resources/compare-country',
  },
  {
    title: 'Visa & Admission Guides',
    description: 'Step-by-step guides for applying to top global universities.',
    path: '/resources/visa-admission-guides',
  },
  {
    title: 'Student Budget Planner',
    description: 'Plan your finances with this downloadable spreadsheet.',
    path: '/resources/student-budget-planner',
  },
  {
    title: 'Trending Courses',
    description: 'Discover high-demand courses and emerging study fields across top countries.',
    path: '/resources/trending-courses',
  },
];

function Resources() {
  return (
    <section id="resources" className=" px-6 py-22 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">📚 Resources Hub</h2>
        <p className="text-center text-gray-600 mb-10">
          Explore handpicked guides, tools, and templates to make your scholarship journey smooth and successful.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <Link
              key={index}
              to={resource.path}
              className="block border border-gray-200 rounded-xl p-5 hover:shadow-md transition duration-300 hover:border-blue-500"
            >
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-sm text-gray-600">{resource.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resources;
