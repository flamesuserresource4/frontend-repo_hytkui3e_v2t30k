import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <div className="relative w-full h-56 overflow-hidden rounded-b-2xl shadow-sm">
      <Spline
        scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white/80" />
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-end pb-4">
        <div className="text-center">
          <p className="text-xs font-medium tracking-wide text-slate-600">Secure Checkout</p>
          <h1 className="mt-1 text-xl font-semibold text-slate-900">Choose a payment method</h1>
        </div>
      </div>
    </div>
  );
}
