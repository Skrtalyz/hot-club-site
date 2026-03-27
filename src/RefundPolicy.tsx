import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RefundPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-hot-black text-hot-white font-sans selection:bg-hot-red selection:text-white">
      {/* Navbar */}
      <nav className="py-6 px-6 border-b border-white/5 bg-hot-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://i.postimg.cc/gJZp5R8s/logo-hotclub.png" 
              alt="Hot Club Logo" 
              className="h-8 w-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <Link 
            to="/" 
            className="flex items-center gap-2 text-hot-white/60 hover:text-hot-red transition-colors font-bebas text-xl tracking-widest"
          >
            <ArrowLeft size={20} />
            VOLTAR
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="py-16 md:py-24 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-8xl mb-4 font-bebas uppercase">POLÍTICA DE <span className="text-hot-red">REEMBOLSO</span></h1>
          <p className="text-hot-white/40 uppercase tracking-[0.3em] text-[10px] md:text-xs mb-12 md:mb-16 font-bold">Vigente a partir de 2025</p>

          <div className="space-y-12 md:space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl mb-4 md:mb-6 font-bebas text-hot-red tracking-wider uppercase">Garantia de 7 dias</h2>
              <p className="text-hot-white/70 leading-relaxed text-base md:text-lg">
                Oferecemos garantia de 7 dias a partir da data da compra. Se por qualquer motivo você não estiver satisfeito com a comunidade, entre em contato dentro desse prazo e reembolsamos 100% do valor sem questionamento e sem burocracia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4 md:mb-6 font-bebas text-hot-red tracking-wider uppercase">Após o prazo de 7 dias</h2>
              <p className="text-hot-white/70 leading-relaxed text-base md:text-lg">
                Após os 7 dias, o acesso segue ativo pelo período contratado e não há possibilidade de reembolso, pois o produto foi entregue conforme prometido e descrito na página de vendas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4 md:mb-6 font-bebas text-hot-red tracking-wider uppercase">Casos sem direito a reembolso</h2>
              <p className="text-hot-white/70 leading-relaxed text-base md:text-lg">
                Não há reembolso em casos de banimento por violação dos termos da comunidade, independente do prazo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4 md:mb-6 font-bebas text-hot-red tracking-wider uppercase">Como solicitar o reembolso</h2>
              <p className="text-hot-white/70 leading-relaxed text-base md:text-lg">
                Para solicitar o reembolso dentro do prazo, entre em contato pelo suporte via Discord ou WhatsApp informando seu nome e o e-mail usado na compra.
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-hot-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-2xl font-bebas tracking-tighter">
            <span className="text-hot-white">HOT</span>
            <span className="text-hot-red">CLUB</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-xs text-hot-white/40 uppercase tracking-widest mb-2">
              © 2026 HOT CLUB. TODOS OS DIREITOS RESERVADOS.
            </p>
            <div className="flex items-center justify-center md:justify-end gap-2 text-hot-red font-bold text-xs">
              <Shield size={14} />
              CONTEÚDO ADULTO (+18)
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
