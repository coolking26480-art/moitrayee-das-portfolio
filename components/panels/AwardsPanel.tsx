"use client";
import { useState } from "react";

const awards = [
  {
    title: "Best Paper Award",
    description:
      'For the paper, “Evaluating the perceived utility of AI tools among university students: A cross-sectional study,” presented at the International Conference of Reimagining Self and Society: Dynamics of Psychology in the Age of AI, Woxsen University, Hyderabad (2026).',
  },
  {
    title: "Teaching Award",
    description:
      "FLAME University, Pune (2024–2025).",
  },
  {
    title: "Service Award",
    description:
      "FLAME University, Pune, in the year the award was introduced (2025).",
  },
  {
    title: "Teaching Award",
    description:
      "FLAME University, Pune (2023–2024).",
  },
  {
    title: "Best Paper Award",
    description:
      'Best Paper Award in the Indian Management, Culture, and Knowledge Systems track and the overall Best Paper Award at the 9th INDAM Conference on Creating Impact through Responsible Leadership and Sustainable Business Practices (2024).',
  },
  {
    title: "Teaching Award",
    description:
      "FLAME University, Pune (2022–2023).",
  },
  {
    title: "Outstanding Student Award",
    description:
      "For M.Phil. (Management and Labour Studies), Tata Institute of Social Sciences (TISS), Mumbai (January 2017).",
  },
];

const awardImages = [
  "/awards/award-1.jpg",
  "/awards/award-2.jpg",
  "/awards/award-3.jpg",
  "/awards/award-4.jpg",
  "/awards/award-5.jpg",
  "/awards/award-6.jpg",
];

export default function AwardsPanel() {
    const [openAward, setOpenAward] = useState<number | null>(null);
   return (
    <div className="min-h-full bg-white px-8 pb-18 pt-28 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12">
          <p className="mb-3 text-[14px] font-medium uppercase tracking-[0.2em] text-blue-700">
            Recognition
          </p>

          <h1 className="text-[37px] font-semibold tracking-tight text-slate-900 md:text-[49px]">
            Awards
          </h1>
        </header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[60%_40%]">
          {/* Awards */}
          <section>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {awards.map((award, index) => {
                const number = String(index + 1).padStart(2, "0");

                return (
                  <article
  key={`${award.title}-${index}`}
  className={`border border-blue-200 transition-colors ${
    openAward === index ? "border-blue-700" : "hover:border-blue-700"
  }`}
>
  <button
    type="button"
    onClick={() =>
      setOpenAward((current) =>
        current === index ? null : index,
      )
    }
    aria-expanded={openAward === index}
    className="flex w-full items-center gap-4 p-5 text-left"
  >
    <span
      className={`w-7 shrink-0 text-xs font-medium tracking-[0.12em] ${
        openAward === index ? "text-blue-700" : "text-slate-400"
      }`}
    >
      {number}
    </span>

    <span
      className={`text-[18px] font-medium leading-6 tracking-tight ${
        openAward === index ? "text-blue-700" : "text-slate-900"
      }`}
    >
      {award.title}
    </span>

    <span
      aria-hidden="true"
      className={`ml-auto text-[24px] font-light leading-none text-slate-400 transition-transform duration-300 ${
        openAward === index ? "rotate-45" : ""
      }`}
    >
      +
    </span>
  </button>

  <div
    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
      openAward === index
        ? "grid-rows-[1fr]"
        : "grid-rows-[0fr]"
    }`}
  >
    <div className="overflow-hidden">
      <p className="px-5 pb-5 pl-16 text-[13px] leading-6 text-slate-600">
        {award.description}
      </p>
    </div>
  </div>
</article>
                );
              })}
            </div>
          </section>

          {/* Photographs */}
          <section>
            <div className="grid grid-cols-2 gap-3">
              {awardImages.map((src, index) => (
                <div
                  key={src}
                  className={`overflow-hidden border border-slate-200 bg-slate-50 ${
                    index === 0
                      ? "col-span-2 aspect-[16/10]"
                      : "aspect-[4/3]"
                  }`}
                >
                  <img
                    src={src}
                    alt={`Award recognition ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}