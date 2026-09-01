"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/animations/fade-in";
import FaqSchema from "@/components/FaqSchema";
import { FaqSection } from "@/components/sections/faq-section";
import {
  Zap,
  Download,
  Copy,
  Maximize2,
  ChevronDown,
  ArrowUpRight,
  Code2,
  Play,
  Terminal,
} from "lucide-react";

export default function ReactCompilerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [code, setCode] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const previewFrameRef = useRef<HTMLIFrameElement>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const defaultReactCode = `function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ padding: "30px", background: "#ffffff", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", textAlign: "center", maxWidth: "400px", margin: "40px auto" }}>
      <h2 style={{ color: "#333", margin: "0 0 10px 0" }}>React Live Compiler</h2>
      <p style={{ color: "#666", fontSize: "14px" }}>Manage application state and hooks dynamically in real time.</p>
      <h3 style={{ margin: "20px 0", color: "#0073aa" }}>Counter Value: {count}</h3>
      <button 
        style={{ background: "#0073aa", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", fontSize: "14px" }}
        onClick={() => setCount(count + 1)}
      >
        ⚡ Click to Update State
      </button>
    </div>
  );
}`;

  useEffect(() => {
    setCode(defaultReactCode);
  }, []);

  useEffect(() => {
    if (code) {
      runReactInstantCode(code);
    }
  }, [code]);

  useEffect(() => {
    const handleConsoleMessages = (event: MessageEvent) => {
      if (event.data && event.data.type === "react-runtime-error") {
        setErrorMessage("React Compilation Failure: " + event.data.message);
      }
    };

    window.addEventListener("message", handleConsoleMessages);
    return () => window.removeEventListener("message", handleConsoleMessages);
  }, []);

  const runReactInstantCode = (inputCode: string) => {
    setErrorMessage(null);
    if (!previewFrameRef.current) return;

    let processedCode = inputCode.replace(/import[^;]*;/g, "");
    processedCode = processedCode.replace(/export\s+default\s+/g, "");

    const finalSource = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <style>
    body { margin: 0; padding: 15px; font-family: sans-serif; background: #f9fafb; }
  </style>
  <script>
    window.onerror = function(msg, url, line) {
      window.parent.postMessage({type: "react-runtime-error", message: msg + " (Line " + line + ")"}, "*");
      return true;
    };
  </script>
</head>
<body>
  <div id="react-root"></div>
  <script type="text/babel">
    try {
      ${processedCode}
      const root = ReactDOM.createRoot(document.getElementById("react-root"));
      root.render(<App />);
    } catch (err) {
      window.parent.postMessage({type: "react-runtime-error", message: err.message}, "*");
    }
  </script>
</body>
</html>`;

    previewFrameRef.current.srcdoc = finalSource;
  };

  const loadDemoSnippet = (type: number) => {
    let snippet = "";
    if (type === 1) {
      snippet = `function App() {
  const [text, setText] = React.useState("Abid");
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ padding: '25px', maxWidth: '400px', margin: '20px auto', background: '#fff', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
      <h3 style={{ color: '#111827', marginTop: 0 }}>⚡ State & Input Test</h3>
      <p style={{ fontSize: '15px', color: '#4b5563' }}>Hello, <strong>{text}</strong>! You built this tool.</p>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '15px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
      />
      <button 
        onClick={() => setCount(count + 1)}
        style={{ width: '100%', padding: '10px', background: '#10b981', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
      >
        Clicks: {count}
      </button>
    </div>
  );
}`;
    } else if (type === 2) {
      snippet = `function App() {
  const [showTools, setShowTools] = React.useState(true);
  const coreServices = ["Web Development", "UI/UX Web Design", "Technical SEO", "Custom React Tools"];

  return (
    <div style={{ padding: '25px', maxWidth: '450px', margin: '20px auto', background: '#1e293b', color: '#fff', borderRadius: '10px' }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#38bdf8' }}>🛠️ Arrays & Mapping Test</h3>
      <button 
        onClick={() => setShowTools(!showTools)}
        style={{ padding: '8px 12px', background: '#ff4500', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '15px', fontWeight: 'bold' }}
      >
        {showTools ? "Hide My Stack" : "Show My Stack"}
      </button>
      {showTools && (
        <ul style={{ paddingLeft: '20px', margin: 0, lineHeight: '2' }}>
          {coreServices.map((service, index) => (
            <li key={index} style={{ color: '#cbd5e1', fontSize: '15px' }}>{service}</li>
          ))}
        </ul>
      )}
    </div>
  );
}`;
    } else if (type === 3) {
      snippet = `function App() {
  // Intentionally calling an unassigned reference variable to check runtime exception isolation
  return (
    <div style={{ padding: '20px' }}>
      <h3>Testing Exception Handlers</h3>
      <p>{undefinedVariableTest}</p>
    </div>
  );
}`;
    }
    setCode(snippet);
  };

  const downloadReactComponent = () => {
    const blob = new Blob([code], { type: "text/javascript" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "App.js";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const copyReactSourceCode = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => alert("React Code copied to clipboard! ⚛️"))
      .catch((err) => alert("Failed to copy code: " + err));
  };

  const toggleReactFullScreenPreview = () => {
    if (!previewFrameRef.current) return;
    if (!document.fullscreenElement) {
      previewFrameRef.current.requestFullscreen().catch((err) => {
        console.log("Error going full screen: " + err.message);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const faqs = [
    {
    q: "What version of React does this online compiler run?",
    a: "This react js editor online runs React 18. Functional components, hooks like useState and useEffect, and modern JavaScript syntax such as arrow functions and destructuring all work the same way they would in a local project."
  },
  {
    q: "Can I import external NPM packages into this tool?",
    a: "Not directly. This compiler loads React and ReactDOM from a CDN and compiles your JSX in the browser using Babel, so packages that depend on a bundler like Webpack won't work here. Core React features and plain JavaScript are fully supported it's built for testing components, not managing dependencies."
  },
  {
    q: "Do I need to install Node.js to use this react compiler online?",
    a: "No. That's the main reason to run React online this way. There's no npm install, no create-react-app, and no local dev server. Your JSX compiles directly in your browser tab, so you can test an idea the moment you have it."
  },
  {
    q: "How is this different from CodeSandbox or StackBlitz?",
    a: "Those tools are built for full projects multiple files, routing, package management, shareable links. This editor is deliberately smaller in scope: one file, instant compile, no account required. If you just need to check how a single component behaves, this opens faster and gets out of your way."
  },
  {
    q: "How do I preview my changes?",
    a: "Your code recompiles and re-renders automatically as you type. If the preview ever looks out of sync with your latest changes, running the code manually forces a clean re-mount."
  },
  {
    q: "Why does my code fail without showing anything in the preview?",
    a: "Runtime and syntax errors are caught and displayed in the console box below the editor instead of failing silently. This mirrors how a browser console flags issues, so you always know what broke and roughly where."
  },
  {
    q: "Can I save or export the code I write?",
    a: "Yes. You can download your component as a file, or copy it directly to your clipboard and paste it into your own create-react-app, Vite, or Next.js project."
  },
  {
    q: "Is this better for beginners or experienced developers?",
    a: "Both, for different reasons. Beginners use it to practice JSX syntax and hooks without fighting a local setup first. Experienced developers use it to sanity-check a snippet or reproduce a bug in isolation without touching their actual codebase."
  },
  ];

  return (
    <main className="w-full min-h-screen py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-16 bg-transparent text-foreground">
      {/* 1. Hero Section & Intro */}
<section className="space-y-6">
  <div className="space-y-4">
    <h1 className="text-3xl sm:text-5xl font-serif font-light text-foreground tracking-tight">
      Free Online React Compiler & JSX Editor
    </h1>
    <h2 className="text-2xl sm:text-3xl font-serif font-light text-foreground tracking-tight">
      Write, Test, and Debug Code Instantly
    </h2>
    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
      Every time you want to test a small piece of React code, the usual routine slows you down. Install dependencies, spin up create-react-app or Vite, wait for the dev server, and only then write the actual component you wanted to test. For a two-minute idea, that's a lot of setup for very little payoff.
    </p>
    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
      This online react compiler skips all of that. Write or paste your component, and it compiles and renders right in your browser. No terminal commands. No package.json. No local environment to configure or break.
    </p>
    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
      It's built for the moments when you just need to see jsx online and check that it behaves the way you expect verifying a state update, testing conditional rendering, or checking a hook before you commit it to a real project. Think of it as a react js editor online for fast, disposable experiments. It won't replace your full dev setup, but it will save you the ten minutes you'd otherwise spend just getting to the point where you can start typing.
    </p>
  </div>

  <div className="p-6 sm:p-8 rounded-3xl border border-border/60 bg-accent/20 space-y-3">
    <h3 className="text-lg sm:text-xl font-medium text-foreground">
      Why developers use this tool:
    </h3>
    <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground space-y-1.5 pl-2">
      <li><strong className="text-foreground">No installation</strong> works directly in your browser, nothing to download</li>
      <li><strong className="text-foreground">Instant feedback</strong> code compiles and renders as you type</li>
      <li><strong className="text-foreground">Built-in error console</strong> runtime and syntax errors show up immediately, with line numbers</li>
      <li><strong className="text-foreground">One-click export</strong> download your component as a file or copy it to your clipboard</li>
      <li><strong className="text-foreground">Zero clutter</strong> one editor, one live preview, nothing else competing for your attention</li>
    </ul>
  </div>
</section>

      {/* 2. Interactive Tool Component */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-light text-foreground tracking-tight">
          Online Compiler Workspace
        </h2>

        <div className="rounded-2xl border border-border/60 bg-accent/20 p-4 sm:p-6 space-y-4">
          {/* Editor Toolbar */}
          <div className="flex flex-wrap gap-3 items-center bg-background/80 p-3 rounded-xl border border-border/60">
            <button
              onClick={() => runReactInstantCode(code)}
              className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-xs sm:text-sm flex items-center gap-2 hover:opacity-90 transition-all shadow-sm"
            >
              <Play className="w-4 h-4 fill-current" /> Run Code Instant
            </button>

            <button
              onClick={downloadReactComponent}
              className="px-4 py-2.5 rounded-lg bg-orange-600 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 hover:bg-orange-700 transition-all shadow-sm"
            >
              <Download className="w-4 h-4" /> Download App.js
            </button>

            <button
              onClick={copyReactSourceCode}
              className="px-4 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 hover:bg-blue-700 transition-all shadow-sm"
            >
              <Copy className="w-4 h-4" /> Copy Code
            </button>

            <button
              onClick={toggleReactFullScreenPreview}
              className="px-4 py-2.5 rounded-lg bg-slate-700 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 hover:bg-slate-800 transition-all shadow-sm"
            >
              <Maximize2 className="w-4 h-4" /> Full Screen Preview
            </button>
          </div>

          {/* Editor Grid */}
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <label className="font-bold text-sky-400 text-sm flex items-center gap-2">
                <Code2 className="w-4 h-4" /> React JS Workspace (App.js)
              </label>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-87.5 font-mono p-4 rounded-xl border border-border/80 bg-slate-950 text-slate-100 text-sm leading-relaxed resize-y focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Write React components here..."
              />
            </div>
          </div>

          {/* Runtime Console Error Box */}
          {errorMessage && (
            <div className="p-4 rounded-xl border border-red-500/50 bg-red-950/30 text-red-400 font-mono text-sm leading-relaxed flex items-start gap-2">
              <Terminal className="w-5 h-5 shrink-0 mt-0.5 text-red-500" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Live Preview Frame */}
          <div className="space-y-2 pt-2">
            <label className="font-bold text-foreground text-sm block">
              Live React Output Preview
            </label>
            <iframe
              ref={previewFrameRef}
              sandbox="allow-scripts allow-modals allow-same-origin"
              className="w-full h-100 border border-border/80 rounded-xl bg-white shadow-xs transition-all"
            />
          </div>

          {/* Quick Test Snippets */}
          <div className="rounded-xl border border-border/60 bg-background/50 p-5 space-y-4">
            <h4 className="text-foreground font-bold text-base flex items-center gap-2">
              🧪 Quick Test Code Snippets
            </h4>
            <p className="text-xs text-muted-foreground">
              Click any button below to instantly load test scripts into the workspace and evaluate compiler reactivity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={() => loadDemoSnippet(1)}
                className="p-3.5 text-left rounded-xl border border-border/60 bg-accent/20 hover:bg-accent/50 transition-all text-xs flex flex-col gap-1"
              >
                <span className="text-emerald-500 font-bold text-sm">🟢 Test 1: State Counter</span>
                <span className="text-muted-foreground">Tests hooks & real-time input binding.</span>
              </button>

              <button
                onClick={() => loadDemoSnippet(2)}
                className="p-3.5 text-left rounded-xl border border-border/60 bg-accent/20 hover:bg-accent/50 transition-all text-xs flex flex-col gap-1"
              >
                <span className="text-sky-400 font-bold text-sm">🔵 Test 2: List Mapping</span>
                <span className="text-muted-foreground">Tests arrays mapping & conditional logic.</span>
              </button>

              <button
                onClick={() => loadDemoSnippet(3)}
                className="p-3.5 text-left rounded-xl border border-border/60 bg-accent/20 hover:bg-accent/50 transition-all text-xs flex flex-col gap-1"
              >
                <span className="text-rose-500 font-bold text-sm">🔴 Test 3: Error Console</span>
                <span className="text-muted-foreground">Tests console validation & boundary safety.</span>
              </button>
            </div>
          </div>
        </div>
      </section>

{/* 2. Who This Tool Is For Section */}
<section className="p-8 sm:p-10 rounded-3xl border border-border/60 bg-accent/20 space-y-4">
  <h2 className="text-2xl sm:text-3xl font-serif font-light text-foreground tracking-tight">
    Who This Tool Is For
  </h2>
  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    This react online workspace tends to get used in a few specific situations:
  </p>
  <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground space-y-2 pl-2">
    <li><strong className="text-foreground">Prototyping state and hooks</strong> try out useState, useEffect, or a custom hook idea in isolation before wiring it into a bigger component</li>
    <li><strong className="text-foreground">Testing UI logic</strong> check how conditional rendering, list mapping, or prop-driven layouts behave without scrolling through an unrelated codebase</li>
    <li><strong className="text-foreground">Debugging a broken component</strong> paste in code that's misbehaving and use the live console to pinpoint exactly what's throwing the error</li>
    <li><strong className="text-foreground">Practicing React and JSX syntax</strong> useful if you're still learning, since you get instant feedback without setup friction getting in the way</li>
    <li><strong className="text-foreground">Sharing a quick reproduction</strong> copy a component out in one click when you need to show a teammate or a forum exactly what's going wrong</li>
  </ul>
</section>

      {/* 3. Detailed Explanatory Sections */}
<section className="space-y-8">
  <div className="p-8 sm:p-10 rounded-3xl border border-border/60 bg-accent/20 space-y-4">
    <h2 className="text-2xl sm:text-3xl font-serif font-light text-foreground tracking-tight">
      Why I Created This Minimalist React Environment
    </h2>
    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
      Most online code playgrounds try to do everything at once. Multi-file projects. Package managers. Live collaboration. Ads squeezed into every open corner of the layout. That's genuinely useful if you're building a real application but it's overkill if you just want to check whether one component renders correctly.
    </p>
    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
      I wanted something closer to a scratchpad:
    </p>
    <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground space-y-1 pl-2">
      <li>One editor, one live preview nothing else fighting for your attention</li>
      <li>A full-width layout so you can actually see your code and your output at the same time</li>
      <li>Instant compilation, so you get visual feedback the moment you stop typing</li>
      <li>No sign-up, no saved projects, no clutter open it, use it, close it</li>
    </ul>
    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2">
      This is meant to work like a digital notepad for React: iterate fast, catch errors as they happen, and test a standalone component before you drop it into a production codebase.
    </p>
  </div>

  <div className="p-8 sm:p-10 rounded-3xl border border-border/60 bg-accent/20 space-y-4">
    <h2 className="text-2xl sm:text-3xl font-serif font-light text-foreground tracking-tight">
      Understanding Core React Structures Within the Tool
    </h2>
    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
      It helps to know roughly what's happening behind the scenes when you use this editor, especially if you're used to a normal React online workflow with a build tool.
    </p>
    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
      In a typical local setup, your project looks for one core entry point, then renders your top-level component into a root DOM element. This tool follows that same basic pattern, just without any of the build configuration:
    </p>
    <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground space-y-1 pl-2">
      <li>Your code is treated as a single component, expected to be named App</li>
      <li>It gets mapped directly into a live preview panel instead of a separate browser tab</li>
      <li>Component state, props, and basic lifecycle patterns all behave exactly as they would locally</li>
      <li>A live console sits below the output and catches syntax or runtime issues the moment they happen</li>
    </ul>
    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2">
      That last point matters more than it sounds. Instead of digging through browser dev tools to find out why nothing rendered, the error shows up right next to your code, so you can isolate the broken line and fix it without leaving the page.
    </p>
    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2">
      For quick testing without opening an IDE, use our free <Link href="/tools/live-html-css-js-editor-tester" className="text-blue-500 underline font-medium">Live HTML CSS JS Editor Tester</Link>.
    </p>
    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
      To estimate plant profit margins and operational costs, use our free <Link href="/tools/nursery-calculator" className="text-blue-500 underline font-medium">Nursery Profitability & Earnings Calculator</Link>.
    </p>
  </div>

  <div className="p-8 sm:p-10 rounded-3xl border border-border/60 bg-accent/20 space-y-4">
    <h2 className="text-2xl sm:text-3xl font-serif font-light text-foreground tracking-tight">
      How to Maximize Your Workflow
    </h2>
    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
      A few basic habits make this compiler noticeably faster to work with:
    </p>
    <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground space-y-1 pl-2">
      <li>Keep your component named App that's what the preview looks for when it mounts</li>
      <li>Use inline styles or a style object, since there's no separate stylesheet loaded into the preview</li>
      <li>Check the console box first if something looks off it usually points straight to the broken line</li>
      <li>Use the manual "run" option if the live preview ever feels out of sync with your latest edit</li>
      <li>Copy or download your code before closing the tab, since nothing is saved automatically</li>
    </ul>
    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2">
      Followed consistently, this keeps your entire test-and-debug cycle in one place. No refreshing tabs, no switching between your editor and a separate browser console you write, you see the result, you fix what's broken, and you move on.
    </p>
  </div>
</section>

{/* 4. FAQs Section */}
<section className="space-y-8 max-w-4xl mx-auto">
  <div className="text-center space-y-2">
    <h2 className="text-2xl sm:text-4xl font-serif font-light text-foreground tracking-tight">
      Frequently Asked Questions
    </h2>
  </div>

  <div className="space-y-3">
    {faqs.map((faq, index) => (
      <div
        key={index}
        className="border border-border/60 rounded-2xl bg-accent/20 overflow-hidden transition-all"
      >
        <button
          onClick={() => toggleFaq(index)}
          className="w-full px-6 py-4 text-left font-medium text-xs sm:text-sm text-foreground flex items-center justify-between gap-4 cursor-pointer hover:bg-accent/50 transition-colors"
        >
          <span>{faq.q}</span>
          <ChevronDown
            className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300 ${
              openFaq === index ? "rotate-180 text-primary" : ""
            }`}
          />
        </button>
        {openFaq === index && (
          <div className="px-6 pb-4 pt-1 text-xs text-muted-foreground border-t border-border/40 leading-relaxed">
            {faq.a}
          </div>
        )}
      </div>
    ))}
  </div>
</section>

{/* 5. CTA Section */}
<section className="p-8 sm:p-12 rounded-3xl border border-border/60 bg-accent/30 text-center space-y-6">
  <div className="max-w-2xl mx-auto space-y-3">
    <h2 className="text-2xl sm:text-4xl font-serif font-light text-foreground tracking-tight">
      Looking for Custom Web Architecture?
    </h2>
    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
      Building a fast, custom web application takes more than a template it takes clean code and careful execution. If you need help building a scalable website, improving site performance, or setting up secure workflows for your platform, you don't have to work it out on your own. Take a look at my case studies to see how I've solved similar problems, or reach out directly to talk through your project.
    </p>
  </div>
  <Link
    href="/contact"
    className="px-8 py-3.5 rounded-xl bg-primary hover:opacity-90 text-primary-foreground font-semibold text-xs sm:text-sm transition-all shadow-md inline-flex items-center gap-2"
  >
    <span>Contact Me Directly</span>
    <ArrowUpRight className="w-4 h-4" />
  </Link>
  </section>
    </main>
  );
}