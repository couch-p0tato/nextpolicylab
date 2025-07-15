import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        return () => (document.body.style.overflow = 'auto');
    }, [isOpen]);

    if (!isOpen || !project) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      <div className="fixed top-1/2 left-1/2 z-50 w-full max-w-md p-6 bg-white rounded-xl shadow-lg transform -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <h4 className="font-semibold">Technologies:</h4>
        <ul className="list-disc list-inside text-sm text-gray-600">
          {project.tech.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProjectModal