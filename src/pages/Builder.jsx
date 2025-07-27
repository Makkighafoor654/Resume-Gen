import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, FileText, EyeIcon } from 'lucide-react';
import Button from '../components/ui/button';
import { mockData } from '../lib/mockData';
import ResumePreview from '../components/preview/ResumePreview';

const Builder = () => {
  const [showPreview, setShowPreview] = useState(false);

  // Get tabs from mockData
  const { formTabs } = mockData;

  // State to track active tab
  const [activeTab, setActiveTab] = useState(formTabs[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <FileText className="h-7 w-7 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">ResumeGen</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="md" className="border border-gray-300">
              Change Templates
            </Button>
            <Button variant="secondary" size="md">
              <Download className="pr-2" /> Download PDF
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Resume Builder</h1>
          <p className="text-gray-700 mb-4">
            Create your professional resume with our easy-to-use builder.
          </p>

          {/* Tabs */}
          <div className="flex overflow-x-auto gap-4 border-b mb-6">
            {formTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-4 py-2 whitespace-nowrap border-b-2 transition-colors ${activeTab.id === tab.id
                  ? 'border-blue-600 text-blue-600 font-semibold'
                  : 'border-transparent text-gray-700 hover:text-blue-600'
                  }`}
              >
                <tab.icon className="h-5 w-5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Form */}
          <div className="space-y-6">
            <activeTab.component />
          </div>
        </div>
        {showPreview && (
          <div className="mt-10">
            <ResumePreview />
          </div>
        )}
      </main>
      <div className="fixed bottom-4 right-4">
        <Button
          variant="secondary"
          size="md"
          className="rounded-full h-13 w-13"
          onClick={() => setShowPreview(!showPreview)} // ✅ toggle
        >
          <EyeIcon className="h-5 w-5" />
        </Button>
      </div>

    </div>

  );
};

export default Builder;
