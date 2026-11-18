import React, { useEffect, useRef, useState } from "react";
import preeti from "../assets/preeti.webp";
import { MoveRight } from "lucide-react";
import InvitationPopup from "./InvitationPopup";

const WhatThisIsNot = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [preetiVisible, setPreetiVisible] = useState(false);
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const sectionRef = useRef(null);
  const preetiSectionRef = useRef(null);

  // CHANGED: new content. 6 items = 3 rows x 2 columns, every cell filled.
  const rows = [
    {
      left: {
        title: "It is not a trek.",
        text: "There is walking. There is no summit, no distance to cover, nothing to complete.",
      },
      right: {
        title: "It is not therapy.",
        text: "The work is real, and it is structured, but it is a guided group journey, not treatment. If you are in the middle of something acute, this is not the right time, and I will tell you so honestly on our call.",
      },
    },
    {
      left: {
        title: "It is not a dance class.",
        text: "You don't need to be good at movement, art or music. Nothing you make is judged.",
      },
      right: {
        title: "It is not a silent retreat.",
        text: "Nobody will ask you to stop talking or to give up your coffee.",
      },
    },
    {
      left: {
        title: "It is not a networking room.",
        text: "Nobody here will ask what you do, and that is not an accident.",
      },
      right: {
        title: "And there is time where nothing is planned.",
        text: "Some people find that harder than anything else in the six days. I think it is one of the most important parts.",
      },
    },
  ];

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Stop observing after first animation
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const element = preetiSectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPreetiVisible(true);

          // Stop observing after first animation
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="what-this-is-not">
      <div ref={sectionRef}>
        <section className="w-full bg-white px-6 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-20 mx-auto max-w-[1400px] ">
          <div className="mx-auto">

            {/* Main Heading - CHANGED text */}
            <h2
              className={`mb-10 font-['Oswald'] text-3xl font-bold text-neutral-900 sm:mb-14 sm:text-4xl ${
                isVisible
                  ? "animate-[fromLeft_1.5s_ease-out_both]"
                  : "opacity-0"
              }`}
            >
              What this is not.
            </h2>

            {/* 2-column x 3-row grid */}
            <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
              {rows.map((row, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  {/* Left cell */}
                  <div
                    className={
                      isVisible
                        ? "animate-[fromBottom_1.5s_ease-out_both]"
                        : "opacity-0"
                    }
                    style={{
                      animationDelay: `${0.2 + rowIndex * 0.12}s`,
                    }}
                  >
                    <h3 className="mb-2 font-semibold text-neutral-900 sm:text-xl font-[oswald]">
                      {row.left.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-neutral-600 font-[syne]">
                      {row.left.text}
                    </p>
                  </div>

                  {/* Right cell: CHANGED, always a text item now, no empty placeholder */}
                  <div
                    className={
                      isVisible
                        ? "animate-[fromBottom_1.5s_ease-out_both]"
                        : "opacity-0"
                    }
                    style={{
                      animationDelay: `${0.35 + rowIndex * 0.12}s`,
                    }}
                  >
                    <h3 className="mb-2 font-semibold text-neutral-900 sm:text-xl font-[oswald]">
                      {row.right.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-neutral-600 font-[syne]">
                      {row.right.text}
                    </p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Button: CHANGED text to "Request an Invitation" */}
          <button
            onClick={() => setIsInvitationOpen(true)}
            className={`group relative mt-12 flex w-fit items-center gap-2 overflow-hidden font-['syne'] rounded-full border border-neutral-900 px-6 py-3 text-base font-medium text-neutral-900 ${
              isVisible
                ? "animate-[fromLeft_1.5s_ease-out_0.5s_both]"
                : "opacity-0"
            }`}
          >
            <span
              className="
                absolute
                left-1/2
                top-1/2
                h-full
                w-0
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-neutral-900
                opacity-40

                transition-all
                duration-1000
                ease-in-out

                group-hover:w-[150%]
                group-hover:opacity-100
              "
            />

            <span
              className="
                relative
                z-10
                flex
                items-center
                gap-2
                transition-colors
                duration-500
                group-hover:text-white
              "
            >
              Request an Invitation

              <span
                className="
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                "
              >
                <MoveRight />
              </span>
            </span>
          </button>
        </section>
      </div>

      <InvitationPopup
        isOpen={isInvitationOpen}
        onClose={() => setIsInvitationOpen(false)}
      />
    </div>
  );
};

export default WhatThisIsNot;