import React from 'react';
import { WORKFLOW_STEPS } from '../constants';

const DkgDiagram = () => (
  <div 
    className="relative w-full h-40 bg-black border border-gray-800 flex items-center justify-center overflow-hidden"
    role="img"
    aria-label="Key splitting diagram showing distributed key generation"
  >
    {/* Background Grid */}
    <div className="absolute inset-0 bg-[linear-gradient(transparent_19px,#111_20px),linear-gradient(90deg,transparent_19px,#111_20px)] bg-[length:20px_20px]"></div>
    
    {/* Central Key Splitting */}
    <div className="relative flex items-center justify-center gap-8">
      {/* Left Shard (Extension) */}
      <div className="flex flex-col items-center gap-2 animate-pulse">
        <div className="w-12 h-16 border-2 border-white bg-black flex items-center justify-center relative">
          <span className="font-mono text-xs font-bold">K₁</span>
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white"></div>
        </div>
        <span className="text-[9px] uppercase tracking-widest text-gray-500">Extension</span>
      </div>

      {/* Connection Line */}
      <div className="w-16 h-px bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-white w-1/2 animate-data-flow"></div>
      </div>

      {/* Right Shard (Mobile) */}
      <div className="flex flex-col items-center gap-2 animate-pulse delay-75">
        <div className="w-12 h-16 border-2 border-white bg-black flex items-center justify-center relative">
          <span className="font-mono text-xs font-bold">K₂</span>
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-white"></div>
        </div>
        <span className="text-[9px] uppercase tracking-widest text-gray-500">Mobile</span>
      </div>
    </div>
  </div>
);

const DefiBrowseDiagram = () => (
  <div 
    className="relative w-full h-40 bg-black border border-gray-800 p-4 flex flex-col gap-2"
    role="img"
    aria-label="Browser interface showing DeFi connection"
  >
    {/* Browser Header */}
    <div className="h-4 border-b border-gray-800 flex items-center gap-1.5 px-2">
      <div className="w-2 h-2 rounded-full bg-gray-800"></div>
      <div className="w-2 h-2 rounded-full bg-gray-800"></div>
      <div className="w-20 h-1.5 bg-gray-900 rounded-full ml-2"></div>
    </div>
    
    {/* Browser Body */}
    <div className="flex-1 flex gap-2">
      <div className="w-1/4 h-full bg-gray-900/30 border border-gray-900"></div>
      <div className="flex-1 h-full border border-gray-800 p-2 flex flex-col gap-2 relative overflow-hidden">
        {/* Mock dApp UI */}
        <div className="w-12 h-12 rounded-full border border-gray-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>
        </div>
        <div className="w-full h-px bg-gray-800 mt-auto"></div>
        <div className="absolute bottom-2 right-2 px-2 py-0.5 border border-white bg-white text-black text-[9px] font-bold uppercase tracking-wider">
          Connect
        </div>
      </div>
    </div>
  </div>
);

const ScanDiagram = () => (
  <div 
    className="relative w-full h-40 bg-black border border-gray-800 flex items-center justify-center"
    role="img"
    aria-label="Mobile phone scanning QR code"
  >
    {/* Phone Frame */}
    <div className="w-20 h-32 border-2 border-white rounded-lg p-1 relative bg-black z-10">
      <div className="w-full h-full border border-gray-800 relative overflow-hidden flex items-center justify-center">
        {/* QR Pattern */}
        <div className="grid grid-cols-4 gap-0.5 p-2 opacity-50">
          {Array.from({ length: 16 }).map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 ${i % 3 === 0 ? 'bg-white' : 'bg-gray-800'}`}
            ></div>
          ))}
        </div>
        {/* Scanner Line */}
        <div className="absolute w-full h-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-scan-line"></div>
      </div>
      {/* Camera notch */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-6 h-1 bg-gray-900 rounded-full"></div>
    </div>
    {/* Background Desktop Hint */}
    <div className="absolute left-8 top-8 w-16 h-16 border border-gray-800 opacity-30"></div>
  </div>
);

const SigningDiagram = () => (
  <div 
    className="relative w-full h-40 bg-black border border-gray-800 flex items-center justify-center overflow-hidden"
    role="img"
    aria-label="Distributed signing between two devices"
  >
    {/* Background pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:20px_20px]"></div>
    </div>

    <div className="relative flex items-center gap-12">
      {/* Device A */}
      <div className="w-8 h-8 border-2 border-white rotate-45 flex items-center justify-center bg-black animate-pulse">
        <div className="w-2 h-2 bg-white -rotate-45"></div>
      </div>

      {/* Target Block (Signature) */}
      <div className="w-12 h-12 border-2 border-white flex items-center justify-center relative z-10 bg-black">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>

      {/* Device B */}
      <div className="w-8 h-8 border-2 border-white rotate-45 flex items-center justify-center bg-black animate-pulse delay-150">
        <div className="w-2 h-2 bg-white -rotate-45"></div>
      </div>
    </div>

    {/* Signal Lines */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
      <line x1="35%" y1="50%" x2="45%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 2" className="animate-pulse" />
      <line x1="65%" y1="50%" x2="55%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 2" className="animate-pulse delay-75" />
    </svg>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-32 bg-black border-t border-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-6">
            Trustless Execution
          </h2>
          <p className="text-gray-500 font-mono text-sm max-w-xl border-l-2 border-white pl-6">
            // A cryptographic handshake between your devices. Security through separation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WORKFLOW_STEPS.map((step, index) => (
            <div key={step.id} className="group">
              {/* Visual Diagram */}
              <div className="mb-8 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                {index === 0 && <DkgDiagram />}
                {index === 1 && <DefiBrowseDiagram />}
                {index === 2 && <ScanDiagram />}
                {index === 3 && <SigningDiagram />}
              </div>

              {/* Step Number */}
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-800">
                  {step.id}
                </span>
                <div className="h-px bg-gray-800 flex-1 group-hover:bg-white transition-colors duration-500"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-mono">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

