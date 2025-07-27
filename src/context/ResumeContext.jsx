import React, { createContext, useReducer, useContext } from 'react';

// --- Initial state ---
const initialState = {
  personalInfo: {},
  experience: [],
  education: [],
  skills: [],
  projects: [],
  customization: {
    primaryColor: '#2563eb',
    fontSize: 'medium',
    fontFamily: 'sans-serif',
  },
  selectedTemplate: 'classic-professional',
};

// --- Reducer ---
function resumeReducer(state, action) {
  switch (action.type) {
    case 'SET_PERSONAL_INFO':
      return { ...state, personalInfo: action.payload };
    case 'SET_EXPERIENCE':
      return { ...state, experience: action.payload };
    case 'SET_EDUCATION':
      return { ...state, education: action.payload };
    case 'SET_SKILLS':
      return { ...state, skills: action.payload };
    case 'SET_PROJECTS':
      return { ...state, projects: action.payload };
    case 'UPDATE_CUSTOMIZATION':
      return {
        ...state,
        customization: {
          ...state.customization,
          ...action.payload,
        },
      };
    case 'SET_TEMPLATE':
      return {
        ...state,
        selectedTemplate: action.payload,
      };
    default:
      return state;
  }
}

// --- Context ---
export const ResumeContext = createContext();

// --- Provider ---
export const ResumeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(resumeReducer, initialState);

  return (
    <ResumeContext.Provider value={{ state, dispatch }}>
      {children}
    </ResumeContext.Provider>
  );
};

// --- Custom hook ---
export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used inside a ResumeProvider');
  }
  return context;
};
