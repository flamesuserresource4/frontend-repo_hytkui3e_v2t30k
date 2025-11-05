import React, { useEffect, useMemo, useState } from 'react';
import { CreditCard, Smartphone, Wallet, Banknote, IndianRupee } from 'lucide-react';
import PaymentRow from './PaymentRow';
import BNPLPanel from './BNPLPanel';
import { AnimatePresence, motion } from 'framer-motion';

const STORAGE_KEY = 'selectedPaymentMethod';

export default function PaymentMethods() {
  const [selected, setSelected] = useState('upi');

  // Persist selection (sticky)
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setSelected(saved);
  }, []);
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, selected);
  }, [selected]);

  const bnplInstallment = 1000;
  const bnplDates = useMemo(() => ['10 Oct', '10 Nov', '10 Dec'], []);

  return (
    <div className="mx-auto w-full max-w-md -mt-8 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-200">
      {/* Cards */}
      <Section title="CREDIT & DEBIT CARDS">
        <div className="divide-y divide-slate-200">
          <PaymentRow
            icon={<CreditCard className="h-5 w-5 text-slate-600" />}
            title="ICICI Bank Credit Card"
            subtitle={<span className="inline-flex items-center gap-1">VISA <span className="text-[10px] text-slate-400">• ending 2593</span></span>}
            name="payment"
            value="card"
            selected={selected}
            onChange={setSelected}
            right={<span className="rounded bg-slate-50 px-2 py-0.5 text-[10px] ring-1 ring-slate-200">Default</span>}
          />
          <div className="py-3 text-sm text-teal-700">Add New Card [+]</div>
        </div>
      </Section>

      {/* UPI */}
      <Section title="UPI">
        <div className="divide-y divide-slate-200">
          <PaymentRow
            icon={<Smartphone className="h-5 w-5 text-slate-600" />}
            title="Amazon Pay UPI – State Bank of India"
            subtitle={<span className="text-xs text-slate-500">•••• 2593</span>}
            name="payment"
            value="upi"
            selected={selected}
            onChange={setSelected}
            right={<span className="text-[11px] text-slate-500">i</span>}
          />
          <div className="py-3 text-sm text-teal-700">Add Another UPI ID [+]</div>
        </div>
      </Section>

      {/* BNPL */}
      <Section title="BUY NOW, PAY LATER (BNPL)" highlight>
        <div className="divide-y divide-transparent">
          <PaymentRow
            icon={<Banknote className="h-5 w-5 text-teal-600" />}
            title="Pay in 3"
            subtitle={<span className="text-xs text-teal-700">Instant approval • 0% interest</span>}
            name="payment"
            value="bnpl"
            selected={selected}
            onChange={setSelected}
            right={<span className="rounded bg-teal-50 px-2 py-0.5 text-[10px] text-teal-700 ring-1 ring-teal-200">Popular</span>}
          />

          <AnimatePresence initial={false}>
            {selected === 'bnpl' && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <BNPLPanel amountPerInstallment={bnplInstallment} dates={bnplDates} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Section>

      {/* Other payment methods */}
      <Section title="OTHER PAYMENT METHODS">
        <div className="divide-y divide-slate-200">
          <PaymentRow
            icon={<Wallet className="h-5 w-5 text-slate-600" />}
            title="Net Banking"
            subtitle="Choose an option"
            name="payment"
            value="netbanking"
            selected={selected}
            onChange={setSelected}
          />
          <PaymentRow
            icon={<IndianRupee className="h-5 w-5 text-slate-600" />}
            title="Other UPI Apps"
            subtitle="Google Pay, PhonePe, Paytm"
            name="payment"
            value="otherupi"
            selected={selected}
            onChange={setSelected}
          />
        </div>
      </Section>
    </div>
  );
}

function Section({ title, highlight = false, children }) {
  return (
    <section className={`mb-4 rounded-xl ${highlight ? 'bg-white ring-1 ring-teal-200/60' : 'bg-white ring-1 ring-slate-200'}`}>
      <div className={`rounded-t-xl border-b ${highlight ? 'border-teal-100 bg-teal-50/60 text-teal-800' : 'border-slate-100 bg-slate-50 text-slate-700'} px-4 py-2 text-[11px] font-semibold tracking-wide`}>
        {title}
      </div>
      <div className="px-4">
        {children}
      </div>
    </section>
  );
}
