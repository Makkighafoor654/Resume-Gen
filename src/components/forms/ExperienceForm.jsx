import React, { useCallback } from 'react';
import { Plus, Briefcase, Trash2 } from 'lucide-react';
import Button from '../ui/button';
import Input from '../ui/input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDynamicForm } from '../../lib/useDynamicForm';
import { useResume } from '../../context/ResumeContext'; // ✅ use your custom hook

const ExperienceForm = () => {
  const { state, dispatch } = useResume(); // ✅ get state + dispatch
  const updateContext = useCallback(
    (data) => dispatch({ type: 'SET_EXPERIENCE', payload: data }),
    [dispatch]
  );
  const {
    items: experiences,
    handleAdd,
    handleSave,
    handleEdit,
    handleDelete,
  } = useDynamicForm(state.experience, updateContext);


  return (
    <div className='space-y-6 bg-white m-6 p-4 rounded-xl'>
      <div>
        <h2 className='text-xl font-semibold text-gray-900 mb-4'>Work Experience</h2>
        <p className='text-gray-700 mb-6'>Add your professional experience, starting with your most recent position.</p>
      </div>

      {experiences.map(exp => (
        <ExperienceItem
          key={exp.id}
          exp={exp}
          onSave={handleSave}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}

      <Button
        variant='ghost'
        className="w-full h-20 border-2 border-blue-100 hover:border-blue-300"
        onClick={handleAdd}
      >
        <Plus className='w-6 h-6 mr-2' />
        Add Work Experience
      </Button>
    </div>
  );
};

const ExperienceItem = ({ exp, onSave, onEdit, onDelete }) => {
  const formik = useFormik({
    initialValues: exp.data || {
      position: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    },
    validationSchema: Yup.object({
      position: Yup.string().required('Position is required'),
      company: Yup.string().required('Company is required'),
      startDate: Yup.string().required('Start date is required'),
    }),
    onSubmit: (values) => {
      onSave(exp.id, values);
    },
    enableReinitialize: true, // ✅ ensure updates on edit
  });

  return (
    <div className='space-y-4 mb-6'>
      <div className='flex items-start justify-between'>
        <div className='flex items-center gap-2'>
          <Briefcase className='h-5 w-5 text-blue-600' />
          <h3 className='text-xl font-semibold'>
            {exp.data?.position || 'New Position'}
          </h3>
        </div>
        <div className='flex items-center gap-2'>
          {exp.isEditing ? (
            <Button variant='ghost' size='sm' onClick={formik.handleSubmit}>
              Done
            </Button>
          ) : (
            <Button variant='ghost' size='sm' onClick={() => onEdit(exp.id)}>
              Edit
            </Button>
          )}
          <Button variant='ghost' size='sm' onClick={() => onDelete(exp.id)}>
            <Trash2 className='w-4 h-4 text-red-500' />
          </Button>
        </div>
      </div>

      {exp.isEditing && (
        <form onSubmit={formik.handleSubmit} className='space-y-4'>
          <div className='grid grid-cols-2 gap-5'>
            <Input
              label="Position Title"
              name="position"
              placeholder="Software Engineer"
              value={formik.values.position}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.position}
              touched={formik.touched.position}
              required
            />
            <Input
              label="Company"
              name="company"
              placeholder="Tech Hub"
              value={formik.values.company}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.company}
              touched={formik.touched.company}
              required
            />
          </div>

          <Input
            label="Location"
            name="location"
            placeholder="D Ground, Faisalabad, Punjab, Pakistan"
            value={formik.values.location}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.location}
            touched={formik.touched.location}
          />

          <div className='grid grid-cols-2 gap-5'>
            <Input
              label="Start Date"
              name="startDate"
              placeholder="Month Year"
              value={formik.values.startDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.startDate}
              touched={formik.touched.startDate}
              required
            />
            <Input
              label="End Date"
              name="endDate"
              placeholder="Month Year"
              value={formik.values.endDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.endDate}
              touched={formik.touched.endDate}
            />
          </div>

          <Input
            type="checkbox"
            label="I currently work here"
            name="current"
            checked={formik.values.current}
            onChange={() => formik.setFieldValue('current', !formik.values.current)}
          />

          <Input
            label="Description"
            name="description"
            placeholder="• Developed applications using React and Node.js&#10;• Led a team of developers&#10;• Improved performance by 40%"
            multiline
            rows="5"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.description}
            touched={formik.touched.description}
          />

          <p className='text-gray-500'>
            Use bullet points to describe your key responsibilities and achievements.
          </p>
        </form>
      )}
    </div>
  );
};

export default ExperienceForm;
