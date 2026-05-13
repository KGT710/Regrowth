export default function CinematicLoveLetter() { return ( <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-white via-rose-50 to-pink-100 text-gray-800 relative font-sans"> {/* Animated Background */} <div className="fixed inset-0 pointer-events-none overflow-hidden"> <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl animate-pulse"></div> <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-300/40 rounded-full blur-3xl animate-pulse"></div> </div>

{/* INTRO CINEMATIC SECTION */}
  <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6">
    <div className="absolute inset-0 bg-black/10"></div>

    <div className="relative z-10 max-w-5xl animate-fadeIn">
      <div className="text-[120px] md:text-[180px] animate-pulse mb-6 drop-shadow-2xl">
        ❤️
      </div>

      <h1 className="text-5xl md:text-8xl font-serif text-rose-600 leading-tight mb-8">
        Mbali Monkwe
      </h1>

      <p className="text-xl md:text-3xl text-gray-700 italic leading-relaxed max-w-3xl mx-auto mb-10">
        “Some people never stop loving each other… even after the silence.”
      </p>

      <div className="w-32 h-1 bg-rose-400 mx-auto rounded-full mb-10"></div>

      <p className="text-lg md:text-2xl text-gray-700 leading-10 max-w-4xl mx-auto">
        This is not just a website.
        <br />
        It’s a piece of my heart.
        <br />
        A second chance written in light.
      </p>
    </div>

    <div className="absolute bottom-10 animate-bounce text-rose-500 tracking-[0.4em] uppercase text-sm">
      Scroll Down
    </div>
  </section>

  {/* HEART HEALING SECTION */}
  <section className="py-24 px-6">
    <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-md rounded-[40px] p-10 md:p-16 shadow-2xl border border-white/40 text-center">
      <div className="relative flex justify-center items-center mb-12">
        <div className="text-[120px] md:text-[180px] animate-pulse">
          💔
        </div>

        <div className="absolute text-[120px] md:text-[180px] opacity-0 animate-[fadeIn_5s_ease-in-out_forwards]">
          ❤️
        </div>
      </div>

      <h2 className="text-4xl md:text-5xl font-serif text-rose-600 mb-8">
        Broken Things Can Heal Too
      </h2>

      <p className="text-lg md:text-2xl leading-10 text-gray-700 max-w-4xl mx-auto">
        Maybe we were hurt.
        Maybe life pulled us apart.
        But some connections are too real to disappear.
        Some love stories deserve another beginning.
      </p>
    </div>
  </section>

  {/* VIDEO SECTION */}
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto rounded-[40px] overflow-hidden shadow-2xl border border-white/50 bg-white/70 backdrop-blur-md">
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/2Vv-BfVoq4g?autoplay=1&mute=1&loop=1&playlist=2Vv-BfVoq4g"
          title="Romantic Cinematic Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </section>

  {/* LOVE LETTER */}
  <section className="py-24 px-6">
    <div className="max-w-4xl mx-auto bg-white/75 backdrop-blur-md rounded-[40px] p-10 md:p-16 shadow-2xl border border-white/40">
      <h2 className="text-4xl md:text-6xl font-serif text-center text-rose-600 mb-14">
        To The Woman I Still Love
      </h2>

      <div className="space-y-8 text-lg md:text-2xl leading-10 text-gray-700">
        <p>
          Mbali…
        </p>

        <p>
          I still think about us.
          About the love we shared.
          About the moments that made everything feel lighter when you were around.
        </p>

        <p>
          I know things changed.
          I know we both felt pain.
          But even through the distance, my heart still finds its way back to you.
        </p>

        <p>
          Love isn’t always perfect.
          Sometimes people get tired.
          Sometimes misunderstandings create silence.
          But real love… real love fights to heal.
        </p>

        <p>
          And if there’s still even a small place left for me in your heart…
          I want us to rebuild.
        </p>

        <p>
          Slowly.
          Honestly.
          Beautifully.
        </p>

        <p>
          I don’t want temporary feelings.
          I want something deeper.
          Stronger.
          More mature than before.
        </p>

        <p>
          I still believe our story deserves another chapter.
        </p>

        <p className="text-center text-3xl md:text-4xl text-rose-500 font-serif pt-10 leading-relaxed">
          I miss you.
          <br />
          I love you.
          <br />
          And I still choose you.
        </p>

        <p className="text-right pt-10 text-2xl font-serif text-gray-800">
          — Kgomotso Teane
        </p>
      </div>
    </div>
  </section>

  {/* MUSIC SECTION */}
  <section className="py-24 px-6">
    <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md rounded-[40px] p-10 shadow-2xl border border-white/40 text-center">
      <h3 className="text-4xl md:text-5xl font-serif text-rose-600 mb-8">
        Favorite Song
      </h3>

      <p className="text-lg md:text-xl text-gray-700 mb-8 italic">
        Tosiie — “Favorite Song”
      </p>

      <div className="rounded-3xl overflow-hidden shadow-xl">
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/track/7ouMYWpwJ422jRcDASZB7?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </section>

  {/* FINAL MESSAGE */}
  <section className="py-32 px-6 text-center">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-5xl md:text-7xl font-serif text-rose-600 mb-10 leading-tight">
        Maybe This Isn’t The End
      </h2>

      <p className="text-xl md:text-3xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-14">
        Maybe this is simply the part of our story where two hearts learn how to find each other again.
      </p>

      <button className="px-10 py-5 rounded-full bg-rose-500 hover:bg-rose-600 transition-all duration-300 text-white text-xl shadow-2xl hover:scale-105">
        Start Again Together
      </button>
    </div>
  </section>
</div>

) }
