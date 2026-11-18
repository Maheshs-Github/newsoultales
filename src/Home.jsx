import React, { useEffect, useRef, useState } from "react";

import heroimg from "../src/assets/heroimg.webp";
import sectionImg from "../src/assets/sectionimg.webp";

import SixDays from "./commen/SixDays";
import WhatYouTakeBack from "./commen/WhatYouTakeBack";
import WhatThisIsNot from "./commen/WhatThisIsNot";
import EverythingYouNeedToKnow from "./commen/EverythingYouNeedToKnow";
import InvitationPopup from "./commen/InvitationPopup";
import {MoveRight} from "lucide-react"
import PreetiSection from "./commen/PreetiSection";
import Hero from "./commen/Hero";
 

const useInView = (threshold = 0.2) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          
          // Animation will NOT repeat when scrolling back
          observer.disconnect();
        }
      },
      {
        threshold,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};



export default function Home() {
   

  const [holdsRef, holdsVisible] = useInView(0.2);
const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [anotherYearRef, anotherYearVisible] = useInView(0.2);

  return (
    <div className="w-full">

    

      <Hero/>

     
 
<section className="px-4 py-14 sm:px-6 md:py-20">
  <div className="mx-auto max-w-2xl text-center">

<p className="font-['Syne'] text-sm sm:text-lg" id="the-valley">
  In February, the Tirthan runs cold and clear, loud enough that you
  stop trying to think over it. Wooden villages sit on the slopes, and
  the Great Himalayan National Park begins where the road gives up.

  <br />
  <br />

  This is also the month of Fagli. The villages put on carved wooden
  masks, the drums start, and they dance winter out of the valley to
  welcome spring. We go as guests.

  <br />
  <br />

  No queues. No sights to tick. River, forest, fire, and a festival
  older than anyone can remember.
</p>

    <h2
      className="
        mt-4
        font-['Oswald']
        text-2xl
        font-semibold

        sm:text-3xl
        md:mt-2
        md:text-4xl
      "
    >
      Six days here. One question: what happens when you finally put it all down?
    </h2>

  </div>
</section>

       

     <section
  ref={holdsRef}
  className="w-full bg-white px-4 sm:px-8 md:px-20 mx-auto max-w-[1400px]  "
>
  <div className="mx-auto grid grid-cols-12 gap-4 md:gap-6">

    <div
      className={`
        col-span-12
        h-[320px]
        overflow-hidden

        sm:h-[420px]

        md:col-span-5
        md:h-[677px]

        opacity-0

        ${
          holdsVisible
            ? "animate-[fromLeft_1s_ease-out_both]"
            : ""
        }
      `}
      style={{
        animationDelay: "0.2s",
      }}
    >
      <img
        src="sectionimg.webp"
        alt="Mountain sunset"
        className="h-full w-full object-cover"
      />
    </div>

    <div
      className={`
        col-span-12
        flex
        flex-col
        items-center
        justify-center
        bg-[#f7f0ea]
        px-6
        py-10
        text-center

        sm:px-8

        md:col-span-7
        md:px-10

        opacity-0

        ${
          holdsVisible
            ? "animate-[fromRight_1s_ease-out_both]"
            : ""
        }
      `}
      style={{
        animationDelay: "0.5s",
      }}
    >
<h2
  className="
    mb-6
    font-['Oswald']
    text-2xl
    font-semibold
    text-neutral-900

    sm:text-3xl
    md:text-4xl
  "
>
  You are the one who holds it.
</h2>

<p
  className="
    mb-6
    font-['Syne']
    text-base
    font-medium
    leading-relaxed
    text-[#141313]

    sm:text-lg
  "
>
At work, they bring you the thing nobody else can fix. At home, you
are the one who knows where everything is kept, what is due, and who
is not doing well this month. Your parents call you first. Your team
calls you first.
</p>

<p
  className="
    mb-6
    font-['Syne']
    text-lg
    font-bold
    text-neutral-900

    sm:text-xl
  "
>
  You are good at all of it. That is exactly the problem.
</p>

<p
  className="
    mb-6
    font-['Syne']
    text-base
    font-medium
    leading-relaxed
    text-[#141313]

    sm:text-lg
  "
>
  Ask you what you want for dinner, and you will ask what everybody
else wants. It is not a big thing. It is just that somewhere in the
last few years, the person doing all the holding got put down
somewhere and never quite picked back up.

<br />
<br />

It does not announce itself. It shows up as sleep that doesn't rest
you. A short temper with the people you love most, and endless
patience for people who don't matter. Sunday evenings that feel
heavier than they should. Being told you are doing amazingly by
people who have no idea.
</p>
     <button
  onClick={() => setIsInvitationOpen(true)}
  className="
    group
    relative
    flex
    items-center
    gap-2
    overflow-hidden
    font-['syne']
    rounded-full
    border
    border-neutral-900
    px-6
    py-3
    text-base
    font-medium
    text-neutral-900
  "
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
    Request An Invitation 

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
    </div>
  </div>
</section>
      

      <section
        ref={anotherYearRef}
        className="mt-20 bg-[#f7f0ea] py-20  "
      >

<div className="mx-auto max-w-[1400px]">
  <div className="mx-auto max-w-[1100px] px-6 md:px-10">

    {/* HEADING: text changed */}
    <h2
      className={`
        mb-6
        font-['Oswald']
        text-4xl
        font-semibold
        text-neutral-900

        sm:text-5xl
        md:text-4xl

        opacity-0

        ${
          anotherYearVisible
            ? "animate-[headingFromLeft_1s_cubic-bezier(.65,0,.35,1)_both]"
            : ""
        }
      `}
    >
      Another year of this.
    </h2>

    {/* 1 - medium, delay 0.2s */}
    <p
      className={`
        mb-3
        font-['Syne']
        text-lg
        font-medium
        leading-relaxed
        text-[#141313]

        opacity-0

        ${
          anotherYearVisible
            ? "animate-[paragraphFromBottom_.9s_ease-out_both]"
            : ""
        }
      `}
      style={{ animationDelay: "0.2s" }}
    >
      Not a crisis. That is the thing about it. There is no crisis. You will be fine.
    </p>

    {/* 2 - medium, delay 0.35s */}
    <p
      className={`
        mb-3
        font-['Syne']
        text-lg
        font-medium
        leading-relaxed
        text-[#141313]

        opacity-0

        ${
          anotherYearVisible
            ? "animate-[paragraphFromBottom_.9s_ease-out_both]"
            : ""
        }
      `}
      style={{ animationDelay: "0.35s" }}
    >
      You will be fine next February too. The calendar will look much the same.
      The same people will need the same things. There will be a new version of
      whatever is taking up most of your head right now, and you will handle
      that one as well.
    </p>

    {/* 3 - BOLD, delay 0.5s */}
    <p
      className={`
        mb-3
        mt-6
        font-['Syne']
        text-lg
        font-bold
        leading-snug
        text-neutral-900

        sm:text-xl
        md:text-xl

        opacity-0

        ${
          anotherYearVisible
            ? "animate-[paragraphFromBottom_.9s_ease-out_both]"
            : ""
        }
      `}
      style={{ animationDelay: "0.5s" }}
    >
      What changes, quietly, is the margin.
    </p>

    {/* 4 - medium, delay 0.65s (NEW) */}
    <p
      className={`
        mb-3
        font-['Syne']
        text-lg
        font-medium
        leading-relaxed
        text-[#141313]

        opacity-0

        ${
          anotherYearVisible
            ? "animate-[paragraphFromBottom_.9s_ease-out_both]"
            : ""
        }
      `}
      style={{ animationDelay: "0.65s" }}
    >
      The fuse gets a little shorter, and shortest with the two or three people
      you love most. That is the part nobody tells you. The patience goes to
      people who don't matter, and the sharpness goes home. You have started to
      hear it in your own voice.
    </p>

    {/* 5 - medium, delay 0.8s (NEW) */}
    <p
      className={`
        mb-3
        font-['Syne']
        text-lg
        font-medium
        leading-relaxed
        text-[#141313]

        opacity-0

        ${
          anotherYearVisible
            ? "animate-[paragraphFromBottom_.9s_ease-out_both]"
            : ""
        }
      `}
      style={{ animationDelay: "0.8s" }}
    >
      Your body has been sending small notices. You have been filing them away.
    </p>

    {/* 6 - medium, delay 0.95s (NEW) */}
    <p
      className={`
        mb-3
        font-['Syne']
        text-lg
        font-medium
        leading-relaxed
        text-[#141313]

        opacity-0

        ${
          anotherYearVisible
            ? "animate-[paragraphFromBottom_.9s_ease-out_both]"
            : ""
        }
      `}
      style={{ animationDelay: "0.95s" }}
    >
      And your own wants have quietly gone out of use. Somebody asks what you
      feel like doing, and there is nothing there. Not sacrifice. Just a muscle
      that stopped being used.
    </p>

    {/* 7 - medium, delay 1.1s (NEW) */}
    <p
      className={`
        mb-3
        font-['Syne']
        text-lg
        font-medium
        leading-relaxed
        text-[#141313]

        opacity-0

        ${
          anotherYearVisible
            ? "animate-[paragraphFromBottom_.9s_ease-out_both]"
            : ""
        }
      `}
      style={{ animationDelay: "1.1s" }}
    >
      You will keep going. You are very good at keeping going. That has never
      been the question.
    </p>

    {/* 8 - BOLD, delay 1.25s */}
    <p
      className={`
        mb-3
        mt-6
        font-['Syne']
        text-lg
        font-bold
        leading-snug
        text-neutral-900

        sm:text-xl
        md:text-xl

        opacity-0

        ${
          anotherYearVisible
            ? "animate-[paragraphFromBottom_.9s_ease-out_both]"
            : ""
        }
      `}
      style={{ animationDelay: "1.25s" }}
    >
      The real question is what it will have cost by the time something finally
      makes you stop, and whether that happens on a date you chose, or one you
      didn't.
    </p>

  </div>
</div>
       

      

        <div
          className={`
            mt-16
            bg-white
            opacity-0

            ${
              anotherYearVisible
                ? "animate-[paragraphFromBottom_.9s_ease-out_both]"
                : ""
            }
          `}
          style={{ animationDelay: "1.4s" }}
        >
          <h1
            className="
              py-6
              text-center
              font-['Oswald']
              text-[28px]
              font-medium
            "
          >
            Six days is 1.6% of a year.
          </h1>
        </div>
      </section>

     

      <SixDays />

      <WhatYouTakeBack />

      <WhatThisIsNot />

<PreetiSection/>
      <EverythingYouNeedToKnow />

       

     
<InvitationPopup
  isOpen={isInvitationOpen}
  onClose={() => setIsInvitationOpen(false)}
/>
    </div>
  );
}