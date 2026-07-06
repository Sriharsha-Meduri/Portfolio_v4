import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, Shield, Boxes, Github, ArrowUpRight, Zap, Layers, ScanLine, Cpu } from 'lucide-react';
import Badge from './Badge';
import { Reveal, Magnetic } from './effects';

const projects = [
  {
    key: 'phishinglens', icon: Shield, accent: 'from-zen-lime/20 to-transparent',
    name: 'PhishingLens', tag: 'Multi-modal phishing detection',
    desc: 'Catches phishing across email, SMS, URLs, and screenshots. A fine-tuned DistilBERT reads the language, a lexical engine dissects links, and OCR reads images, all behind one explainable API that also powers a Chrome extension.',
    metric: '4', metricLabel: 'detection lenses',
    tech: ['DistilBERT', 'FastAPI', 'OCR', 'React', 'Docker'],
    github: 'https://github.com/Sriharsha-Meduri/PhishingLens', demo: 'https://sriharshameduri-phishinglens.static.hf.space',
  },
  {
    key: 'corten', icon: Boxes, accent: 'from-sky-400/20 to-transparent',
    name: 'Corten', tag: 'Real-time container-damage detection',
    desc: 'Fine-tuned YOLO spots holes, dents, rust and warped frames on shipping containers from an image, a video, or a live camera feed, served through a hand-rolled ONNX Runtime pipeline lean enough to run on a free 512MB host.',
    metric: '98.7%', metricLabel: 'detection mAP',
    tech: ['YOLO', 'ONNX Runtime', 'FastAPI', 'OpenCV', 'React'],
    github: 'https://github.com/Sriharsha-Meduri/Corten', demo: 'https://cortenai.vercel.app/',
  },
];

const verdictRows = [
  { label: 'Deepfake', val: 99.7, bar: 'bg-red-500', tag: 'HIGH', tagc: 'text-red-400 bg-red-500/15' },
  { label: 'AI-generated', val: 6.9, bar: 'bg-emerald-500', tag: 'LOW', tagc: 'text-emerald-400 bg-emerald-500/15' },
  { label: 'Context integrity', val: 58, bar: 'bg-amber-500', tag: 'FLAG', tagc: 'text-amber-400 bg-amber-500/15' },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full max-w-[90%] lg:max-w-[80%] mx-auto px-4 lg:px-0 py-16 scroll-mt-10">
      <Reveal>
        <Badge variant="lime">Selected work</Badge>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-zen-black dark:text-white">Built, shipped, and live.</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-xl">Not notebook demos, but real systems with APIs, front-ends, and browser extensions you can use right now.</p>
      </Reveal>

      {/* Featured: Provenance */}
      <Reveal delay={0.05}>
        <div className="mt-10 group relative bg-white dark:bg-zen-dark-card rounded-4xl p-8 md:p-12 overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-2xl hover:border-violet-400/40">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-violet-500 rounded-full animate-pulse" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Featured · Live</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-violet-500/15 text-violet-600 dark:text-violet-300"><Fingerprint className="w-6 h-6" /></div>
                <h3 className="font-display text-4xl md:text-5xl font-bold text-zen-black dark:text-white">Provenance</h3>
              </div>
              <p className="text-lg text-gray-500 dark:text-gray-300">Multi-modal video forensics</p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Can you trust this video? Three independent detectors flag <strong className="text-zen-black dark:text-white">deepfakes, fully AI-generated footage, and miscontextualized clips</strong>, each returning an explainable risk score instead of a black-box verdict. CLIP, ViT, and ResNet-50 under the hood; a FastAPI backend on Hugging Face Spaces and a React front-end on top.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[[Layers, '3', 'forensic lenses'], [ScanLine, 'CLIP', 'zero-shot context'], [Cpu, 'ViT', 'face-forgery'], [Zap, '0-100', 'risk score']].map(([Ic, a, b]: any, i) => (
                  <div key={i} className="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-2xl">
                    <Ic className="w-5 h-5 mb-2 text-zen-black dark:text-violet-300" />
                    <p className="font-bold text-sm text-zen-black dark:text-white">{a}</p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">{b}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                <Magnetic><a href="https://github.com/Sriharsha-Meduri/Provenance" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zen-black text-white dark:bg-zen-lime dark:text-zen-black font-mono text-sm font-bold hover:opacity-90 transition"><Github className="w-4 h-4" /> Code</a></Magnetic>
                <Magnetic><a href="https://theprovenance.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-zen-black dark:border-white font-mono text-sm font-bold hover:bg-zen-black hover:text-white dark:hover:bg-white dark:hover:text-zen-black transition">Live demo <ArrowUpRight className="w-4 h-4" /></a></Magnetic>
              </div>
            </div>

            {/* Mock forensic verdict panel */}
            <div className="relative">
              <div className="relative w-full bg-zen-black rounded-3xl p-6 overflow-hidden border-8 border-gray-100 dark:border-gray-700 shadow-2xl">
                <div className="flex items-center justify-between text-white mb-6">
                  <h4 className="font-mono text-lg">Forensic verdict</h4>
                  <span className="px-2 py-1 bg-violet-500/20 text-violet-300 text-xs rounded font-mono">analyzed</span>
                </div>
                <div className="space-y-4 mb-6">
                  {verdictRows.map((r, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between text-sm mb-1.5">
                        <span className="text-gray-300 font-mono">{r.label}</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${r.tagc}`}>{r.tag} {r.val}</span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-800 overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: `${r.val}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.15 }} className={`h-full rounded-full ${r.bar}`} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-800 p-4 rounded-xl flex items-center gap-3">
                  <div className="p-2 bg-red-500/20 rounded-lg"><Fingerprint className="text-red-500 w-5 h-5" /></div>
                  <div>
                    <p className="text-white text-sm font-bold">Likely manipulated</p>
                    <p className="text-gray-400 text-xs font-mono">deepfake signals + context mismatch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* PhishingLens + Corten */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.key} delay={i * 0.08}>
            <motion.div whileHover={{ y: -6 }} className="group relative h-full bg-white dark:bg-zen-dark-card rounded-4xl p-8 overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800"><p.icon className="w-6 h-6 text-zen-black dark:text-white" /></div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-zen-black dark:text-white">{p.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{p.tag}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-display text-2xl font-bold text-zen-black dark:text-zen-lime">{p.metric}</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide">{p.metricLabel}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {p.tech.map((t) => <span key={t} className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-[11px] font-mono text-gray-600 dark:text-gray-300">{t}</span>)}
                </div>
                <div className="flex gap-4 mt-6 pt-5 border-t border-gray-100 dark:border-gray-800">
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-mono font-bold text-zen-black dark:text-white hover:text-zen-lime dark:hover:text-zen-lime transition"><Github className="w-4 h-4" /> Code</a>
                  <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-mono font-bold text-zen-black dark:text-white hover:text-zen-lime dark:hover:text-zen-lime transition">Demo <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></a>
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
