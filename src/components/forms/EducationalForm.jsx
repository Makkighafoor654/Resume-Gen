import React from 'react';
import { GraduationCap, Trash2, Plus } from 'lucide-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../ui/input';
import Button from '../ui/button';
import { useDynamicForm } from '../../lib/useDynamicForm';
import { useResume } from '../../context/ResumeContext'; // ✅ use your custom hook
import { useCallback } from 'react';


const EducationalForm = () => {
  const { state, dispatch } = useResume(); // ✅ Use custom hook to get state and dispatch
  const updateContext = useCallback(
    (data) => dispatch({ type: 'SET_EDUCATION', payload: data }),
    [dispatch]
  );
    const {
      items: educations,
      handleAdd,
      handleSave,
      handleEdit,
      handleDelete,
    } = useDynamicForm(state.education, updateContext);

  return (
    <div className='bg-white p-6 m-6 rounded-xl'>
      <h2 className='text-xl font-semibold mb-4 text-gray-900'>Educational Background</h2>
      <p className='text-gray-500 mb-4'>Add your educational background and qualifications.</p>

      {educations.map(ed => (
        <EducationItem
          key={ed.id}
          ed={ed}
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
        Add Education
      </Button>
    </div>
  );
};

const EducationItem = ({ ed, onSave, onEdit, onDelete }) => {
  const formik = useFormik({
    initialValues: ed.data || {
      degree: '',
      institution: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
    },
    validationSchema: Yup.object({
      degree: Yup.string().required('Degree is required'),
      institution: Yup.string().required('Institution is required'),
      startDate: Yup.string().required('Start Date is required'),
    }),
    onSubmit: (values) => {
      onSave(ed.id, values);
    },
  });

  return (
    <div className='space-y-4 mb-6'>
      <div className='flex items-start justify-between'>
        <div className='flex items-center gap-2'>
          <GraduationCap className='h-5 w-5 text-blue-600' />
          <div>
            <h3 className='text-xl font-semibold'>
              {ed.data ? ed.data.degree : 'New Degree'}
            </h3>
            {ed.data && (
              <p className='text-gray-700'>
                {ed.data.institution} | {ed.data.startDate} — {ed.data.endDate}
              </p>
            )}
          </div>
        </div>
        <div className='flex items-center gap-2'>
          {ed.isEditing ? (
            <Button variant='ghost' size='sm' onClick={formik.handleSubmit}>
              Done
            </Button>
          ) : (
            <Button variant='ghost' size='sm' onClick={() => onEdit(ed.id)}>
              Edit
            </Button>
          )}
          <Button variant='ghost' size='sm' onClick={() => onDelete(ed.id)}>
            <Trash2 className='w-4 h-4 text-red-500' />
          </Button>
        </div>
      </div>

      {ed.isEditing && (
        <form onSubmit={formik.handleSubmit} className='space-y-4'>
          <Input
            label="Degree"
            name="degree"
            placeholder="e.g. BS Software Engineering"
            value={formik.values.degree}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.degree}
            touched={formik.touched.degree}
            required
          />
          <Input
            label="Institution"
            name="institution"
            placeholder="e.g. University of Technology"
            value={formik.values.institution}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.institution}
            touched={formik.touched.institution}
            required
          />
          <Input
            label="Location"
            name="location"
            placeholder="e.g. Faisalabad, Punjab, Pakistan"
            value={formik.values.location}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.location}
            touched={formik.touched.location}
          />
          <Input
            label="Start Date"
            name="startDate"
            placeholder="--------- --"
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
            placeholder="--------- ----"
            value={formik.values.endDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.endDate}
            touched={formik.touched.endDate}
          />
          <Input
            label="Description"
            name="description"
            placeholder="Write about your relevant coursework, projects, or honors..."
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.description}
            touched={formik.touched.description}
            rows="5"
            multiline
          />
        </form>
      )}
    </div>
  );
};

export default EducationalForm;
