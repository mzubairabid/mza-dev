import { ArrowRight } from "lucide-react";

export default function YouTubeBanner() {
  return (
    <div className="p-5 rounded-2xl border border-red-200 dark:border-red-900/40 bg-red-50/40 dark:bg-red-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 my-6">
      <div className="flex items-center gap-3">
        <div className="p-2.5 bg-red-600 text-white rounded-xl shrink-0">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </div>
        <div>
          <h4 className="text-sm font-bold text-foreground">
            Watch Behind-The-Scenes Breakdowns
          </h4>
          <p className="text-xs text-muted-foreground">
            Subscribe to ByteScript MZA on YouTube for full-stack e-commerce tutorials.
          </p>
        </div>
      </div>
      <a
        href="https://youtube.com/@mzadev"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-600 dark:text-red-400 hover:underline shrink-0"
      >
        <span>Watch ByteScript MZA</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}