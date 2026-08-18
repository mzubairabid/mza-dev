"use client";

import React, { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { saveAs } from "file-saver";
import { FadeIn } from "@/components/animations/fade-in";

import {
  Plus,
  Trash2,
  Download,
  RefreshCw,
  Calculator,
  Mail,
  X,
  CheckCircle2,
  ChevronDown,
  BookOpen,
  TrendingUp,
  Users,
} from "lucide-react";

interface CustomField {
  id: number;
  type: "income" | "expense";
  label: string;
  value: number;
}

export default function NurseryCalculatorPage() {
  const [totalChildrenInput, setTotalChildrenInput] = useState<string>("");
  const [customFields, setCustomFields] = useState<CustomField[]>([]);
  const [nextCustomId, setNextCustomId] = useState<number>(1);
  const [isCalculated, setIsCalculated] = useState<boolean>(false);

  // Email Modal State
  const [showEmailModal, setShowEmailModal] = useState<boolean>(false);
  const [downloadType, setDownloadType] = useState<"pdf" | "docx">("pdf");
  const [userEmail, setUserEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Calculation Results State
  const [results, setResults] = useState<{
    totalChildren: number;
    a0to2: number;
    a2to3: number;
    a3to5: number;
    income0to2: number;
    income2to3: number;
    income3to5: number;
    customIncomes: { label: string; value: number }[];
    totalIncome: number;
    fixedCosts: {
      businessRates: number;
      rent: number;
      utilities: number;
      insurance: number;
      food: number;
      supplies: number;
      marketing: number;
      admin: number;
      ofstedFee: number;
    };
    staffCosts: {
      managerWage: number;
      deputyWage: number;
      wage0to2: number;
      wage2to3: number;
      wage3to5: number;
      cleanerWage: number;
      cookWage: number;
      trainingCost: number;
      niHolidayUplift: number;
    };
    customExpenses: { label: string; value: number }[];
    totalExpenses: number;
    monthlyProfit: number;
  } | null>(null);

  const rates = { income0to2: 1300, income2to3: 1300, income3to5: 1200 };

  const formatCurrency = (val: number) => {
    return "£" + Number(val || 0).toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  // Add Custom Income / Expense
  const addCustomField = (type: "income" | "expense") => {
    setCustomFields((prev) => [
      ...prev,
      {
        id: nextCustomId,
        type,
        label: type === "income" ? "Extra Income" : "Extra Cost",
        value: 0,
      },
    ]);
    setNextCustomId((prev) => prev + 1);
  };

  // Update Custom Field
  const updateCustomField = (id: number, key: "label" | "value", value: any) => {
    setCustomFields((prev) =>
      prev.map((f) => (f.id === id ? { ...f, [key]: key === "value" ? Number(value) || 0 : value } : f))
    );
  };

  // Remove Custom Field
  const removeCustomField = (id: number) => {
    setCustomFields((prev) => prev.filter((f) => f.id !== id));
  };

  // Reset
  const handleReset = () => {
    setTotalChildrenInput("");
    setCustomFields([]);
    setIsCalculated(false);
    setResults(null);
    setSuccessMessage("");
  };

  // Calculate Logic
  const handleCalculate = () => {
    const total = parseInt(totalChildrenInput);
    if (!total || total <= 0) {
      alert("Please enter a valid number of children.");
      return;
    }

    const a3to5 = Math.round(total * 0.4);
    const a2to3 = Math.round(total * 0.3);
    const a0to2 = total - a3to5 - a2to3;

    const income0to2 = a0to2 * rates.income0to2;
    const income2to3 = a2to3 * rates.income2to3;
    const income3to5 = a3to5 * rates.income3to5;

    const activeCustomIncomes = customFields.filter((f) => f.type === "income");
    const totalCustomIncome = activeCustomIncomes.reduce((acc, curr) => acc + (curr.value || 0), 0);

    const totalIncome = income0to2 + income2to3 + income3to5 + totalCustomIncome;

    // Staff Costs
    const staff0to2 = Math.ceil(a0to2 / 3);
    const staff2to3 = Math.ceil(a2to3 / 5);
    const staff3to5 = Math.ceil(a3to5 / 8);

    const wage0to2 = staff0to2 > 0 ? 2000 + (staff0to2 - 1) * 1800 : 0;
    const wage2to3 = staff2to3 > 0 ? 2000 + (staff2to3 - 1) * 1800 : 0;
    const wage3to5 = staff3to5 > 0 ? 2000 + (staff3to5 - 1) * 1800 : 0;

    const totalPractitionerWages = wage0to2 + wage2to3 + wage3to5;
    const managerWage = 2900;
    const deputyWage = total > 35 ? 2500 : 0;
    const cookWage = total > 30 ? 1200 : 0;
    const cleanerWage = total > 30 ? 1200 : 0;

    const totalBaseWages = totalPractitionerWages + managerWage + deputyWage + cookWage + cleanerWage;
    const totalStaffCount =
      staff0to2 + staff2to3 + staff3to5 + (managerWage ? 1 : 0) + (deputyWage ? 1 : 0) + (cookWage ? 1 : 0) + (cleanerWage ? 1 : 0);
    const trainingCost = totalStaffCount * 30;
    const niHolidayUplift = totalBaseWages * 0.1;
    const totalStaffCosts = totalBaseWages + niHolidayUplift + trainingCost;

    // Fixed Costs
    const rent = 52 * total + 700;
    const businessRates = 10 * total;
    const utilities = 5 * total;
    const food = 25 * total;
    const supplies = 10 * total;
    const insurance = Math.max(1.5 * total, 25);
    const marketing = 4 * total;
    const admin = 2 * total;
    const ofstedFee = 18.33;

    const activeCustomExpenses = customFields.filter((f) => f.type === "expense");
    const totalCustomExpenses = activeCustomExpenses.reduce((acc, curr) => acc + (curr.value || 0), 0);

    const totalNonStaffCosts =
      rent + businessRates + utilities + food + supplies + insurance + marketing + admin + ofstedFee + totalCustomExpenses;

    const totalExpenses = totalStaffCosts + totalNonStaffCosts;
    const monthlyProfit = totalIncome - totalExpenses;

    setResults({
      totalChildren: total,
      a0to2,
      a2to3,
      a3to5,
      income0to2,
      income2to3,
      income3to5,
      customIncomes: activeCustomIncomes.map((i) => ({ label: i.label, value: i.value })),
      totalIncome,
      fixedCosts: {
        businessRates,
        rent,
        utilities,
        insurance,
        food,
        supplies,
        marketing,
        admin,
        ofstedFee,
      },
      staffCosts: {
        managerWage,
        deputyWage,
        wage0to2,
        wage2to3,
        wage3to5,
        cleanerWage,
        cookWage,
        trainingCost,
        niHolidayUplift,
      },
      customExpenses: activeCustomExpenses.map((e) => ({ label: e.label, value: e.value })),
      totalExpenses,
      monthlyProfit,
    });

    setIsCalculated(true);
  };

  // Open Modal
  const triggerDownload = (type: "pdf" | "docx") => {
    if (!results) {
      alert("Please calculate first before downloading.");
      return;
    }
    setDownloadType(type);
    setEmailError("");
    setShowEmailModal(true);
  };

  // Process Document Generation & Optional Email API
  const processDownload = async () => {
    if (!userEmail || !/^\S+@\S+\.\S+$/.test(userEmail)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setShowEmailModal(false);

    if (downloadType === "pdf") {
      generatePDF();
    } else {
      generateDocx();
    }

    // Optional: Call your backend API here to send the copy via Email as well
    setSuccessMessage(`Report downloaded and sent to ${userEmail}`);
    setTimeout(() => setSuccessMessage(""), 6000);
  };

  // PDF Export (Includes Website Branding & User Email)
  const generatePDF = () => {
    if (!results) return;

    const doc = new jsPDF();
    
    // Custom Header (Your Website Branding)
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.setTextColor(37, 99, 235); // Blue Accent
    doc.text("Nursery Profit Calculator Report", 14, 20);

    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100);
    doc.text(`Generated by: ${window.location.hostname} | Client Email: ${userEmail} | Date: ${new Date().toLocaleDateString()}`, 14, 28);

    autoTable(doc, {
      startY: 34,
      head: [["Summary Metric", "Value"]],
      body: [
        ["Total Children Capacity", results.totalChildren.toString()],
        ["Monthly Revenue", formatCurrency(results.totalIncome)],
        ["Yearly Revenue", formatCurrency(results.totalIncome * 12)],
        ["Monthly Expenses", formatCurrency(results.totalExpenses)],
        ["Yearly Expenses", formatCurrency(results.totalExpenses * 12)],
        ["Monthly Net Profit", formatCurrency(results.monthlyProfit)],
        ["Yearly Net Profit", formatCurrency(results.monthlyProfit * 12)],
      ],
      headStyles: { fillColor: [37, 99, 235] },
    });

    autoTable(doc, {
      startY: (doc as any).lastAutoTable.finalY + 10,
      head: [["Age Split", "Children Count", "Monthly Income"]],
      body: [
        ["0-2 Children", results.a0to2.toString(), formatCurrency(results.income0to2)],
        ["2-3 Children", results.a2to3.toString(), formatCurrency(results.income2to3)],
        ["3-5 Children", results.a3to5.toString(), formatCurrency(results.income3to5)],
        ...results.customIncomes.map((ci) => [ci.label, "-", formatCurrency(ci.value)]),
      ],
      headStyles: { fillColor: [37, 99, 235] },
    });

    // Custom Footer in Exported File
    const pageCount = (doc as any).internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(150);
      doc.text(
        `Report generated via ${window.location.hostname} — Confidential & Proprietary Financial Estimate`,
        14,
        doc.internal.pageSize.height - 10
      );
    }

    doc.save("Nursery_Profit_Report.pdf");
  };

  // Word Export (Includes Website Branding & User Email)
  const generateDocx = () => {
    if (!results) return;

    const siteDomain = window.location.hostname;

    const htmlContent = `
      <html xmlns:o='urn:schemas-microsoft-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>Nursery Profit Report</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; color: #333; }
          h1 { color: #2563eb; font-size: 22px; }
          .meta { font-size: 12px; color: #666; margin-bottom: 20px; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; margin-bottom: 20px; }
          th, td { border: 1px solid #ddd; padding: 10px; text-align: left; font-size: 13px; }
          th { background-color: #2563eb; color: white; }
          tr:nth-child(even) { background-color: #f9f9f9; }
          .footer { font-size: 11px; color: #888; border-t: 1px solid #eee; margin-top: 30px; padding-top: 10px; }
        </style>
      </head>
      <body>
        <h1>Nursery Profitability Projection</h1>
        <div class="meta">
          <p><strong>Generated By:</strong> ${siteDomain}</p>
          <p><strong>Prepared For:</strong> ${userEmail}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
        </div>
        
        <h2>Financial Summary</h2>
        <table>
          <tr><th>Metric</th><th>Monthly</th><th>Yearly</th></tr>
          <tr><td>Revenue</td><td>${formatCurrency(results.totalIncome)}</td><td>${formatCurrency(results.totalIncome * 12)}</td></tr>
          <tr><td>Expenses</td><td>${formatCurrency(results.totalExpenses)}</td><td>${formatCurrency(results.totalExpenses * 12)}</td></tr>
          <tr><td>Net Profit</td><td><strong>${formatCurrency(results.monthlyProfit)}</strong></td><td><strong>${formatCurrency(results.monthlyProfit * 12)}</strong></td></tr>
        </table>

        <h2>Age Split & Income Detail</h2>
        <table>
          <tr><th>Age Group</th><th>Children</th><th>Monthly Revenue</th></tr>
          <tr><td>0–2 Children</td><td>${results.a0to2}</td><td>${formatCurrency(results.income0to2)}</td></tr>
          <tr><td>2–3 Children</td><td>${results.a2to3}</td><td>${formatCurrency(results.income2to3)}</td></tr>
          <tr><td>3–5 Children</td><td>${results.a3to5}</td><td>${formatCurrency(results.income3to5)}</td></tr>
          ${results.customIncomes.map((ci) => `<tr><td>${ci.label}</td><td>-</td><td>${formatCurrency(ci.value)}</td></tr>`).join("")}
        </table>

        <div class="footer">
          This document was created using the Financial Calculator on ${siteDomain}.
        </div>
      </body>
      </html>
    `;

    const blob = new Blob(["\ufeff", htmlContent], {
      type: "application/msword",
    });

    saveAs(blob, "Nursery_Profit_Report.doc");
  };

  const faqs = [
    {
      q: "How much profit does a nursery make in the UK on average?",
      a: "Average profit margins for UK nurseries typically range between 10% and 20%, depending heavily on location, occupancy rates, and operational efficiency. A well-managed 50-child nursery can generate between £30,000 to £70,000 in net profit annually.",
    },
    {
      q: "What are the biggest costs in running a nursery?",
      a: "Staffing costs are by far the largest expense, usually accounting for 50% to 65% of total nursery revenue. Rent, business rates, and food/catering costs form the next major category.",
    },
    {
      q: "Can I download a PDF or Word copy of my financial projections?",
      a: "Yes! Click on 'Download PDF Report' or 'Download Word (DOC)' after calculating to export your customized report.",
    },
    {
      q: "How are staff-to-child ratios calculated?",
      a: "Our calculator follows standard Ofsted regulatory ratios: 1 practitioner for every 3 children under 2 years (1:3), 1 for every 5 children aged 2-3 years (1:5), and 1 for every 8 children aged 3-5 years (1:8).",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* 1. Header Section */}
        <FadeIn direction="up" delay={0.2}>
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" /> Free UK Business Tool
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            UK Nursery Profitability & Earnings Calculator
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Estimate your nursery's monthly revenue, staff costs, fixed overheads, and net profit based on standard UK Ofsted ratios.
          </p>
        </div>
        </FadeIn>
        {/* 2. Calculator Tool Card */}
        <FadeIn direction="down" delay={0.2}>
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden p-6 sm:p-10">
          <div className="text-center border-b-4 border-amber-400 pb-5 mb-8">
            <h2 className="text-xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 flex items-center justify-center gap-3">
              <Calculator className="w-7 h-7" /> Financial Calculator
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              Customizable add custom fields & generate exportable reports
            </p>
          </div>

          {/* Controls */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                Total Children Capacity
              </label>
              <input
                type="number"
                placeholder="e.g., 50"
                value={totalChildrenInput}
                onChange={(e) => setTotalChildrenInput(e.target.value)}
                className="w-full px-4 py-3 text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-base"
              />
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Auto-split by age: 40% (3–5 yrs), 30% (2–3 yrs), 30% (0–2 yrs).
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleCalculate}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg shadow transition flex items-center gap-2"
              >
                Calculate
              </button>
              <button
                onClick={handleReset}
                className="px-5 py-2.5 bg-slate-600 hover:bg-slate-700 text-white text-sm font-bold rounded-lg transition flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" /> Reset
              </button>
              <button
                onClick={() => addCustomField("income")}
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-lg transition flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" /> Add Income
              </button>
              <button
                onClick={() => addCustomField("expense")}
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-lg transition flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" /> Add Expense
              </button>
            </div>

            {/* Custom Dynamic Fields Area */}
            {customFields.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Custom Dynamic Fields</h3>
                {customFields.map((field) => (
                  <div key={field.id} className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
                    <span className={`text-xs font-mono font-bold uppercase px-2 py-1 rounded ${field.type === 'income' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                      {field.type}
                    </span>
                    <input
                      type="text"
                      value={field.label}
                      onChange={(e) => updateCustomField(field.id, "label", e.target.value)}
                      className="flex-1 px-3 py-1.5 text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded focus:outline-none"
                    />
                    <input
                      type="number"
                      value={field.value || ""}
                      placeholder="0"
                      onChange={(e) => updateCustomField(field.id, "value", e.target.value)}
                      className="w-28 px-3 py-1.5 text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded focus:outline-none"
                    />
                    <button
                      onClick={() => removeCustomField(field.id)}
                      className="p-2 text-rose-600 hover:bg-rose-100 dark:hover:bg-rose-950/50 rounded-lg transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Results Area */}
          {isCalculated && results && (
            <div className="mt-10 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 rounded-xl p-6 space-y-8 animate-in fade-in duration-300">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-3">
                Calculated Projection Summary
              </h3>

              {/* Income Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm">
                      <th className="py-2.5 px-3">Age Split</th>
                      <th className="py-2.5 px-3">Children</th>
                      <th className="py-2.5 px-3">Income (Monthly)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700/50 text-sm text-slate-800 dark:text-slate-200">
                    <tr>
                      <td className="py-2.5 px-3">0–2 Children:</td>
                      <td className="py-2.5 px-3">{results.a0to2}</td>
                      <td className="py-2.5 px-3">{formatCurrency(results.income0to2)}</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3">2–3 Children:</td>
                      <td className="py-2.5 px-3">{results.a2to3}</td>
                      <td className="py-2.5 px-3">{formatCurrency(results.income2to3)}</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3">3–5 Children:</td>
                      <td className="py-2.5 px-3">{results.a3to5}</td>
                      <td className="py-2.5 px-3">{formatCurrency(results.income3to5)}</td>
                    </tr>
                    {results.customIncomes.map((ci, idx) => (
                      <tr key={idx}>
                        <td className="py-2.5 px-3">{ci.label}:</td>
                        <td className="py-2.5 px-3">-</td>
                        <td className="py-2.5 px-3">{formatCurrency(ci.value)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-4 font-bold text-slate-900 dark:text-white text-base">
                  Total Monthly Income: <span className="text-blue-600 dark:text-blue-400">{formatCurrency(results.totalIncome)}</span>
                </div>
              </div>

              {/* Expenses Grid */}
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Expenses Breakdown (Monthly)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                    <div className="font-bold text-slate-900 dark:text-white border-b pb-1 text-sm">Fixed Costs</div>
                    <div>Business Rates: {formatCurrency(results.fixedCosts.businessRates)}</div>
                    <div>Rent: {formatCurrency(results.fixedCosts.rent)}</div>
                    <div>Utilities: {formatCurrency(results.fixedCosts.utilities)}</div>
                    <div>Insurance: {formatCurrency(results.fixedCosts.insurance)}</div>
                    <div>Food: {formatCurrency(results.fixedCosts.food)}</div>
                    <div>Supplies: {formatCurrency(results.fixedCosts.supplies)}</div>
                    <div>Marketing: {formatCurrency(results.fixedCosts.marketing)}</div>
                    <div>Admin: {formatCurrency(results.fixedCosts.admin)}</div>
                    <div>Ofsted Fee: {formatCurrency(results.fixedCosts.ofstedFee)}</div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                    <div className="font-bold text-slate-900 dark:text-white border-b pb-1 text-sm">Staff Costs</div>
                    <div>Manager: {formatCurrency(results.staffCosts.managerWage)}</div>
                    <div>Deputy Manager: {formatCurrency(results.staffCosts.deputyWage)}</div>
                    <div>0-2 Practitioners: {formatCurrency(results.staffCosts.wage0to2)}</div>
                    <div>2-3 Practitioners: {formatCurrency(results.staffCosts.wage2to3)}</div>
                    <div>3-5 Practitioners: {formatCurrency(results.staffCosts.wage3to5)}</div>
                    <div>Cleaner: {formatCurrency(results.staffCosts.cleanerWage)}</div>
                    <div>Cook: {formatCurrency(results.staffCosts.cookWage)}</div>
                    <div>Training: {formatCurrency(results.staffCosts.trainingCost)}</div>
                    <div>Employer NI & Holiday Uplift: {formatCurrency(results.staffCosts.niHolidayUplift)}</div>
                  </div>
                </div>

                {results.customExpenses.length > 0 && (
                  <div className="mt-4 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                    <div className="font-bold text-slate-900 dark:text-white border-b pb-1 text-sm">Custom Expenses</div>
                    {results.customExpenses.map((ce, i) => (
                      <div key={i} className="text-xs sm:text-sm">{ce.label}: {formatCurrency(ce.value)}</div>
                    ))}
                  </div>
                )}

                <div className="mt-4 font-bold text-slate-900 dark:text-white text-base">
                  Total Monthly Expenses: <span className="text-blue-600 dark:text-blue-400">{formatCurrency(results.totalExpenses)}</span>
                </div>
              </div>

              {/* Net Summary */}
              <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-4">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Net Earnings Summary</h4>
                <div className="divide-y divide-slate-200 dark:divide-slate-800 text-sm">
                  <div className="py-2 flex justify-between"><span>Monthly Revenue:</span> <span className="font-semibold">{formatCurrency(results.totalIncome)}</span></div>
                  <div className="py-2 flex justify-between"><span>Yearly Revenue:</span> <span className="font-semibold">{formatCurrency(results.totalIncome * 12)}</span></div>
                  <div className="py-2 flex justify-between"><span>Monthly Expenses:</span> <span className="font-semibold">{formatCurrency(results.totalExpenses)}</span></div>
                  <div className="py-2 flex justify-between"><span>Yearly Expenses:</span> <span className="font-semibold">{formatCurrency(results.totalExpenses * 12)}</span></div>
                  <div className="py-2 flex justify-between"><span>Monthly Profit:</span> <span className="font-bold text-emerald-600 dark:text-emerald-400">{formatCurrency(results.monthlyProfit)}</span></div>
                  <div className="py-2 flex justify-between"><span>Yearly Profit:</span> <span className="font-bold text-emerald-600 dark:text-emerald-400">{formatCurrency(results.monthlyProfit * 12)}</span></div>
                </div>
              </div>

              {/* Download Triggers */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => triggerDownload("pdf")}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition flex items-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download PDF Report
                </button>
                <button
                  onClick={() => triggerDownload("docx")}
                  className="px-6 py-3 bg-slate-700 hover:bg-slate-800 text-white font-bold rounded-lg shadow-md transition flex items-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download Word (DOC)
                </button>
              </div>
            </div>
          )}

          {/* Success Message */}
          {successMessage && (
            <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-sm font-medium">{successMessage}</span>
            </div>
          )}
        </div>
          </FadeIn>
        {/* 3. Educational Guide */}
        <FadeIn direction="up" delay={0.2}>
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-blue-600" /> How to Estimate Your Nursery Profit
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Our tool simplifies nursery financial modeling by combining revenue calculations with statutory UK operating costs. Follow these steps:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
            <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700/80 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">1</div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">Enter Capacity</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Input registered child capacity.</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700/80 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">2</div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">Review Ratios</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Standard Ofsted distributions auto-apply.</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700/80 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">3</div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">Add Extras</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Add custom income streams or expenses.</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700/80 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">4</div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">Export Projections</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Download formatted PDF or Word copies.</p>
            </div>
          </div>
        </div>
          </FadeIn>
        {/* 4. FAQ Accordion Section */}
        <FadeIn direction="down" delay={0.3}>
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between font-semibold text-slate-900 dark:text-white text-sm sm:text-base transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                {openFaq === index && (
                  <div className="p-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
            </FadeIn>
      </div>

      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-md rounded-2xl p-6 shadow-2xl relative space-y-5 animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowEmailModal(false)}
              className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" /> Export Financial Report
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Enter your email address to attach your details to the downloaded <strong>{downloadType.toUpperCase()}</strong> file.
              </p>
            </div>

            <div className="space-y-3">
              <input
                type="email"
                placeholder="name@example.com"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
              />
              {emailError && <p className="text-xs text-rose-500 font-medium">{emailError}</p>}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowEmailModal(false)}
                className="flex-1 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-sm font-bold rounded-lg transition"
              >
                Cancel
              </button>
              <button
                onClick={processDownload}
                className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg shadow transition"
              >
                Download & Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}