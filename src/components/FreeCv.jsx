import React from "react";
import { Download } from "lucide-react";

// A simple custom button component
function CustomButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
}

const cvTemplates = [
  {
    title: "Modern CV Template",
    description: "A sleek, clean template ideal for tech roles.",
    url: "/public/Modern_Template.docx",
  },
  {
    title: "Creative CV Template",
    description: "Perfect for design, media, or marketing fields.",
    url: "/public/Creative_Template.docx",
  },
  {
    title: "Professional CV Template",
    description: "A classic layout suitable for any industry.",
    url: "/public/Professional_Template.docx",
  },
];

const cvTips = [
  "Keep it concise – ideally 1 page for students/freshers.",
  "Use bullet points and action verbs to describe experience.",
  "Customize the CV for each job or scholarship.",
  "Highlight education, internships, and key achievements.",
  "Avoid unnecessary graphics; keep formatting clean and readable.",
  "Proofread carefully to avoid spelling or grammar errors.",
];

function FreeCv() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto px-6 py-20 bg-white rounded-3xl shadow-md border border-gray-200">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Free CV Templates
      </h1>
      <p className="text-gray-600 mb-8">
        Download professional, student-friendly CV templates and get tips to
        craft an impressive resume.
      </p>

      {/* Templates Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {cvTemplates.map((template, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {template.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{template.description}</p>
            <a href={template.url} download>
              <CustomButton>
                <Download className="w-4 h-4" /> Download
              </CustomButton>
            </a>
          </div>
        ))}
      </div>

      {/* Tips Section */}
      <div className="border-t pt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          CV Writing Tips
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {cvTips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>

        {/* Example */}
        <div className="mt-6 bg-gray-50 p-4 rounded-lg border text-sm text-gray-700">
          <strong>Example:</strong> Instead of writing “Did internship at XYZ,”
          say “Completed 8-week internship at XYZ Corp, where I developed a
          React dashboard for internal analytics.”
        </div>
      </div>
    </div>
    </div>
  );
}

export default FreeCv;
