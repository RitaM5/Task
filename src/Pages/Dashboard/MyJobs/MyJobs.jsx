import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa';

const MyJobs = () => {
    const [selectedOption, setSelectedOption] = useState('none');


    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const selectItem = <>
        <select
            className="font-semibold"
            value={selectedOption}
            onChange={handleSelectChange}
        >
            <option value="none">none</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
        </select>
    </>
    //for tab
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };


    return (
        <div className=''>
            <div className='p-8'>
                <div className="navbar bg-base-100 rounded w-full overflow-x-auto">
                    <div className="">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li tabIndex={0}>
                                    <a className='ml-1 text-gray-500'>Job Title f</a>
                                    <div>
                                        {selectItem}
                                        <p><FaCog size={12} className='text-black' /></p>
                                    </div>
                                </li>
                                <li>
                                    <a className='text-gray-500'>Hiring Manager</a>
                                    <p className=' font-semibold'>Nail Patel</p>
                                </li>
                                <li>
                                    <a className='text-gray-500'>Department</a>
                                    <p className=' font-semibold'>Techn</p>
                                </li>
                                <li>
                                    <a className='text-gray-500'>Team</a>
                                    <p className=' font-semibold'>Team-A</p>
                                </li>
                                <li>
                                    <a className='text-gray-500'>Client</a>
                                    <p className=' font-semibold'>John Doe</p>
                                </li>
                                <li>
                                    <a className='text-gray-500'>Status</a>
                                    <p className=' font-semibold text-[#23B574]'>Open</p>
                                </li>
                                <li>
                                    <a className='text-gray-500'>Priority</a>
                                    <p className=' font-semibold text-[#EB5757]'>High</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-2">
                            <li tabIndex={0}>
                                <a className='ml-1 text-gray-500'>Job Title</a>
                                <div>
                                    {selectItem}
                                    <p><FaCog size={12} className='text-black' /></p>

                                </div>

                            </li>
                            <li>
                                <a className='text-gray-500'>Hiring Manager</a>
                                <p className=' font-semibold'>Nail Patel</p>
                            </li>
                            <li>
                                <a className='text-gray-500'>Department</a>
                                <p className=' font-semibold'>Techn</p>
                            </li>
                            <li>
                                <a className='text-gray-500'>Team</a>
                                <p className=' font-semibold'>Team-A</p>
                            </li>
                            <li>
                                <a className='text-gray-500'>Client</a>
                                <p className=' font-semibold'>John Doe</p>
                            </li>
                            <li>
                                <a className='text-gray-500'>Status</a>
                                <p className=' font-semibold text-[#23B574]'>Open</p>
                            </li>
                            <li>
                                <a className='text-gray-500'>Priority</a>
                                <p className=' font-semibold text-[#EB5757]'>High</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='p-5 pb-12'>
                {
                    selectedOption && selectedOption === 'Frontend Developer' && <div className='bg-blue-100  p-5'>
                        <div className="container">
                            <div className="bloc-tabs w-full overflow-x-auto">
                                <button
                                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(1)}
                                >
                                    Job Mangement
                                </button>
                                <button
                                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(2)}
                                >
                                    JD rewrite
                                </button>
                                <button
                                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(3)}
                                >
                                    R3achout
                                </button>
                                <button
                                    className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(4)}
                                >
                                    Search
                                </button>
                                <button
                                    className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(5)}
                                >
                                    Intake
                                </button>
                                <button
                                    className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(6)}
                                >
                                    Interview
                                </button>
                            </div>

                            <div className="content-tabs">
                                <div
                                    className={toggleState === 1 ? "content  active-content" : "content"}
                                >
                                    <div className='grid md:grid-cols-2 gap-4 my-4'>
                                        <div>
                                            <div class="mb-4">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">Job Title</label>
                                                <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Frontend Developer" />
                                            </div>
                                            <div class="mb-4">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">Hiring Manager</label>
                                                <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Nail Patel" />
                                            </div>
                                            <div class="mb-4">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">Department</label>
                                                <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Tech" />
                                            </div>
                                            <div class="mb-4">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">Team</label>
                                                <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Team-A" />
                                            </div>
                                            <div class="mb-4">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">Client</label>
                                                <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="John Doe" />
                                            </div>
                                            <div class="mb-4">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">Priority</label>
                                                <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="High" />
                                            </div>
                                            <div class="mb-4">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">Status</label>
                                                <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Open" />
                                            </div>
                                            <div class="mb-4">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">Stage</label>
                                                <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Initial" />
                                            </div>
                                        </div>
                                        <div>
                                            <div >
                                                <label className="block text-gray-700 text-sm font-bold mb-2" >Upload your Job Description</label>
                                                <div className='mt-4 h-[150px] border-dashed border-2 border-indigo-300'>
                                                    <p className=' flex justify-center items-center px-3'>Drop or upload your file</p>
                                                </div>
                                            </div>
                                            <div className='mt-6'>
                                                <div className="">
                                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="message">Job Descripton</label>
                                                    <div className=''>
                                                        <textarea className="mt-2 h-[200px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Copy/paste your job description"></textarea>
                                                    </div>
                                                    <div className="flex justify-end gap-2 my-3 mr-6">
                                                        <button class="text-green-600 font-bold py-3 px-4 rounded-full border-solid border-2 border-green-600" type="button">
                                                            Cancel
                                                        </button>
                                                        <button className="bg-[#23B574] rounded-full text-white px-5 py-3">Save</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={toggleState === 2 ? "content  active-content" : "content"}
                                >
                                    <h2>Content 2</h2>
                                    <hr />
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                                        voluptatum qui adipisci.
                                    </p>
                                </div>

                                <div
                                    className={toggleState === 3 ? "content  active-content" : "content"}
                                >
                                    <h2>Content 3</h2>
                                    <hr />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                                        nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                                        Accusamus in quia odit aspernatur provident et ad vel distinctio
                                        recusandae totam quidem repudiandae omnis veritatis nostrum
                                        laboriosam architecto optio rem, dignissimos voluptatum beatae
                                        aperiam voluptatem atque. Beatae rerum dolores sunt.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                }

            </div>

        </div>
    );
};

export default MyJobs;