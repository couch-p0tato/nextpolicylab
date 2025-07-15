import React, { useState, useEffect } from 'react';
import { FaLinkedin } from "react-icons/fa";
import ProjectModal from './ProjectModal';

const projectData1 = {
    title: "Oluwakemisola Adeusi",
    description_1: ["Kemi Adeusi conducts research on transnational, Afro-German, and migrant literature, exploring the works in these categories and examining how they narrate experiences from various perspectives, defying single-stranded representations and how they are unburdened by the pain of the past, giving way to future possibilities and relationships.",
        "Before joining Next Policy Lab, she was at the Stanford German Department as a Ph.D. Candidate. She earned a B.A. degree in German from the University of Ibadan, Nigeria in 2019, and completed her M.A. program in German from the University of Alabama Tuscaloosa in 2022."
    ],
};

const projectData2 = {
    title: "Gift Iyioku",
    description: ["Gift Iyioku is a scholar, writer, and policy advocate whose work bridges German studies, political theory, and international development. Currently pursuing a Ph.D. in German Studies with a minor in Political Science at Stanford University, she explores Afro-German migration narratives and how they shape global conversations on migration, identity, and policy. Her interdisciplinary research draws connections between personal storytelling, cultural representation, and broader political contexts, offering insights that resonate far beyond academia.",
        "Beyond her scholarship, Gift is deeply committed to Africa-centered development and youth empowerment. She has worked with UNESCO and the Africa Progress Group on initiatives like the “Population as an Asset” report, advocating for stronger U.S.–Africa partnerships and investment in human capital. As a Research Fellow at Stanford’s Hoover Institution History Lab, she continues to contribute thought leadership on migration, AI ethics, and equitable policymaking. Recognized as a Stanford EDGE Fellow and a two-time DAAD Scholar, Gift brings a unique blend of academic excellence, cultural fluency, and real-world impact to every space she occupies."
    ],
};



const Team = () => {

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
        <div className='flex flex-col items-center gap-8 mb-10 lg:mt-12 w-[96%] md:w-[90%] lg:w-[96%]'>
            <div className='flex flex-col items-center lg:items-start text-center lg:text-left gap-6 w-[90%] lg:w-full'>
                <h3 className='font-bold text-2xl lg:text-3xl tracking-widest'>MEET OUR TEAM</h3>
                <p className='uppercase text-black/80 text-sm lg:text-base leading-relaxed tracking-wider lg:w-[90%]'>Bringing together thinkers, makers, and visionaries to shape the future of culture, technology, and the humanities.</p>
            </div>

            <div className='flex flex-col lg:flex-row text-white gap-3 md:gap-8 lg:gap-3 w-full'>
                <div className='relative h-[600px] md:h-[700px] rounded overflow-hidden'>
                    <div className='element element-6 h-full py-10 px-5 lg:py-12 lg:px-11 flex flex-col gap-8 md:gap-12 justify-end'>
                        <div className='flex flex-col gap-2 lg:gap-4'>
                            <h4 className='font-bold text-xl lg:text-2xl'>Gift Iyioku</h4>
                            <p className='text-white/60 lg:text-lg'>Gift Iyioku is an academic focused on translating academic research into actionable government policies. She earned... <button onClick={() => openModal(projectData2)} className='underline font-bold cursor-pointer'>Read More</button></p>
                        </div>

                        <button onClick={() => window.open('https://www.linkedin.com/in/gift-iyioku-3aa644178?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', '_blank')} className='text-white flex flex-row items-center justify-center gap-3 md:text-lg bg-[#353030]/80 py-1.5 md:py-2.5 border border-white font-light cursor-pointer w-[60%]'>
                            <FaLinkedin />
                            LINKED<span className='text-white/60'>IN</span>
                        </button>
                    </div>
                </div>

                <div className='relative h-[600px] md:h-[700px] rounded overflow-hidden'>
                    <div className='element element-7 h-full py-10 px-5 lg:py-12 lg:px-11 flex flex-col gap-8 md:gap-12 justify-end'>
                        <div className='flex flex-col gap-2 lg:gap-4'>
                            <h4 className='font-bold text-xl lg:text-2xl'>Oluwakemisola Adeusi</h4>
                            <p className='text-white/60 lg:text-lg'>Kemi Adeusi conducts research on transnational, Afro-German, and migrant literature, exploring the works in... <button onClick={() => openModal(projectData1)} className='underline font-bold cursor-pointer'>Read More</button> </p>
                        </div>

                        <button onClick={() => window.open('https://www.linkedin.com/in/oluwakemisola-adeusi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', '_blank')} className='text-white flex flex-row items-center justify-center gap-3 md:text-lg bg-[#353030]/80 py-1.5 md:py-2.5 border border-white font-light cursor-pointer w-[60%]'>
                            <FaLinkedin />
                            LINKED<span className='text-white/60'>IN</span>
                        </button>
                    </div>
                </div>

                {/* Modal */}
                <ProjectModal
                    project={selectedProject}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                />

            </div>
        </div>
    </div>
  )
}

export default Team