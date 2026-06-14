import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Advisory Products</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
                        {/* Product 1 */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max flex flex-col justify-between">
                            <div className="m-2 text-justify text-sm flex-1 flex flex-col">
                                <h4 className="font-semibold my-4 text-lg md:text-xl text-center mb-4 h-12 flex items-center justify-center">Equity Research</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48 text-gray-600 flex-1">
                                    Our core offering focuses on fundamentals-driven stock research. We process corporate reports, macroeconomic data, and company valuations to provide curated buy/sell/hold ideas that have high long-term growth potential.
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Request Advisory
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max flex flex-col justify-between">
                            <div className="m-2 text-justify text-sm flex-1 flex flex-col">
                                <h4 className="font-semibold my-4 text-lg md:text-xl text-center mb-4 h-12 flex items-center justify-center">Portfolio Rebalancing</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48 text-gray-600 flex-1">
                                    Active monitoring support for your investment portfolio. We evaluate asset allocations and suggest periodic rebalancing to safeguard your capital and capitalize on emerging market rotations.
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Request Advisory
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Product 3 */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max flex flex-col justify-between">
                            <div className="m-2 text-justify text-sm flex-1 flex flex-col">
                                <h4 className="font-semibold my-4 text-lg md:text-xl text-center mb-4 h-12 flex items-center justify-center">Sector Picks</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48 text-gray-600 flex-1">
                                    Strategic allocation themes in high-conviction growth sectors. Our analysts dive deep into macro tailwinds, government policies, and supply chains to pick leading businesses in key emerging sectors.
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Request Advisory
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Product 4 */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max flex flex-col justify-between">
                            <div className="m-2 text-justify text-sm flex-1 flex flex-col">
                                <h4 className="font-semibold my-4 text-lg md:text-xl text-center mb-4 h-12 flex items-center justify-center">HNIs Wealth Strategy</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48 text-gray-600 flex-1">
                                    Bespoke portfolio structures and private advisory solutions designed for High-Net-Worth Individuals. Experience end-to-end strategy, direct access to analysts, and structured custom portfolios.
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Request Advisory
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;