'use client';
import Image from "next/image";

const COMPANY_NAME = "blackseedsincorp";
const DOMAIN = "blackseedsincorp.com";
const EMAIL = `ademola@${DOMAIN}`;
const WHATSAPP = "https://wa.me/2348032684135?text=Hi%20blackseedsincorp%20-%20I%20saw%20your%20work%20on%20blackseedsincorp.com%20-%20I%20have%20a%20project";

const PROJECTS = [
  {
    id: "01",
    title: "Quantic",
    tag: "AI PLATFORM",
    desc: "AI productivity & capstone platform for creators and teams.",
    tech: "NEXT.JS • AI • VERCEL",
    link: "https://quantic-capstone.vercel.app/",
    gradient: "from-violet-500/20 to-transparent"
  },
  {
    id: "02",
    title: "Refresh",
    tag: "LANDING SYSTEM",
    desc: "High-converting landing page system — modern, fast, scalable.",
    tech: "NEXT.JS • TAILWIND • VERCEL",
    link: "https://refresh-landing-9bfbe11f.vercel.app/",
    gradient: "from-cyan-500/20 to-transparent"
  },
  {
    id: "03",
    title: "Akanke Ade",
    tag: "LUXURY COMMERCE",
    desc: "Luxury fashion e-commerce brand — Afro-luxury heritage.",
    tech: "NEXT.JS • SHOPIFY • LUXURY",
    link: "https://akanke-ade.vercel.app/",
    gradient: "from-[#D4AF37]/20 to-transparent"
  },
  {
    id: "04",
    title: "TeeTeeBee",
    tag: "BRAND / PLATFORM",
    desc: "Creative brand platform — built for scale.",
    tech: "NEXT.JS • BRANDING • VERCEL",
    link: "https://teeteebee.vercel.app/",
    gradient: "from-emerald-500/20 to-transparent"
  },
  {
    id: "05",
    title: "Matt7",
    tag: "PLATFORM",
    desc: "Experimental platform — sleek, minimal, fast.",
    tech: "NEXT.JS • SAAS • VERCEL",
    link: "https://matt7-7.vercel.app/",
    gradient: "from-blue-500/20 to-transparent"
  },
  {
    id: "06",
    title: "Beelight Advertising",
    tag: "ADTECH PLATFORM",
    desc: "AI-powered advertising platform for SMEs — campaign creation, targeting & performance.",
    tech: "NEXT.JS • AI • ADTECH",
    link: "https://beelight-advertising-v3.vercel.app/",
    gradient: "from-amber-500/20 to-transparent"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F9F6F0]">
      {/* Floating WhatsApp */}
      <a href={WHATSAPP} target="_blank" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-black rounded-full p-4 shadow-xl hover:scale-110 transition flex items-center gap-2">
        <span className="text-xl">💬</span>
        <span className="hidden md:block text-xs font-bold pr-2">WhatsApp</span>
      </a>

      {/* Header */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-16 py-6 z-30">
        <div className="flex items-center gap-3">
          <Image src="/BlackseedsincorpLogo(new).png" alt={COMPANY_NAME} width={48} height={48} className="rounded-full bg-black object-contain" />
          <div className="leading-none">
            <p className="font-serif tracking-[0.2em] text-sm">{COMPANY_NAME.toUpperCase()}</p>
            <p className="text- tracking-[0.3em] text-[#D4AF37]">{DOMAIN} — EST. 2020</p>
          </div>
        </div>
        <div className="flex gap-3">
          <a href={WHATSAPP} target="_blank" className="text- tracking-widest bg-[#25D366] text-black px-6 py-3 font-bold hidden md:block">WHATSAPP</a>
          <a href="#contact" className="text- tracking-widest border border-[#D4AF37] px-6 py-3 hover:bg-[#D4AF37] hover:text-black transition text-white backdrop-blur">START A PROJECT</a>
        </div>
      </header>

      {/* HERO - VIDEO ACTIVE */}
      <section className="relative w-full h-screen min-h- flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/20 to-black/50" />

          {/* WATERMARK COVER - hides Luma watermark */}
          <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent pointer-events-none" />
          <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-black/80 backdrop-blur px-3 py-1.5 rounded-full border border-[#D4AF37]/20">
            <Image src="/BlackseedsincorpLogo(new).png" alt="logo" width={20} height={20} className="rounded-full object-contain" />
            <span className="text- tracking-[0.2em] text-[#D4AF37]">BLACKSEEDSINCORP.COM</span>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mt-20">
          <p className="text-[#D4AF37] tracking-[0.4em] text- mb-6">{DOMAIN.toUpperCase()} • VI • LAGOS • LIVE</p>
          <h1 className="text-6xl md:text-8xl font-serif leading-[0.85]">We build with you<br/><span className="text-[#D4AF37] italic font-light">in MIND</span></h1>
          <p className="mt-8 text-sm md:text-lg text-white/70 max-w-2xl mx-auto">
            {COMPANY_NAME} — Young Black engineers (20s-30s) in VI building AI, luxury commerce & scalable platforms live on Vercel.
          </p>
          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <a href={WHATSAPP} target="_blank" className="bg-[#25D366] text-black px-10 py-4 text-xs tracking-widest font-bold">CHAT ON WHATSAPP →</a>
            <a href="#work" className="border border-white/30 px-10 py-4 text-xs tracking-widest backdrop-blur">VIEW OUR WORK (6 LIVE)</a>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />
      </section>

      {/* WORK - 6 LIVE PROJECTS */}
      <section id="work" className="px-6 md:px-16 py-24 bg-[#0F0F0F]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <p className="text-[#D4AF37] text- tracking-[0.4em] mb-3">{DOMAIN.toUpperCase()} • SELECTED WORK — 6 LIVE PROJECTS</p>
            <h2 className="text-4xl md:text-6xl font-serif">Built & Shipped.</h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs">All live on Vercel. Built in Trae IDE • Next.js 16 • Tailwind</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <a key={p.id} href={p.link} target="_blank" className="group relative h- bg-[#1A1A1A] overflow-hidden border border-white/5 hover:border-[#D4AF37]/30 transition">
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
              <div className="relative p-8 h-full flex flex-col justify-between">
                <div>
                  <p className="text- tracking-widest text-[#D4AF37]">{p.id} / {p.tag}</p>
                  <h3 className="text-3xl font-serif mt-2">{p.title}</h3>
                  <p className="text-white/50 mt-2 text-sm leading-relaxed">{p.desc}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs border border-white/20 px-4 py-2 group-hover:bg-white group-hover:text-black transition">VISIT LIVE →</span>
                  <span className="text- text-white/30">{p.tech}</span>
                </div>
              </div>
            </a>
          ))}
          <a href={WHATSAPP} target="_blank" className="group relative h- bg-[#D4AF37] overflow-hidden border border-[#D4AF37] hover:bg-[#c9a62f] transition p-8 flex flex-col justify-between text-black">
            <div>
              <p className="text- tracking-widest">07 / YOUR IDEA</p>
              <h3 className="text-4xl font-serif mt-2 leading-[0.9]">Let's build<br/>your idea<br/>next.</h3>
              <p className="mt-3 text-sm opacity-70">From idea to Vercel in weeks. VI team, global shipping.</p>
            </div>
            <span className="text-xs border border-black/20 px-4 py-2 w-fit font-bold group-hover:bg-black group-hover:text-[#D4AF37] transition">START ON WHATSAPP →</span>
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 md:px-16 py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-[#D4AF37] text- tracking-[0.4em] mb-4">{DOMAIN.toUpperCase()}</p>
            <h2 className="text-5xl font-serif leading-[0.9]">Have an idea?<br/>Let's build it.</h2>
            <div className="mt-8 space-y-3">
              <a href={WHATSAPP} target="_blank" className="flex items-center gap-3 bg-[#25D366] text-black px-6 py-4 font-bold text-sm">💬 Chat on WhatsApp — Fastest Reply</a>
              <p className="text-white/40 text-sm">📍 VI, Lagos • 📞 +234 803 268 4135</p>
              <p className="text-white/40 text-sm">📧 {EMAIL} • 🌐 {DOMAIN}</p>
            </div>
          </div>
          <form className="space-y-4" onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const data = Object.fromEntries(new FormData(form)) as any;
            const btn = form.querySelector('button') as HTMLButtonElement;
            btn.innerText = 'SENDING...';
            await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data), headers: {'Content-Type':'application/json'} });
            const waMsg = `Hi ${COMPANY_NAME}, I'm ${data.name} (${data.email}). Project: ${data.project}, Budget: ${data.budget}. Details: ${data.message} — via ${DOMAIN}`;
            window.open(`https://wa.me/2348032684135?text=${encodeURIComponent(waMsg)}`, '_blank');
            btn.innerText = 'SENT ✓ — CHECK WHATSAPP';
            form.reset();
          }}>
            <input name="name" required placeholder="Your Name" className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-4 text-sm focus:border-[#D4AF37] outline-none" />
            <input name="email" required type="email" placeholder="Email" className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-4 text-sm focus:border-[#D4AF37] outline-none" />
            <div className="grid grid-cols-2 gap-4">
              <select name="project" className="bg-[#1A1A1A] border border-white/10 px-4 py-4 text-sm"><option>AI Product</option><option>E-commerce (Akanke Ade style)</option><option>SaaS (Quantic style)</option><option>Landing (Refresh style)</option><option>Other</option></select>
              <select name="budget" className="bg-[#1A1A1A] border border-white/10 px-4 py-4 text-sm"><option>$1k - $5k</option><option>$5k - $15k</option><option>$15k+</option></select>
            </div>
            <textarea name="message" required rows={4} placeholder={`Tell ${COMPANY_NAME} about your idea...`} className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-4 text-sm focus:border-[#D4AF37] outline-none"></textarea>
            <button type="submit" className="w-full bg-[#F9F6F0] text-black py-4 text-xs tracking-widest font-bold">SEND TO {COMPANY_NAME.toUpperCase()} + WHATSAPP →</button>
            <p className="text- text-white/20 text-center">{COMPANY_NAME} • {DOMAIN} • 6 LIVE PROJECTS ON VERCEL</p>
          </form>
        </div>
      </section>

      <footer className="px-6 md:px-16 py-8 border-t border-white/5 flex justify-between text- tracking-widest text-white/30">
        <span>© 2026 {COMPANY_NAME.toUpperCase()} • {DOMAIN.toUpperCase()}</span>
        <span>6 LIVE • LAGOS • VI • {DOMAIN}</span>
      </footer>
    </main>
  );
}