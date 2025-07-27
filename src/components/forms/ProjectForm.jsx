import React, { useCallback } from 'react';
import { Plus, Briefcase, Trash2 } from 'lucide-react';
import Button from '../ui/button';
import Input from '../ui/input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDynamicForm } from '../../lib/useDynamicForm';
import { useResume } from '../../context/ResumeContext'; // ✅ use your custom hook

const ProjectForm = () => {
  const { state, dispatch } = useResume(); // ✅ get state + dispatch

  const updateContext = useCallback(
    (data) => dispatch({ type: 'SET_PROJECTS', payload: data }),
    [dispatch]
  );

  const {
    items: projects,
    handleAdd,
    handleSave,
    handleEdit,
    handleDelete,
  } = useDynamicForm(state.projects, updateContext);

  return (
    <div className='space-y-6 bg-white m-6 p-4 rounded-xl'>
      <div>
        <h2 className='text-xl font-semibold text-gray-900 mb-4'>Projects</h2>
        <p className='text-gray-700 mb-6'>Showcase your notable projects and achievements.</p>
      </div>

      {projects.map(project => (
        <ProjectItem
          key={project.id}
          project={project}
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
        Add Project
      </Button>
    </div>
  );
};

const ProjectItem = ({ project, onSave, onEdit, onDelete }) => {
  const formik = useFormik({
    initialValues: project.data || {
      title: '',
      description: '',
      technologies: '',
      link: '',
      startDate: '',
      endDate: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Project Title is required'),
      description: Yup.string().required('Description is required'),
    }),
    onSubmit: (values) => {
      onSave(project.id, values);
    },
    enableReinitialize: true, // ✅ ensure updates on edit
  });

  return (
    <div className='space-y-4 mb-6'>
      <div className='flex items-start justify-between'>
        <div className='flex items-center gap-2'>
          <Briefcase className='h-5 w-5 text-blue-600' />
          <h3 className='text-xl font-semibold'>
            {project.data?.title || 'New Project'}
          </h3>
        </div>
        <div className='flex items-center gap-2'>
          {project.isEditing ? (
            <Button variant='ghost' size='sm' onClick={formik.handleSubmit}>
              Done
            </Button>
          ) : (
            <Button variant='ghost' size='sm' onClick={() => onEdit(project.id)}>
              Edit
            </Button>
          )}
          <Button variant='ghost' size='sm' onClick={() => onDelete(project.id)}>
            <Trash2 className='w-4 h-4 text-red-500' />
          </Button>
        </div>
      </div>

      {project.isEditing && (
        <form onSubmit={formik.handleSubmit} className='space-y-4'>
          <Input
            label="Project Title"
            name="title"
            placeholder="e.g. Resume Builder"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.title}
            touched={formik.touched.title}
            required
          />

          <Input
            label="Description"
            name="description"
            placeholder="Brief description of the project"
            multiline
            rows="4"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.description}
            touched={formik.touched.description}
            required
          />

          <Input
            label="Technologies Used"
            name="technologies"
            placeholder="React, Node.js, MongoDB"
            value={formik.values.technologies}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.technologies}
            touched={formik.touched.technologies}
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
            label="Project Link"
            name="link"
            placeholder="https://yourproject.com"
            value={formik.values.link}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.link}
            touched={formik.touched.link}
          />
        </form>
      )}
    </div>
  );
};

export default ProjectForm;
