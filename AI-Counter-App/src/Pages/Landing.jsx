import React , {useState, useEffect} from 'react'
import Nav from '../Components/Nav'
import Tag from '../Components/Tag'
import { Sparkles } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import CounterCard from '../Components/CounterCard';
import { fetchTextFromAi } from '../lib/ai';
import FeatureBox from '../Components/FeatureBox';
import Milestones from '../Components/Milestone';
import Footer from '../Components/Footer';


const Landing = () => {

    
  const [count, setCount] = useState(7);
  const [aiMsg, setAiMsg] = useState("Loading inspiration..."); // ✅ state
  const [loading, setLoading] = useState(false);


    useEffect(() => {
    const loadMsg = async () => {
      setLoading(true);
      const msg = await fetchTextFromAi(count);
      setAiMsg(msg || "AI didn't respond 😢");
      setLoading(false);
    };
    loadMsg();
  }, [count]);



  return (

    <div className=' min-h-screen  bg-[#0b0f0a] text-white'>
        <Nav/> 

        {/* Hero Section  */}
        <section className='px-4 sm:px-10 md:px-16 lg:px-6 pt-20 md:pt-20 '>
            <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center'>
                
                <div>

                        <h1 className='text-2xl sm:text-3xl md:text-4xl md:pt-16 font-extrabold leading-tight tracking-tight'>
                        AI <span className='text-[#9CE060]'>Counter</span> - 
                        micro-wins, <span className='text-[#90D497]'>macro results</span>.
                        </h1>

                         <p className='mt-6'>
                            A beautiful neon counter with micro-animations. Learn React fundamentals the fun way and sprinkle Al for motivation.
                        </p>

                        <div className='mt-8 flex flex-wrap gap-3'>
                            <Tag icon={<Sparkles/>} label="Framer Motion"/>
                            <Tag icon={<Zap/>} label="Neon UI"/>
                            <Tag icon={<Brain/>} label="AI Tips"/>
                        </div>

                        <div className='mt-8 flex'>
                            <Link to="/Counter" className='px-5 py-2 rounded-xl border border-[#9CE060]
                                bg-[#9be15d]/10 hover:bg-[#196621] transition-colors duration-500  font-bold'>
                                Try Counter
                            </Link>
                        </div>
                </div>


                <div>
                    <CounterCard 
                            count={count}
                            aiMsg={loading ? "⏳ Thinking..." : aiMsg}  // ✅ no more Promise
                            isMilestone={false}
                            loading={loading}
                    />
                </div>

            </div> 


        </section>

         {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <FeatureBox 
            title="Award-style Aesthetics" 
            desc="Glass, gradients, glow. Minimal yet memorable." 
            />

            <FeatureBox 
            title="Fundamentals-First" 
            desc="useState, events, clean code. Beginner-friendly." 
            />

            <FeatureBox 
            title="AI Sprinkles" 
            desc="Short, motivational micro-copy driven by AI." 
            />
        </div>

        <div className='max-w-6xl mx-auto'>
            <Milestones count={0} />
        </div>

        <div className='max-w-6xl mx-auto'>
            <Footer/>
        </div>

        

    </div>
   
  )
}

export default Landing