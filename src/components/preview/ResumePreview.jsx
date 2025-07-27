// src/components/ResumePreview.jsx

import React from 'react';
import { useResume } from '../../context/ResumeContext';
import ModernMinimalTemplate from '../templets/ModernMinimalTemplate';
import ClassicProfessionalTemplate from '../templets/ClassicProfessionalTemplet';

const ResumePreview = () => {
  const { state } = useResume();

  const renderTemplate = () => {
    switch (state.selectedTemplate) {
      case 'modern-minimal':
        return <ModernMinimalTemplate data={state} />;
      // case 'classic-professional':
        // return <ClassicProfessionalTemplate data={state} />;
      default:
        return <ModernMinimalTemplate data={state} />;
    }
  };

  return (
    <div
      id="resume-preview"
      className="bg-white min-h-[11in] w-full max-w-[8.5in] mx-auto shadow-lg"
      style={{
        fontFamily: state.customization.fontFamily,
        fontSize:
          state.customization.fontSize === 'small'
            ? '12px'
            : state.customization.fontSize === 'large'
            ? '16px'
            : '14px',
      }}
    >
      {renderTemplate()}
    </div>
  );
};

export default ResumePreview;
