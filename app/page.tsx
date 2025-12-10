'use client';

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    {
      question: "What is Multi-Party Computation (MPC)?",
      answer: "Multi-Party Computation (MPC) is a cryptographic protocol that allows multiple parties to jointly compute a function over their inputs while keeping those inputs private. In the context of wallets, MPC enables distributed key generation and signing without ever assembling the complete private key in any single location."
    },
    {
      question: "How is DefiShard different from traditional wallets?",
      answer: "Traditional wallets store your complete private key in one location (browser extension, mobile app, or hardware device). If that location is compromised, your assets are lost. DefiShard splits the key into multiple shares using threshold cryptography. The complete key never exists anywhere—not during setup, not during signing, not ever. This eliminates the single point of failure."
    },
    {
      question: "What does '2-of-2' threshold mean?",
      answer: "In a 2-of-2 threshold scheme, your private key is split into 2 shares, and both shares are required to sign transactions. Typically, one share is stored in your browser extension and one in your mobile app. Both devices must participate in the signing process, but the key is never reconstructed—they cooperate using cryptographic protocols to produce a valid signature."
    },
    {
      question: "Can the key shares be used individually?",
      answer: "No. Each individual key share is cryptographically useless on its own. An attacker who compromises one share cannot do anything with it. Only through the distributed signing protocol, with both shares participating, can a valid transaction signature be produced."
    },
    {
      question: "What if I lose one of my devices?",
      answer: "DefiShard implements secure recovery mechanisms. Each party backs up their key shard to personal cloud storage with a choice of password-based encryption or direct backup. The recovery process maintains the same security guarantees—your complete key never exists in one place during recovery."
    },
    {
      question: "Is this the same as multi-signature wallets?",
      answer: "No. Multi-signature (multisig) wallets require multiple transactions on-chain and often have higher gas fees. They also require smart contract support, limiting compatibility. MPC wallets like DefiShard produce standard single signatures that work with any blockchain, have lower fees, and don't reveal your security model on-chain."
    },
    {
      question: "How does distributed signing actually work?",
      answer: "When you initiate a transaction, your browser extension creates a transaction and generates a QR code. You scan this with your mobile app, review the transaction details, and confirm. Both devices then engage in a threshold signature protocol, exchanging cryptographic commitments and partial signatures. These are combined to produce a valid signature without ever reconstructing the private key."
    },
    {
      question: "What happens if malware infects my computer?",
      answer: "Even if malware compromises your browser extension, it cannot steal your assets. The malware would only get access to one key share, which is cryptographically useless alone. The attacker would also need to compromise your mobile device. Additionally, you review every transaction on your mobile before confirming, providing a second layer of protection."
    },
    {
      question: "Does DefiShard work with all blockchains?",
      answer: "DefiShard supports Ethereum and all EVM-compatible chains. The threshold signature protocol produces standard ECDSA signatures that are indistinguishable from regular wallet signatures, ensuring universal compatibility with existing infrastructure and DeFi protocols."
    },
    {
      question: "Is the code open source?",
      answer: "Yes. DefiShard is committed to transparency and security. The core cryptographic implementation is open source. You can review the code and security documentation on our GitHub repository."
    }
  ];

  const projects = [
    {
      id: 'p1',
      title: 'Defishard MPC Wallet',
      category: 'Asset Protection',
      description: 'A revolutionary non-custodial wallet using Multi-Party Computation to split private keys into distributed shards. No single point of failure.',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232&auto=format&fit=crop'
    },
    {
      id: 'p2',
      title: 'Threshold Cryptography',
      category: 'Core Architecture',
      description: 'Proprietary TSS (Threshold Signature Scheme) enabling distributed signing. Transactions are authorized without ever reconstructing the full key.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <svg className="h-8 w-8 text-white fill-black group-hover:text-gray-300 transition-colors" strokeWidth={1.5} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-widest text-white uppercase leading-none">Coluy Labs</span>
                <span className="text-[10px] tracking-widest text-gray-500 uppercase leading-none mt-1">Defishard MPC Wallet</span>
              </div>
            </div>
          </div>
        </div>

      </nav>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Cryptography Background Layer */}
        <div className="absolute inset-0 z-0">
          {/* Abstract Code Overlay */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          
          {/* CSS Grid Pattern */}
          <div className="absolute inset-0 crypto-bg-pattern opacity-20"></div>
          
          {/* Radial Fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in-up">
            
            <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-tight">
              DEFISHARD <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800">
                PROTECTION
              </span>
            </h1>
            
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-400 font-light leading-relaxed font-mono">
              DeFiShard: Web3 Asset Protection. <br/>
              <span className="text-sm text-gray-500 mt-2 block">
                Powered by Coluy Labs Threshold Cryptography.
              </span>
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
              <a href="https://defishard.com" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-gray-200 transition-all flex items-center justify-center gap-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Visit DefiShard
              </a>
              <a href="/about" className="px-8 py-4 border border-gray-700 text-white font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Learn About MPC
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Research/Technology Section */}
      <section id="technology" className="py-32 bg-black relative border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4 text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                  <rect x="9" y="9" width="6" height="6" />
                  <line x1="9" y1="1" x2="9" y2="4" />
                  <line x1="15" y1="1" x2="15" y2="4" />
                  <line x1="9" y1="20" x2="9" y2="23" />
                  <line x1="15" y1="20" x2="15" y2="23" />
                  <line x1="20" y1="9" x2="23" y2="9" />
                  <line x1="20" y1="14" x2="23" y2="14" />
                  <line x1="1" y1="9" x2="4" y2="9" />
                  <line x1="1" y1="14" x2="4" y2="14" />
                </svg>
                <span className="text-xs font-mono uppercase tracking-widest">Wallet Core</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                Cryptography <br /> Architecture
              </h2>
            </div>
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed font-mono">
              // Defishard eliminates single points of failure through distributed mathematical consensus and sharded keys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-900 border border-gray-900">
            {projects.map((project) => (
              <div key={project.id} className="group relative bg-black p-8 hover:bg-gray-950 transition-colors duration-500">
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>

                <div className="h-48 overflow-hidden mb-8 relative border border-gray-900">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all z-10"></div>
                  {/* Scanline effect */}
                  <div className="absolute inset-0 scanline-effect pointer-events-none z-20"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale-img contrast-125 brightness-75 group-hover:brightness-100 transition-all duration-700"
                  />
                </div>

                <div className="flex flex-col h-full">
                  <div className="text-[10px] font-bold text-white uppercase tracking-widest mb-2 px-2 py-1 border border-gray-800 inline-block w-fit">
                    {project.category}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-mono text-xs">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 font-mono text-sm">
              // Everything you need to know about MPC wallets
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-900 bg-black overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-950 transition-colors"
                >
                  <span className="font-bold text-white pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 pt-2 border-t border-gray-900">
                    <p className="text-gray-400 text-sm font-mono leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-gray-500 py-16 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-white text-2xl font-bold mb-6 tracking-tighter">Coluy Labs</h3>
              <p className="max-w-xs mb-8 text-sm leading-relaxed">
                Architecting the decentralized future with threshold cryptography and multi-party computation.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Contact</h4>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@coluylabs.org
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Social</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="X (Twitter)">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="GitHub">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-900 text-center text-[10px] uppercase tracking-widest text-gray-600">
            &copy; {new Date().getFullYear()} Coluy Labs.
          </div>
        </div>
      </footer>
    </div>
  );
}
