"use client";

type Props = {
  label: string;
  value: string;
  onChange: (val: string) => void;
  multiline?: boolean;
};

export const TextInput = ({ label, value, onChange, multiline }: Props) => (
  <div>
    <label>{label}</label>
    {multiline ? (
      <textarea value={value} onChange={(e) => onChange(e.target.value)} />
    ) : (
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    )}
  </div>
);
