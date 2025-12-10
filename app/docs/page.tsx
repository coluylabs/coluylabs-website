'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function DocsComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add email to waitlist (connect to your backend/email service)
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-transparent py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer w-fit">
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
              <span className="text-xl font-bold tracking-widest text-white uppercase leading-none">Coluy Labs</span>
              <span className="text-[10px] tracking-widest text-gray-500 uppercase leading-none mt-1">Defishard MPC Wallet</span>
            </div>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-6">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 crypto-bg-pattern opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>

        <div className="relative z-20 max-w-3xl mx-auto text-center">
          <div className="space-y-8 animate-fade-in-up">
            
            {/* Status Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center px-4 py-2 border border-gray-800 bg-black/50 backdrop-blur-sm text-gray-400 font-mono text-xs tracking-widest uppercase">
                <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                Documentation in Development
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight">
              DOCUMENTATION
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800">
                COMING SOON
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400 font-light leading-relaxed font-mono">
              We&apos;re preparing comprehensive technical documentation covering:
            </p>

            {/* Feature List */}
            <div className="max-w-xl mx-auto mt-8 space-y-4 text-left">
              <div className="flex items-start gap-3 text-gray-400">
                <span className="text-white mt-1">›</span>
                <span className="font-mono text-sm">MPC & Threshold Signature Architecture</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <span className="text-white mt-1">›</span>
                <span className="font-mono text-sm">Technical Whitepaper & Security Model</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <span className="text-white mt-1">›</span>
                <span className="font-mono text-sm">API Reference & Integration Guides</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <span className="text-white mt-1">›</span>
                <span className="font-mono text-sm">Research Papers & Publications</span>
              </div>
            </div>

            {/* Email Signup */}
            <div className="mt-12 max-w-md mx-auto">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-sm text-gray-500 font-mono uppercase tracking-wider">
                    Get notified when documentation is ready
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="flex-1 bg-black text-white px-4 py-3 border border-gray-800 focus:border-white outline-none placeholder-gray-600 transition-colors font-mono text-sm"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-gray-200 transition-all"
                    >
                      Notify Me
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-6 border border-gray-800 bg-black/50">
                  <svg className="w-12 h-12 mx-auto mb-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-white font-mono text-sm">
                    Thanks! We&apos;ll notify you when the documentation is ready.
                  </p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-8 py-4 border border-gray-700 text-white font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
              <a
                href="https://defishard.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-gray-200 transition-all flex items-center justify-center gap-3"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Visit DefiShard
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

