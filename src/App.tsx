import { useState } from 'react';
import image0 from './images/image0.jpeg';
import './App.css';
import ProjectModal from './ProjectModal';

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [project, setProject] = useState<number>(-1);

  return (
    <body className="h-screen">

    {/* header section */}
    <header className='bg-black fixed top-0 z-30 w-full shadow-md'>
        <div className="container mx-auto">
            <nav className="sm:hidden pt-3 pb-2"> {/* <!-- small screen menu --> */}
                <ul className="flex justify-center gap-10">
                    <li className="text-white hover:text-gray-500"><a href="#about">About</a></li>
                    <li className="text-white hover:text-gray-500"><a href="#portfolio">Portfolio</a></li>
                    <li className="text-white hover:text-gray-500"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <nav className="justify-center items-center h-10 p-10 hidden sm:flex">
                {/* <!-- menu --> */}
                <ul className="flex gap-10">
                    <li className="text-white hover:text-gray-500"><a href="#about">About</a></li>
                    <li className="text-white hover:text-gray-500"><a href="#portfolio">Portfolio</a></li>
                    <li className="text-white hover:text-gray-500"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    {/* <!-- main content --> */}
    <main className='bg-black'>
        <section className="p-20 mt-10 bg-[url('./images/pattern.gif')]">
          <div className="container mx-auto">
            <div className="flex justify-center">
              <div className="flex flex-col gap-5 text-center">
                <img className="rounded-full bg-gray-50 h-52 w-56 mx-auto" src="https://media.licdn.com/dms/image/D5603AQFcTqYfu3_Zdw/profile-displayphoto-shrink_800_800/0/1689483530835?e=1715212800&v=beta&t=2j9iH35q55XotCVc2TeXiiyq72S9GQAwBvpGJvN7ZNA" />
                <div className="flex flex-col gap-3 p-10 rounded-full bg-black transition-all duration-300 ease-in-out">
                  <h1 className="font-bold text-8xl text-orange-300">Nehan Tarefder</h1>
                  <p className="text-white text-md">Computer Science Student @ UIUC</p>
                </div>

                <ul className='flex justify-center gap-5'><li>
                  <a href="https://www.linkedin.com/in/nehan-tarefder" target="_blank">
                    <button className="bg-black border-0 rounded-lg shadow-lg box-border text-white flex items-center justify-center font-sans text-lg lg:text-xl min-w-[60px] min-h-[50px] w-full h-full px-3 whitespace-nowrap cursor-pointer transition-all duration-600 ease-in-out hover:bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 ">
                    <i className="fa-brands fa-linkedin fa-lg"></i>
                    </button>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/nehangit" target="_blank">
                    <button className="bg-black border-0 rounded-lg shadow-lg box-border text-white flex items-center justify-center font-sans text-lg lg:text-xl min-w-[60px] min-h-[50px] w-full h-full px-3 whitespace-nowrap cursor-pointer transition-all duration-600 ease-in-out hover:bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 ">
                    <i className="fa-brands fa-square-github"></i>
                    </button>
                  </a>
                </li></ul>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- about me --> */}
        <section id="about" className=" sm:p-10 lg:pt-20 p-15 bg-black">
            <div className="container mx-auto">
                <div className="sm:columns-2">
                    <img className="xl:min-w-[500px] sm:w-1/2 mb-10 sm:mb-0 pb-5" src={image0} />
                    <div>
                        <h2 className="text-bold text-6xl mb-3 text-orange-300">About Me</h2>
                        <i className="mb-5 text-md text-gray-300">“The computer was born to solve problems that did not exist before.”</i>
                        <br></br>
                        <br></br>
                        <p className="text-white text-justify leading-10">
                            Hello! I'm an undergraduate Computer Science student at the University of Illinois Urbana-Champaign. I'm mainly interested in the intersections of SWE and data science, as well as the applications of computing to large scale problems through distributed systems, networks, and cybersecurity.
                            I love learning about anything and everything. I'm a motivated and fast learner, and I enjoy every step of the development process, from discussion and collaboration to the long nights coding away. I'm currently looking for new learning/research opportunities or internships, and I intend on graduating in 2026.
                            Thanks for stopping by!
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- experience --> */}
        <section id="services" className="sm:p-10 lg:p-17 p-5">
          <div className='xl:flex justify-center gap-10'>
            <div className="sm:container mx-auto">
              <h2 className="italic font-bold text-4xl mb-3 text-orange-300 pb-5">Experience</h2>
              <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">May 2024</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sandia National Laboratories - MissionTech Intern</h3>
                    {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/> 
              </svg></a>*/}
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">March 2024</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Caesar Research Group - Undergraduate Research Assistant (Backend Developer)</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Tentatively: Using Flask to develop REST API endpoints, maintaining databases (MySQL, Postgres), and deploying the server (Docker, Nginx) for the PeopleWeave Project. </p>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">October 2023</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">ACM @ UIUC Infrastructure - Events API Team Member</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Developing and deploying API endpoints for the website calendar using AWS Lambda and DynamoDB.</p>
                </li>
                <li className="ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">October 2023</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Los Alamos National Laboratory - Intern @ CINT</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Software/hardware integration for materials physics experiments using Python and LabVIEW. Data acquisition, visualization, and analysis using NumPy, Pandas, and Matplotlib</p>
                </li>
              </ol>
            </div>
            {/* <!-- skills --> */}
            <div className="sm:container mx-auto">
            <h2 className="italic font-bold text-4xl mb-3 text-center pb-5 text-orange-300">Skills</h2>
              <div className="sm:grid grid-cols-3">
                    <div className="sm:p-10 p-5 bg-gray-800 sm:me-5 mb-7 rounded-md hover:shadow-md">
                        <h3 className="text-xl mb-5 font-bold text-white">Programming</h3>
                        <ul className="space-y-3 list-disc pl-5 text-gray-200">
                        <li>Java</li>
                        <li>Python</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>C++</li>
                        <li>C</li>
                        <li>LabVIEW</li>
                        <li>TypeScript</li>
                        </ul>
                    </div>

                    <div className="sm:p-10 p-5 bg-gray-800 sm:me-5 mb-7 rounded-md hover:shadow-md">
                        <h3 className="text-xl mb-5 font-bold text-white">Web Development</h3>
                        <ul className="space-y-4 list-disc pl-5 text-gray-200">
                            <li>React and Redux</li>
                            <li>Django</li>
                            <li>Bootstrap, Tailwind, and other React UI libraries</li>
                            <li>Flask</li>
                            <li>SQL</li>
                            <li>Non-Relational Databases (DynamoDB)</li>
                            <li>Cloud Services (AWS)</li>
                        </ul>
                    </div>

                    <div className="sm:p-10 p-5 bg-gray-800 sm:me-5 mb-7 rounded-md hover:shadow-md">
                        <h3 className="text-xl mb-5 font-bold text-white">Technology and more!</h3>
                        <ul className="space-y-4 list-disc pl-5 text-gray-200">
                        <li>Linux (Bash, filesystem, CLI tools)</li>
                        <li className="text-blue-500 hover:text-blue-700"><a href="https://www.credly.com/badges/5013ef49-8032-424a-91ca-5264de0ff8ad/public_url" target="_blank">Cybersecurity Fundamentals</a></li>
                        <li>Virtualization</li>
                        <li>Docker</li>
                        <li>Web Applications</li>
                        <li>Networks</li>
                        <li>Research</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </section>

        {/* <!-- portfolio --> */}
        <section className="lg:pt-18 p-5" id="portfolio">
            <div className="lg:container mx-auto">
              <h2 className="text-6xl mb-10 text-orange-300 pb-5 text-center">Projects</h2>
                <div className="lg:columns-4 sm:columns-2">
                    <div className="p-5 bg-gray-50 sm:me-5 sm:mb-10 mb-5 rounded-md hover:shadow-custom transition-all duration-150 ease-in-out" onClick={() => {setOpen(true); setProject(0)}}>
                        <h3 className="text-xl mb-5">Pubchef</h3>
                        <img className="rounded-md h-48 max-h-48 w-full" src="https://rabiulislam.dev/documents/images/portfolio/food-delivery.jpg" />
                    </div>

                    <div className="p-5 bg-gray-50 sm:me-5 sm:mb-10 mb-5 rounded-md hover:shadow-custom transition-all duration-150 ease-in-out" onClick={() => {setOpen(true); setProject(1)}}>
                        <h3 className="text-xl mb-5">Illini Market</h3>
                        <img className="rounded-md h-48 max-h-48 w-full" src="https://rabiulislam.dev/documents/images/portfolio/cms.jpg" />
                    </div>

                    <div className="p-5 bg-gray-50 sm:me-5 sm:mb-10 mb-5 rounded-md hover:shadow-custom transition-all duration-150 ease-in-out" onClick={() => {setOpen(true); setProject(2)}}>
                        <h3 className="text-xl mb-5">Personal Portfolio</h3>
                        <img className="rounded-md h-48 max-h-48 w-full" src="https://rabiulislam.dev/documents/images/portfolio/lms.jpg" />
                    </div>

                    <div className="p-5 bg-gray-50 sm:me-5 sm:mb-10 mb-5 rounded-md hover:shadow-custom transition-all duration-150 ease-in-out" onClick={() => {setOpen(true); setProject(3)}}>
                        <h3 className="text-xl mb-5">The G Tool</h3>
                        <img className="rounded-md h-48 max-h-48 w-full" src="https://rabiulislam.dev/documents/images/portfolio/sdr.jpg" />
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- contact --> */}
        <section className="sm:p-20 p-5" id="contact">
            <div className="sm:container mx-auto">
                <h2 className="text-center text-4xl font-bold pb-10">Contact</h2>
                <div className="w-full sm:flex">
                    <div className="sm:w-1/2 w-full">
                        <div className="mb-5">
                            <h3 className="text-xl">Location</h3>
                            <p className="text-gray-500">Urbana, IL - Albuquerque, NM - Open to remote</p>
                        </div>

                        <div className="mb-5">
                            <h3 className="text-xl">Email</h3>
                            <a className="text-gray-500" href="mailto:nehantarefder@gmail.com">nehantarefder@gmail.com</a> <br></br>
                            <a className="text-gray-500" href="mailto:nehant2@illinois.edu">nehant2@illinois.edu</a>
                        </div>
                    </div>

                    <div className="sm:w-1/2 w-full bg-gray-50 p-10 rounded-md">
                        <form action="#">
                            <div className="mt-5 grid grid-cols-1 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                                    <input type="text" name="username" id="username" autoComplete="username" className="block w-full outline-1 border border-1 flex-1 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Rabiul Islam">
                                    </input>
                                </div>
                            </div>

                            <div className="mt-5 grid grid-cols-1  gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900">Subject</label>
                                    <input type="text" name="subject" id="subject" autoComplete="subject" className="block w-full outline-1 border border-1 flex-1 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Hiring">
                                    </input>
                                </div>
                            </div>

                            <div className="mt-5 grid grid-cols-1  gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">Message</label>
                                    <textarea name="message" id="message" autoComplete="message" className="block w-full outline-1 border border-1 flex-1 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Message"></textarea>
                                </div>
                            </div>

                            <div className="mt-5 grid grid-cols-1 gap-y-8 sm:grid-cols-6">
                                <a href="#" className="bg-gray-200 mx-auto w-32 text-center rounded-md p-2 border border-1 border-gray-100 hover:bg-white">Submit</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <footer className="bg-gray-800 lg:p-20 p-10">
        <p className='text-center text-white'> &copy; Nehan Tarefder 2024 | Made with ❤️</p>
    </footer>
    {open ? <ProjectModal projectid={project} setOpen={setOpen} /> : <></>}
</body>
  );
}

export default App;
