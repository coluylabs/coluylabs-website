import React from 'react';
import Link from 'next/link';

export default function AboutMPC() {

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-panel py-4">
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
              <span className="text-lg font-bold tracking-widest text-white uppercase leading-none">Coluy Labs</span>
              <span className="text-[10px] tracking-widest text-gray-500 uppercase leading-none mt-1">Defishard MPC Wallet</span>
            </div>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 border-b border-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 border border-gray-800 bg-black/50 backdrop-blur-sm text-gray-400 font-mono text-xs tracking-widest uppercase mb-8">
            <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
            Understanding MPC Technology
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-6">
            Your Key Never Exists.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800">
              Your Assets Always Safe.
            </span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed font-mono">
            DefiShard uses distributed key generation with threshold signatures.
            <br />
            Your private key never exists anywhere—not during setup, not during signing, not ever.
          </p>
        </div>
      </section>

      {/* What is MPC Section */}
      <section className="py-20 px-6 border-b border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-4">
              What is Multi-Party Computation?
            </h2>
            <p className="text-gray-400 font-mono text-sm">
              // The mathematical foundation of distributed cryptography
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-900 p-8 bg-black hover:bg-gray-950 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">Traditional Approach</h3>
              <div className="space-y-3 text-gray-400 text-sm font-mono">
                <div className="flex items-start gap-2">
                  <span className="text-gray-600">›</span>
                  <span>Complete private key stored in one location</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-600">›</span>
                  <span>Single point of failure</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-600">›</span>
                  <span>Vulnerable to malware, hacks, and exploits</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-600">›</span>
                  <span>One compromise = total loss</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-950 border border-gray-800">
                <code className="text-xs text-gray-500">
                  privateKey = &quot;0x7a3f4c1e...&quot;
                  <br />
                  signature = sign(privateKey, tx)
                  <br />
                  <span className="text-gray-600">// Key exists in memory</span>
                </code>
              </div>
            </div>

            <div className="border border-gray-900 p-8 bg-black hover:bg-gray-950 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">MPC Approach (DefiShard)</h3>
              <div className="space-y-3 text-gray-400 text-sm font-mono">
                <div className="flex items-start gap-2">
                  <span className="text-white">›</span>
                  <span>Key split into distributed shares</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white">›</span>
                  <span>No single point of failure</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white">›</span>
                  <span>Shares are cryptographically useless alone</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white">›</span>
                  <span>Complete key never exists anywhere</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-950 border border-gray-800">
                <code className="text-xs text-gray-500">
                  σ₁ = sign_partial(share1, tx)
                  <br />
                  σ₂ = sign_partial(share2, tx)
                  <br />
                  signature = combine(σ₁, σ₂)
                  <br />
                  <span className="text-white">// Key NEVER reconstructed</span>
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How DefiShard Works */}
      <section id="how-it-works" className="py-32 bg-black border-b border-gray-900 relative">
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
            {/* Step 01 - Distributed Key Generation */}
            <div className="group">
              {/* Visual Diagram */}
              <div className="mb-8 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
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
              </div>

              {/* Step Number */}
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-800">
                  01
                </span>
                <div className="h-px bg-gray-800 flex-1 group-hover:bg-white transition-colors duration-500"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors">
                Distributed Key Generation
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-mono">
                Install extension and mobile app. Key shares are generated using secret sharing protocols. 
                The complete private key never exists—not even during setup.
              </p>
            </div>

            {/* Step 02 - Browse DeFi Normally */}
            <div className="group">
              {/* Visual Diagram */}
              <div className="mb-8 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
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
              </div>

              {/* Step Number */}
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-800">
                  02
                </span>
                <div className="h-px bg-gray-800 flex-1 group-hover:bg-white transition-colors duration-500"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors">
                Browse DeFi Normally
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-mono">
                Connect to any DeFi protocol and create transactions as usual. 
                No change to your workflow—DefiShard works with all your favorite apps.
              </p>
            </div>

            {/* Step 03 - Scan & Review */}
            <div className="group">
              {/* Visual Diagram */}
              <div className="mb-8 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
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
              </div>

              {/* Step Number */}
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-800">
                  03
                </span>
                <div className="h-px bg-gray-800 flex-1 group-hover:bg-white transition-colors duration-500"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors">
                Scan & Review
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-mono">
                Extension generates QR code. Scan with mobile app and review complete transaction details. 
                See exactly what you&apos;re signing before confirming.
              </p>
            </div>

            {/* Step 04 - Distributed Signing */}
            <div className="group">
              {/* Visual Diagram */}
              <div className="mb-8 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
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
              </div>

              {/* Step Number */}
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-800">
                  04
                </span>
                <div className="h-px bg-gray-800 flex-1 group-hover:bg-white transition-colors duration-500"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors">
                Distributed Signing
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-mono">
                Tap to confirm. Both devices engage in threshold signing protocol using zero-knowledge proofs. 
                The key is NEVER reconstructed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6 border-b border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-4">
              Why Choose DefiShard?
            </h2>
            <p className="text-gray-400 font-mono text-sm">
              // Enterprise-grade security with consumer-friendly UX
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-900 p-6 bg-black hover:bg-gray-950 transition-colors">
              <div className="w-12 h-12 border border-gray-800 flex items-center justify-center mb-4 text-white font-mono text-sm">
                2/2
              </div>
              <h3 className="text-lg font-bold text-white mb-3">MPC 2-of-2 Security</h3>
              <p className="text-gray-400 text-sm font-mono">
                Threshold signatures with secret sharing and zero-knowledge proofs. 
                Your private key never exists—anywhere, ever.
              </p>
            </div>

            <div className="border border-gray-900 p-6 bg-black hover:bg-gray-950 transition-colors">
              <div className="w-12 h-12 border border-gray-800 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12" y2="18" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Mobile Transaction Review</h3>
              <p className="text-gray-400 text-sm font-mono">
                Review every detail on your phone. Catch scams before signing. 
                Screenshot important transactions.
              </p>
            </div>

            <div className="border border-gray-900 p-6 bg-black hover:bg-gray-950 transition-colors">
              <div className="w-12 h-12 border border-gray-800 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Universal Compatibility</h3>
              <p className="text-gray-400 text-sm font-mono">
                Works with all DeFi protocols. Support for Ethereum and major EVM chains. 
                Standard signatures, no special contracts needed.
              </p>
            </div>

            <div className="border border-gray-900 p-6 bg-black hover:bg-gray-950 transition-colors">
              <div className="w-12 h-12 border border-gray-800 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Seamless UX</h3>
              <p className="text-gray-400 text-sm font-mono">
                Quick QR code scanning. Transactions complete in seconds. 
                Familiar 2FA-style workflow you already trust.
              </p>
            </div>

            <div className="border border-gray-900 p-6 bg-black hover:bg-gray-950 transition-colors">
              <div className="w-12 h-12 border border-gray-800 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Active Protection</h3>
              <p className="text-gray-400 text-sm font-mono">
                Real-time threat detection. Warning system for suspicious transactions. 
                Automatic security updates.
              </p>
            </div>

            <div className="border border-gray-900 p-6 bg-black hover:bg-gray-950 transition-colors">
              <div className="w-12 h-12 border border-gray-800 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <polyline points="23 4 23 10 17 10" />
                  <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Easy Recovery</h3>
              <p className="text-gray-400 text-sm font-mono">
                Each party backs up their key shard to personal cloud storage. Choose password-based encryption or direct backup. 
                Never lose access to your assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-6">
            Ready to Secure Your Assets?
          </h2>
          <p className="text-gray-400 font-mono text-sm mb-10">
            Experience the future of wallet security with DefiShard MPC technology.
          </p>
          <div className="flex justify-center">
            <a
              href="https://defishard.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-gray-200 transition-all"
            >
              Visit DefiShard
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-12 px-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-mono text-sm uppercase tracking-wider">Back to Home</span>
          </Link>
          <p className="text-xs uppercase tracking-widest text-gray-600 mt-8">
            © {new Date().getFullYear()} Coluy Labs. Building the future of digital asset security.
          </p>
        </div>
      </footer>
    </div>
  );
}

