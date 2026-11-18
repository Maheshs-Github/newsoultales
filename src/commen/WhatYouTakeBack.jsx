import React, { useEffect, useRef, useState } from "react";

const WhatYouTakeBack = () => {
  const [headingVisible, setHeadingVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState({});
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  // CHANGED: 7 cards, each with a title and a body paragraph
  const intro =
    "Nobody comes back from six days a different person, and anyone promising that is selling something. Here is what actually comes back with you.";

  const cards = [
    {
      title: "A weight you finally put down.",
      body: "The thing you have been carrying quietly for years doesn't disappear. But it stops being a private weight, and that changes what it can do to you.",
    },
    {
      title: "One thing you can use on a bad Tuesday.",
      body: "A simple daily practice, five minutes long, small enough that you will still be doing it in April. Not a routine you will drop by the second week. One thing, for the moment in the car park before you walk back in.",
    },
    {
      title: "Your own wants, back in working order.",
      body: "By the middle of the week, most people can answer the question about dinner again. It sounds small. It is the beginning of everything else.",
    },
    {
      title: "People who saw you without the mask.",
      body: "You have colleagues, clients and family, and possibly not one person who has seen you without your guard up. After six days by the same fire, a small circle has. That doesn't end when you leave.",
    },
    {
      title: "January to March, not just six days.",
      body: "It starts with a one-to-one call with me in January, and a few small things to try at home. After the valley, your circle stays together online until the end of March, with a WhatsApp group to keep you going.",
    },
    {
      title: "What you made.",
      body: "Things made with your own hands, written pages, and a short film of the last morning. Small reminders of the person you met in the valley.",
    },
    {
      title: "And the part other people notice.",
      body: "Nobody at home will ask about the river. What they will notice, a few weeks later, is that you are not snapping. That you finished a sentence you would normally have cut short. That you were actually in the room at dinner.",
    },
  ];

  // CHANGED: closing text
  const closingLine =
    "That is the return. It doesn't show up in your calendar. It shows up in the people around you.";

  // Observer for heading
  useEffect(() => {
    const element = headingRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadingVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Separate observer for EACH card (and the closing line), so each
  // animates only when it enters the viewport
  useEffect(() => {
    const observers = [];

    cardRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => ({ ...prev, [index]: true }));
            observer.disconnect();
          }
        },
        { threshold: 0.2 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const introIndex = cards.length;
  const closingIndex = cards.length + 1;

  return (
    <>
      <section
        className="w-full bg-white px-4 py-16 sm:px-8 sm:py-6 md:px-12 lg:px-20 mx-auto max-w-[1400px] mt-10 "
        id="what-you-take-back"
      >
        <div className="mx-auto">
          {/* Heading: CHANGED text */}
          <h2
            ref={headingRef}
            className={`text-center font-['Oswald'] text-3xl font-semibold text-neutral-900 sm:text-4xl ${
              headingVisible
                ? "animate-[fromRight_1.5s_ease-out_both]"
                : "opacity-0"
            }`}
          >
            What you take back.
          </h2>

          {/* NEW: intro paragraph */}
          <p
            ref={(el) => (cardRefs.current[introIndex] = el)}
            className={`mx-auto mt-4 max-w-2xl text-center font-['Syne'] text-base text-neutral-700 sm:text-lg ${
              visibleCards[introIndex] ? "" : "opacity-0"
            }`}
            style={
              visibleCards[introIndex]
                ? { animation: "fromLeft 1s ease-out both" }
                : undefined
            }
          >
            {intro}
          </p>

          {/* Cards: CHANGED grid to md:grid-cols-2 lg:grid-cols-3 */}
          <div className="mt-5 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {cards.map((card, index) => {
              const direction = index % 2 === 0 ? "fromLeft" : "fromRight";
              const isVisible = visibleCards[index];
              const isLast = index === cards.length - 1;

              return (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`bg-[#FCF8F5] p-6 text-left sm:p-7 ${
                    isLast
                      ? "md:col-span-2 md:mx-auto md:max-w-[calc(50%-0.625rem)] lg:col-span-1 lg:col-start-2 lg:max-w-none"
                      : ""
                  } ${isVisible ? "" : "opacity-0"}`}
                  style={
                    isVisible
                      ? { animation: `${direction} 1s ease-out both` }
                      : undefined
                  }
                >
                  <h3 className="font-['Oswald'] text-xl font-semibold leading-tight text-neutral-900">
                    {card.title}
                  </h3>
                  <p className="mt-4 font-['Syne'] text-sm leading-7 text-neutral-600 sm:text-base">
                    {card.body}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Closing line: CHANGED text */}
          <p
            ref={(el) => (cardRefs.current[closingIndex] = el)}
            className={`mx-auto mt-8 max-w-2xl text-center font-['Syne'] text-base italic text-neutral-700 sm:mt-10 sm:text-lg ${
              visibleCards[closingIndex] ? "" : "opacity-0"
            }`}
            style={
              visibleCards[closingIndex]
                ? { animation: "fromRight 1s ease-out both" }
                : undefined
            }
          >
            {closingLine}
          </p>
        </div>
      </section>
    </>
  );
};

export default WhatYouTakeBack;
