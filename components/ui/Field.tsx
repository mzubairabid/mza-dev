// components/ui/Field.tsx — label + input/select/textarea
import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

export function FieldWrap({ id, label, hint, children }: { id: string; label: string; hint?: string; children: ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-semibold">
        {label}
      </label>
      {children}
      {hint && (
        <p id={`${id}-hint`} className="text-xs text-muted-foreground">
          {hint}
        </p>
      )}
    </div>
  );
}

export function Input({ id, label, hint, ...props }: InputHTMLAttributes<HTMLInputElement> & { id: string; label: string; hint?: string }) {
  return (
    <FieldWrap id={id} label={label} hint={hint}>
      <input id={id} name={id} className="field" aria-describedby={hint ? `${id}-hint` : undefined} {...props} />
    </FieldWrap>
  );
}

export function Select({
  id,
  label,
  options,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & { id: string; label: string; options: readonly string[] }) {
  return (
    <FieldWrap id={id} label={label}>
      <select id={id} name={id} className="field" {...props}>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </FieldWrap>
  );
}

export function Textarea({ id, label, hint, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement> & { id: string; label: string; hint?: string }) {
  return (
    <FieldWrap id={id} label={label} hint={hint}>
      <textarea id={id} name={id} className="field min-h-36" aria-describedby={hint ? `${id}-hint` : undefined} {...props} />
    </FieldWrap>
  );
}
