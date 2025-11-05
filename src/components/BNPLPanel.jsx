import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Shield, Clock, Star, Info } from 'lucide-react';

export default function BNPLPanel({ amountPerInstallment = 1000, dates = ['10 Oct', '10 Nov', '10 Dec'] }) {
  const [ack, setAck] = useState(false);
  const [burst, setBurst] = useState(false);

  const handlePay = () => {
    // Micro feedback animation (confetti / check)
    setBurst(true);
    setTimeout(() => setBurst(false), 1500);
  };

  const progress = useMemo(() => 80, []); // visual: you're one step away

  return (
    <div className="relative mt-3 rounded-xl border border-teal-200/70 bg-teal-50/60 p-3 shadow-[0_6px_20px_-6px_rgba(13,148,136,0.25)]">
      {/* Progress */}
      <div className="mb-2">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-[11px] font-medium text-teal-900">You’re one step away from completing your purchase!</span>
          <span className="text-[11px] tabular-nums text-teal-700">{progress}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-white/70 ring-1 ring-teal-200">
          <div className="h-full bg-gradient-to-r from-teal-500 to-emerald-400" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Badges & Social proof */}
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[11px] font-medium text-teal-800 ring-1 ring-teal-200">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-500" /> Rated 4.8 by young professionals
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[11px] font-medium text-teal-800 ring-1 ring-teal-200">
          <CheckCircle2 className="h-3 w-3 text-teal-600" /> Over 2 million users chose this option!
        </span>
      </div>

      {/* Urgency banner */}
      <div className="mb-3 flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-100 to-amber-100 px-3 py-2 text-[12px] text-amber-800 ring-1 ring-amber-200">
        <Clock className="h-4 w-4 text-amber-600" />
        <span className="font-medium">Limited-time 0% offer – ends today.</span>
      </div>

      {/* Micro social text */}
      <div className="mb-2 flex items-center gap-2 text-[12px] text-teal-900/90">
        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
        <span>14 people just used this option in the last hour.</span>
      </div>

      {/* Repayment summary */}
      <div className="mb-1 text-[12px] text-slate-600">
        3 payments of ₹{amountPerInstallment.toLocaleString('en-IN')} on {dates[0]}, {dates[1]}, {dates[2]}.
      </div>
      <div className="mb-3 text-[12px] text-teal-800">
        0% interest if paid on time.
      </div>

      {/* Terms link */}
      <div className="mb-3 inline-flex items-center gap-1 text-[11px] text-slate-500">
        <Info className="h-3.5 w-3.5" />
        <a href="#" className="underline decoration-slate-300 underline-offset-2 hover:text-slate-700">See terms</a>
      </div>

      {/* Acknowledgement */}
      <label className="mb-3 flex items-center gap-2 text-[12px] text-slate-700">
        <input
          type="checkbox"
          checked={ack}
          onChange={(e) => setAck(e.target.checked)}
          className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
        />
        I have reviewed the payment plan.
      </label>

      {/* CTA */}
      <button
        type="button"
        onClick={handlePay}
        className="relative inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-teal-500 to-orange-400 px-4 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-6px_rgba(234,88,12,0.5)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-70"
        disabled={!ack}
        aria-disabled={!ack}
      >
        Pay in 3 – Instant Approval 🎉
      </button>

      {/* Trust & security line */}
      <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-slate-500">
        <Shield className="h-3.5 w-3.5 text-slate-400" />
        <span>Your details are encrypted and secure.</span>
      </div>

      {/* Micro feedback animation */}
      <AnimatePresence>
        {burst && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <ConfettiBurst />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ConfettiBurst() {
  const pieces = Array.from({ length: 12 }).map((_, i) => i);
  const colors = ['#10b981', '#f59e0b', '#06b6d4', '#ef4444', '#a78bfa'];
  return (
    <div className="relative h-0 w-full">
      {pieces.map((p) => (
        <motion.span
          key={p}
          initial={{ y: 0, opacity: 0, scale: 0.8 }}
          animate={{ y: [-4, -28 - Math.random() * 20], opacity: [0, 1, 0], x: (Math.random() - 0.5) * 120, rotate: Math.random() * 180 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute top-0 inline-block h-2 w-2 rounded-sm"
          style={{ left: `${50 + (Math.random() - 0.5) * 10}%`, backgroundColor: colors[p % colors.length] }}
        />
      ))}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 px-2 py-1 text-[11px] font-semibold text-teal-700 ring-1 ring-teal-200"
      >
        ✔️ Done
      </motion.div>
    </div>
  );
}
