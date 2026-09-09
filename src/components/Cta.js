import React from 'react';
import {Link} from 'react-router-dom';
const Cta = () => {
    return ( 
        <div className="w-full flex items-center justify-center text-white cta bg-blue-950 py-16">
            <div className="mx-8 w-full text-center lg:text-left py-12 px-8 flex lg:justify-between items-center max-w-6xl">                    
                <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center gap-6">
                    <div className="mb-4 lg:mb-0">
                        <p className='text-2xl md:text-4xl font-extrabold mb-3 text-white'>Research built on structure. Delivered with discipline.</p>
                        <p className="text-base md:text-xl text-blue-200">See the process behind the next call, not just the call.</p>
                    </div>
                    
                    <div className="flex-shrink-0">
                        <Link to="/services" className="bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold text-sm rounded-xl px-8 py-4 flex items-center gap-2 group transition duration-300 shadow-lg">
                            EXPLORE RESEARCH PLANS
                            <svg className="w-5 h-5 group-hover:translate-x-1 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Cta;