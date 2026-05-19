'use client';

import Link from 'next/link';
import MaintenancePage from '../components/MaintenancePage';

export default function Home() {
  return (
    <>
      <MaintenancePage pageName="home" />
      
      {/* Hero Section */}
      <section className="min-h-[600px] flex items-center justify-center bg-gradient-to-b from-indigo-900/20 to-pink-900/20 relative overflow-hidden py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Benvenuto in <span className="text-gradient">Elegant Gaming Mania</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            La comunità gaming più elegante e professionale. Unisciti a migliaia di giocatori appassionati.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/chi-siamo"
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all transform hover:scale-105"
            >
              Scopri di più
            </Link>
            <Link
              href="/candidature"
              className="px-8 py-3 border-2 border-indigo-500 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all"
            >
              Candidati Ora
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Perché Scegliere EGM?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '🎮',
              title: 'Comunità Attiva',
              description: 'Migliaia di giocatori online pronti a giocare con te'
            },
            {
              icon: '👥',
              title: 'Staff Professionale',
              description: 'Un team dedicato a mantenerla comunità sicura e divertente'
            },
            {
              icon: '🏆',
              title: 'Eventi Esclusivi',
              description: 'Tornei e competizioni con premi interessanti'
            }
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-gray-900 to-darker rounded-lg p-8 hover:from-gray-800 transition-all hover:scale-105 transform"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 rounded-lg my-12 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Pronto a Unirti?</h2>
          <p className="text-xl text-gray-300 mb-8">Scopri le opportunità di partnership e candidature</p>
          <Link
            href="/partnership"
            className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all transform hover:scale-105"
          >
            Scopri Partnership
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </>
  );
}

