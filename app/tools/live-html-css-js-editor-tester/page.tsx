"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";

import {
  Play,
  Download,
  Copy,
  Maximize2,
  ChevronDown,
  ArrowUpRight,
  Sparkles,
  Terminal,
  Cpu,
  Zap,
} from "lucide-react";

export default function HtmlCssJsEditorToolPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Tool State
  const [htmlCode, setHtmlCode] = useState<string>("");
  const [cssCode, setCssCode] = useState<string>("");
  const [jsCode, setJsCode] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const previewFrameRef = useRef<HTMLIFrameElement | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // 1. Initial Default Boilerplate Code Loading
  useEffect(() => {
    const defaultHtml = String.fromCharCode(
      60,100,105,118,32,99,108,97,115,115,61,34,99,97,114,100,34,62,10,32,32,60,104,50,62,72,84,77,76,32,84,101,115,116,32,83,117,99,99,101,115,115,33,32,99,104,101,99,107,32,99,109,112,105,108,101,114,60,47,104,50,62,10,32,32,60,112,62,73,102,32,121,111,117,32,115,101,101,32,116,104,105,115,32,108,97,121,111,117,116,32,105,110,115,116,97,110,116,108,121,44,32,121,111,117,114,32,99,111,109,112,105,108,101,114,32,105,115,32,119,111,114,107,105,110,103,32,112,101,114,102,101,99,116,108,121,46,60,47,112,62,10,32,32,60,98,117,116,116,111,110,32,105,100,61,34,116,101,115,116,45,99,108,105,99,107,34,62,67,108,105,99,107,32,77,101,32,116,101,115,116,32,74,83,60,47,98,117,116,116,111,110,62,10,60,47,100,105,118,62
    );
    const defaultCss = `body { background: #f4f6f9; font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 80vh; margin: 0; }\n.card { background: #ffffff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align: center; }`;
    const defaultJs = `document.getElementById('test-click').addEventListener('click', function() {\n    alert('JavaScript Logic is working fine!');\n});`;

    setHtmlCode(defaultHtml);
    setCssCode(defaultCss);
    setJsCode(defaultJs);
  }, []);

  // 2. Window PostMessage Listener for iFrame Errors
  useEffect(() => {
    const handleIframeMessages = (event: MessageEvent) => {
      if (event.data && event.data.type === "js-error") {
        setErrorMessage("Check JS Script Error: " + event.data.message);
      }
    };

    window.addEventListener("message", handleIframeMessages);
    return () => {
      window.removeEventListener("message", handleIframeMessages);
    };
  }, []);

  // Auto-run initially once state is populated
  useEffect(() => {
    if (htmlCode || cssCode || jsCode) {
      runInstantCode();
    }
  }, [htmlCode, cssCode, jsCode]);

  // Validation Logic
  const validateHTML = (html: string) => {
    const tags = html.match(/<\/?([a-z0-9-]+)/gi) || [];
    const opened: string[] = [];
    for (let i = 0; i < tags.length; i++) {
      const tag = tags[i];
      if (tag.indexOf("</") === 0) {
        const closing = tag.substring(2).toLowerCase();
        if (opened.length === 0 || opened.pop() !== closing) {
          return "HTML Error: Unmatched or missing closing tag for <" + closing + ">";
        }
      } else {
        const opening = tag.substring(1).toLowerCase();
        if (["img", "br", "hr", "input", "meta", "link"].indexOf(opening) === -1) {
          opened.push(opening);
        }
      }
    }
    if (opened.length > 0) {
      return "HTML Error: Missing closing tag for <" + opened.pop() + ">";
    }
    return null;
  };

  const validateCSS = (css: string) => {
    const openBraces = (css.match(/\{/g) || []).length;
    const closeBraces = (css.match(/\}/g) || []).length;
    if (openBraces !== closeBraces) {
      return (
        "Check CSS Error: Bracket mismatch. Open brackets '" +
        openBraces +
        "' do not match closing brackets '" +
        closeBraces +
        "'."
      );
    }
    return null;
  };

  // Execution Logic
  const runInstantCode = () => {
    setErrorMessage(null);

    const htmlError = validateHTML(htmlCode);
    if (htmlError) {
      setErrorMessage(htmlError);
      return;
    }

    const cssError = validateCSS(cssCode);
    if (cssError) {
      setErrorMessage(cssError);
      return;
    }

    const sO = String.fromCharCode(60, 115, 116, 121, 108, 101, 62);
    const sC = String.fromCharCode(60, 47, 115, 116, 121, 108, 101, 62);
    const scO = String.fromCharCode(60, 115, 99, 114, 105, 112, 116, 62);
    const scC = String.fromCharCode(60, 47, 115, 99, 114, 105, 112, 116, 62);

    const finalSource =
      String.fromCharCode(60, 33, 68, 79, 67, 84, 89, 80, 69, 32, 104, 116, 109, 108, 62, 60, 104, 116, 109, 108, 62, 60, 104, 101, 97, 100, 62) +
      sO +
      cssCode +
      sC +
      scO +
      'window.onerror = function(msg, url, line) { window.parent.postMessage({type: "js-error", message: msg + " (Line " + line + ")"}, "*"); return true; };' +
      scC +
      String.fromCharCode(60, 47, 104, 101, 97, 100, 62, 60, 98, 111, 100, 121, 62) +
      htmlCode +
      scO +
      'try {' +
      jsCode +
      '} catch (err) { window.parent.postMessage({type: "js-error", message: err.message}, "*"); }' +
      scC +
      String.fromCharCode(60, 47, 98, 111, 100, 121, 62, 60, 47, 104, 116, 109, 108, 62);

    if (previewFrameRef.current) {
      previewFrameRef.current.srcdoc = finalSource;
    }
  };

  const downloadHTMLCode = () => {
    const c = String.fromCharCode(60, 115, 116, 121, 108, 101, 62) + cssCode + String.fromCharCode(60, 47, 115, 116, 121, 108, 101, 62);
    const j = String.fromCharCode(60, 115, 99, 114, 105, 112, 116, 62) + jsCode + String.fromCharCode(60, 47, 115, 99, 114, 105, 112, 116, 62);
    const meta =
      String.fromCharCode(60, 33, 68, 79, 67, 84, 89, 80, 69, 32, 104, 116, 109, 108, 62, 60, 104, 116, 109, 108, 62, 60, 104, 101, 97, 100, 62, 60, 109, 101, 116, 97, 32, 99, 104, 97, 114, 115, 101, 116, 61, 34, 85, 84, 70, 45, 56, 34, 62, 60, 109, 101, 116, 97, 32, 110, 97, 109, 101, 61, 34, 118, 105, 101, 119, 100, 111, 114, 116, 34, 32, 99, 111, 110, 116, 101, 112, 116, 61, 34, 119, 105, 100, 116, 104, 61, 100, 101, 118, 105, 99, 101, 45, 119, 105, 100,116,104,44,32,115,99,97,108,101,61,49,46,48,34,62) +
      c +
      String.fromCharCode(60, 47, 104, 101, 97, 100, 62, 60, 98, 111, 100, 121, 62);
    const end = String.fromCharCode(60, 47, 98, 111, 100, 121, 62, 60, 47, 104, 116, 109, 108, 62);

    const doc = meta + htmlCode + j + end;
    const blob = new Blob([doc], { type: "text/html" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "index.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const copyCompiledCode = () => {
    const c = String.fromCharCode(60, 115, 116, 121, 108, 101, 62) + cssCode + String.fromCharCode(60, 47, 115, 116, 121, 108, 101, 62);
    const j = String.fromCharCode(60, 115, 99, 114, 105, 112, 116, 62) + jsCode + String.fromCharCode(60, 47, 115, 99, 114, 105, 112, 116, 62);
    const combined = htmlCode + "\n" + c + "\n" + j;

    navigator.clipboard
      .writeText(combined)
      .then(() => alert("Code copied to clipboard! 🚀"))
      .catch((err) => alert("Failed to copy code: " + err));
  };

  const toggleFullScreen = () => {
    if (previewFrameRef.current) {
      if (!document.fullscreenElement) {
        previewFrameRef.current.requestFullscreen().catch((err) => {
          console.log("Error: " + err.message);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  const sandboxFeatures = [
    {
      title: "Test HTML Code Instantly",
      desc: "Type your markup inside the orange editor. Focus on arranging semantic nodes, organizing nested elements, and maintaining clean block components to create a solid visual architecture.",
    },
    {
      title: "Render Live CSS Layouts",
      desc: "Move to the blue editor block to control styles. Experiment with grid frameworks, flexbox alignment, typography spacing, and background properties to see your raw concepts look professional.",
    },
    {
      title: "Debug JavaScript Logic Real-time",
      desc: "Use the yellow container to write custom JavaScript logic. Bind simple click event listeners to buttons to learn how modern interactive software responds to real user actions.",
    },
  ];

  const whyPractice = [
    {
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      title: "Keeping Learning Completely Free",
      desc: "This platform removes commercial barriers for coding enthusiasts. Anyone can jump inside this free live HTML compiler, tweak source code files in real-time, and study rendering pipelines without expensive premium software subscriptions.",
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Zero Latency Performance Strategy",
      desc: "Waiting for loading animations destroys creative coding momentum. This optimized custom framework transforms your source strings in microseconds, ensuring your focus stays entirely on engineering code. Ensure your code complies with the official W3C Web Standards.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-primary" />,
      title: "Pure Native Standard Architecture",
      desc: "The system avoids heavy external script attachments to remain fast. It uses standard browser runtime processing modules, which guarantee perfect local speed and lightweight execution behavior.",
    },
  ];

  const faqs = [
    {
      q: "Is registration required here?",
      a: "No registration or login is required. You can start typing and testing live code directly inside your web browser immediately.",
    },
    {
      q: "Will my files vanish?",
      a: "Your code stays active inside your local browser instance while you work. You can use the 'Download HTML' button to save your code locally anytime.",
    },
    {
      q: "Does this support frameworks?",
      a: "This editor is optimized for vanilla HTML5, CSS3, and JavaScript (ES6+). You can also link external CDN scripts (like Tailwind or Bootstrap) inside the HTML head tag.",
    },
    {
      q: "Can I use my mobile?",
      a: "Yes! The editor features responsive layout containers designed to work seamlessly across mobile, tablet, and desktop viewports.",
    },
    {
      q: "Why show explicit errors?",
      a: "Explicit warnings help beginners identify unclosed tags, syntax faults, and structural slips early so they can learn proper debugging practices.",
    },
  ];

  return (
    <main className="w-full min-h-screen py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-20 bg-transparent text-foreground">
      
      {/* 1. Hero Section */}
      <FadeIn>
        <section className="relative overflow-hidden rounded-3xl border border-border/70 bg-transparent p-6 sm:p-10 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block">
                Online HTML CSS JS Editor & Tester 2026
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-foreground tracking-tight leading-tight">
                Learn Web Engineering Fast
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Start writing your live code instantly. No complex setups or installations are required to test your design ideas right now in your web browser.
              </p>
            </div>

            <div className="lg:col-span-5 flex justify-center items-center w-full">
              <div className="relative w-full max-w-90 h-90 rounded-2xl overflow-hidden border border-border bg-background shadow-xl p-2 flex items-center justify-center shrink-0">
                <Image
                  src="/project-images/ai-robot.webp"
                  alt="Online HTML CSS JS Code Tester"
                  width={360}
                  height={360}
                  priority
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 2. Built for Modern Beginners Section */}
      <FadeIn>
        <section className="p-8 sm:p-10 rounded-3xl border border-border bg-card space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block">
            Developer Sandbox
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-light text-foreground tracking-tight">
            Built for Modern Beginners
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            This tool provides immediate feedback. As a professional full-stack web developer, I created this free online HTML editor and code tester sandbox to help students practice front-end programming, inspect elements, and run code without dealing with frustrating terminal setups.
          </p>
        </section>
      </FadeIn>

      {/* ========================================================================= */}
      {/* 3. WORKING TOOL PLAYGROUND COMPONENT                                     */}
      {/* ========================================================================= */}
      <FadeIn>
        <section className="rounded-3xl border border-border bg-card p-4 sm:p-6 space-y-6 shadow-lg">
          
          {/* Editor Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-md bg-orange-500/10 text-orange-600 dark:text-orange-400 font-mono text-xs font-bold border border-orange-500/20">
                HTML
              </span>
              <span className="px-3 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold border border-blue-500/20">
                CSS Layouts
              </span>
              <span className="px-3 py-1 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono text-xs font-bold border border-amber-500/20">
                JavaScript
              </span>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={runInstantCode}
                className="px-3.5 py-2 rounded-xl bg-primary hover:opacity-90 text-primary-foreground font-semibold text-xs transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Play className="w-3.5 h-3.5" /> 🚀 Run Code Instant
              </button>
              <button
                onClick={downloadHTMLCode}
                className="px-3.5 py-2 rounded-xl border border-border bg-accent hover:bg-accent/80 text-foreground font-semibold text-xs transition-all inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" /> 📥 Download HTML
              </button>
              <button
                onClick={copyCompiledCode}
                className="px-3.5 py-2 rounded-xl border border-border bg-accent hover:bg-accent/80 text-foreground font-semibold text-xs transition-all inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" /> 📋 Copy Code
              </button>
              <button
                onClick={toggleFullScreen}
                className="px-3.5 py-2 rounded-xl border border-border bg-accent hover:bg-accent/80 text-foreground font-semibold text-xs transition-all inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" /> 🖥️ Full Screen Preview
              </button>
            </div>
          </div>

          {/* Editor Textareas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="font-mono text-xs font-bold text-orange-500 block">HTML</label>
              <textarea
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
                placeholder="Write HTML here..."
                className="w-full h-44 font-mono text-xs p-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-y"
              ></textarea>
            </div>

            <div className="space-y-1.5">
              <label className="font-mono text-xs font-bold text-blue-500 block">CSS Layouts</label>
              <textarea
                value={cssCode}
                onChange={(e) => setCssCode(e.target.value)}
                placeholder="Write CSS here..."
                className="w-full h-44 font-mono text-xs p-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-y"
              ></textarea>
            </div>

            <div className="space-y-1.5">
              <label className="font-mono text-xs font-bold text-amber-500 block">JavaScript</label>
              <textarea
                value={jsCode}
                onChange={(e) => setJsCode(e.target.value)}
                placeholder="Write JavaScript here..."
                className="w-full h-44 font-mono text-xs p-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-y"
              ></textarea>
            </div>
          </div>

          {/* Dynamic Error Warning Console */}
          {errorMessage && (
            <div className="p-3.5 rounded-xl border border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400 font-mono text-xs font-bold whitespace-pre-wrap">
              {errorMessage}
            </div>
          )}

          {/* Live Output iFrame Preview */}
          <div className="space-y-2 pt-2">
            <label className="font-mono text-xs font-bold text-foreground block">Live Output Preview</label>
            <iframe
              ref={previewFrameRef}
              sandbox="allow-scripts allow-modals allow-same-origin"
              className="w-full h-96 border border-border rounded-xl bg-white shadow-inner transition-all"
              title="Live Output Preview"
            ></iframe>
          </div>

        </section>
      </FadeIn>
      {/* ========================================================================= */}

      {/* 4. Master Web Design with Real-Time Previews */}
      <FadeIn>
        <section className="space-y-8">
          <div className="space-y-2 border-b border-border pb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block">
              Real-Time Output
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-foreground tracking-tight">
              Master Web Design with Real-Time Previews
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sandboxFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-border bg-card space-y-3 hover:border-primary/40 transition-all"
              >
                <h3 className="text-base font-bold text-foreground">{feat.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* 5. Write and Test Clean Code Seamlessly */}
      <FadeIn>
        <section className="p-8 sm:p-10 rounded-3xl border border-border bg-card space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block">
              Best Practices
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-foreground tracking-tight">
              Write and Test Clean Code Seamlessly
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-2xl border border-border bg-background space-y-2">
              <h3 className="text-sm font-bold text-foreground">Balance Your Closing Elements</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Unclosed structural blocks break web viewports easily. Train your technical eyes to ensure that every open tag has a proper matching closing tag to maintain clean trees.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-border bg-background space-y-2">
              <h3 className="text-sm font-bold text-foreground">Fix Slips With Debug Console</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Keep a close watch on the active warning container above. The built-in validation engine alerts you about bracket mismatches and syntax faults so you can self-correct immediately.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 6. Why Practice on This Sandbox */}
      <FadeIn>
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block">
              Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-foreground tracking-tight">
              Why Practice on This Sandbox
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyPractice.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-border bg-card space-y-4">
                <div className="p-3 w-fit rounded-xl bg-accent border border-border">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* 7. Recommended Resources */}
      <FadeIn>
        <section className="p-8 sm:p-10 rounded-3xl border border-border bg-card space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block">
              Developer Resources
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-foreground tracking-tight">
              Recommended Resources
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Explore more free developer utilities and tech guides on Gadget Crunchie.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <Link
              href="/blog"
              className="p-4 rounded-xl border border-border bg-background hover:bg-accent/50 transition-colors flex items-center justify-between group"
            >
              <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                Practice 10 Modern CSS Layouts Instantly
              </span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>

            <Link
              href="/blog"
              className="p-4 rounded-xl border border-border bg-background hover:bg-accent/50 transition-colors flex items-center justify-between group"
            >
              <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                Core Web Vitals Guide for Maximum Performance
              </span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          </div>
        </section>
      </FadeIn>

      {/* 8. Developer Tips For Success */}
      <FadeIn>
        <section className="space-y-8">
          <div className="space-y-2 border-b border-border pb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block">
              Engineering Tips
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-foreground tracking-tight">
              Developer Tips For Success
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-border bg-card space-y-2">
              <h3 className="text-base font-bold text-foreground">Test Structural Modifications Daily</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Consistency transforms fresh beginners into expert full-stack engineers. Spend ten minutes twisting presentation rules inside this sandbox daily to build sharp layout muscles. Refer to MDN Web Docs for official tag guidelines.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-card space-y-2">
              <h3 className="text-base font-bold text-foreground">Understand Render Engine Logic</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Do not fear red warnings on your display panel. Analyzing broken structures is the fastest way to discover how modern web browsers parse dynamic elements behind the scenes.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 9. FAQs Section */}
      <FadeIn>
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
                className="border border-border rounded-2xl bg-card overflow-hidden transition-all"
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
                  <div className="px-6 pb-4 pt-1 text-xs text-muted-foreground border-t border-border leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

    </main>
  );
}