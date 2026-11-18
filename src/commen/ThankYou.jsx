import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "We read your note",
    text: "Every request is read personally by our team, not filtered by a bot.",
  },
  {
    number: "02",
    title: "We write back",
    text: "Expect an email from us with an honest answer about the journey that fits you.",
  },
  {
    number: "03",
    title: "We talk it through",
    text: "If it feels right, we'll set up a short call to plan the details together.",
  },
];

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FCF8F5] px-5 py-16 sm:px-8">
      {/* Local animations */}
      <style>{`
        @keyframes ty-draw { to { stroke-dashoffset: 0; } }
        @keyframes ty-pop {
          0% { transform: scale(0.6); opacity: 0; }
          70% { transform: scale(1.06); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes ty-rise {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ty-ring {
          0% { transform: scale(1); opacity: 0.35; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        .ty-circle { animation: ty-pop 0.7s cubic-bezier(.2,.8,.2,1) both; }
        .ty-check {
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: ty-draw 0.6s ease-out 0.55s forwards;
        }
        .ty-ring { animation: ty-ring 2.4s ease-out 1s infinite; }
        .ty-rise { opacity: 0; animation: ty-rise 0.7s ease-out forwards; }
        @media (prefers-reduced-motion: reduce) {
          .ty-circle, .ty-check, .ty-ring, .ty-rise {
            animation: none !important;
            opacity: 1 !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>

      {/* Soft decorative blobs */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#F1E3D6] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[#EBD9C8] blur-3xl" />

      <div className="relative w-full max-w-[820px] text-center">
        {/* Animated check */}
        <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
          <span className="ty-ring absolute inset-0 rounded-full border border-neutral-900" />
          <div className="ty-circle flex h-24 w-24 items-center justify-center rounded-full bg-[#111111]">
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path className="ty-check" d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <p
          className="ty-rise mt-10 font-['Syne'] text-sm uppercase tracking-[0.3em] text-neutral-500"
          style={{ animationDelay: "0.5s" }}
        >
          Request received
        </p>

        <h1
          className="ty-rise mt-3 font-['Oswald'] text-5xl font-medium leading-tight text-neutral-900 sm:text-6xl"
          style={{ animationDelay: "0.65s" }}
        >
          Thank you.
        </h1>

        <p
          className="ty-rise mx-auto mt-5 max-w-[560px] font-['Syne'] text-base leading-relaxed text-neutral-700 sm:text-lg"
          style={{ animationDelay: "0.8s" }}
        >
          Your invitation request is with us. We'll read it with care and write
          back soon, and point you honestly to the journey that fits.
        </p>

        {/* What happens next */}
        <div
          className="ty-rise mt-14 text-left"
          style={{ animationDelay: "1s" }}
        >
          <h2 className="text-center font-['Oswald'] text-2xl font-medium text-neutral-900">
            What happens next
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-sm border border-neutral-900/15 bg-white/50 p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="font-['Oswald'] text-3xl font-light text-neutral-400">
                  {step.number}
                </span>
                <h3 className="mt-3 font-['Oswald'] text-xl font-medium text-neutral-900">
                  {step.title}
                </h3>
                <p className="mt-2 font-['Syne'] text-sm leading-relaxed text-neutral-700">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="ty-rise mt-12 flex justify-center"
          style={{ animationDelay: "1.15s" }}
        >
          <Link
            to="/"
            className="group flex items-center gap-3 rounded-full bg-[#111111] px-7 py-3 font-['Syne'] text-base font-medium text-white transition-all duration-300 hover:scale-[1.03]"
          >
            Back to Home
            <span className="text-2xl leading-none transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Contact */}
        <div
          className="ty-rise mt-12 flex flex-col items-center justify-center gap-4 border-t border-neutral-900/10 pt-8 font-['Syne'] text-sm text-neutral-700 sm:flex-row sm:gap-10"
          style={{ animationDelay: "1.3s" }}
        >
          <a
            href="mailto:preeti@soultales.in"
            className="flex items-center gap-2 hover:text-neutral-900"
          >
            <Mail size={18} />
            preeti@soultales.in
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={18} />
            Pune, Maharashtra 411038
          </span>
        </div>
      </div>
    </main>
  );
};

export default ThankYou;