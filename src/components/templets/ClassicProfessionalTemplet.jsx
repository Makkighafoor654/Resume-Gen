// src/components/templates/ClassicProfessionalTemplate.jsx

import React from 'react';

const ClassicProfessionalTemplate = ({ data }) => {
  // Destructure data safely
  const {
    personalInfo = {},
    experience = [],
    education = [],
    skills = [],
    projects = [],
  } = data || {};

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 text-black font-sans">
      {/* Name */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">{personalInfo.fullName}</h1>
        <p className="text-gray-600">
          {personalInfo.email} | {personalInfo.phone} | {personalInfo.location}
        </p>
      </header>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-bold border-b pb-1 mb-2">Experience</h2>
        {experience.map((exp, idx) => (
          <div key={idx} className="mb-4">
            <h3 className="font-semibold">
              {exp.position} @ {exp.company}
            </h3>
            <p className="text-gray-600 text-sm">
              {exp.startDate} - {exp.endDate}
            </p>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-xl font-bold border-b pb-1 mb-2">Education</h2>
        {education.map((edu, idx) => (
          <div key={idx} className="mb-4">
            <h3 className="font-semibold">
              {edu.degree} @ {edu.institution}
            </h3>
            <p className="text-gray-600 text-sm">
              {edu.startDate} - {edu.endDate}
            </p>
            <p>{edu.description}</p>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-xl font-bold border-b pb-1 mb-2">Skills</h2>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <li
              key={idx}
              className="bg-gray-200 px-3 py-1 rounded-full text-sm"
            >
              {skill.skillName || skill} {/* Support plain strings too */}
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-xl font-bold border-b pb-1 mb-2">Projects</h2>
        {projects.map((proj, idx) => (
          <div key={idx} className="mb-4">
            <h3 className="font-semibold">{proj.title}</h3>
            <p>{proj.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ClassicProfessionalTemplate;
