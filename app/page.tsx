"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CheckCircle,
  Upload,
  FileText,
  ArrowRight,
  Zap,
  Shield,
  Heart,
  Menu,
  X,
  Mail,
  ExternalLink,
  ChevronLeft,
  Building2,
  CloudUpload,
  FileOutput,
  Sparkles,
  Minus,
  Square,
  AlertCircle,
} from "lucide-react";

const rows = [
  {
    id: 1,
    date: "11/01",
    summary: "セブンイレブン",
    debit: "消耗品費",
    debitSub: "",
    credit: "現金",
    creditSub: "",
    amount: "550",
    tax: "課税10%",
    status: "checked",
  },
  {
    id: 2,
    date: "11/03",
    summary: "クラウドワークス",
    debit: "外注工賃",
    debitSub: "",
    credit: "普通預金",
    creditSub: "三菱UFJ",
    amount: "15,000",
    tax: "課税10%",
    status: "warning",
  },
  {
    id: 3,
    date: "11/12",
    summary: "AMAZON.CO.JP",
    debit: "消耗品費",
    debitSub: "",
    credit: "未払金",
    creditSub: "",
    amount: "8,980",
    tax: "課税10%",
    status: "error",
  },
] as const;

const subjectOptions = [
  "消耗品費",
  "会議費",
  "旅費交通費",
  "地代家賃",
  "新聞図書費",
  "外注工賃",
  "現金",
  "普通預金",
  "未払金",
  "通信費",
  "交際費",
] as const;

// --- App Mockup Components ---
const AppDemo = () => {
  return (
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-white flex flex-col w-full h-full select-none">
      {/* Window Header (Windows Style) */}
      <div className="bg-slate-100 border-b border-slate-200 h-8 flex items-center justify-end px-3">
        <div className="flex items-center space-x-3">
          <div className="text-slate-400 hover:bg-slate-200 p-1 rounded transition-colors cursor-default">
            <Minus size={14} strokeWidth={1.5} />
          </div>
          <div className="text-slate-400 hover:bg-slate-200 p-1 rounded transition-colors cursor-default">
            <Square size={12} strokeWidth={2} />
          </div>
          <div className="text-slate-400 hover:bg-red-500 hover:text-white p-1 rounded transition-colors cursor-default">
            <X size={14} strokeWidth={2} />
          </div>
        </div>
      </div>

      {/* App Header */}
      <div className="bg-white border-b border-slate-200 h-12 flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-3">
          <ChevronLeft className="text-slate-400 w-5 h-5 cursor-pointer hover:text-slate-600" />
          <div className="h-5 w-px bg-slate-200"></div>
          <div className="flex items-center gap-2">
            <Image
              src="/icon.svg"
              alt="ClarioWork Logo"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="font-bold text-sm text-slate-800 hidden sm:block">
              ClarioWork
            </span>
          </div>
          <div className="text-xs text-slate-500 flex items-center gap-2 bg-slate-50 px-2 py-1 rounded border border-slate-100">
            <Building2 size={12} />
            <span className="font-bold hidden sm:inline">企業サンプル</span>
            <span className="text-[10px] text-slate-400">2025/11月分</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-white hover:bg-blue-50 text-blue-600 border border-blue-200 px-3 py-1.5 rounded text-xs font-bold flex items-center gap-2 transition">
            <CloudUpload size={14} />{" "}
            <span className="hidden sm:inline">資料取込</span>
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-xs font-bold flex items-center gap-2 shadow transition">
            <FileOutput size={14} />{" "}
            <span className="hidden sm:inline">出力</span>
          </button>
        </div>
      </div>

      {/* Main Area: Mobile=Vertical Stack, Desktop=Horizontal Row */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden min-h-[520px]">
        {/* TOP (Mobile) / LEFT (Desktop): Receipt Viewer */}
        <div className="w-full h-[300px] md:h-auto md:w-[30%] bg-slate-800 flex flex-col relative border-b md:border-b-0">
          {/* Canvas Area */}
          <div className="flex-1 overflow-hidden flex items-center justify-center p-4 bg-slate-200 relative">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(#4b5563 1px, transparent 1px)",
                backgroundSize: "10px 10px",
              }}
            ></div>

            {/* Receipt Mockup */}
            <div className="bg-white shadow-2xl p-6 w-full max-w-[240px] md:max-w-[260px] min-h-[340px] transform rotate-1 text-xs font-mono text-slate-700 relative origin-top hover:rotate-0 transition duration-300">
              {/* Tape effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-5 bg-yellow-100/50 backdrop-blur-sm border-l border-r border-white/50 rotate-2"></div>

              <div className="border-b-2 border-dashed border-slate-300 pb-4 mb-4 text-center">
                <div className="text-lg font-bold text-slate-900">領収書</div>
                <div className="mt-2 text-sm">
                  セブンイレブン
                  <br />
                  博多駅前店
                </div>
                <div className="text-slate-500 text-[10px] mt-2">
                  2025年11月1日 12:34
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>お茶 500ml</span>
                  <span>150</span>
                </div>
                <div className="flex justify-between">
                  <span>ボールペン</span>
                  <span>100</span>
                </div>
                <div className="flex justify-between">
                  <span>コピー用紙</span>
                  <span>300</span>
                </div>
              </div>
              <div className="flex justify-between border-t-2 border-slate-800 pt-2 font-bold text-base mb-2">
                <span>合計</span>
                <span>¥550</span>
              </div>
              <div className="mt-4 text-[10px] text-slate-400 text-center leading-relaxed">
                (内消費税等 ¥50)
                <br />
                No.1234567890
                <br />
                ありがとうございました
              </div>
            </div>
          </div>
        </div>

        {/* RESIZE HANDLE (Hidden on Mobile) */}
        <div className="w-1 bg-slate-200 hover:bg-blue-400 cursor-col-resize hidden md:block transition-colors"></div>

        {/* BOTTOM (Mobile) / RIGHT (Desktop): Data Grid */}
        <div className="flex-1 bg-white flex flex-col overflow-hidden text-xs md:text-sm h-full relative">
          {/* AI Explanation Banner */}
          <div className="bg-indigo-50 border-b border-indigo-100 py-2 px-4 flex items-center justify-center text-xs text-indigo-700 font-bold sticky top-0 z-20 shadow-sm gap-2">
            <Sparkles size={14} className="text-indigo-500" />
            <span>
              入力はAIにお任せ。『確認が必要な箇所』をチェックするだけ。
            </span>
          </div>

          {/* Grid Header - Colors Unified */}
          <div className="grid grid-cols-[30px_50px_1fr_60px] md:grid-cols-[40px_80px_1fr_120px_120px_100px_50px] bg-slate-50 border-b border-slate-200 font-bold text-slate-500 z-10">
            <div className="py-3 text-center border-r border-slate-200">No</div>
            <div className="py-3 text-center border-r border-slate-200">
              日付
            </div>
            <div className="py-3 px-3 border-r border-slate-200">摘要</div>
            <div className="py-3 px-3 hidden md:block border-r border-slate-200">
              借方科目
            </div>
            <div className="py-3 px-3 hidden md:block border-r border-slate-200">
              貸方科目
            </div>
            <div className="py-3 text-right px-3 border-r border-slate-200">
              金額
            </div>
            <div className="py-3 text-center"></div>
          </div>

          {/* Grid Rows - Colors Unified & Error Style Softened */}
          <div className="overflow-y-auto bg-slate-50/10 flex-1">
            {rows.map((row) => (
              <div
                key={row.id}
                className={`grid grid-cols-[30px_50px_1fr_60px] md:grid-cols-[40px_80px_1fr_120px_120px_100px_50px] border-b border-slate-100 hover:bg-blue-50 transition cursor-pointer group bg-white 
                    ${
                      row.status === "error"
                        ? "!bg-red-50/40 hover:!bg-red-50/60"
                        : ""
                    } 
                    ${row.id === 1 ? "bg-blue-50/40" : ""}`}
              >
                <div
                  className={`py-3 text-center text-slate-400 bg-slate-50 border-r border-slate-100 flex items-center justify-center 
                    ${
                      row.id === 1
                        ? "!bg-blue-100 !text-blue-600 font-bold border-l-4 border-l-blue-600"
                        : ""
                    }
                    ${
                      row.status === "error"
                        ? "!bg-red-50/80 !text-red-400 border-l-4 border-l-red-300"
                        : ""
                    }`}
                >
                  {row.id}
                </div>
                <div className="py-3 text-center border-r border-slate-100 flex items-center justify-center">
                  <input
                    type="text"
                    defaultValue={row.date}
                    className={`w-full text-center bg-transparent outline-none focus:text-blue-600 text-slate-700`}
                  />
                </div>

                {/* Mobile View: Stacked / PC View: Separate */}
                <div className="py-3 px-3 border-r border-slate-100 flex flex-col justify-center">
                  <div className={`font-medium text-slate-700`}>
                    {row.summary}
                  </div>
                  {/* Mobile Only Subjects */}
                  <div className="md:hidden text-[10px] text-slate-400 mt-1 flex gap-1 items-center">
                    <span
                      className={`px-1.5 py-0.5 rounded border text-slate-600 bg-slate-100 border-slate-200`}
                    >
                      {row.debit}
                    </span>
                    <ArrowRight size={10} className="text-slate-300" />
                    <span>{row.credit}</span>
                  </div>
                </div>

                {/* PC Only Columns: Editable Selects */}
                <div className="hidden md:flex py-3 px-2 border-r border-slate-100 items-center">
                  <div className="w-full relative group/select">
                    <select
                      defaultValue={row.debit}
                      className={`w-full bg-transparent font-medium outline-none appearance-none cursor-pointer pl-2 z-10 relative text-slate-700`}
                    >
                      {subjectOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {/* Fake Dropdown Arrow */}
                    <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover/select:text-blue-500">
                      ▼
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex py-3 px-2 border-r border-slate-100 items-center">
                  <div className="w-full relative group/select">
                    <select
                      defaultValue={row.credit}
                      className="w-full bg-transparent text-slate-700 outline-none appearance-none cursor-pointer pl-2 z-10 relative"
                    >
                      {subjectOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover/select:text-slate-600">
                      ▼
                    </div>
                  </div>
                </div>

                <div className="py-3 px-3 border-r border-slate-100 text-right font-mono flex items-center justify-end text-slate-700">
                  ¥{row.amount}
                </div>
                <div className="py-3 items-center hidden md:block justify-center">
                  {row.status === "checked" ? (
                    <CheckCircle
                      size={18}
                      className="text-green-500 shadow-sm rounded-full bg-white"
                    />
                  ) : row.status === "error" ? (
                    <AlertCircle
                      size={18}
                      className="text-red-400 shadow-sm rounded-full bg-white/50"
                    />
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>
                  )}
                </div>
              </div>
            ))}
            {/* Empty Rows */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-10 border-b border-slate-50 bg-white even:bg-slate-50/30"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ClarioWorkLP() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // --- Main Page Component ---

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div
              className="flex-shrink-0 flex items-center gap-2 group cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
                <Image
                  src="/icon.svg"
                  alt="ClarioWork Logo"
                  width={36}
                  height={36}
                  className="w-9 h-9"
                />
              </div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight">
                ClarioWork
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-slate-600 hover:text-blue-700 font-medium transition"
              >
                特徴
              </a>
              <a
                href="#process"
                className="text-slate-600 hover:text-blue-700 font-medium transition"
              >
                使い方
              </a>
              <a
                href="#about"
                className="text-slate-600 hover:text-blue-700 font-medium transition"
              >
                私たちについて
              </a>
              {/* Button: Forced White Text */}
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 !text-white px-6 py-2.5 rounded-full font-bold shadow-md shadow-blue-200 transition transform hover:-translate-y-0.5"
                style={{ color: "#ffffff" }}
              >
                モニターに応募する
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-slate-600 hover:text-blue-700 focus:outline-none p-2"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a
                href="#features"
                onClick={toggleMenu}
                className="block px-3 py-3 text-slate-600 hover:bg-blue-50 font-medium rounded-lg"
              >
                特徴
              </a>
              <a
                href="#process"
                onClick={toggleMenu}
                className="block px-3 py-3 text-slate-600 hover:bg-blue-50 font-medium rounded-lg"
              >
                使い方
              </a>
              <a
                href="#about"
                onClick={toggleMenu}
                className="block px-3 py-3 text-slate-600 hover:bg-blue-50 font-medium rounded-lg"
              >
                私たちについて
              </a>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="block px-3 py-3 text-blue-600 font-bold bg-blue-50 rounded-lg"
              >
                モニターに応募する
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-white via-blue-50/50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* 1. TEXT CONTENT (Centered Top) */}
          <div className="text-center max-w-4xl mx-auto mb-16 relative z-20">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight my-8 tracking-tight">
              記帳を
              <br className="md:hidden" />
              <span className="text-blue-600 relative inline-block mx-2">
                「入力」作業
              </span>
              から
              <br className="md:hidden" />
              「確認」業務へ。
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              紙の資料をスキャンするだけで、仕訳データが自動完成。
              <br className="hidden md:block" />
              単純作業はシステムにお任せ。手入力をなくし『確認・修正』だけで
              <br className="hidden md:block" />
              完結させる、新しい記帳支援サービスです。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 !text-white text-lg px-10 py-4 rounded-full font-bold shadow-xl shadow-blue-200 transition transform hover:-translate-y-1 hover:scale-105"
                style={{ color: "#ffffff" }}
              >
                開発モニターに参加する
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#process"
                className="inline-flex justify-center items-center bg-white border border-slate-200 hover:border-gray-300 text-slate-700 px-10 py-4 rounded-full font-bold transition shadow-sm hover:shadow-md"
              >
                仕組みを見る
              </a>
            </div>
          </div>

          {/* 2. APP DEMO (Full Width Bottom) */}
          <div className="relative z-10 mx-auto max-w-6xl">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 via-indigo-50 to-blue-50 rounded-full blur-3xl -z-10 opacity-70"></div>

            <div className="relative transform md:translate-y-0 transition-transform hover:scale-[1.01] duration-700">
              <AppDemo />
            </div>
          </div>
        </div>
      </header>

      {/* Pain Points Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            毎月、こんな業務に時間を奪われていませんか？
          </h2>
          <p className="text-slate-500 mb-16 max-w-2xl mx-auto">
            多くの事務所が抱える「入力作業」の課題。 <br />
            ClarioWorkがその時間を <br className="md:hidden" />
            「顧問先と向き合う」時間に変えます。
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-100 hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText size={32} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-slate-800">
                終わらない手入力
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                溜まった領収書の山を目で見て、会計ソフトに手打ちする単純作業の繰り返し。
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-100 hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-slate-800">
                入力ミスの確認
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                金額や日付の打ち間違いがないか、スタッフの入力を再チェックする二度手間。
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-100 hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-purple-50 text-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap size={32} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-slate-800">
                資料整理の負担
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                紙、PDF、Excel… 顧問先からバラバラに届く資料の整理・整形作業。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="py-24 bg-slate-50 relative overflow-hidden"
      >
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute top-40 -left-20 w-72 h-72 bg-indigo-100 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm bg-blue-100 px-3 py-1 rounded-full">
              How it works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-slate-900">
              使い方は、たったの3ステップ
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              今の業務フローを大きく変えることなく、スムーズに導入できます。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-blue-200 z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 h-full hover:border-blue-400 transition duration-300 group">
                <div className="w-10 h-10 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center mb-6 text-xl shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                  1
                </div>
                <div className="mb-4">
                  <Upload className="w-12 h-12 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  取り込む
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  ScanSnap等でスキャンしたPDF資料を、画面にドラッグ＆ドロップするだけ。バラバラのレシートでも問題ありません。
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative z-10">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 h-full hover:border-blue-400 transition duration-300 group">
                <div className="w-10 h-10 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center mb-6 text-xl shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                  2
                </div>
                <div className="mb-4">
                  <CheckCircle className="w-12 h-12 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  確認する
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  システムが自動で下書きを作成。読み取りが不明確な箇所だけハイライトされるので、その部分をチェック・修正するだけで完了です。
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative z-10">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 h-full hover:border-blue-400 transition duration-300 group">
                <div className="w-10 h-10 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center mb-6 text-xl shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                  3
                </div>
                <div className="mb-4">
                  <FileText className="w-12 h-12 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  書き出す
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  修正が終われば完了。お使いの会計ソフトに合わせてCSVデータを出力します。
                </p>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-400 block mb-2 uppercase tracking-wide">
                    対応ソフト例
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-600">
                    <span className="bg-slate-100 border border-slate-200 px-2 py-1 rounded">
                      JDL IBEX
                    </span>
                    <span className="bg-slate-100 border border-slate-200 px-2 py-1 rounded">
                      弥生会計
                    </span>
                    <span className="bg-slate-100 border border-slate-200 px-2 py-1 rounded">
                      TKC
                    </span>
                    <span className="bg-slate-100 border border-slate-200 px-2 py-1 rounded">
                      MJS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Vision Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-3xl shadow-xl overflow-hidden md:flex">
            <div className="md:w-2/5 bg-blue-700 p-12 text-white flex flex-col justify-center relative overflow-hidden">
              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500 rounded-full opacity-50"></div>
              <Heart className="w-12 h-12 mb-6 text-blue-200 relative z-10" />
              <h3 className="text-2xl font-bold mb-4 relative z-10">
                実務の現場に即した
                <br />
                使いやすさを求めて。
              </h3>
              <p className="text-blue-100 leading-relaxed relative z-10">
                ClarioWorkは、単なる効率化ツールではなく、
                記帳業務に自然に馴染む、新しいアシスタントを目指しています。
              </p>
            </div>
            <div className="md:w-3/5 p-12 md:p-16 bg-white">
              <h4 className="text-xl font-bold text-slate-800 mb-4">
                モニター募集の理由
              </h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                私たちは現在、自動化技術の検証を終え、本格的な製品化に向けた仕様策定のフェーズにあります。
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                そこで、実務のプロフェッショナルである先生方に実際に触れていただき、
                <strong className="text-blue-700 bg-blue-50 px-1">
                  現場視点での率直なご意見
                </strong>
                をいただきたいと考えております。
                いただいたご意見は、サービスの品質向上に直結させます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Form Section - FIXED: Button Only */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              まずは無料モニターにお申し込みください
            </h2>
            <p className="text-lg text-slate-600">
              初期費用・利用料は一切かかりません。お気軽にご参加ください。
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
            <div className="space-y-6">
              {/* Only Option: Google Form Link (Final Version) */}
              <div className="p-10 bg-blue-50/50 rounded-2xl border border-blue-100 text-center">
                <div className="mb-6">
                  <div className="bg-blue-600 w-16 h-16 rounded-2xl text-white mx-auto flex items-center justify-center shadow-lg shadow-blue-200 mb-6">
                    <FileText size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Webフォームから送信
                  </h3>
                  <p className="text-slate-600 mt-3 mb-8 max-w-sm mx-auto leading-relaxed">
                    以下のボタンをクリックすると、Googleフォーム（申し込み画面）が開きます。
                    <br />
                    所要時間は約1分です。
                  </p>
                </div>

                {/* External Link Button - High Contrast White Text */}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeICuDydWCEdwgsmMzBy_A6eNRYMDXKCRXpJTAChZU-adaXrw/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center w-full max-w-md bg-blue-600 hover:bg-blue-700 !text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-blue-200 hover:shadow-blue-300 transition duration-200 transform hover:-translate-y-1 text-lg"
                  style={{ color: "#ffffff" }}
                >
                  申し込みフォームを開く
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 text-slate-600 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              {/* Footer Logo */}
              <div
                className="flex items-center gap-2 text-slate-900 mb-4 cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <Image
                  src="/icon.svg"
                  alt="ClarioWork Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span className="text-xl font-bold tracking-tight">
                  ClarioWork
                </span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs text-slate-500">
                全国の税理士事務所様と共に、
                記帳業務の新しいスタンダードを作ります。
              </p>
            </div>
            <div>
              <h4 className="text-slate-900 font-bold mb-4">メニュー</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#features"
                    className="hover:text-blue-600 transition"
                  >
                    特徴
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-blue-600 transition">
                    使い方
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-blue-600 transition">
                    運営会社
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-900 font-bold mb-4">お問い合わせ</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Mail size={16} className="mr-2 text-blue-600" />{" "}
                  info@clariowork.com
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-8 text-center text-xs text-slate-400">
            &copy; {new Date().getFullYear()} ClarioWork. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
