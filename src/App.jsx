import React from 'react';
import HeroCover from './components/HeroCover';
import PaymentMethods from './components/PaymentMethods';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <HeroCover />

      <main className="mx-auto max-w-md px-3 pb-16">
        <div className="pt-4">
          <PaymentMethods />
        </div>
      </main>

      <footer className="mx-auto max-w-md px-6 pb-8 text-center text-[11px] text-slate-400">
        <span>Trusted by millions • PCI DSS compliant • 256-bit encryption</span>
      </footer>
    </div>
  );
}
