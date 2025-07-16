import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const projectData1 = {
    title: "EduPass - Digital Education Passport for Migrants and Refugees",
    description_1: "EduPass is a secure, cloud-based digital education passport that allows displaced persons, returnee migrants, and underserved youth to store and transfer academic records, vocational certifications, and language proficiencies across borders. Designed to address the challenges of lost or unverifiable academic histories caused by conflict and migration, EduPass is helping thousands of learners regain access to education systems in Nigeria and support skills portability for returnees in Ghana and Kenya.",
};

const projectData2 = {
    title: "MobiPolicy - AI-Powered Policy Simulator for Governments and NGOs",
    description: "MobiPolicy is an AI-powered digital tool designed to help African ministries and NGOs with evidence-based policy planning in youth development, education, and migration. By utilizing real datasets and predictive analytics, MobiPolicy allows decision-makers to simulate the impact of their policy choices before implementation. It has been used in Osun State for redesigning their Youth Engagement Framework, by an NGO consortium in Kaduna State for refugee education planning, and in a governance course at the University of Ibadan.",
};

const projectData3 = {
    title: "K-Link - Language-Workforce-Civic Integration App",
    description: "K-Link is a mobile platform developed as part of the KG Language School to support migrants and displaced individuals through contextualized language learning, job preparation, and civic education. Unlike traditional language apps, K-Link features AI-driven modules that guide users through job readiness and civic rights education, tailored to their host communities. It is currently used by resettlement partners in Lagos, diaspora support offices, and is being translated for broader access in rural areas. In partnership with SendMe Food Tech Ltd, K-Link is also preparing rural youth for careers in agro-tech.",
};

const projectData4 = {
    title: "YouthGov360 - Civic Simulation & Policy Training Game",
    description: "YouthGov360 is a gamified civic and policy simulation tool created to engage young Africans in governance and decision-making. By simulating scenarios like managing state education budgets or addressing youth migration, YouthGov360 helps students understand real-world policy trade-offs. The platform is informed by African governance structures and offers an interactive learning experience focused on practical policy challenges.",
};


const Projects = () => {

    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setIsModalOpen(false);
    };

  return (
    <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center gap-8 my-10 lg:mt-20 w-[96%] md:w-[90%] lg:w-[96%]'>
            <div className='flex flex-col items-center lg:items-start text-center lg:text-left gap-6 w-[90%] lg:w-full'>
                <h3 className='font-bold text-2xl lg:text-3xl tracking-widest'>SEE OUR PROJECTS</h3>
                <p className='uppercase text-black/80 text-sm lg:text-base leading-relaxed tracking-wider lg:w-[90%]'>Exploring bold ideas at the intersection of culture, technology, and the humanities—discover the innovative work shaping our lab</p>
            </div>

            <div className='flex flex-col lg:grid lg:grid-cols-2 text-white gap-2 md:gap-8 lg:gap-3 w-full'>
                <div className='relative h-[500px] md:h-[600px] lg:h-[650px] rounded overflow-hidden'>
                    <div className='element element-2 h-full py-10 px-5 lg:py-12 lg:px-11 flex flex-col justify-between'>
                        <div className='flex flex-col gap-2 lg:gap-4'>
                            <h4 className='font-bold text-xl lg:text-2xl'>Edupass</h4>
                            <p className='text-white/60 lg:text-lg'>Portable Digital Education Passport for Migrants and Refugees</p>
                        </div>

                        <button onClick={() => openModal(projectData1)} className='text-white md:text-lg bg-[#353030]/80 py-1.5 md:py-2.5 px-10 border border-white font-light cursor-pointer w-[80%] md:w-[60%] lg:w-[50%]'>
                            OPEN <span className='text-white/60'>PROJECT</span>
                        </button>
                    </div>
                </div>

                <div className='relative h-[500px] md:h-[600px] lg:h-[650px] rounded overflow-hidden'>
                    <div className='element element-3 h-full py-10 px-5 lg:py-12 lg:px-11 flex flex-col justify-between'>
                        <div className='flex flex-col gap-2 lg:gap-4'>
                            <h4 className='font-bold text-xl lg:text-2xl'>MobiPolicy</h4>
                            <p className='text-white/60 lg:text-lg'>AI-Powered Policy Simulator for Governments and NGOs</p>
                        </div>

                        <button onClick={() => openModal(projectData2)} className='text-white md:text-lg bg-[#353030]/80 py-1.5 md:py-2.5 px-10 border border-white font-light cursor-pointer w-[80%] md:w-[60%] lg:w-[50%]'>
                            OPEN <span className='text-white/60'>PROJECT</span>
                        </button>
                    </div>
                </div>

                <div className='relative h-[500px] md:h-[600px] lg:h-[650px] rounded overflow-hidden'>
                    <div className='element element-4 h-full py-10 px-5 lg:py-12 lg:px-11 flex flex-col justify-between'>
                        <div className='flex flex-col gap-2 lg:gap-4'>
                            <h4 className='font-bold text-xl lg:text-2xl'>K-Link</h4>
                            <p className='text-white/60 lg:text-lg'>Language–Workforce–Civic Integration App</p>
                        </div>

                        <button onClick={() => openModal(projectData3)} className='text-white md:text-lg bg-[#353030]/80 py-1.5 md:py-2.5 px-10 border border-white font-light cursor-pointer w-[80%] md:w-[60%] lg:w-[50%]'>
                            OPEN <span className='text-white/60'>PROJECT</span>
                        </button>
                    </div>
                </div>

                <div className='relative h-[500px] md:h-[600px] lg:h-[650px] rounded overflow-hidden'>
                    <div className='element element-5 h-full py-10 px-5 lg:py-12 lg:px-11 flex flex-col justify-between'>
                        <div className='flex flex-col gap-2 lg:gap-4'>
                            <h4 className='font-bold text-xl lg:text-2xl'>YouthGov360</h4>
                            <p className='text-white/60 lg:text-lg'>Civic Simulation & Policy Training Game</p>
                        </div>

                        <button onClick={() => openModal(projectData4)} className='text-white md:text-lg bg-[#353030]/80 py-1.5 md:py-2.5 px-10 border border-white font-light cursor-pointer w-[80%] md:w-[60%] lg:w-[50%]'>
                            OPEN <span className='text-white/60'>PROJECT</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>

        {/* Modal */}
        <ProjectModal
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={closeModal}
        />


    </div>
  )
}

export default Projects