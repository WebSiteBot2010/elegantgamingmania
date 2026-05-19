'use client';

import MaintenancePage from '../../components/MaintenancePage';

export default function Regolamento() {
  return (
    <>
      <MaintenancePage pageName="regolamento" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold mb-12 text-gradient">Regolamento</h1>

        <div className="space-y-8">
          {[
            {
              title: '1. Rispetto Reciproco',
              content: 'Tutti i membri della comunità devono trattarsi con rispetto. Non è tollerato alcun tipo di razzismo, sessismo, omofobia o discriminazione.'
            },
            {
              title: '2. Linguaggio Appropriato',
              content: 'Evita un linguaggio scurrile eccessivo, minacce e molestie. Mantieni una comunicazione professionale e cortese.'
            },
            {
              title: '3. Spam e Self-Promotion',
              content: 'Non spammare il chat o i canali. La self-promotion è permessa solo con il permesso dello staff. Non inviare link non autorizzati.'
            },
            {
              title: '4. Integrità del Gioco',
              content: 'Cheating, hack, exploit di gioco o qualsiasi forma di imbroglio sono severamente vietati. I trasgressori verranno bannati immediatamente.'
            },
            {
              title: '5. Privacy e Sicurezza',
              content: 'Non condividere informazioni personali altrui. Proteggi i tuoi dati e segnala eventuali account compromessi allo staff.'
            },
            {
              title: '6. Rispetto delle Decisioni dello Staff',
              content: 'Le decisioni dello staff sono finali. Puoi fare appello solo attraverso il canale apposito. Non sfidare direttamente le autorità.'
            },
            {
              title: '7. Contenuti Inappropriati',
              content: 'Non condividere contenuti espliciti, violenti o offensivi. Questo include immagini, video e testo.'
            },
            {
              title: '8. Sanzioni',
              content: 'Le violazioni del regolamento possono portare a warning, mute temporanei, ban temporanei o ban permanenti in base alla gravità.'
            }
          ].map((section, i) => (
            <div key={i} className="bg-darker rounded-lg p-6 border border-gray-800 hover:border-indigo-500/50 transition-colors">
              <h2 className="text-2xl font-bold mb-3 text-gradient">{section.title}</h2>
              <p className="text-gray-300 leading-7">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-indigo-600/20 to-pink-600/20 rounded-lg p-8 mt-12 border border-indigo-500/20">
          <p className="text-center text-gray-300">
            Per qualsiasi domanda sul regolamento, contatta lo staff tramite il canale support.
          </p>
        </div>
      </div>
    </>
  );
}
