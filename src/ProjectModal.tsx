import {useEffect, useState} from 'react';

type Project = {
    id: number;
    name: string;
    description: string;
    stack: string[];
    imageUrl?: string;
    projectUrl: string;
  }

const projects: Project[] = [
    {
      id: 0,
      name: "Pubchef",
      description: "Building a full stack web app for users to find and buy home cooked meals from home chefs near them based on certain cuisines/cravings. 'Stay at home' cooks can create postings, manage their profile, and sell food items. This is a long term project and a work in progress.",
      stack: ["React (JavaScript)", "Bootstrap", "Django (REST Framework)", "SQLLite"],
      imageUrl: './pubc.png', // Replace with actual image URL
      projectUrl: "https://github.com/Tcthommyson/ChefFrontEnd",
    },
    {
        id: 1,
        name: "Illini Market",
        description: "Built a full stack web platform to facilitate the buying and selling of college related items (including school supplies, clothes, game tickets, etc.) between UIUC Students. Implemented similarity searching, CRUD operations, and the OAuth 2.0 protocol with Google API Endpoints. Worked in a team of 4 and was finalist at HackIllinois 2024.",
        stack: ["React (TypeScript)", "Chakra UI", "Flask", "Python", "SQLLite"],
        imageUrl: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/783/782/datas/original.jpeg", // Replace with actual image URL
        projectUrl: "https://github.com/anshulg3/Illini-Market",
      },
      {
        id: 2,
        name: "Personal Portfolio",
        description: "Built a personal portfolio website to showcase my projects and skills. Implemented EmailJS and reCAPTCHA. The website has a responsive and clean design, and is hosted with Firebase.",
        stack: ["React (Typescript)", "Tailwind CSS"],
        projectUrl: "",
      },
      {
        id: 3,
        name: "The G Tool",
        description: "Tool created with JavaScript that consists of finals grade calculator, word counter, and a college searcher. Used BeautifulSoup4 for the web scraping and implemented the college search algorithm with JavaScript.",
        stack: ["JavaScript", "HTML/CSS", "Python (for web scraping)"],
        projectUrl: "https://nehangit.github.io/jtool.html",
      },
    // Add more projects as needed
];

const ProjectModal = ({ projectid, setOpen }: { projectid: number, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [project, setProject] = useState<Project | null>(null);
    useEffect(() => {
        const proj = projects.find((project) => project.id === projectid);
        if (proj) {
            setProject(proj);
        }
    }, [projectid]);
    useEffect(() => {
        if (project) {  
            document.body.style.overflow = 'hidden';
        }
    }, [project]);
    const handleModalClose = () => {
        document.body.style.overflow = 'auto';
        setProject(null);
        setOpen(false);
    };

    return (
    <div id="readProductModal" tabIndex={-1} className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-modal md:h-full" onClick={() => {handleModalClose()}}>
    <div className="relative p-4 w-full max-w-3xl h-full md:h-auto" onClick={(e) => {e.stopPropagation()}}>
        {/* <!-- Modal content --> */}
        <div className="relative p-4 bg-gray-800 rounded-lg shadow sm:p-5">
        {/* <!-- Modal header --> */}
        <div className="flex justify-between mb-4 rounded-t sm:mb-5 pb-1">
        <div className="text-lg text-white md:text-xl">
            <h3 className="text-4xl font-semibold">
                {project?.name}
            </h3>
        </div>
        <div>
            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-600 hover:text-white rounded-lg text-sm p-1.5 inline-flex" onClick={() => {handleModalClose()}}>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
        </div>
    </div>
    {project?.imageUrl && <img src={project?.imageUrl} className="w-full h-64 rounded-lg h-full pb-6" />}
    <dl>
        <dd className="mb-4 font-light text-lg text-gray-300 sm:mb-5 pb-2">{project?.description}</dd>
        <dt className="mb-2 font-semibold text-xl leading-none text-white">Tech Stack 💻🚀</dt>
        <div className='flex gap-3 pb-1'>
                    {project?.stack.map((item, index) => (
                        <div key={index} className="mb-4 font-light sm:mb-5 text-yellow-400 px-6 py-2 rounded-full bg-gray-600">
                            {item}
                        </div>
                    ))}
                    </div>
                </dl>
                <a href={project?.projectUrl} target="_blank">
                <button type="button" className="py-2.5 px-5 text-md font-medium focus:outline-none rounded-lg border hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700">
                    <i className="fa-solid fa-up-right-from-square pr-2"></i>
                    Visit
                </button>
                </a>
        </div>
        </div>
    </div>
    );
    }
;
// make visit button right aligned
export default ProjectModal;