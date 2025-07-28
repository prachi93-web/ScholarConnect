import React, { useState } from "react";
import { scholarships as allScholarships } from "../data/scholarshipsData";
const streamOptions = {
  UG: [
  "B.Tech (Engineering)",
  "B.Pharm (Pharmacy)",
  "B.A. (Arts)",
  "B.Sc. (Science)",
  "B.Com (Commerce)",
  "LL.B. (Law)",
  "MBBS (Medical)",
  "BBA (Management)",
  "B.Sc. Agri (Agriculture)",
],
  PG: [
  "M.Tech (Engineering)",
  "M.Pharm (Pharmacy)",
  "M.A. (Arts)",
  "M.Sc. (Science)",
  "LL.M. (Law)",
  "MD/MS (Medical)",
  "MBA (Management)",
  "M.Ed. (Education)"
],

HSC: [
  "HSC - Science",
  "HSC - Commerce",
  "HSC - Arts"
],

Diploma: [
  "Diploma in Engineering",
  "Diploma in Pharmacy"
],

PhD: [
  "PhD in Engineering",
  "PhD in Science",
  "PhD in Medical",
  "PhD in Management"
]

};
function Dashboard() {
  const [studentType, setStudentType] = useState("");
  const [stream, setStream] = useState("");
  const [scholarshipType, setScholarshipType] = useState("");
  const [filteredScholarships, setFilteredScholarships] = useState([]);

  const handleFilter = () => {
    const filtered = allScholarships.filter((s) => {
      return (
        (!studentType || s.studentType === studentType) &&
        (!stream || s.stream === stream) &&
        (!scholarshipType || s.type === scholarshipType)
      );
    });
    setFilteredScholarships(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-6 pt-38">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-center text-gray-800">
          🎓 Welcome to Your Dashboard
        </h1>

        {/* Filters */}
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <select
            value={studentType}
            onChange={(e) => setStudentType(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">Select Education Level</option>
            <option value="HSC">HSC</option>
            <option value="Diploma">Diploma</option>
            <option value="UG">Undergraduate</option>
            <option value="PG">Postgraduate</option>
            <option value="PhD">PhD</option>
          </select>

          <select
            value={stream}
            onChange={(e) => setStream(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">Select Stream</option>
            {(streamOptions[studentType] || []).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={scholarshipType}
            onChange={(e) => setScholarshipType(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">Select Type</option>
            <option value="Government">Government</option>
            <option value="Private">Private</option>
            <option value="CSR">CSR (Corporate Social Responsibility)</option>
            <option value="NGO">NGO / Trust</option>
            <option value="International">International</option>
          </select>
        </div>

        <div className="flex justify-center items-center px-4 py-10">
          <button
            onClick={handleFilter}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            🔍 Filter Scholarships
          </button>
        </div>

        {/* Results */}
        <div className="mt-8 space-y-4">
          {filteredScholarships.length === 0 ? (
            <p className="text-gray-500 text-center">
              No scholarships to show.
            </p>
          ) : (
            filteredScholarships.map((s, idx) => (
              <div
                key={idx}
                className="bg-white p-4 shadow rounded-lg flex justify-between items-center hover:shadow-md transition"
              >
                <div>
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 font-semibold hover:underline"
                  >
                    {s.name}
                  </a>
                  <p className="text-sm text-gray-600">{s.duration}</p>
                </div>
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">
                  {s.type}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
