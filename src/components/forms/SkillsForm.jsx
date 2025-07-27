import React, { useCallback } from 'react';
import Input from '../ui/input';
import Button from '../ui/button';
import { Plus, Trash2, Code } from 'lucide-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDynamicForm } from '../../lib/useDynamicForm';
import { useResume } from '../../context/ResumeContext'; // ✅ use your context

const SkillsForm = () => {
  const { state, dispatch } = useResume();

  // ✅ Memoize updater
  const updateContext = useCallback(
    (data) => dispatch({ type: 'SET_SKILLS', payload: data }),
    [dispatch]
  );

  const {
    items: skills,
    handleAdd,
    handleSave,
    handleEdit,
    handleDelete,
  } = useDynamicForm(state.skills, updateContext);

  return (
    <div className='bg-white m-6 p-6 rounded-xl'>
      <div>
        <h2 className='text-xl font-semibold text-gray-900 mb-4'>Skills</h2>
        <p className='text-gray-500 mb-4'>Add your technical and professional skills.</p>
      </div>

      {skills.map(skill => (
        <SkillItem
          key={skill.id}
          skill={skill}
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
        Add Other Skills
      </Button>
    </div>
  );
};

const SkillItem = ({ skill, onSave, onEdit, onDelete }) => {
  const formik = useFormik({
    initialValues: skill.data || { skillName: '' },
    validationSchema: Yup.object({
      skillName: Yup.string().required('Skill name is required'),
    }),
    onSubmit: (values) => {
      onSave(skill.id, values);
    },
    enableReinitialize: true, // ✅ important for edit → form stays synced
  });

  return (
    <div className='space-y-4 mb-6'>
      <div className='flex items-start justify-between'>
        <div className='flex items-center gap-2'>
          <Code className='h-5 w-5 text-blue-600' />
          <h3 className='text-xl font-semibold'>
            {skill.data?.skillName || 'New Skill'}
          </h3>
        </div>
        <div className='flex items-center gap-2'>
          {skill.isEditing ? (
            <Button variant='ghost' size='sm' onClick={formik.handleSubmit}>
              Done
            </Button>
          ) : (
            <Button variant='ghost' size='sm' onClick={() => onEdit(skill.id)}>
              Edit
            </Button>
          )}
          <Button variant='ghost' size='sm' onClick={() => onDelete(skill.id)}>
            <Trash2 className='w-4 h-4 text-red-500' />
          </Button>
        </div>
      </div>

      {skill.isEditing && (
        <form
          onSubmit={formik.handleSubmit}
          className='p-3 my-3 border border-gray-300 rounded-xl'
        >
          <Input
            label="Skill Name"
            name="skillName"
            placeholder="e.g. HTML5, CSS3, React.js"
            value={formik.values.skillName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.skillName}
            touched={formik.touched.skillName}
            required
          />
        </form>
      )}
    </div>
  );
};

export default SkillsForm;
