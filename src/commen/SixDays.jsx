import React from "react";
import day1 from "../assets/day1.webp";
import day2 from "../assets/day2.webp";
import day3 from "../assets/day3.webp";
import day4 from "../assets/day4.webp";
import day5 from "../assets/day5.webp";
import day6 from "../assets/day6.webp";

const days = [
  {
    img: day1,
    label: "DAY 01",
    title: "Thaw",
    position: "object-center",
    paras: [
      "You arrive in the afternoon, settle in, and put the journey down. By the evening, the city has started to leave your body. Most people laugh more on the first night than they expected to. Nobody asks what you do for a living. It is a strange relief.",
    ],
  },
  {
    img: day2,
    label: "DAY 02",
    title: "Mask",
    position: "object-center",
    paras: [
      "We all wear a face to get through life: the one that works hard, says yes, and keeps it all together. Today, you get to look at yours. By the end of the day, you will understand which parts of you keep getting in your way, and why they have been working so hard. Expect a lot of laughter along the way.",
    ],
  },
  {
    img: day3,
    label: "DAY 03",
    title: "Fagli",
    position: "object-center",
    paras: [
      "The valley's festival day. We walk through a village and visit an old temple, then join the celebration as guests, with a local host. Masks, drums, and a whole valley saying goodbye to winter. What happens after that, around the fire, we will leave for you to find out."
    ],
  },
  {
    img: day4,
    label: "DAY 04",
    title: "Unmask",
    position: "object-center",
    paras: [
      "The deepest day, and the quietest. You go inward, gently, at your own pace. Things you have carried for a long time finally get some room. By the evening, most people feel lighter than they have in years. It falls on 14 February. This year, the date is with yourself."
    ],
  },
  {
    img: day5,
    label: "DAY 05",
    title: "Spring",
    position: "object-center",
    paras: [
      "A slow morning. No alarm. Then a day lived the way you have always wanted to live one: in the forest, by a waterfall, painting, sleeping, or doing nothing at all. You choose. You will end the day knowing what you want more of in your life."
    ],
  },
  {
    img: day6,
    label: "DAY 06",
    title: "True North ",
    position: "object-bottom",
    paras: [
      "The last morning brings everything together. We won't say more than that. You leave with clarity on one thing you want next, and a simple way to keep it alive at home. You won't be a different person by the time you get home. That isn't the promise. But you will know which way you are facing"
    ],
  },
];

const SixDays = () => {
  return (
    <div id="the-six-days">
      {days.map((d) => (
        <section
          key={d.label}
          className="w-full bg-white px-6 pb-12 md:px-20"
        >
          {/* Image container: max width + fixed height */}
          <div className="group relative mx-auto max-w-[1400px] overflow-hidden">
            <img
              src={d.img}
              alt={d.label}
              className={`
                block
                w-full
                h-[260px]
                sm:h-[360px]
                md:h-[460px]
                lg:h-[560px]
                object-cover
                ${d.position}
                transition-transform
                duration-700
                ease-out
                group-hover:scale-110
              `}
            />
          </div>

          {/* Day badge */}
          <div className="relative z-10 mx-auto -mt-7 flex h-20 w-20 items-center justify-center rounded-full bg-black text-center text-lg font-['Oswald'] font-semibold text-white ring-4 ring-white">
            {d.label}
          </div>

          {/* Content */}
          <div className="mx-auto max-w-[1200px] text-center">
            <h2 className="mt-3 font-['Oswald'] text-4xl font-bold ">
              {d.title}
            </h2>

            {d.paras.map((p, i) => (
              <p
                key={i}
                className="mt-2 text-lg leading-relaxed text-[#6B6666] font-['Syne']"
              >
                {p}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default SixDays;