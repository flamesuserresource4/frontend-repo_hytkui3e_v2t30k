import React from 'react';

export default function PaymentRow({ icon, title, subtitle, right, name, value, selected, onChange, disabled }) {
  return (
    <label className={`flex items-center justify-between gap-3 py-3 ${disabled ? 'opacity-60' : ''}`}>
      <div className="flex items-center gap-3">
        <input
          type="radio"
          name={name}
          value={value}
          checked={selected === value}
          onChange={() => onChange(value)}
          className="h-4 w-4 border-slate-300 text-teal-600 focus:ring-teal-500"
          disabled={disabled}
        />
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white ring-1 ring-slate-200">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-slate-900">{title}</span>
          {subtitle ? (
            <span className="text-xs text-slate-500">{subtitle}</span>
          ) : null}
        </div>
      </div>
      {right ? <div className="text-xs text-slate-500">{right}</div> : null}
    </label>
  );
}
