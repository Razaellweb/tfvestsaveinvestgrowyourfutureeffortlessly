"use client";
import React from "react";
import { Button } from "../components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { ChevronRight, CheckCircle, Shield, ArrowDownToLine } from "lucide-react";

const testimonials = [
  {
    name: "Adaora E.",
    job: "Product Designer, Lagos",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "tfvest made saving and investing for my business a breeze—I love the goal plans!",
  },
  {
    name: "Kwame B.",
    job: "Software Engineer, Accra",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    quote:
      "I trust tfvest to grow my money securely. Withdrawals are fast, and I always feel in control.",
  },
  {
    name: "Irene N.",
    job: "Medical Doctor, Nairobi",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "Saving up for big things has never felt this easy. tfvest keeps me on track!",
  },
];

const faqs = [
  {
    question: "Is my money safe with tfvest?",
    answer:
      "Absolutely. tfvest uses bank-grade security, trusted payment partners, and encrypted wallets to keep your money safe.",
  },
  {
    question: "How flexible are withdrawals?",
    answer:
      "Withdraw your funds at anytime—no hoops, no hassle. Flex plans make access seamless.",
  },
  {
    question: "What does automated savings mean?",
    answer:
      "Automated savings means tfvest works silently in the background, moving small amounts toward your goals so you grow your wealth with zero stress.",
  },
];

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#f1f5f9] via-white to-[#e0e7ef] min-h-screen flex flex-col text-[#0f172a] dark:text-[#f1f5f9] transition-colors duration-300">
      {/* Navbar */}
      <header
        className="w-full px-4 md:px-12 py-4 flex justify-between items-center bg-transparent z-20 sticky top-0"
        aria-label="Main Navigation"
      >
        <div className="flex items-center gap-2 font-extrabold text-2xl tracking-tight">
          <Shield className="w-7 h-7 text-[#1e3a8a] dark:text-[#93c5fd]" aria-hidden="true" />
          <span className="font-graphik hidden sm:inline">tfvest</span>
          <span className="sm:hidden font-graphik">tfv</span>
        </div>
        <nav className="flex gap-2" aria-label="User Actions">
          <Button variant="outline" asChild className="font-medium">
            <a href="/signin" aria-label="Sign In">
              Sign In
            </a>
          </Button>
          <Button className="ml-2 bg-[#1e3a8a] border-none text-white shadow-lg hover:bg-[#23376d] hover:scale-105 transition" asChild>
            <a href="/signup" aria-label="Create Free Account">
              Sign Up
            </a>
          </Button>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section
        className="pt-12 pb-16 md:pt-20 md:pb-28 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 relative w-full"
      >
        <div className="max-w-xl flex flex-col gap-6 z-10">
          <h1 className="font-graphik font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tighter text-[#1e3a8a] dark:text-[#bfdbfe] drop-shadow-sm">
            Save, Invest & Grow Your Future — Effortlessly
          </h1>
          <p className="text-lg md:text-xl font-work-sans text-[#334155] dark:text-[#f1f5f9] mt-2 mb-4">
            tfvest empowers you to build financial security through seamless automated savings, smart investments, and flexible plans—trusted for Africa’s new generation.
          </p>
          <div className="flex gap-4 mt-4">
            <Button
              className="flex items-center gap-2 bg-gradient-to-r from-[#1e3a8a] to-[#0f172a] text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-[#1e3a8a] transition"
              size="lg"
              asChild
            >
              <a href="/signup" aria-label="Start Saving Today">
                Start Saving Today <ChevronRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 text-[#1e3a8a] border-[#1e3a8a] hover:bg-[#e0e7ef] hover:scale-105 px-6 py-3 text-lg font-semibold transition"
              asChild
            >
              <a href="#features" aria-label="See How It Works">
                How It Works
              </a>
            </Button>
          </div>
        </div>
        <div className="w-full md:w-[480px] flex items-center justify-center">
          <div className="relative w-full aspect-[5/6] max-w-xs mx-auto bg-gradient-to-tr from-[#dbeafe] via-[#f1f5f9] to-[#bfd7fc] rounded-2xl shadow-2xl dark:from-[#232942] dark:via-[#141c28] dark:to-[#253e62] p-4 flex flex-col gap-4 items-center justify-center animate-fade-in">
            <Shield className="w-20 h-20 text-[#1e3a8a] dark:text-[#93c5fd] opacity-60 absolute -top-7 left-1/2 -translate-x-1/2" aria-hidden="true" />
            <div className="text-[#1e3a8a] dark:text-[#bfdbfe] text-2xl font-bold mt-8">Your Secure Wallet</div>
            <ul className="flex flex-col gap-3 w-full mt-2">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#67c23a]" aria-hidden="true" />
                Automated Savings
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#67c23a]" aria-hidden="true" />
                Smart Investments
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#67c23a]" aria-hidden="true" />
                Goal-based Planning
              </li>
            </ul>
            <div className="mt-6 flex flex-col items-center gap-1">
              <span className="text-xs text-[#64748b] dark:text-[#f1f5f9]/60">Powered by Trusted African Partners</span>
              <div className="flex gap-1">
                <img
                  src="https://randomuser.me/api/portraits/men/46.jpg"
                  alt="Partner Logo 1"
                  className="w-7 h-7 rounded-full border bg-white shadow"
                  loading="lazy"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/7.jpg"
                  alt="Partner Logo 2"
                  className="w-7 h-7 rounded-full border bg-white shadow"
                  loading="lazy"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/13.jpg"
                  alt="Partner Logo 3"
                  className="w-7 h-7 rounded-full border bg-white shadow"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-6 md:py-10 px-4 md:px-0 flex flex-col items-center" aria-label="Trusted By">
        <div className="flex gap-8 items-center flex-wrap justify-center">
          <span className="text-base md:text-lg font-medium text-[#64748b] dark:text-[#e5e7eb]">Trusted by 50,000+ smart Africans</span>
          <span className="text-xs md:text-sm px-3 py-1 rounded-full border border-[#1e3a8a] dark:border-[#60a5fa] text-[#1e3a8a] dark:text-[#bfdbfe] bg-white dark:bg-[#0f172a]">Rated 4.9/5.0</span>
          <span className="text-xs md:text-sm px-3 py-1 rounded-full border border-[#0f172a]/10 bg-[#f1f5f9] dark:bg-[#13203c] text-[#64748b]">Backed by leading partners</span>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-14 md:py-24 bg-[#f1f5f9] dark:bg-[#13203c] transition-colors duration-300" aria-label="Features">
        <div className="max-w-5xl mx-auto px-4 flex flex-col gap-10">
          <div className="flex flex-col gap-3 items-center justify-center mb-8">
            <h2 className="font-graphik text-3xl md:text-4xl font-semibold text-[#1e3a8a] dark:text-[#bfdbfe] mb-2">Features That Make Wealth-Building Simple</h2>
            <p className="text-[#334155] dark:text-[#e0e7eb] max-w-2xl text-center font-work-sans text-lg">Automated, personalized, and 100% secure – tfvest gives you total control over your financial destiny.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-start p-6 rounded-xl bg-white dark:bg-[#1e293b] shadow-sm group transition-all">
              <CheckCircle className="w-7 h-7 text-[#67c23a] mb-3" aria-hidden="true" />
              <h3 className="font-semibold text-lg mb-1 group-hover:text-[#1e3a8a] transition-colors">Automated savings tailored to your goals</h3>
              <p className="text-[#334155] dark:text-[#f1f5f9]/80 text-sm">Let tfvest grow your savings using AI-driven plans matched to your ambitions.</p>
            </div>
            <div className="flex flex-col items-start p-6 rounded-xl bg-white dark:bg-[#1e293b] shadow-sm group transition-all">
              <ArrowDownToLine className="w-7 h-7 text-[#1e3a8a] dark:text-[#bfdbfe] mb-3" aria-hidden="true" />
              <h3 className="font-semibold text-lg mb-1 group-hover:text-[#1e3a8a] transition-colors">Flexible investment options</h3>
              <p className="text-[#334155] dark:text-[#f1f5f9]/80 text-sm">Choose from competitive investment plans to grow your wealth safely.</p>
            </div>
            <div className="flex flex-col items-start p-6 rounded-xl bg-white dark:bg-[#1e293b] shadow-sm group transition-all">
              <Shield className="w-7 h-7 text-[#1e3a8a] mb-3" aria-hidden="true" />
              <h3 className="font-semibold text-lg mb-1 group-hover:text-[#1e3a8a] transition-colors">Secure wallet with trusted partners</h3>
              <p className="text-[#334155] dark:text-[#f1f5f9]/80 text-sm">Your funds are protected with bank-level encryption & reliable payment providers.</p>
            </div>
            <div className="flex flex-col items-start p-6 rounded-xl bg-white dark:bg-[#1e293b] shadow-sm group transition-all">
              <ChevronRight className="w-7 h-7 text-[#1e3a8a] dark:text-[#bfdbfe] mb-3" aria-hidden="true" />
              <h3 className="font-semibold text-lg mb-1 group-hover:text-[#1e3a8a] transition-colors">Easy withdrawal plans</h3>
              <p className="text-[#334155] dark:text-[#f1f5f9]/80 text-sm">Access your funds anytime, with instant withdrawal options to suit your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-14 md:py-24 bg-[#e0e7ef] dark:bg-[#182644] transition-colors duration-300" aria-label="How tfvest Works">
        <div className="max-w-5xl mx-auto px-4 flex flex-col gap-10">
          <div className="flex flex-col gap-3 items-center justify-center mb-8">
            <h2 className="font-graphik text-3xl md:text-4xl font-semibold text-[#1e3a8a] dark:text-[#bfdbfe] mb-2">How tfvest Works</h2>
            <p className="text-[#334155] dark:text-[#e0e7eb] max-w-2xl text-center font-work-sans text-lg">Set your financial goals, automate your savings, invest with confidence, and watch your future grow. tfvest makes each step effortless.</p>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <li className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-[#1e293b] rounded-xl shadow-sm">
              <span className="rounded-full bg-[#1e3a8a]/10 dark:bg-[#1e3a8a]/30 p-3">
                <CheckCircle className="w-8 h-8 text-[#1e3a8a] dark:text-[#bfdbfe]" aria-hidden="true" />
              </span>
              <span className="font-semibold text-lg">Set Your Goals</span>
              <span className="text-[#334155] dark:text-[#f1f5f9]/80 text-center text-sm">Define what you’re saving or investing for—education, trip, new laptop, or your first home.</span>
            </li>
            <li className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-[#1e293b] rounded-xl shadow-sm">
              <span className="rounded-full bg-[#1e3a8a]/10 dark:bg-[#1e3a8a]/30 p-3">
                <ArrowDownToLine className="w-8 h-8 text-[#1e3a8a] dark:text-[#bfdbfe]" aria-hidden="true" />
              </span>
              <span className="font-semibold text-lg">Automate Savings</span>
              <span className="text-[#334155] dark:text-[#f1f5f9]/80 text-center text-sm">Link your wallet & let tfvest move small amounts automatically, so you don’t feel the pinch.</span>
            </li>
            <li className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-[#1e293b] rounded-xl shadow-sm">
              <span className="rounded-full bg-[#1e3a8a]/10 dark:bg-[#1e3a8a]/30 p-3">
                <Shield className="w-8 h-8 text-[#1e3a8a] dark:text-[#bfdbfe]" aria-hidden="true" />
              </span>
              <span className="font-semibold text-lg">Grow & Enjoy</span>
              <span className="text-[#334155] dark:text-[#f1f5f9]/80 text-center text-sm">Watch your savings & investments compound, withdraw anytime, and hit your dreams faster.</span>
            </li>
          </ol>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-14 md:py-24 px-4 bg-[#f1f5f9] dark:bg-[#13203c] transition-colors duration-300" aria-label="Testimonials">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-3 items-center justify-center mb-8">
            <h2 className="font-graphik text-3xl md:text-4xl font-semibold text-[#1e3a8a] dark:text-[#bfdbfe] mb-2">Real People, Real Growth</h2>
            <p className="text-[#334155] dark:text-[#e0e7eb] text-lg font-work-sans text-center max-w-2xl">Hear from Africans who started with small steps—and now invest & save with confidence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="flex flex-col items-center p-6 rounded-xl bg-white dark:bg-[#1e293b] shadow-lg group hover:scale-[1.03] transition-transform"
              >
                <Avatar className="mb-4 w-14 h-14">
                  <AvatarImage src={t.image} alt={`Photo of ${t.name}`} />
                  <AvatarFallback>{t.name.slice(0,2)}</AvatarFallback>
                </Avatar>
                <blockquote className="font-work-sans text-[#334155] dark:text-[#f1f5f9] mb-3 text-center ">{`“${t.quote}”`}</blockquote>
                <span className="text-[#64748b] dark:text-[#cbd5e1] text-xs font-medium">{t.name}</span>
                <span className="text-[#94a3b8] dark:text-[#bfdbfe] text-xs">{t.job}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-24 bg-[#e0e7ef] dark:bg-[#182644] transition-colors duration-300" aria-label="Frequently Asked Questions">
        <div className="max-w-3xl mx-auto flex flex-col gap-10 px-4">
          <div className="flex flex-col gap-3 items-center justify-center mb-8">
            <h2 className="font-graphik text-3xl md:text-4xl font-semibold text-[#1e3a8a] dark:text-[#bfdbfe] mb-2">Frequently Asked Questions</h2>
            <p className="text-[#334155] dark:text-[#e0e7eb] text-lg font-work-sans text-center">Got doubts? See how tfvest stands out for you.</p>
          </div>
          <div className="flex flex-col divide-y divide-[#cbd5e1] dark:divide-[#223355] bg-white dark:bg-[#1e293b] rounded-xl shadow p-0 overflow-hidden">
            {faqs.map((faq, idx) => (
              <details
                key={faq.question}
                className="group py-6 px-4 cursor-pointer open:bg-[#f1f5f9] dark:open:bg-[#23376d] transition-colors"
              >
                <summary className="font-semibold text-[#1e3a8a] dark:text-[#bfdbfe] flex items-start gap-2 outline-none cursor-pointer">
                  <ChevronRight className="w-5 h-5 mr-1 group-open:rotate-90 transition-transform" aria-hidden="true" />
                  {faq.question}
                </summary>
                <div className="mt-3 text-[#334155] dark:text-[#f1f5f9]/90 text-base font-work-sans">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + FOOTER */}
      <footer className="flex flex-col gap-6 items-center justify-center py-14 px-6 bg-gradient-to-t dark:from-[#10203b] from-[#f1f5f9] via-white to-[#e0e7ef] border-t border-[#e5e7eb] dark:border-[#28365b]">
        <h2 className="font-graphik text-2xl md:text-3xl font-bold text-[#1e3a8a] dark:text-[#bfdbfe] text-center">Start Saving, Investing & Growing Today</h2>
        <Button
          className="flex items-center gap-2 bg-gradient-to-r from-[#1e3a8a] to-[#0f172a] text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-lg hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-[#1e3a8a] transition"
          size="lg"
          asChild
        >
          <a href="/signup" aria-label="Create your tfvest account">
            Get Started <ChevronRight className="w-5 h-5" />
          </a>
        </Button>
        <div className="mt-6 flex flex-col md:flex-row gap-2 items-center text-xs text-[#64748b] dark:text-[#e5e7eb]/60">
          <span>&copy; {new Date().getFullYear()} tfvest. All rights reserved.</span>
          <span className="hidden md:inline mx-2">|</span>
          <a href="#" className="hover:underline focus:underline">Privacy Policy</a>
        </div>
      </footer>
    </main>
  );
}

// FONTS (Include in your layout or _document.js)
// import '@fontsource-variable/work-sans';
// import '@fontsource-variable/graphik';

// META TAGS (Best placed in app/head.tsx or next/head)
// export const metadata = {
//   title: "tfvest — Save, Invest & Grow Your Future Effortlessly",
//   description:
//     "tfvest empowers young professionals and millennials across Africa to build financial security through seamless automated savings, smart investments, and flexible goal-based plans.",
//   keywords: [
//     "africa fintech",
//     "automated savings",
//     "goal-based investments",
//     "secure wallet africa",
//   ],
// };
