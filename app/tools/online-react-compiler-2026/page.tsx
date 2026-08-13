"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
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
      q: "What version of React does this compiler run?",
      a: "The tool runs a stable modern version of React 18, allowing you to use functional components, hooks, and modern JavaScript syntax without complex setups.",
    },
    {
      q: "Can I import external NPM packages here?",
      a: "Standard ES6 dynamic imports are isolated, but core hooks and basic React components are supported out-of-the-box.",
    },
    {
      q: "Do I need to install Node.js to use this tool?",
      a: "No installation is required. Everything compiles natively inside your browser using Babel standalone engine.",
    },
    {
      q: "How do I preview my visual changes?",
      a: "Changes render automatically in real time in the Live Output Preview frame, or you can click 'Run Code Instant' to force a full refresh.",
    },
  ];

  return (
    <main className="w-full min-h-screen py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-16 bg-transparent text-foreground">
      {/* 1. Hero Intro Section */}
      <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-accent/20 p-6 sm:p-10 md:p-12 space-y-6">
        <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block">
          Interactive Web Tool
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-foreground tracking-tight leading-tight">
          Free Online React Compiler: Write, Test, and Debug Code Instantly
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-4xl">
          Testing React components should not require a heavy local configuration or spinning up a local development server every single time you want to try out a quick snippet. This free online React compiler provides a streamlined, browser-based editor built specifically for running React code in real time. Whether you are learning functional components, working with state, hooks, or testing complex UI rendering, this space gives you a responsive ecosystem to test your ideas instantly. As a dedicated web developer, I built this space to be as lightweight and direct as possible, stripping away all unnecessary elements so you can focus entirely on the code.
        </p>
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

      {/* 3. Detailed Explanatory Sections */}
      <section className="space-y-8">
        <div className="p-8 sm:p-10 rounded-3xl border border-border/60 bg-accent/20 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-light text-foreground tracking-tight">
            Why I Created This Minimalist React Environment
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Many online code environments are either cluttered with intrusive advertisements or feel too heavy for everyday quick tests. When you are writing code, distractions cost time and break focus. This environment solves that issue by offering a clean, full-width canvas split perfectly between your codebase and your live visual output. The underlying compilation layer handles rendering seamlessly, giving you immediate visual feedback. It is designed to act as your digital scratchpad, helping you iterate fast, debug errors right as they occur, and test standalone interfaces before shipping them to a production environment.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl border border-border/60 bg-accent/20 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-light text-foreground tracking-tight">
            Understanding Core React Structures Within the Tool
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            To make the most of this environment, it helps to understand how the internal file structure handles your inputs. Standard setups look for a core entry point where components are rendered into a root DOM element. This editor handles that architecture behind the scenes, mapping your code directly into a responsive preview panel. You can easily manage component states, pass props, and even integrate lifecycle patterns smoothly. The live console utility tracking under the output screen catches syntax issues immediately, which makes it incredibly simple to isolate breaking changes or test conditional state rendering logically.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl border border-border/60 bg-accent/20 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-light text-foreground tracking-tight">
            How to Maximize Your Workflow
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Using this compiler efficiently comes down to a few basic practices. You can drop your custom functional components directly into the primary workspace, manage your style rules within the attached CSS files, and watch the layout update live on the right screen. If you encounter rendering errors, check the live preview logs instantly to pinpoint the line that broke. This setup eliminates the need to continuously refresh a tab or inspect a local browser console, keeping your entire creation and debugging cycle contained in one centralized interface.
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
            Building a fast, custom web application requires more than just templates—it takes clean code and precise execution. If you need help developing a scalable website, optimizing your site's performance, or integrating secure workflows into your platform, you do not have to figure it out alone. Let an experienced full-stack developer handle the heavy lifting for you. Take a look at my Case Studies to see how I solve complex web problems, or to discuss your project.
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