import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
    const cardRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
    const trackRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const track = trackRef.current;
            if (!track) return;
            
            const rect = track.getBoundingClientRect();
            const totalHeight = rect.height - window.innerHeight;
            
            // Calculate how much the track has scrolled relative to the viewport top
            const scrolled = -rect.top;
            const progress = Math.max(0, Math.min(1, scrolled / totalHeight));

            cardRefs.forEach((ref, idx) => {
                const card = ref.current;
                if (!card) return;

                // 1. Calculate enterProgress
                let enterProgress = 0;
                if (idx === 0) {
                    enterProgress = 1; // Card 0 starts fully active
                } else {
                    const start = (idx - 1) / 4;
                    const end = idx / 4;
                    if (progress < start) {
                        enterProgress = 0;
                    } else if (progress > end) {
                        enterProgress = 1;
                    } else {
                        enterProgress = (progress - start) / (end - start);
                    }
                }

                // 2. Calculate exitProgress
                let exitProgress = 0;
                if (idx === cardRefs.length - 1) {
                    exitProgress = 0; // Last card never exits
                } else {
                    const nextStart = idx / 4;
                    const nextEnd = (idx + 1) / 4;
                    if (progress < nextStart) {
                        exitProgress = 0;
                    } else if (progress > nextEnd) {
                        exitProgress = 1;
                    } else {
                        exitProgress = (progress - nextStart) / (nextEnd - nextStart);
                    }
                }

                // 3. Calculate transform values based on active/transitioning states
                let opacity = 0;
                let rotateX = 0;
                let translateY = 250;
                let scale = 0.95;

                if (enterProgress < 1) {
                    // Entering phase: slides up straight (0deg rotateX), fades in
                    opacity = enterProgress;
                    rotateX = 0;
                    translateY = 250 * (1 - enterProgress);
                    scale = 0.95 + (0.05 * enterProgress);
                } else if (exitProgress > 0) {
                    // Exiting phase: flips away to -90deg (upper side 90deg flip), slides up and away, fades out
                    opacity = 1 - exitProgress;
                    rotateX = -90 * exitProgress;
                    translateY = -150 * exitProgress;
                    scale = 1 - (0.15 * exitProgress);
                } else {
                    // Active phase: flat, fully visible
                    opacity = 1;
                    rotateX = 0;
                    translateY = 0;
                    scale = 1;
                }

                // Apply styles dynamically
                card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale}) rotateX(${rotateX}deg)`;
                card.style.opacity = `${opacity}`;
                card.style.zIndex = idx + 1;
                card.style.pointerEvents = (enterProgress === 1 && exitProgress === 0) ? 'auto' : 'none';
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const cardTransitionStyle = {
        transition: 'transform 0.05s ease-out, opacity 0.05s ease-out',
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden'
    };

    return (
        <>
        {/* Company Registration and Profile Banner */}
        <div className="bg-gray-50 py-16 px-4 border-b border-gray-200" id="about">
            <div className="max-w-6xl mx-auto" data-aos="fade-up">
                
                {/* About Narrative Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 uppercase tracking-wider mb-3">
                        About SigmaOne Capital
                    </h2>
                    <div className="w-24 border-b-4 border-blue-900 rounded-full mx-auto mb-8"></div>
                    
                    <div className="max-w-4xl mx-auto text-left text-gray-700 space-y-6 text-sm md:text-base leading-relaxed mb-12">
                        <p>
                            SigmaOne Capital is an independent research and advisory firm built on a singular belief — exceptional outcomes are achieved through exceptional research.
                        </p>
                        <p>
                            In a world flooded with opinions, headlines, and market noise, we provide clarity through disciplined analysis, strategic thinking, and a relentless pursuit of excellence.
                        </p>
                        <p>
                            Our philosophy integrates fundamental research, technical intelligence, macroeconomic analysis, and rigorous risk management to uncover opportunities across financial markets. Every insight is guided by a structured framework designed to help investors and traders make informed, confident, and objective decisions.
                        </p>
                        <p className="font-extrabold text-blue-900 text-center italic text-lg md:text-xl py-2">
                            "We believe that capital deserves stewardship, not speculation."
                        </p>
                        <p>
                            Driven by integrity, precision, and an unwavering commitment to quality, SigmaOne Capital seeks to empower clients with institutional-grade research while maintaining the highest standards of professionalism and transparency.
                        </p>
                        <p className="font-bold text-gray-900 text-center text-md md:text-lg">
                            Because successful investing is not about predicting the future—it's about preparing for it.
                        </p>
                    </div>
                </div>

                <div className="text-center mb-10 pt-8 border-t border-gray-200">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 uppercase tracking-wider mb-3">
                        Corporate Profile
                    </h2>
                    <div className="w-20 border-b-2 border-blue-900 rounded-full mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Full Name & Status Card */}
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300 flex items-start gap-4">
                        <div className="p-3 bg-blue-50 rounded-xl text-blue-900">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Company Name</h4>
                            <p className="text-md font-bold text-gray-800">Sigmaone Capital</p>
                            <p className="text-xs text-green-600 font-semibold mt-1 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Active / Registered
                            </p>
                        </div>
                    </div>

                    {/* CIN Registration Card */}
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300 flex items-start gap-4">
                        <div className="p-3 bg-blue-50 rounded-xl text-blue-900">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">SEBI Registration Number</h4>
                            <p className="text-md font-bold text-gray-800 tracking-wide">U67190MP2023PTC065432</p>
                            <p className="text-xs text-gray-500 font-medium mt-1">Incorporated under Ministry of Corporate Affairs</p>
                        </div>
                    </div>


                    {/* Registered Address Card */}
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300 flex items-start gap-4 md:col-span-2 lg:col-span-1">
                        <div className="p-3 bg-blue-50 rounded-xl text-blue-900">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Registered Address</h4>
                            <p className="text-xs font-bold text-gray-700 leading-relaxed">
                                903, A-1 Sector, Scheme-136, Niranjanpur, Indore, Madhya Pradesh - 452010
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center px-8 py-3 text-md font-bold shadow-lg hover:shadow-xl rounded-2xl group">
                        Get In Touch
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
        </div>

        {/* Scroll Stacking Track Container (pinned scroll section) */}
        <div ref={trackRef} className="relative h-[350vh] bg-blue-950 w-full" id="principles-track">
            {/* Sticky Viewport Container - adjusted positioning and height */}
            <div className="sticky top-0 h-screen w-full flex flex-col justify-start items-center overflow-hidden z-10 pt-32 pb-8">
                {/* Background image & tint */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-blue-950/85"></div>
                
                {/* Centered Stacking Card Deck Parent */}
                <div className="relative z-10 max-w-2xl w-full px-6 flex flex-col items-center">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-widest">
                            The SigmaOne Principles
                        </h2>
                        <p className="text-blue-300 font-semibold mt-2 text-xs md:text-sm uppercase tracking-wider">
                            Core Values Driving Unbiased Success
                        </p>
                    </div>

                    {/* Cards Stack Parent Frame - adjusted height and perspective */}
                    <div className="relative w-full h-[330px] md:h-[260px]" style={{ perspective: '1200px' }}>
                        
                        {/* Principle 1 */}
                        <div ref={cardRefs[0]} style={cardTransitionStyle} className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 md:p-6 shadow-2xl text-white flex flex-col justify-center">
                            <h3 className="text-lg md:text-2xl font-extrabold text-white mb-2 flex items-center gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]"></span>
                                We are a fiduciary to our clients.
                            </h3>
                            <p className="text-sm md:text-base text-blue-200 font-extrabold mb-2">Our clients' interests come first.</p>
                            <p className="text-gray-200 leading-relaxed text-xs md:text-sm">
                                The fiduciary mindset is the bedrock of our identity. It reflects our integrity and the unbiased advice we give our clients. And it's what inspires us to come to work every day and help people build better futures.
                            </p>
                        </div>

                        {/* Principle 2 */}
                        <div ref={cardRefs[1]} style={cardTransitionStyle} className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 md:p-6 shadow-2xl text-white flex flex-col justify-center">
                            <h3 className="text-lg md:text-2xl font-extrabold text-white mb-2 flex items-center gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
                                We are SigmaOne.
                            </h3>
                            <p className="text-gray-200 leading-relaxed mb-2 text-xs md:text-sm">
                                We work collaboratively, without silos and without turf, to create the best outcomes for our clients, our firm, and the communities where we operate.
                            </p>
                            <ul className="space-y-1.5 text-xs md:text-sm text-gray-200 pl-2">
                                <li className="flex items-start gap-2">
                                    <svg className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span><strong>A diverse workforce</strong> is indispensable to our success, helping us solve the toughest problems.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span><strong>An inclusive culture</strong> enables us to draw on unique experiences from across the firm.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Principle 3 */}
                        <div ref={cardRefs[2]} style={cardTransitionStyle} className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 md:p-6 shadow-2xl text-white flex flex-col justify-center">
                            <h3 className="text-lg md:text-2xl font-extrabold text-white mb-2 flex items-center gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
                                We are passionate about performance.
                            </h3>
                            <p className="text-gray-200 leading-relaxed mb-2 text-xs md:text-sm">
                                We are relentless about finding better ways to serve our clients and improve our firm. Since our founding, innovation has been at the center of how we deliver performance and stay ahead of our clients' needs.
                            </p>
                            <ul className="space-y-1.5 text-xs md:text-sm text-gray-200 pl-2">
                                <li className="flex items-start gap-2">
                                    <svg className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>We have <strong>continually reinvented</strong> our industry to help people achieve their goals.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>We are <strong>lifelong students</strong> of markets, technology, and the world.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Principle 4 */}
                        <div ref={cardRefs[3]} style={cardTransitionStyle} className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 md:p-6 shadow-2xl text-white flex flex-col justify-center">
                            <h3 className="text-lg md:text-2xl font-extrabold text-white mb-2 flex items-center gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
                                We take emotional ownership.
                            </h3>
                            <p className="text-gray-200 leading-relaxed mb-2 text-xs md:text-sm">
                                The people we serve entrust us to help them prepare for the future. Our culture is defined by the deep sense of responsibility we feel to our clients and to each other.
                            </p>
                            <ul className="space-y-1.5 text-xs md:text-sm text-gray-200 pl-2">
                                <li className="flex items-start gap-2">
                                    <svg className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>In everything we do, we are emotionally invested in our clients' futures.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>We hold ourselves and each other to the highest standards of excellence.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Principle 5 */}
                        <div ref={cardRefs[4]} style={cardTransitionStyle} className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 md:p-6 shadow-2xl text-white flex flex-col justify-center">
                            <h3 className="text-lg md:text-2xl font-extrabold text-white mb-2 flex items-center gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></span>
                                We are committed to a better future.
                            </h3>
                            <p className="text-gray-200 leading-relaxed mb-2 text-xs md:text-sm">
                                We are long-term thinkers, focused on helping people build a better tomorrow. We are deeply invested in the success of all of our stakeholders - clients, employees, shareholders, and communities.
                            </p>
                            <ul className="space-y-1.5 text-xs md:text-sm text-gray-200 pl-2">
                                <li className="flex items-start gap-2">
                                    <svg className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>We advocate for sustainable business practices that drive long-term value.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>We constantly innovate to serve more people and help them achieve financial well-being.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Intro;