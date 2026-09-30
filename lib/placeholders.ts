// lib/placeholders.ts
// "[ ... ]" wali values abhi khali hain. Jo value khali ho, wo site par
// render nahi hoti (na koi toota WhatsApp link, na "[PRICE]" jaisa text).

export function isFilled(value: string | undefined | null): value is string {
  if (!value) return false;
  const v = value.trim();
  return v.length > 0 && !/\[[^\]]*\]/.test(v);
}

export function filled<T extends string>(values: T[]): T[] {
  return values.filter((v) => isFilled(v));
}
