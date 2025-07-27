import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../ui/input';
import { useResume } from '../../context/ResumeContext'; // ✅ Use the custom hook

const PersonalInfoForm = () => {
  const { dispatch } = useResume(); // ✅ use custom hook, get dispatch

  const formik = useFormik({
    initialValues: {
      fullName: '',
      title: '',
      email: '',
      phone: '',
      location: '',
      website: '',
      linkedIn: '',
      summary: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full Name is required').min(2, 'Full Name must be at least 2 characters'),
      title: Yup.string().required('Professional Title is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      phone: Yup.string().required('Phone Number is required'),
      location: Yup.string(),
      website: Yup.string().url('Invalid URL'),
      linkedIn: Yup.string().url('Invalid URL'),
      summary: Yup.string(),
    }),
    onSubmit: (values) => {
      dispatch({ type: 'SET_PERSONAL_INFO', payload: values }); // ✅ Update global state
      console.log('✅ Personal info saved:', values);
    },
  });

  return (
    <div className='space-y-6 bg-white m-6 p-4 rounded-xl'>
      <div>
        <h2 className='text-xl font-semibold text-gray-900 mb-4'>Personal Information</h2>
        <p className='text-gray-600 mb-6'>Enter your basic information and contact details.</p>
      </div>
      <form onSubmit={formik.handleSubmit}>

        <Input
          label="Full Name"
          name="fullName"
          placeholder="John Doe"
          required
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.fullName && formik.errors.fullName}
          touched={formik.touched.fullName}
        />
        <Input
          label="Professional Title"
          name="title"
          placeholder="Software Engineer"
          required
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.title && formik.errors.title}
          touched={formik.touched.title}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="john@gmail.com"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && formik.errors.email}
          touched={formik.touched.email}
        />
        <Input
          label="Phone Number"
          name="phone"
          placeholder="+92 328 1145417"
          required
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && formik.errors.phone}
          touched={formik.touched.phone}
        />

        <Input
          label="Location"
          name="location"
          placeholder="Model Town, Faisalabad, Punjab, Pakistan"
          value={formik.values.location}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.location && formik.errors.location}
          touched={formik.touched.location}
        />

        <Input
          label="Website"
          name="website"
          placeholder="https://johndoe.com"
          value={formik.values.website}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.website && formik.errors.website}
          touched={formik.touched.website}
        />
        <Input
          label="LinkedIn"
          name="linkedIn"
          placeholder="https://linkedin.com/in/johndoe"
          value={formik.values.linkedIn}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.linkedIn && formik.errors.linkedIn}
          touched={formik.touched.linkedIn}
        />

        <Input
          label="Professional Summary"
          name="summary"
          placeholder="Write a brief summary of your professional background and key achievements..."
          multiline
          rows={5}
          value={formik.values.summary}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.summary && formik.errors.summary}
          touched={formik.touched.summary}
        />

        <p className='text-sm text-gray-500 mt-2'>
          2-3 Sentences highlighting your experience and value proposition.
        </p>

        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save Info
        </button>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
