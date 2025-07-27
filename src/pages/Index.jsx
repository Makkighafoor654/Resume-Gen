import React from "react";
import { Link } from "react-router-dom";
import { FileText, Download, Palette, Zap } from "lucide-react";
import Button from "../components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";
import PersonalInfoForm from "../components/forms/PersonalInfoForm";
import ExperienceForm from "../components/forms/ExperienceForm";
import { mockData } from "../lib/mockData";
import EducationalForm from "../components/forms/EducationalForm";
import SkillsForm from "../components/forms/SkillsForm";
import ProjectForm from "../components/forms/ProjectForm";
import Builder from "./Builder";
const Index = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">
              ResumeGen
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/templates">
              <Button variant="ghost">Templates</Button>
            </Link>
            <Link to="/builder">
              <Button>Get Started</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Build Your
            <span className="text-blue-600 block">Perfect Resume</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create stunning, ATS-friendly resumes with our professional
            templates. Customize everything and download as PDF in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/builder">
              <Button size="lg" className="text-lg px-8 py-4">
                Start Building Free
              </Button>
            </Link>
            <Link to="/templates">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                View Templates
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Stand Out
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features to help you create the perfect resume
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockData.features.map((feature, index) => (
            <Card
              key={index}
            >
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of professionals who have built their resumes with
            ResumeGen
          </p>
          <Link to="/builder">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-4"
            >
              Create Your Resume Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FileText className="h-6 w-6" />
            <span className="text-xl font-bold">ResumeGen</span>
          </div>
          <p className="text-gray-400">
            © 2024 ResumeGen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
