/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ChevronDown, ChevronUp, Users, Zap, Shield, Star, Crown, Rocket, ChevronLeft, ChevronRight, ShieldCheck, X, CreditCard, QrCode } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import RefundPolicy from './RefundPolicy';

const benefits = [
  { emoji: "📝", title: "Scripts de Abordagem", desc: "Modelos validados para converter curiosos em compradores fiéis." },
  { emoji: "✍️", title: "Copies Prontas", desc: "Textos persuasivos para seus anúncios e legendas que vendem sozinhas." },
  { emoji: "📈", title: "Ganhar Seguidores", desc: "Estratégias orgânicas e pagas para explodir seu perfil em tempo recorde." },
  { emoji: "🔥", title: "Comunidade Ativa", desc: "Networking real com quem já fatura alto no mercado todos os dias." },
  { emoji: "🤖", title: "Ferramentas de IA", desc: "Como usar inteligência artificial para automatizar 90% do seu trabalho." },
  { emoji: "🔄", title: "Conteúdo Atualizado", desc: "Aulas novas toda semana acompanhando as mudanças das plataformas." },
];

const tools = ["ChatGPT Plus", "HeyGen", "DreamFace Pro", "CapCut Pro", "Leonardo AI", "Gamma Pro"];

const testimonials = [
  { name: "Lucas Silva", text: "O Hot Club mudou meu jogo. O rateio de ferramentas economiza mais de 500 reais por mês pra mim.", role: "Membro PRO" },
  { name: "Amanda Costa", text: "As copies de abordagem são surreais. Minha taxa de conversão dobrou na primeira semana.", role: "Membro PRO" },
  { name: "Ricardo M.", text: "Melhor investimento que fiz este ano. A comunidade é muito unida e o suporte é nota 10.", role: "Membro PRO" },
];

const faqs = [
  { q: "Quando recebo acesso?", a: "O acesso é imediato! Assim que o pagamento for confirmado, você receberá os dados de login no seu e-mail." },
  { q: "Como funciona o rateio?", a: "Membros PRO têm acesso compartilhado às melhores ferramentas do mercado através de nosso sistema exclusivo, pagando apenas uma fração do valor original." },
  { q: "Posso cancelar?", a: "Sim, você pode cancelar sua assinatura a qualquer momento diretamente na plataforma, sem burocracia." },
  { q: "Precisa ter experiência?", a: "Não! Ensinamos do absoluto zero, desde a criação do perfil até as estratégias mais avançadas de escala." },
  { q: "Funciona no celular?", a: "Com certeza. Todo o conteúdo e as ferramentas podem ser acessados e operados 100% pelo seu smartphone." },
  { q: "Posso dividir o acesso?", a: "O acesso é individual e intransferível. Nosso sistema monitora acessos simultâneos para garantir a segurança da comunidade." },
];

const resultImages = [
  "https://i.postimg.cc/cJvTdJrP/image.jpg",
  "https://i.postimg.cc/NFjKwK0z/image2.jpg",
  "https://i.postimg.cc/Fsq72sXf/image3.jpg",
  "https://i.postimg.cc/7LrbZs62/image4.jpg",
  "https://i.postimg.cc/nzHzvXB3/image5.jpg",
  "https://i.postimg.cc/PJJ5R03j/image6.jpg",
  "https://i.postimg.cc/tRvTxCJQ/image7.jpg",
  "https://i.postimg.cc/c4KJMytK/image8.jpg",
  "https://i.postimg.cc/2Sh8MQwp/image9.jpg",
];

function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const scrollToPlanos = () => {
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-hot-red selection:text-white bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-hot-red/20 blur-[80px] md:blur-[140px] rounded-full -z-10 animate-pulse" />
        
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block bg-hot-red/10 border border-hot-red/30 text-hot-red text-[10px] md:text-xs font-bold px-4 md:px-6 py-2 rounded-full mb-6 md:mb-8 uppercase tracking-[0.2em] backdrop-blur-sm"
          >
            Comunidade PRO do Mercado HOT
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-8 md:mb-12 flex justify-center"
          >
            <img 
              src="https://i.postimg.cc/gJZp5R8s/logo-hotclub.png" 
              alt="Hot Club Logo" 
              className="w-full max-w-[320px] sm:max-w-[500px] md:max-w-[800px] h-auto drop-shadow-[0_0_30px_rgba(224,32,32,0.3)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-3xl text-hot-white/80 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-medium px-4 md:px-0"
          >
            A comunidade pra quem quer entrar, <span className="text-white font-bold underline decoration-hot-red decoration-2 md:decoration-4 underline-offset-4 md:underline-offset-8">operar e faturar</span> no mercado HOT de verdade.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-6"
          >
            <button 
              onClick={scrollToPlanos}
              className="w-full md:w-auto bg-hot-red hover:bg-red-700 text-white font-bebas text-2xl md:text-3xl px-8 md:px-16 py-4 md:py-6 rounded-2xl transition-all glow-red hover:glow-red-strong active:scale-95 shadow-2xl"
            >
              QUERO MEU ACESSO AGORA
            </button>
            <div className="flex items-center gap-2 text-hot-white/40 uppercase tracking-[0.2em] text-[10px] font-bold">
              <ShieldCheck size={14} className="text-hot-red" />
              Acesso imediato após o pagamento
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { label: "Conteúdo exclusivo", value: "100%", icon: <Star size={24} /> },
            { label: "Ferramentas no rateio", value: "+10", icon: <Zap size={24} /> },
            { label: "Comunidade ativa", value: "24/7", icon: <Users size={24} /> }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/[0.03] border border-white/10 p-6 md:p-8 rounded-[20px] card-shadow flex items-center justify-between group hover:bg-white/[0.05] transition-all"
            >
              <div>
                <div className="text-3xl md:text-4xl font-bebas text-hot-red mb-1">{stat.value}</div>
                <div className="text-[10px] md:text-xs text-hot-white/60 uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
              <div className="text-hot-white/20 group-hover:text-hot-red transition-colors">
                {stat.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 md:py-32 px-6 bg-[#0d0d0d] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-hot-red/[0.02] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-8xl mb-4 font-black">O QUE VOCÊ VAI <span className="text-hot-red">RECEBER</span></h2>
            <div className="w-16 md:w-24 h-1 bg-hot-red mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 md:p-10 rounded-[20px] bg-gradient-to-br from-[#111] to-[#1a1a1a] border border-white/5 card-shadow card-hover relative overflow-hidden"
              >
                <div className="absolute -right-4 -bottom-4 text-6xl md:text-8xl opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  {benefit.emoji}
                </div>
                <div className="text-4xl md:text-5xl mb-6 bg-hot-red/10 w-14 md:w-16 h-14 md:h-16 rounded-2xl flex items-center justify-center border border-hot-red/20 group-hover:scale-110 transition-transform">
                  {benefit.emoji}
                </div>
                <h3 className="text-2xl md:text-3xl mb-4 text-white font-bold">{benefit.title}</h3>
                <p className="text-hot-white/60 text-sm md:text-base leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rateio Section */}
      <section className="py-24 md:py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="inline-block bg-hot-red/10 text-hot-red text-[10px] font-bold px-4 py-1 rounded-full mb-6 uppercase tracking-widest border border-hot-red/20">
              Economia Real
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-8xl mb-6 md:mb-8 leading-none font-black uppercase">RATEIO <span className="text-hot-red">EXCLUSIVO</span> HOT CLUB</h2>
            <p className="text-lg md:text-xl text-hot-white/70 mb-8 md:mb-10 leading-relaxed">
              Membros PRO têm acesso às melhores ferramentas de IA do mercado por uma fração do preço. 
              Economize milhares de reais todos os meses e use a tecnologia a seu favor.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3">
              {tools.map((tool, idx) => (
                <span key={idx} className="bg-white/5 border border-white/10 text-hot-white/80 px-4 md:px-5 py-2 md:py-3 rounded-xl text-xs md:text-sm font-bold hover:border-hot-red transition-colors">
                  {tool}
                </span>
              ))}
              <span className="bg-hot-red/10 border border-hot-red/30 text-hot-red px-4 md:px-5 py-2 md:py-3 rounded-xl text-xs md:text-sm font-bold">
                + muito mais
              </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="browser-mockup"
          >
            <div className="browser-header">
              <div className="browser-dot bg-red-500/50" />
              <div className="browser-dot bg-yellow-500/50" />
              <div className="browser-dot bg-green-500/50" />
              <div className="ml-4 bg-white/5 px-4 py-1 rounded-md text-[10px] text-white/30 font-mono">
                hotclub.tools/dashboard
              </div>
            </div>
            <div className="p-8 aspect-video flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="w-1/3 h-32 bg-white/5 rounded-xl animate-pulse" />
                <div className="w-2/3 h-32 bg-white/5 rounded-xl animate-pulse" />
              </div>
              <div className="h-4 w-full bg-white/5 rounded-full" />
              <div className="h-4 w-3/4 bg-white/5 rounded-full" />
              <div className="h-4 w-1/2 bg-white/5 rounded-full" />
              <div className="mt-auto flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-lg bg-hot-red/20" />
                  <div className="w-8 h-8 rounded-lg bg-white/5" />
                  <div className="w-8 h-8 rounded-lg bg-white/5" />
                </div>
                <div className="px-6 py-2 rounded-lg bg-hot-red text-white font-bebas text-lg">ACESSAR FERRAMENTA</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-8xl mb-4 font-black uppercase">QUEM JÁ ESTÁ <span className="text-hot-red">LÁ DENTRO</span></h2>
            <p className="text-hot-white/40 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">Relatos reais da nossa comunidade</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Phone Mockup Frame */}
                <div className="bg-[#111] border-[4px] md:border-[6px] border-[#222] rounded-[32px] md:rounded-[40px] p-6 md:p-8 card-shadow relative overflow-hidden aspect-[9/16] flex flex-col justify-center">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 md:w-24 h-4 md:h-6 bg-[#222] rounded-b-2xl" />
                  
                  <div className="text-hot-red text-4xl md:text-6xl opacity-20 mb-4 md:mb-6">"</div>
                  <p className="text-lg md:text-xl text-hot-white/90 mb-6 md:mb-10 leading-relaxed font-medium italic">{t.text}</p>
                  
                  <div className="mt-auto flex items-center gap-3 md:gap-4">
                    <div className="w-12 md:w-14 h-12 md:h-14 bg-gradient-to-br from-hot-red to-red-900 rounded-xl md:rounded-2xl flex items-center justify-center font-bebas text-xl md:text-2xl text-white shadow-lg">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="text-base md:text-lg font-bold text-white leading-none mb-1">{t.name}</div>
                      <div className="text-[10px] md:text-xs text-hot-red uppercase tracking-widest font-black">{t.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados Reais Section */}
      <section className="py-24 md:py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-hot-red text-[10px] md:text-xs uppercase tracking-[0.4em] font-black mb-6 block"
          >
            Prova que funciona
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-8xl mb-6 font-black uppercase"
          >
            RESULTADO DE QUEM <span className="text-hot-red">ESTÁ NO JOGO.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-hot-white/50 text-sm uppercase tracking-widest mb-20 font-bold"
          >
            Prints reais de quem está no mercado todo dia.
          </motion.p>

          <div className="relative group">
            <div 
              className="flex gap-8 overflow-x-auto pb-12 scrollbar-hide snap-x snap-mandatory scroll-smooth px-4"
              id="results-carousel"
            >
              {resultImages.map((src, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex-none snap-center"
                >
                  <div className="bg-[#111] border border-white/10 overflow-hidden rounded-[24px] shadow-2xl card-hover">
                    <img 
                      src={src} 
                      alt={`Resultado ${idx + 1}`} 
                      className="max-h-[650px] w-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Navigation Buttons */}
            <button 
              onClick={() => {
                const el = document.getElementById('results-carousel');
                if (el) el.scrollLeft -= 400;
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-hot-black/90 border border-white/10 p-5 rounded-full text-white hover:bg-hot-red transition-all opacity-0 group-hover:opacity-100 -translate-x-1/2 hidden md:block backdrop-blur-md"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={() => {
                const el = document.getElementById('results-carousel');
                if (el) el.scrollLeft += 400;
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-hot-black/90 border border-white/10 p-5 rounded-full text-white hover:bg-hot-red transition-all opacity-0 group-hover:opacity-100 translate-x-1/2 hidden md:block backdrop-blur-md"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      </section>

      {/* Vale a Pena Section */}
      <section className="py-24 md:py-32 px-6 bg-[#0d0d0d] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl sm:text-5xl md:text-8xl mb-6 md:mb-8 leading-none font-black uppercase">ENFIM, VALE A PENA O <span className="text-hot-red">HOT CLUB?</span></h2>
            <p className="text-lg md:text-xl text-hot-white/70 mb-8 leading-relaxed">
              O mercado HOT não para de crescer, e a nossa comunidade acompanha esse ritmo. 
              Conforme entregamos mais ferramentas, mais acervos e mais networking, o valor do acesso aumenta.
            </p>
            <div className="flex items-center gap-4 p-5 md:p-6 bg-hot-red/10 border border-hot-red/20 rounded-2xl text-left">
              <Zap className="text-hot-red flex-shrink-0" size={28} md:size={32} />
              <p className="text-hot-red font-bold text-base md:text-lg">O preço sobe automaticamente conforme a comunidade cresce. Garanta sua vaga hoje.</p>
            </div>
          </motion.div>

          <div className="relative h-[400px]">
            {/* Floating Notification Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: -5 }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 w-72 bg-white p-6 rounded-2xl shadow-2xl z-10 border border-black/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-hot-red rounded-full flex items-center justify-center text-white">
                  <Rocket size={20} />
                </div>
                <div>
                  <div className="text-hot-black font-black text-sm">HISTÓRICO DE PREÇOS</div>
                  <div className="text-[10px] text-hot-black/40 uppercase font-bold tracking-widest">Valorização constante</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-hot-black/40 line-through text-sm">
                  <span>Lançamento</span>
                  <span>R$47</span>
                </div>
                <div className="flex justify-between items-center text-hot-black/60 text-sm">
                  <span>Fase 2</span>
                  <span>R$67</span>
                </div>
                <div className="flex justify-between items-center text-hot-red font-black text-xl">
                  <span>Próximo Nível</span>
                  <span>R$97</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50, rotate: 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-0 right-0 w-72 bg-[#111] p-6 rounded-2xl shadow-2xl z-20 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-hot-red/20 rounded-full flex items-center justify-center text-hot-red">
                  <Crown size={20} />
                </div>
                <div>
                  <div className="text-white font-black text-sm uppercase">ÚLTIMA CHANCE</div>
                  <div className="text-[10px] text-hot-red font-bold tracking-widest">Vagas Limitadas</div>
                </div>
              </div>
              <p className="text-hot-white/60 text-sm mb-4">Quando batermos a meta de membros, o preço subirá para R$97/mês.</p>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-hot-red"
                />
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-hot-white/40 font-bold">
                <span>85% PREENCHIDO</span>
                <span>META: xxxxx MEMBROS</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-24 md:py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-8xl mb-4 md:mb-6 font-black uppercase">ESCOLHA SEU <span className="text-hot-red">PLANO</span></h2>
            <p className="text-hot-white/40 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">Acesso imediato à elite do mercado</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
            {/* Semestral */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#111] border border-white/5 p-8 md:p-12 rounded-[24px] flex flex-col text-center card-shadow card-hover order-2 md:order-1"
            >
              <h3 className="text-3xl md:text-4xl mb-2 text-white font-black uppercase">SEMESTRAL</h3>
              <p className="text-[10px] text-hot-white/30 uppercase tracking-[0.2em] mb-6 font-bold">Pagamento único via Pix</p>
              <div className="text-5xl md:text-6xl font-black text-hot-red mb-8 md:mb-10">R$197<span className="text-lg md:text-xl text-hot-white/30 font-medium"> à vista</span></div>
              <button 
                onClick={() => window.location.href = 'https://ggcheckout.app/checkout/v5/08t5zJHbzpVuTzep8a7c'}
                className="w-full border-2 border-hot-red/30 text-hot-red hover:bg-hot-red hover:text-white font-bebas py-4 md:py-5 rounded-xl transition-all uppercase tracking-widest text-xl"
              >
                Quero Entrar
              </button>
            </motion.div>

            {/* Mensal - DESTAQUE NO MEIO */}
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-hot-red to-black p-10 md:p-12 rounded-[32px] flex flex-col relative z-10 shadow-[0_20px_80px_rgba(224,32,32,0.2)] text-center border border-white/10 order-1 md:order-2 md:scale-105"
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-hot-black text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-xl whitespace-nowrap">MAIS POPULAR</div>
              <h3 className="text-4xl md:text-5xl mb-2 text-white font-black uppercase">MENSAL</h3>
              <div className="mb-6">
                <p className="text-[10px] text-white/60 uppercase tracking-[0.2em] font-bold">Cartão recorrente</p>
                <p className="text-[10px] text-white/60 uppercase tracking-[0.2em] font-bold">Pix recorrente</p>
              </div>
              <div className="text-6xl md:text-7xl font-black text-white mb-8 md:mb-10 drop-shadow-lg">R$67<span className="text-xl md:text-2xl text-white/50 font-medium">/mês</span></div>
              <button 
                onClick={() => setShowPaymentModal(true)}
                className="w-full bg-white text-hot-black hover:bg-hot-white font-bebas py-5 md:py-6 rounded-2xl transition-all uppercase tracking-[0.2em] text-xl md:text-2xl shadow-2xl active:scale-95"
              >
                Quero Entrar
              </button>
            </motion.div>

            {/* Anual */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#111] border border-white/5 p-8 md:p-12 rounded-[24px] flex flex-col text-center card-shadow card-hover order-3"
            >
              <h3 className="text-3xl md:text-4xl mb-2 text-white font-black uppercase">ANUAL</h3>
              <p className="text-[10px] text-hot-white/30 uppercase tracking-[0.2em] mb-6 font-bold">Pagamento único via Pix</p>
              <div className="text-5xl md:text-6xl font-black text-hot-red mb-8 md:mb-10">R$297<span className="text-lg md:text-xl text-hot-white/30 font-medium"> à vista</span></div>
              <button 
                onClick={() => window.location.href = 'https://ggcheckout.app/checkout/v5/gM37I4vzkmcLTP1UUmZW'}
                className="w-full border-2 border-white/10 text-white hover:bg-white hover:text-hot-black font-bebas py-4 md:py-5 rounded-xl transition-all uppercase tracking-widest text-xl"
              >
                Quero Entrar
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 px-6 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-8xl mb-4 md:mb-6 font-black uppercase">PERGUNTAS <span className="text-hot-red">FREQUENTES</span></h2>
            <p className="text-hot-white/40 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">Tire suas dúvidas agora</p>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#111] border border-white/5 rounded-[20px] overflow-hidden card-shadow"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-white/[0.02] transition-all"
                >
                  <span className="font-bold text-lg md:text-xl text-hot-white/90 pr-4">{faq.q}</span>
                  {openFaq === idx ? <ChevronUp size={24} className="text-hot-red flex-shrink-0" /> : <ChevronDown size={24} className="text-hot-white/40 flex-shrink-0" />}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-white/[0.01]"
                    >
                      <div className="p-6 md:p-8 text-base md:text-lg text-hot-white/60 leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 md:py-48 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-hot-red/5 -z-10" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[150px] md:h-[400px] bg-hot-red/10 blur-[80px] md:blur-[120px] rounded-full -z-10 animate-pulse" />
        
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl sm:text-7xl md:text-[10rem] mb-8 leading-none font-black uppercase">PRONTO PRA <span className="text-hot-red drop-shadow-[0_0_40px_rgba(224,32,32,0.4)]">FATURAR?</span></h2>
          <p className="text-lg md:text-3xl text-hot-white/70 mb-12 md:mb-16 max-w-3xl mx-auto font-medium px-4 md:px-0">
            Não perca tempo tentando sozinho. Entre para a elite do mercado hoje mesmo e mude seu jogo.
          </p>
          <button 
            onClick={scrollToPlanos}
            className="w-full md:w-auto bg-hot-red hover:bg-red-700 text-white font-bebas text-2xl md:text-4xl px-10 md:px-20 py-6 md:py-8 rounded-2xl transition-all glow-red-strong active:scale-95 shadow-[0_20px_60px_rgba(224,32,32,0.3)]"
          >
            QUERO ENTRAR PRO HOT CLUB
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col gap-6 items-center md:items-start">
            <div className="text-4xl font-black tracking-tighter">
              <span className="text-hot-white">HOT</span>
              <span className="text-hot-red">CLUB</span>
            </div>
            <Link 
              to="/politica-de-reembolso" 
              className="text-sm text-hot-white/30 hover:text-hot-red transition-colors uppercase tracking-[0.2em] font-bold"
            >
              Política de Reembolso
            </Link>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-xs text-hot-white/40 uppercase tracking-[0.2em] mb-4 font-bold">
              © 2026 HOT CLUB. TODOS OS DIREITOS RESERVADOS.
            </p>
            <div className="flex items-center justify-center md:justify-end gap-3 text-hot-red font-black text-sm tracking-widest">
              <Shield size={18} />
              CONTEÚDO ADULTO (+18)
            </div>
          </div>
        </div>
      </footer>

      {/* Payment Selection Modal */}
      <AnimatePresence>
        {showPaymentModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPaymentModal(false)}
              className="absolute inset-0 bg-hot-black/90 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-[#111] w-full max-w-md p-8 md:p-10 rounded-[32px] relative z-10 shadow-[0_20px_80px_rgba(224,32,32,0.2)] border border-white/10"
            >
              <button 
                onClick={() => setShowPaymentModal(false)}
                className="absolute top-6 right-6 text-hot-white/20 hover:text-hot-red transition-colors"
              >
                <X size={24} md:size={28} />
              </button>

              <div className="text-center mb-8 md:mb-10">
                <h3 className="text-4xl md:text-5xl font-black text-white mb-2 uppercase">COMO DESEJA <span className="text-hot-red">PAGAR?</span></h3>
                <p className="text-[10px] md:text-xs text-hot-white/40 uppercase tracking-[0.2em] font-bold">Escolha o melhor método para você</p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:gap-5">
                <button 
                  className="group flex items-center justify-between p-6 md:p-8 border-2 border-white/5 hover:border-hot-red rounded-2xl transition-all text-left bg-white/[0.02]"
                  onClick={() => window.location.href = 'https://pay.lowify.com.br/checkout.php?product_id=jfCpuT'}
                >
                  <div className="flex items-center gap-4 md:gap-5">
                    <div className="w-12 md:w-14 h-12 md:h-14 bg-hot-red/10 rounded-2xl flex items-center justify-center text-hot-red group-hover:bg-hot-red group-hover:text-white transition-all">
                      <QrCode size={24} md:size={28} />
                    </div>
                    <div>
                      <div className="font-black text-xl md:text-2xl text-white leading-none mb-1 uppercase">PIX RECORRENTE</div>
                      <div className="text-[10px] text-hot-white/40 uppercase tracking-widest font-bold">Aprovação instantânea</div>
                    </div>
                  </div>
                  <Check size={20} md:size={24} className="text-hot-red opacity-0 group-hover:opacity-100 transition-all" />
                </button>

                <button 
                  className="group flex items-center justify-between p-6 md:p-8 border-2 border-white/5 hover:border-hot-red rounded-2xl transition-all text-left bg-white/[0.02]"
                  onClick={() => window.location.href = 'https://ggcheckout.app/checkout/v5/m2Qut2znaaoWXb6tWVAd'}
                >
                  <div className="flex items-center gap-4 md:gap-5">
                    <div className="w-12 md:w-14 h-12 md:h-14 bg-hot-red/10 rounded-2xl flex items-center justify-center text-hot-red group-hover:bg-hot-red group-hover:text-white transition-all">
                      <CreditCard size={24} md:size={28} />
                    </div>
                    <div>
                      <div className="font-black text-xl md:text-2xl text-white leading-none mb-1 uppercase">CARTÃO DE CRÉDITO</div>
                      <div className="text-[10px] text-hot-white/40 uppercase tracking-widest font-bold">Acesso imediato</div>
                    </div>
                  </div>
                  <Check size={20} md:size={24} className="text-hot-red opacity-0 group-hover:opacity-100 transition-all" />
                </button>
              </div>

              <p className="mt-8 md:mt-10 text-[10px] text-hot-white/30 text-center uppercase tracking-[0.2em] leading-relaxed font-bold">
                Ambiente seguro e criptografado.<br />
                Sua assinatura pode ser cancelada a qualquer momento.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/politica-de-reembolso" element={<RefundPolicy />} />
        {/* Fallback for the .html extension if the user specifically types it */}
        <Route path="/politica-de-reembolso.html" element={<RefundPolicy />} />
      </Routes>
    </Router>
  );
}
