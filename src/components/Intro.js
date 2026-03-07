import React from 'react';
import img from '../images/Web-developer.svg';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <>
        <div className="m-auto max-w-6xl p-2 md:px-12 md:py-16 h-auto" id='about' >
            <div className="flex flex-col-reverse lg:flex-row py-4 justify-between lg:text-left" data-aos="fade-up">
                <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                    <img alt="card img" className="rounded-t float-right" src={img} />
                </div>
                <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                    <h3 className="text-3xl text-blue-900 font-bold">Our Core Philosophy: Investment Is A Science Not An Art</h3>
                    <div>
                        <p className='my-3 text-xl text-gray-600 font-semibold'>SigmaOne Capital collects all relevant information, processes, tabulates and presents fair values for most stocks in India. As one of the best stock advisors in India, we also shortlist stocks that reported better working results in the latest concluded trailing twelve month period.</p>
                    </div>
                    <div>
                        <p className='my-3 text-xl text-gray-600 font-semibold'>SigmaOne Capital's study of price behaviour of 5000+ companies over 20 years (80 quarters), has proven that 87% of undervalued growth stocks appreciated by more than 10% in the next three months.</p>
                    </div>
                    <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                        Contact us
                        <svg className="w-4 h-4 ml-1 group-hover: translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>

            {/* Principles Section */}
            <div className="py-12 mt-12 border-t border-gray-200" data-aos="fade-up">
                <h2 className="text-4xl text-blue-900 font-bold text-center mb-12">The SigmaOne Principles</h2>
                <div className="space-y-12">
                    {/* Principle 1 */}
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="text-7xl font-bold text-blue-900 md:w-1/6 text-center">1<span className="text-orange-500">.</span></div>
                        <div className="md:w-5/6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">We are a fiduciary to our clients.</h3>
                            <p className="text-lg text-gray-600 font-semibold mb-2">Our clients' interests come first.</p>
                            <p className="text-md text-gray-600 mb-2">The fiduciary mindset is the bedrock of our identity. It reflects our integrity and the unbiased advice we give our clients. And it's what inspires us to come to work every day and help people build better futures.</p>
                        </div>
                    </div>

                    {/* Principle 2 */}
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="text-7xl font-bold text-blue-900 md:w-1/6 text-center">2<span className="text-orange-500">.</span></div>
                        <div className="md:w-5/6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">We are One SigmaOne.</h3>
                            <p className="text-md text-gray-600 mb-4">We work collaboratively, without silos and without turf, to create the best outcomes for our clients, our firm, and the communities where we operate.</p>
                            <ul className="list-disc pl-5 space-y-2 text-md text-gray-600">
                                <li><strong>A diverse workforce</strong> is indispensable to our creativity and success. It's how we answer the biggest questions and solve the toughest problems.</li>
                                <li><strong>A connected and inclusive culture</strong> makes us thrive. It enables us to draw on expertise and unique experiences from across the firm and bring out the best in each other.</li>
                                <li><strong>Our unified platform</strong> unifies us, creating a common language for us to interpret the world, the markets, and our clients' needs.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Principle 3 */}
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="text-7xl font-bold text-blue-900 md:w-1/6 text-center">3<span className="text-orange-500">.</span></div>
                        <div className="md:w-5/6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">We are passionate about performance.</h3>
                            <p className="text-md text-gray-600 mb-4">We are relentless about finding better ways to serve our clients and improve our firm. Since our founding, innovation has been at the center of how we deliver performance and stay ahead of our clients' needs.</p>
                            <ul className="list-disc pl-5 space-y-2 text-md text-gray-600">
                                <li>We have <strong>continually reinvented</strong> our firm and our industry to help people achieve their goals.</li>
                                <li>We are <strong>lifelong students</strong> - of markets, of technology, and of the world.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Principle 4 */}
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="text-7xl font-bold text-blue-900 md:w-1/6 text-center">4<span className="text-orange-500">.</span></div>
                        <div className="md:w-5/6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">We take emotional ownership.</h3>
                            <p className="text-md text-gray-600 mb-4">The people we serve entrust us to help them prepare for the future. Our culture is defined by the deep sense of responsibility we feel to our clients and to each other.</p>
                            <ul className="list-disc pl-5 space-y-2 text-md text-gray-600">
                                <li>In everything we do - from the investment performance we deliver to the technology we develop - we are emotionally invested in our clients' futures.</li>
                                <li>We are equally invested in the success of <strong>our firm and our colleagues</strong>. We hold ourselves and each other to the highest standards of excellence.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Principle 5 */}
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="text-7xl font-bold text-blue-900 md:w-1/6 text-center">5<span className="text-orange-500">.</span></div>
                        <div className="md:w-5/6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">We are committed to a better future.</h3>
                            <p className="text-md text-gray-600 mb-4">We are long-term thinkers, focused on helping people build a better tomorrow. We are deeply invested in the success of <strong>all of our stakeholders</strong> - our clients, our employees, our shareholders, and the communities where we operate - and we run our business sustainably and responsibly.</p>
                            <ul className="list-disc pl-5 space-y-2 text-md text-gray-600">
                                <li>At the companies we invest in for our clients, we advocate for sustainable and responsible business practices that drive long-term value.</li>
                                <li>We always strive to serve more people, and to find new and innovative ways to help them achieve financial well-being.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Intro;