
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#15171e] text-white overflow-x-hidden relative font-inter-light">
      <header className="flex w-full items-center justify-between px-6 py-6 md:px-12 z-50">
        <div className="flex items-center">
          {/* <img
            alt="Castari Logo"
            loading="lazy"
            width={32}
            height={32}
            decoding="async"
            data-nimg={1}
            className="object-contain m-2"
            style={{ color: "transparent" }}
            src="/blue-castari.svg"
          /> */}
          <span className="font-orbitron text-xl md:text-2xl font-medium">
            Deploymind
          </span>
        </div>
        <nav className="flex items-center gap-6">
          <a
            href="https://github.com/castar-ventures/castari-proxy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
            aria-label="Visit Castari on GitHub"
          >
            <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="mailto:sergey@deploymind.pro"
            className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
          >
            Contact
          </a>
        </nav>
      </header>
      <main className="flex flex-col items-center w-full mt-2 md:mt-4 relative z-10 mb-24 md:mb-40">
        <a
          // href="https://github.com/castar-ventures/castari-proxy"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs md:text-sm text-gray-300 shadow-sm transition hover:border-white/20 hover:bg-white/10 hover:text-white mb-8 md:mb-10 shimmer"
        >
          <svg
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="currentColor"
            className="relative z-10"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="relative z-10">Use any model with Claude Agent SDK</span>
        </a>
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center leading-tight max-w-4xl px-4 text-gray-100 mb-6">
          Deploy production ready agents in seconds
        </h1>
        <p className="font-inter-light max-w-2xl text-center text-sm leading-relaxed text-gray-400 sm:text-base mb-10">
          Build, deploy, and scale sandboxed AI agents built for production.
        </p>
        <div className="relative w-full max-w-[1200px] mx-auto h-[250px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-100 select-none pointer-events-none bg-[#3A4655] border border-[#918583]">
            <img
              alt="Stars background"
              decoding="async"
              data-nimg="fill"
              className="object-cover object-center"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: "transparent"
              }}
              src="https://www.castari.com/stars.svg"
            />
          </div>
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0" />
          <div
            className="hidden md:block absolute pointer-events-none z-10"
            style={{
              width: "min(400px, calc(55vw - 200px))",
              aspectRatio: "825 / 356",
              left: "0%",
              top: "12.5%",
              transform: "rotate(0deg)"
            }}
          >
            <img
              alt="Left hand reaching"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-contain object-top-left"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: "transparent"
              }}
              src="https://www.castari.com/left-hand.svg"
            />
          </div>
          <div
            className="hidden md:block absolute pointer-events-none z-10"
            style={{
              width: "min(750px, calc(100vw - 400px))",
              aspectRatio: "825 / 356",
              right: "0%",
              bottom: "0%",
              transform: "rotate(0deg)",
              transformOrigin: "center center"
            }}
          >
            <img
              alt="Right hand reaching"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-contain object-bottom-right"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: "transparent"
              }}
              src="https://www.castari.com/right-hand.svg"
            />
          </div>
          <div className="relative z-20 w-full max-w-lg px-4">
            <form className="w-full">
              <div className="flex w-full items-center bg-[#1a1b23]/90 border border-gray-700/50 p-1 rounded-md backdrop-blur-sm shadow-lg">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white outline-none placeholder:text-gray-500"
                  defaultValue=""
                />
                <button
                  type="submit"
                  className="bg-white text-black px-4 py-2 text-xs md:text-sm font-medium rounded hover:bg-gray-200 transition-colors disabled:opacity-70 whitespace-nowrap"
                >
                  Join waitlist
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <div className="mt-auto w-full px-6 md:px-12 pb-0 relative border-t border-[#B0B0B0] pt-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20 md:mb-32 relative z-20">
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-2xl md:text-3xl text-white">
              Push less. Deploy more.
            </h2>
            <div className="flex items-center gap-4">
              <button className="bg-white text-black px-6 py-2.5 text-sm font-medium hover:bg-gray-200 transition-colors">
                Join waitlist
              </button>
              <a
                href="mailto:founders@castari.com"
                className="bg-transparent border border-white/20 text-white px-6 py-2.5 text-sm font-medium hover:bg-white/5 transition-colors"
              >
                Contact us
              </a>
            </div>
            <div className="flex gap-4 mt-2">
              <a
                // href="https://github.com/castar-ventures/castari-proxy"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                // href="https://x.com/castari_dev"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                // href="https://linkedin.com/company/castari"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="hidden md:block absolute left-1/2 bottom-30 -translate-x-1/2 translate-y-1/2">
            <div className="relative w-12 h-12 md:w-16 md:h-16 opacity-50">
              <img
                alt="Castari Logo"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-contain"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  color: "transparent"
                }}
                src="/blue-castari.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none select-none opacity-[0.03]">
          <span className="font-orbitron font-light text-[7vw] md:text-[10vw] block text-center -translate-y-[10%] text-white">
            Deploymind
          </span>
        </div>
      </div>
    </div>

  )
}

export default App