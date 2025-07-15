import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const projectData1 = {
    title: "EduPass - Portable Digital Education Passport for Migrants and Refugees",
    description_1: ["I conceptualized and developed EduPass, a secure, cloud-based education passport that allows displaced persons, returnee migrants, and underserved youth to store and transfer academic records, vocational certifications, and language proficiencies across institutional and national borders. It was specifically designed to address the problem of lost or unverifiable academic histories due to conflict, migration, or poor recordkeeping—challenges that disproportionately affect learners across sub-Saharan Africa.",
        "In collaboration with education ministries, EduPass is now being used to reinstate thousands of displaced learners back into school systems in Nigeria. It also supports skills portability for returnees in Ghana and Kenya and has been reviewed by partners in Europe who are exploring cross-border credentialing frameworks.  (Exhibit 9.18)"
    ],
};

const projectData2 = {
    title: "MobiPolicy - AI-Powered Policy Simulator for Governments and NGOs",
    description: "I designed MobiPolicy to equip African ministries and NGOs with a user-friendly digital tool that enables evidence-based policy planning in the fields of youth development, education, and migration. Using real datasets, predictive analytics, and AI-generated scenario models, this tool allows decision-makers to simulate the consequences of their policy options before adoption—something previously unavailable to many local governments due to cost or complexity. MobiPolicy was utilized by Osun State in the redesign of their Youth Engagement Framework, by an NGO consortium in Kaduna State, Nigeria, for refugee education planning, and it has been piloted in a governance and policy course at the University of Ibadan. (Exhibit 9.18)",
};

const projectData3 = {
    title: "K-Link - Language-Workforce-Civic Integration App",
    description: "K-Link, developed as a branch of the KG Language School, serves as a comprehensive mobile platform that supports migrants and displaced individuals through contextualized language learning, vocational readiness, and civic education. Unlike typical language apps, K-Link incorporates AI-adaptive features to guide each user through job-preparation modules, civic rights education, and survival language learning tailored to host communities. It is now used by NGO resettlement partners in Lagos, diaspora support offices, and is being translated into local languages for broader rural access. In collaboration with SendMe Food Tech Ltd, it is also being used to prepare rural youth for participation in agro-tech employment pipelines. (Exhibit 9.18)",
};

const projectData4 = {
    title: "YouthGov360 - Civic Simulation & Policy Training Game",
    description: ["YouthGov360 is a gamified civic and policy simulation tool I developed to engage young Africans in governance and civic decision-making. Through role-based learning, students simulate scenarios such as managing a state education budget, responding to youth migration, or implementing gender-focused school reforms. It teaches real-life policy trade-offs in an interactive environment informed by African governance structures. (Exhibit 9.18)",
        "YouthGov360 is now embedded in Osun State’s secondary school civic curriculum, adopted in youth political training by the National Youth Parliament, and used by students at Obafemi Awolowo University.",
    ],
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