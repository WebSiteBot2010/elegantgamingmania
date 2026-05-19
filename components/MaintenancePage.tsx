'use client';

import { useEffect, useState } from 'react';

export default function MaintenancePage({ pageName }: { pageName: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const checkMaintenance = async () => {
      try {
        const res = await fetch(`/api/maintenance/${pageName}`);
        const data = await res.json();
        setIsVisible(data.isActive);
      } catch (error) {
        console.error('Error checking maintenance:', error);
      }
    };

    checkMaintenance();

    if (isVisible) {
      const interval = setInterval(() => {
        setProgress((prev) => (prev + Math.random() * 30 > 100 ? 100 : prev + Math.random() * 30));
      }, 500);

      return () => clearInterval(interval);
    }
  }, [isVisible, pageName]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-8 max-w-md mx-4 animate-slide-in-down">
        <div className="flex items-center justify-center mb-6">
          <svg
            className="w-16 h-16 text-indigo-500 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-center text-white mb-3">
          In Manutenzione
        </h1>

        <p className="text-center text-gray-300 mb-6">
          Stiamo lavorando per migliorare il servizio. Torna tra poco.
        </p>

        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
          <div
            className="progress-bar"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-4">
          {Math.round(Math.min(progress, 100))}%
        </p>
      </div>
    </div>
  );
}
