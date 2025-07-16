import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const renderDescription = (desc) => {
    if (Array.isArray(desc)) {
      return desc.map((p, idx) => <p key={idx} className="mb-3 text-gray-700">{p}</p>);
    }
    return <p className="mb-3 text-gray-700">{desc}</p>;
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" onClick={onClose} />

      <div className="fixed top-1/2 left-1/2 z-50 h-[500px] lg:h-fit overflow-y-scroll lg:overflow-y-auto w-[95%] lg:w-full max-w-2xl p-6 bg-white rounded shadow-lg transform -translate-x-1/2 -translate-y-1/2">
        <div className='flex justify-between'>
            <h2 className="text-xl text-black font-semibold mb-4">{project.title}</h2>

            <button onClick={onClose} className=" text-black hover:text-[#353030]/80 cursor-pointer self-start">
                <X className="w-6 h-6" />
            </button>
        </div>

        {renderDescription(project.description || project.description_1)}

      </div>
    </>
  );
};

export default ProjectModal;
