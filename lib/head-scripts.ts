// lib/head-scripts.ts — <head> me pehli paint se pehle chalne wale chhote scripts
// (client components se export nahi ho sakte, is liye alag file)

/** Theme: localStorage ya system setting se "dark" class (flash nahi hota) */
export const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark")}catch(e){}})();`;

/** Currency: cookie "cur" (proxy.ts visitor ke mulk se lagata hai) → <html data-cur> */
export const currencyScript = `(function(){try{var m=document.cookie.match(/(?:^|; )cur=(USD|GBP|PKR)/);document.documentElement.dataset.cur=m?m[1]:"USD"}catch(e){}})();`;
