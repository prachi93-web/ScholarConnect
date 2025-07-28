import React, { useState } from "react";

const countries = [
  {
    name: "USA",
    tuition: 30000,
    living: 15000,
  },
  {
    name: "UK",
    tuition: 25000,
    living: 13000,
  },
  {
    name: "Canada",
    tuition: 20000,
    living: 12000,
  },
  {
    name: "Germany",
    tuition: 0,
    living: 10000,
  },
  {
    name: "Australia",
    tuition: 22000,
    living: 14000,
  },
  {
    name: "France",
    tuition: 3000,
    living: 11000,
  },
  {
    name: "Netherlands",
    tuition: 8000,
    living: 12000,
  },
  {
    name: "Japan",
    tuition: 6000,
    living: 10000,
  },
  {
    name: "South Korea",
    tuition: 5000,
    living: 9000,
  },
  {
    name: "India",
    tuition: 1500,
    living: 5000,
  },
];

function CountryComparison() {
  const [country1, setCountry1] = useState("USA");
  const [country2, setCountry2] = useState("UK");

  const getCountryData = (name) => countries.find((c) => c.name === name);

  const compareCountries = () => {
    const c1 = getCountryData(country1);
    const c2 = getCountryData(country2);
    const total1 = c1.tuition + c1.living;
    const total2 = c2.tuition + c2.living;

    if (total1 < total2) return `${c1.name} is more cost-effective.`;
    if (total1 > total2) return `${c2.name} is more cost-effective.`;
    return "Both countries have the same total estimated cost.";
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-46">
      <div className="max-w-xl mx-auto p-6 mt-10 rounded-xl shadow-md bg-white border border-gray-200">
        <h2 className="text-xl font-semibold text-center mb-6">
          🌍 Compare Cost of Studying
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <select
            value={country1}
            onChange={(e) => setCountry1(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {countries.map((country) => (
              <option key={country.name} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>

          <select
            value={country2}
            onChange={(e) => setCountry2(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {countries.map((country) => (
              <option key={country.name} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div className="text-sm text-gray-700 bg-gray-50 rounded-md p-4 mb-4">
          <p>
            <strong>{country1}</strong> total cost: $
            {getCountryData(country1).tuition + getCountryData(country1).living}
          </p>
          <p>
            <strong>{country2}</strong> total cost: $
            {getCountryData(country2).tuition + getCountryData(country2).living}
          </p>
        </div>

        <p className="text-center font-medium text-blue-600 mb-4">
          {compareCountries()}
        </p>

        <p className="text-xs text-gray-500 text-center italic">
          Note: Costs are approximate and may vary by university, city, and lifestyle. Always verify with official university sources.
        </p>
      </div>
    </div>
  );
}
export default CountryComparison;