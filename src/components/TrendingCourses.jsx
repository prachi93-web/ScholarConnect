import React, { useState } from 'react';

const trendingCourses = [
  {
    title: "Data Science & Analytics",
    description: "In high demand across the US, UK, and Canada. Ideal for tech + math lovers.",
    more: "Top universities: MIT, University of Toronto, Imperial College London. Skills: Python, R, SQL, Machine Learning.",
  },
  {
    title: "Cybersecurity",
    description: "With rising digital threats, cybersecurity experts are needed globally.",
    more: "Hot destinations: USA, Israel, Germany. Learn: Network security, cryptography, ethical hacking.",
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    description: "AI is booming in tech-heavy countries like the USA, Germany, and Singapore.",
    more: "Popular careers: AI Engineer, NLP Specialist, Data Scientist. Tools: TensorFlow, PyTorch.",
  },
  {
    title: "Sustainable Energy & Environmental Engineering",
    description: "Top choice for green careers in Europe, Australia, and Canada.",
    more: "Topics: Renewable energy, waste management, climate policy. Roles: Energy Consultant, Environmental Analyst.",
  },
  {
    title: "Business Analytics",
    description: "Blends business with data. Hot in the UK, USA, and Australia.",
    more: "Learn: Data visualization, market analysis, forecasting. Great for consulting & finance roles.",
  },
  {
  title: "AI & Machine Learning",
  description: "High-demand tech field globally—USA, Germany, and Canada leading.",
  more: "Topics: Deep learning, NLP, computer vision. Roles: ML Engineer, AI Researcher, Data Scientist.",
},
{
  title: "Cybersecurity",
  description: "Critical for both tech and finance sectors. Growing fast in USA, UK, and Singapore.",
  more: "Covers: Network security, ethical hacking, digital forensics. Careers: Cyber Analyst, Security Architect.",
},
{
  title: "UX/UI Design",
  description: "Creative + tech combo. In-demand in Europe, Australia, and USA.",
  more: "Skills: Wireframing, design thinking, user research. Jobs: Product Designer, UI/UX Specialist.",
},
{
  title: "Digital Marketing",
  description: "Ideal for creative + data lovers. Popular in Canada, Ireland, and UK.",
  more: "Focus: SEO, content strategy, PPC ads. Careers: Marketing Strategist, Content Manager.",
},
{
  title: "Public Health & Epidemiology",
  description: "Healthcare + data. In demand post-COVID—USA, UK, and Australia.",
  more: "Topics: Disease control, health policy, biostatistics. Roles: Epidemiologist, Health Policy Analyst.",
},
{
  title: "Robotics & Mechatronics",
  description: "For future-ready engineers. Hot in Germany, Japan, and USA.",
  more: "Includes: Sensors, control systems, automation. Careers: Robotics Engineer, R&D Specialist.",
},
{
  title: "Sustainable Architecture",
  description: "Eco-conscious design is booming in Europe and Canada.",
  more: "Covers: Green building materials, passive design, urban sustainability. Roles: Green Architect, Urban Planner.",
},

];

function TrendingCourses() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <section className="min-h-screen px-6 py-24 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">🔥 Trending Courses</h2>
        <p className="text-center text-gray-600 mb-10">
          Explore what’s hot and in-demand in the global education space.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trendingCourses.map((course, index) => (
            <div
              key={index}
              onClick={() => toggleExpand(index)}
              className={`cursor-pointer border border-gray-200 rounded-xl p-5 hover:shadow-md transition duration-300 ${
                expandedIndex === index ? 'border-blue-500 bg-blue-50' : 'hover:border-blue-500'
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-sm text-gray-700">{course.description}</p>
              {expandedIndex === index && (
                <p className="text-sm text-blue-900 mt-3">{course.more}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingCourses;
