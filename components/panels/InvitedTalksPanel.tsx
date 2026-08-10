"use client";

import { useState } from "react";

const talksByYear = {
  "2026": [
    "Invitation to a convening on student mental health and well-being in higher education in India (1st August, 2026).",
    "Teacher Training Program on Mental Health at St. Miras College for Girls, Pune (28th August, 2026).",
    "Nurturing Future Leadership Programme (NFLP) on Mental Health Awareness and Advocacy as a Leadership Skill at FLAME University, Pune (28th July, 2026).",
    "Nurturing Future Leadership Programme (NFLP) on Mental Health Awareness and Advocacy as a Leadership Skill at FLAME University, Pune (2nd July, 2026).",
    "Five-day training program for the Directorate General of Shipping and its allied offices at the Yashwantrao Chavan Academy of Development Administration (YASHADA, Pune) (7th July, 2026).",
    "Foundation Training Programme for Class I Officers of the Directorate of AYUSH at YASHADA, Pune (3rd July, 2026).",
    'The State Institute of Rural Development (SIRD), YASHADA, Pune, organised the "Training for BDOs (Block Development Officers)—Management & Administrative Programme" under the Ministry of Rural Development (MoRD) on 8th June, 2026.',
    "Teacher Training Program on mental health awareness and advocacy at Vidya Prathisthan English Medium School, Baramati (4th July, 2026).",
    "Invited to the podcast titled 'The Next Lesson,' hosted by Hemali Dalal, Managing Director of JBCN Schools (19th May, 2026).",
    "Lecture on heuristics and biases in the Post-Promotion Administrative Training Programme for Deputy Commissioners of Goods & Service Tax (GST), organised under the State Training Policy (21st May, 2026).",
    "Conducted a Faculty Development Program (FDP) on “The Psychology of Wellbeing at the Workplace” at Fr. Agnel Business School, FCRIMS (15th April, 2026).",
    "Conducted Advanced Teacher Training Seminar Series at PineGrove School, Himachal Pradesh, on Mental Health (March 2026).",
    "Nurturing Future Leadership Programme (NFLP) on Mental Health Awareness and Advocacy as a Leadership Skill at FLAME University, Pune (6th March, 2026).",
    "Nurturing Future Leadership Programme (NFLP) on Mental Health Awareness and Advocacy as a Leadership Skill at FLAME University, Pune (13th February, 2026).",
    "Speaker Coach for TEDx FLAME University (10th January, 2026).",
    "Conducted a session for Class 1 Officers of the Directorate General of Shipping, Government of India (9th January, 2026).",
  ],

  "2025": [
    "Conducted a session on mental health at the workplace for employees of Bridgestone India (10th September, 2025).",
    "Resource person for the MPSC officers' training for a batch of 140 officers at YASHADA (5th December, 2025).",
    "Nurturing Future Leadership Programme (NFLP) on Mental Health Awareness and Advocacy as a Leadership Skill at FLAME University, Pune (22nd August, 2025).",
    "Invited as the first guest for the first edition of the podcast Project - IMPACT HOUR at FLAME University, Pune (18th July, 2025).",
    "Invited speaker at the International Career and College Counselling (IC3) Conference at Kalyani School, Pune (11th June, 2025).",
    "Research Mentor for the Incubation Centre under the Entrepreneurship Cell at FLAME University, Pune (May 2025).",
    "Conducted a teacher training workshop for university professors across Maharashtra under the Maharashtra State Faculty Development Academy (MSFDA), Sangli, Maharashtra (March 2025).",
    "Speaker Coach for TEDx FLAME University (10th January, 2025).",
  ],

  "2024": [
    "Panel discussion on “Navigating Stress and Nurturing Work-Life Balance in Modern Workplaces” at National Institute of Bank Management (NIBM), Pune (14th November, 2024).",
    "Invited speaker in the International HR Symposium on Emerging Trends in OB/HR at Jindal Global Business School (11th November, 2024).",
    "Conducted a Faculty Development Program (FDP) at Savitribai Phule Pune University, organised by the UGC MMTTC, on mental health awareness and advocacy (18th December, 2024).",
    "Conducted a session on Gen Z and Gen Alpha masterclass with educators at FLAME University, Pune (October 2024).",
    "Conducted a session on Gen Z and Gen Alpha masterclass with educators at FLAME University, Pune (January 2024).",
  ],
};

const galleryImages = [
  "/invited-talks/01.jpg",
  "/invited-talks/02.jpg",
  "/invited-talks/03.jpg",
  "/invited-talks/04.jpg",
  "/invited-talks/05.jpg",
  "/invited-talks/06.jpg",
  "/invited-talks/07.jpg",
  "/invited-talks/08.jpg",
  "/invited-talks/09.jpg",
  "/invited-talks/10.jpg",
  "/invited-talks/11.jpg",
  "/invited-talks/12.jpg",
];

export default function InvitedTalksPanel() {
  const [openYear, setOpenYear] = useState<string | null>("2026");

  return (
    <div className="min-h-full bg-white px-8 pb-18 pt-28 md:px-12 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <header className="mb-12">
          <p className="mb-3 text-[14px] font-medium uppercase tracking-[0.2em] text-blue-700">
            Outreach
          </p>

          <h1 className="text-[37px] font-semibold tracking-tight text-slate-900 md:text-[49px]">
            Invited Talks, Workshops & Training Programs
          </h1>
        </header>

        {/* Talks */}
        <section>
          <div className="mb-5">
            <p className="text-[14px] font-medium uppercase tracking-[0.2em] text-slate-500">
              Engagements
            </p>
          </div>

          <div>
            
          {Object.entries(talksByYear)
              .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
              .map(([year, talks]) => {
                const isOpen = openYear === year;

                return (
                  <section
                    key={year}
                    className="border-t border-slate-300"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenYear(isOpen ? null : year)
                      }
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between py-[22px] text-left transition-colors hover:text-blue-700"
                    >
                      <span
                        className={`text-[21px] font-medium tracking-tight ${
                          isOpen
                            ? "text-blue-700"
                            : "text-slate-900"
                        }`}
                      >
                        {year}
                      </span>

                      <span
                        aria-hidden="true"
                        className={`text-[25px] font-light leading-none text-slate-400 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-4">
                          {talks.map((talk, index) => (
                            <article
                              key={`${year}-${index}`}
                              className="flex gap-6 border-t border-slate-100 py-5"
                            >
                              <span className="w-7 shrink-0 pt-1 text-xs font-medium tracking-[0.12em] text-slate-400">
                                {String(index + 1).padStart(2, "0")}
                              </span>

                              <p className="max-w-4xl text-[15px] leading-7 text-slate-700">
                                {talk}
                              </p>
                            </article>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                );
              })}
        
          </div>
        </section>

        <div className="mt-10 border-t border-slate-200 pt-10">
        <div className="mb-10">
        
        </div>
          </div>

                
        {/* Photo gallery */}
        <div className="mb-16 grid grid-cols-2 gap-3 md:grid-cols-4">
          {galleryImages.map((src, index) => (
            <div
              key={src}
              className={`overflow-hidden rounded-sm border border-slate-200 bg-slate-50 ${
                index === 0 || index === 5
                  ? "row-span-2 aspect-[3/4]"
                  : "aspect-[4/3]"
              }`}
            >
              <img
                src={src}
                alt={`Invited talk ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}