import React, { useState } from "react";

const EverythingYouNeedToKnow = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // CHANGED: all content updated to the new copy.
  // Supported fields per item:
  //   content: string (one paragraph) OR array (bullet list)
  //   lines:   array of separate paragraphs (NEW, used for the pricing)
  //   note:    extra paragraph shown below everything else (NEW, used for "Not included")
  const items = [
    {
      title: "Dates and location",
      content:
        "11–16 February 2027. Six days, five nights. Tirthan Valley, Himachal Pradesh, at a boutique riverside stay.",
    },
    {
      title: "The circle",
      content:
        "A small circle. All genders. Everyone speaks to me before a place is confirmed, and I take every one of those calls myself.",
    },
    {
      title: "What it costs",
      lines: [
        "₹60,000 per person if you book by 30th November 2026.",
        "₹72,000 per person after that.",
        "Save ₹12,000 by booking early. ₹20,000 holds your place, and the rest can be paid in parts.",
      ],
    },
    {
      title: "What it includes",
      content: [
        "Your stay: five nights in Tirthan Valley, with all meals, fresh, local and home-style.",
        "The six days: about 25 hours of guided work together, all led by me, through movement, art, music, meditation and group circles. All materials included.",
        "The valley: the Fagli festival with a local host, plus village, forest and waterfall walks.",
        "Before and after: a one-to-one call with me in January, then online circles and a WhatsApp group until the end of March.",
      ],
      note: "Not included: travel to and from Tirthan Valley, travel insurance and personal expenses.",
    },
    {
      title: "Want more time in the valley?",
      content:
        "You can add a night before (10 February) or after (17 February) at an additional cost. Both include a short one-to-one with me.",
    },
    {
      title: "Getting there",
      content:
        "Fly to Bhuntar (Kullu), then drive along the river into the valley. Or fly to Chandigarh and drive up. Full travel notes come once you have joined.",
    },
    {
      title: "How this works",
      content:
        "Fill in the form. It takes a few minutes, and the questions are real ones. If it looks like a fit, we will send you a time for a short call with me. If it feels right for both of us after that, your place is held. There is no payment link on this page, and there won't be one.",
    },
  ];

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-20 mx-auto max-w-[1400px] ">
      <div className="mx-auto px-4 sm:px-10 md:px-16 lg:px-28">

        {/* Heading */}
        <h2 className="mb-11 text-center font-['Oswald'] text-2xl font-bold text-neutral-900 sm:text-3xl">
          Everything You Need To Know.
        </h2>

        {/* Accordion */}
        <div className=" ">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-neutral-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span className="font-['Oswald'] text-sm font-bold   tracking-wide text-neutral-900 sm:text-2xl">
                    {item.title}
                  </span>

                  <span
                    className={`ml-4 shrink-0 text-xl font-light text-neutral-900 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Accordion Content (CHANGED: max-h-96 -> max-h-[32rem] so longer items don't get cut off) */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-[32rem] pb-5 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {/* Single paragraph */}
                  {typeof item.content === "string" && (
                    <p className="pr-8 text-sm leading-relaxed text-neutral-600 font-[syne]">
                      {item.content}
                    </p>
                  )}

                  {/* Bullet list */}
                  {Array.isArray(item.content) && (
                    <ul className="list-disc space-y-2 pr-8 pl-5 text-sm leading-relaxed text-neutral-600 font-[syne]">
                      {item.content.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  )}

                  {/* NEW: separate paragraphs (pricing) */}
                  {item.lines && (
                    <div className="space-y-2 pr-8 text-sm leading-relaxed text-neutral-600 font-[syne]">
                      {item.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  )}

                  {/* NEW: note below the content ("Not included") */}
                  {item.note && (
                    <p className="mt-4 pr-8 text-sm leading-relaxed text-neutral-600 font-[syne]">
                      {item.note}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default EverythingYouNeedToKnow;