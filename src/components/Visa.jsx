import React from "react";

const visaData = [
  {
    country: "USA",
    description: "F1 Student Visa guide & admission tips for universities.",
    link: "https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html",
  },
  {
    country: "Canada",
    description: "Study permit application and top admission resources.",
    link: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html",
  },
  {
    country: "UK",
    description: "Tier 4 Student Visa and university admission help.",
    link: "https://www.gov.uk/student-visa",
  },
  {
    country: "Germany",
    description: "Visa application for students and public university tips.",
    link: "https://www.germany-visa.org/student-visa/",
  },
  {
    country: "Australia",
    description: "Step-by-step guide for Subclass 500 student visa.",
    link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500",
  },
  {
    country: "New Zealand",
    description: "Student visa process and admission guidance.",
    link: "https://www.immigration.govt.nz/new-zealand-visas/options/study",
  },
  {
    country: "France",
    description: "Long stay student visa for France and campus tips.",
    link: "https://france-visas.gouv.fr/en/web/france-visas/student",
  },
  {
    country: "Ireland",
    description: "Student visa and university admissions information.",
    link: "https://www.irishimmigration.ie/coming-to-study-in-ireland/",
  },
  {
    country: "Netherlands",
    description: "Visa process and application for Dutch universities.",
    link: "https://ind.nl/en/study/Pages/study.aspx",
  },
  {
    country: "Singapore",
    description: "Student Pass and guidance for studying in Singapore.",
    link: "https://www.ica.gov.sg/reside/STP/apply",
  },
];

function Visa() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Visa & Admission Guides
        </h1>
        <p className="text-gray-600 mb-10">
          Find official student visa links, application tips, and admission info for top study-abroad countries.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visaData.map((item, index) => (
            <div
              key={index}
              className="bg-white border hover:border-blue-500 transition-all duration-200 rounded-xl p-5 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold text-blue-700 mb-1">
                  {item.country}
                </h2>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              </div>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-center bg-blue-100 text-blue-800 font-semibold px-4 py-2 text-sm rounded hover:bg-blue-300 transition"

              >
                Visit Guide
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Visa;
