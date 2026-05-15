import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Github, Twitter, Mail, ArrowRight, Code2, Terminal, Layers } from 'lucide-react';

export default function App() {
  const [backendMessage, setBackendMessage] = useState<string>('Loading backend...');

  useEffect(() => {
    fetch('/api/message')
      .then((res) => res.json())
      .then((data) => setBackendMessage(data.message))
      .catch(() => setBackendMessage('Backend connection error.'));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans selection:bg-blue-500/30 overflow-hidden relative text-pretty">
      {/* Background Glows */}
      <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,transparent_70%)] rounded-full z-0" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(147,51,234,0.1)_0%,transparent_70%)] rounded-full z-0" />

      {/* Navigation */}
      <nav className="relative z-20 flex justify-between items-center px-8 py-6 border-b border-white/10 bg-[#030712]/50 backdrop-blur-md">
        <div className="flex items-center gap-2 font-black text-xl tracking-tighter">
          <motion.span 
            initial={{ rotate: -20, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            className="text-blue-500 italic"
          >
            ▲
          </motion.span> 
          HOLLA.STUDIO
        </div>
        <div className="bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-xl">
          Ready to Deploy
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-8 py-16 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Hero Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
            <Layers size={14} />
            <span>Step 01: The Vision</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1 
              variants={itemVariants}
              className="text-7xl md:text-8xl font-extrabold leading-none tracking-tighter bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent"
            >
              Holla<br />World!
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="max-w-md text-lg text-gray-400 font-light leading-relaxed"
            >
              Your personal full-stack playground is ready. Seamlessly styled with Tailwind CSS and optimized for modern performance.
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="glass-card p-6 flex flex-col gap-3 group transition-all duration-300 hover:border-blue-500/30">
            <div className="flex items-center gap-2 text-blue-400 font-mono text-sm font-semibold">
              <Terminal size={16} />
              <span>$ npx create-next-app@latest</span>
            </div>
            <p className="text-sm text-gray-500 leading-snug">
              Initialize your project with Tailwind, UI components, and TypeScript in seconds.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-4 text-xs font-mono text-gray-600">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>SYSTEM_STATUS: {backendMessage.toUpperCase()}</span>
          </motion.div>
        </motion.div>

        {/* Right Column: Visual Elements / Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={itemVariants} className="glass-card p-8 space-y-6">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-300">
              <Code2 size={18} className="text-blue-500" />
              <span>Project Architecture</span>
            </div>
            
            <div className="bg-black/40 rounded-xl p-5 border border-white/5 font-mono text-xs leading-relaxed text-indigo-300/80">
              <div className="text-white/40 mb-2">// File Structure</div>
              <div className="flex gap-2"><span className="text-blue-400">my-personal-site/</span></div>
              <div className="pl-4 border-l border-white/10 ml-2 mt-2 space-y-1 text-gray-500">
                <div>├── app/</div>
                <div className="pl-4">├── layout.tsx</div>
                <div className="pl-4 flex justify-between">
                  <span className="text-gray-300">└── page.tsx</span>
                  <span className="text-emerald-400/60">// "Holla World"</span>
                </div>
                <div>├── components/</div>
                <div>├── public/</div>
                <div className="text-white/20">...more config files</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-gray-300">Deployment Logic</h3>
              <div className="bg-black/40 rounded-xl p-5 border border-white/5 font-mono text-xs text-gray-400 space-y-1">
                <div className="text-blue-400 font-bold">$ vercel</div>
                <div>? Set up and deploy? <span className="text-white">yes</span></div>
                <div>? Which scope? <span className="text-white">Personal</span></div>
                <div className="pt-2 text-emerald-400 font-bold">✓ Production: https://holla.vercel.app</div>
              </div>
            </div>
          </motion.div>

          {/* Social Footer in Card-like style */}
          <motion.div variants={itemVariants} className="flex justify-between items-center px-6 py-4 glass-card rounded-2xl">
            <div className="flex gap-4">
              <a href="#" className="p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400 hover:text-white"><Github size={20} /></a>
              <a href="#" className="p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400 hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400 hover:text-white"><Mail size={20} /></a>
            </div>
            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-500 hover:text-blue-400 transition-colors group">
              Contact Me <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
