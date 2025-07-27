import React from 'react';
import { MdEmail } from 'react-icons/md';
import { Phone, LocateIcon } from 'lucide-react';

const ModernMinimalTemplate = ({ data }) => {
  const {
    personalInfo = {},
    experience = [],
    education = [],
    skills = [],
    projects = [],
  } = data || {};

  return (
    <section className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mb-10">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{personalInfo.fullName}</h1>
        <p className="text-gray-600">{personalInfo.summary}</p>
      </div>

      {/* Contact */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-sky-600">Contact Information</h2>
        <div className="border-l-4 border-sky-500 pl-4">
          {personalInfo.email && (
            <p className="text-gray-800">
              <MdEmail className="inline mr-2 text-sky-600" />
              <a href={`mailto:${personalInfo.email}`} className="text-sky-600 underline">
                {personalInfo.email}
              </a>
            </p>
          )}
          {personalInfo.phone && (
            <p className="text-gray-800">
              <Phone className="inline h-4 w-4 mr-2 text-sky-600" />
              <a href={`tel:${personalInfo.phone}`} className="text-sky-600 underline">
                {personalInfo.phone}
              </a>
            </p>
          )}
          {personalInfo.location && (
            <p className="text-gray-800">
              <LocateIcon className="inline h-4 w-4 mr-2 text-sky-600" />
              {personalInfo.location}
            </p>
          )}
          {personalInfo.linkedin && (
            <p className="text-gray-800">
              LinkedIn:{' '}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 underline"
              >
                {personalInfo.linkedin}
              </a>
            </p>
          )}
          {personalInfo.github && (
            <p className="text-gray-800">
              GitHub:{' '}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 underline"
              >
                {personalInfo.github}
              </a>
            </p>
          )}
        </div>
      </div>

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-sky-600">Education</h2>
          {education.map((edu, idx) => (
            <div key={idx} className="border-l-4 border-sky-500 pl-4 mb-4">
              <p className="text-gray-800">{edu.degree}</p>
              <p className="text-gray-500">{edu.institution}</p>
              <p className="text-gray-400">{edu.startDate} - {edu.endDate}</p>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-sky-600">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-sky-600">Experience</h2>
          {experience.map((exp, idx) => (
            <div key={idx} className="border-l-4 border-sky-500 pl-4 mb-4">
              <h3 className="text-gray-800 font-semibold">{exp.position} @ {exp.company}</h3>
              <p className="text-gray-500">{exp.startDate} - {exp.endDate}</p>
              <ul className="list-disc ml-5 mt-2 text-gray-600">
                {exp.description?.split('\n').map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-sky-600">Projects</h2>
          {projects.map((proj, idx) => (
            <div key={idx} className="border-l-4 border-sky-500 pl-4 mb-4">
              <h3 className="text-gray-800 font-semibold">{proj.title}</h3>
              <p className="text-gray-500">{proj.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ModernMinimalTemplate;
