const conferences = [
  {
    year: 2026,
    authors: "Ratnaparke, S. A. R. V., & Das, M.",
    date: "July 21, 2026",
    title:
      "Evaluating the perceived utility of AI-tools among university students: A cross-sectional study",
    type: "Upcoming conference presentation",
    venue:
      "International Conference 2026 at Woxsen University, Hyderabad, India.",
  },
  {
    year: 2026,
    authors: "Ratnaparke, S. A. R. V., & Das, M.",
    date: "December 10–12, 2026",
    title:
      "A Normative Policy of Gratitude in Times of Uncertainty, Frustration, and Sorrow",
    type: "Upcoming conference",
    venue:
      "GratCon 2026; A global conference, Christ University, Bengaluru, India.",
  },
  {
    year: 2026,
    authors: "Shah, M., & Das, M.",
    date: "December 10–12, 2026",
    title:
      "Developmental Neurobiology of Gratitude: Role of Early Experiences in Shaping Capacity for Gratitude",
    type: "Upcoming conference",
    venue:
      "GratCon 2026; A global conference, Christ University, Bengaluru, India.",
  },
  {
    year: 2026,
    authors: "Shah, M., & Das, M.",
    date: "October 26–28, 2026",
    title: "Bridging the bot gap: How generations are adapting to generative AI",
    type: "Upcoming conference presentation",
    venue:
      "11th International Conference of the Indian Academy of Health Psychology (ICIAHP–2026), Thavorn Palm Beach Resort, Phuket, Thailand.",
  },
  {
    year: 2026,
    authors: "Pandey, A., Shah, M., & Das, M.",
    date: "September 18–19, 2026",
    title:
      "AI mediated work systems: A review of psychological consequences, workplace wellbeing, and managerial decision making",
    type: "Upcoming conference presentation",
    venue:
      "IMC International Research Conference (IMC-IRC) 2026, Indian Institute of Management Lucknow, Noida Campus, Delhi NCR, India.",
  },
  {
    year: 2026,
    authors: "Shah, M., & Das, M.",
    date: "September 18–19, 2026",
    title:
      "AI paradox in management education: Capability or dependency?",
    type: "Upcoming conference presentation",
    venue:
      "IMC International Research Conference (IMC-IRC) 2026, Indian Institute of Management Lucknow, Noida Campus, Delhi NCR, India.",
  },
  {
    year: 2026,
    authors: "Shah, M. & Das, M.",
    date: "December 10–11, 2026",
    title:
      "Developmental Neurobiology of Gratitude: Role of Early Experiences in Shaping Capacity for Gratitude",
    type: "Upcoming conference presentation",
    venue:
      "The Global Conference on Developing Grateful Communities 2026 (GRATCon), Christ University, Bangalore.",
  },
  {
    year: 2026,
    authors: "Mehra, M., & Das, M.",
    date: "March 27–28, 2026",
    title:
      "Who’s calling the shots?: Is algorithmic decision-making shaping organizational values and psychological safety",
    type: "Oral presentation",
    venue:
      "National Conference of Psychology 2026: Bridging Theory and Practice: Psychology at the Workplace, FLAME University, Pune, India.",
  },
  {
    year: 2026,
    authors: "Mehra, M., & Das, M.",
    date: "March 27–28, 2026",
    title: "Awws of the paws: The case of pet-friendly workplaces",
    type: "Poster presentation",
    venue:
      "National Conference of Psychology 2026: Bridging Theory and Practice: Psychology at the Workplace, FLAME University, Pune, India.",
  },
  {
    year: 2026,
    authors: "Chaudhari, S. R., & Das, M.",
    date: "March 14–15, 2026",
    title:
      "The ontological misplacement of self: From behavioral regulation to ontological discernment in digital well-being",
    type: "Oral presentation",
    venue:
      "13th International Conference on Spirituality: A Tested Paradigm for Global Well-Being, Sustainability and Digital Mindfulness, School of Management Sciences, Varanasi, India.",
  },
  {
    year: 2026,
    authors: "Abhijeet, S., & Das, M.",
    date: "March 14–15, 2026",
    title:
      "A systematic review of how interfaith harmony reduces prejudice through collective empathy in pursuit for global peace",
    type: "Conference presentation",
    venue:
      "13th International Conference on Spirituality: A Tested Paradigm for Global Well-Being, Sustainability and Digital Mindfulness, School of Management Sciences, Varanasi, India.",
  },
  {
    year: 2026,
    authors: "Shah, M. & Das, M.",
    date: "March 14–15, 2026",
    title:
      "Belief or Buffer? Exploring The Role of Intrinsic and Extrinsic Spirituality in Burnout",
    type: "Conference presentation",
    venue:
      "13th International Conference on Spirituality: A Tested Paradigm for Global Well-Being, Sustainability, and Digital Mindfulness, School of Management Sciences, Varanasi.",
  },

  {
    year: 2025,
    authors: "Mehra, S., Das, M., Kotbagi, G., & Patki, S.",
    date: "February 17–20, 2025",
    title: "The impact of dating apps on self-esteem and body image",
    type: "Oral presentation",
    venue:
      "34th Annual Convention of the National Academy of Psychology (NAOP), CHRIST (Deemed to be University), Delhi NCR Campus, India.",
  },
  {
    year: 2025,
    authors: "Mehra, S., Das, M., Kotbagi, G., & Patki, S.",
    date: "July 2025",
    title:
      "Impact of modern dating trends in dating apps on self-esteem and body image",
    type: "Oral presentation",
    venue:
      "10th International Conference on Behavioural Addictions (ICBA), Nantes, France.",
  },
  {
    year: 2025,
    authors: "Ramanathan, P., Siddiqui, R., & Das, M.",
    date: "July 10–12, 2025",
    title: "Polycultural identity and globalization threat: An Indian perspective",
    type: "Conference presentation",
    venue:
      "16th Biennial Conference of the Asian Association of Social Psychology (AASP 2025), Monash University Malaysia, Kuala Lumpur, Malaysia.",
  },
  {
    year: 2025,
    authors: "Vaid, A., Belavadi, S. & Das, M.",
    date: "February 17–20, 2025",
    title:
      "Therapy for Therapists: Mental Health Challenges and Help-Seeking Behaviours Among Psychologists in India",
    type: "Conference presentation",
    venue:
      "34th Annual Convention of the National Academy of Psychology (NAOP) in collaboration with CHRIST (Deemed to be University).",
  },
  {
    year: 2025,
    authors: "Khanna, P. & Das, M.",
    date: "February 17–20, 2025",
    title:
      "Political Apathy or Activism: Understanding Gen Z's Trust in Political Institutions and its Effect on Voter Turnout in India",
    type: "Conference presentation",
    venue:
      "34th Annual Convention of the National Academy of Psychology (NAOP) in collaboration with CHRIST (Deemed to be University).",
  },
  {
    year: 2025,
    authors: "Deshmukh, I. & Das, M.",
    date: "February 17–20, 2025",
    title:
      "Sacrifice and Identity: Exploring Martyrdom in Historical and Contemporary Contexts",
    type: "Conference presentation",
    venue:
      "34th Annual Convention of the National Academy of Psychology (NAOP) in collaboration with CHRIST (Deemed to be University).",
  },
  {
    year: 2025,
    authors: "Mehra, S., Patki, S. & Das, M.",
    date: "February 22–23, 2025",
    title: "The Impact of Ghosting on Self-Esteem and Body Image Issues",
    type: "Conference presentation",
    venue:
      "International Conference of Innovation, Sustainability and Applied Sciences (ICISAS 2025), Curtin University Dubai.",
  },
  {
    year: 2025,
    authors: "Vaid, A., Belavadi, S. & Das, M.",
    date: "February 22–23, 2025",
    title:
      "The Burden of Healing: Understanding Psychologists Mental Health In India",
    type: "Conference presentation",
    venue:
      "International Conference of Innovation, Sustainability and Applied Sciences (ICISAS 2025), Curtin University Dubai.",
  },
  {
    year: 2025,
    authors: "Ratnaparke, S.A. & Das, M.",
    date: "March 28–29, 2025",
    title:
      "Exploring the Nexus between India's Economic Climate and Inter-cultural perspectives on Happiness",
    type: "Conference presentation",
    venue:
      "3rd Annual Conference of the National Positive Psychology Association (NPPA).",
  },
  {
    year: 2025,
    authors: "Shah, K. & Das, M.",
    date: "August 6–8, 2025",
    title:
      "The ‘Empty Stadium’ Problem: Why Fancy Buildings Don’t Fix Boring Classes",
    type: "Conference presentation",
    venue:
      "International Conference on Organisational Culture, Work Values and Organisational Performance in Higher Education Institutions (ICOC ‘25), Christ University, Bangalore.",
  },
  {
    year: 2025,
    authors: "Shah, M. & Das, M.",
    date: "August 6–8, 2025",
    title:
      "Power, Pedagogy, Pressure: A Comparative Review On Student Faculty Relations",
    type: "Conference presentation",
    venue:
      "International Conference on Organisational Culture, Work Values and Organisational Performance in Higher Education Institutions (ICOC ’25), Christ University, Bangalore.",
  },

  {
    year: 2024,
    authors: "Tripathi, A. & Das, M.",
    date: "2024",
    title: "We Only Rent to Families: Singlehood and Rental Housing",
    type: "Conference presentation",
    venue:
      "7th Annual South Asia Conference at Dublin City University, Dublin, Ireland.",
  },
  {
    year: 2024,
    authors: "Grover, M. & Das, M.",
    date: "August 9, 2024",
    title: "Understanding the Evaluation Systems for Mental Health Applications",
    type: "Conference presentation",
    venue:
      "Synod 3.0 Conference held at Surana Educational Institutions in collaboration with Cairnmillar Institute.",
  },
  {
    year: 2024,
    authors: "Sam, T. & Das, M.",
    date: "August 9, 2024",
    title:
      "Enhancing Adolescent Mental Health: How AI Companions Complement, but Don't Replace Human Therapists",
    type: "Conference presentation",
    venue:
      "Synod 3.0 Conference held at Surana Educational Institutions in collaboration with Cairnmillar Institute.",
  },
  {
    year: 2024,
    authors: "Vaid, A., Bansal, D. & Das, M.",
    date: "August 9, 2024",
    title:
      "Technological Adaptations in Language for Online Psychotherapy: Enhancing Accessibility and Effectiveness",
    type: "Conference presentation",
    venue:
      "Synod 3.0 Conference held at Surana Educational Institutions in collaboration with Cairnmillar Institute.",
  },
  {
    year: 2024,
    authors: "Khanna, P. & Das, M.",
    date: "September 17–19, 2024",
    title:
      "Uncovering the Structural Barriers to Employment and Mental Well-Being for Indian Graduates",
    type: "Conference presentation",
    venue:
      "International Conference of Holistic Health: Exploring Interconnected Realms of Well-Being (HHERW2024), SGT University.",
  },
  {
    year: 2024,
    authors: "Deshmukh, I. & Das, M.",
    date: "September 17–19, 2024",
    title:
      "Unseen Scars: Understanding Secondary Trauma from Media Exposure to Violence and Disasters",
    type: "Conference presentation",
    venue:
      "International Conference of Holistic Health: Exploring Interconnected Realms of Well-Being (HHERW2024), SGT University.",
  },
  {
    year: 2024,
    authors: "Arora, T. & Das, M.",
    date: "September 17–19, 2024",
    title: "How Diversity and Inclusivity Differ and Why Both Matter",
    type: "Conference presentation",
    venue:
      "International Conference of Holistic Health: Exploring Interconnected Realms of Well-Being (HHERW2024), SGT University.",
  },
  {
    year: 2024,
    authors: "Smitha, D. & Das, M.",
    date: "2024",
    title:
      "Women's Bodies and Minds: A Qualitative Analysis of Psychological Implications of Gendered Inequities in Indian Health Care Settings",
    type: "Conference presentation",
    venue: "International Conference of Social Sciences (ICSS), Amity University.",
  },
  {
    year: 2024,
    authors: "Dhillon, S. & Das, M.",
    date: "2024",
    title:
      "The Impact of Sleep Apnea and Daytime Sleepiness on the Employee Engagement of the IT sector employees in India",
    type: "Conference presentation",
    venue:
      "Bombay Psychological Association (BPA) Trust's 31st Annual International Multidisciplinary Conference.",
  },
  {
    year: 2024,
    authors: "Smitha, D. & Das, M.",
    date: "2024",
    title:
      "Psychological Responses to Gender-based Violence in Indian Healthcare Settings",
    type: "Conference presentation",
    venue:
      "Bombay Psychological Association (BPA) Trust's 31st Annual International Multidisciplinary Conference.",
  },
  {
    year: 2024,
    authors: "Thombare, N. & Das, M.",
    date: "2024",
    title:
      "The Role of CSR, Corporate Governance and Sustainable Development in SMEs: Exploring Interconnection and Benefits",
    type: "Conference presentation",
    venue:
      "9th INDAM Conference on Creating Impact through Responsible Leadership & Sustainable Business Practices, Goa Institute of Management.",
  },

  {
    year: 2023,
    authors: "Dedhia, A. & Das, M.",
    date: "2023",
    title: "Addressing Job Burnout in Culturally Diverse Workforces",
    type: "Conference presentation",
    venue:
      "International Conference of Innovation, Sustainability and Applied Sciences (ICISAS), Curtin University, Dubai.",
  },
  {
    year: 2023,
    authors: "Zaina, A. & Das, M.",
    date: "2023",
    title: "Chronic Illnesses and Mental Wellbeing: Current Trends and Practices",
    type: "Conference presentation",
    venue:
      "International Conference of Indian Academy of Health Psychology (ICIAHP).",
  },
  {
    year: 2023,
    authors: "George, L. & Das, M.",
    date: "2023",
    title: "The Implications of Pain Catastrophizing: A Cognitive Therapy-Based Approach",
    type: "Conference presentation",
    venue:
      "International Conference of Indian Academy of Health Psychology (ICIAHP).",
  },
  {
    year: 2023,
    authors: "Dedhia, A. & Das, M.",
    date: "November 2023",
    title: "Navigating Coping Mechanisms in Culturally Diverse Workforce",
    type: "Conference presentation",
    venue:
      "International Conference of Indian Academy of Health Psychology (ICIAHP).",
  },
  {
    year: 2023,
    authors: "Dedhia, A. & Das, M.",
    date: "August 2023",
    title: "Job Burnout and Coping Mechanisms among Culturally Diverse Workforce",
    type: "Conference presentation",
    venue:
      "National Seminar on Positive Psychology for Holistic Development.",
  },
  {
    year: 2023,
    authors: "Mundhra, C. & Das, M.",
    date: "December 2023",
    title: "Does Resilience building improve Quality of Life",
    type: "Conference presentation",
    venue:
      "National Seminar on Positive Psychology for Holistic Development, 2023.",
  },
  {
    year: 2023,
    authors: "Prasad, S., Swaika, D. & Das, M.",
    date: "August 2023",
    title:
      "The Role of Self Compassion in Fostering Resilience and Recovery from Stress among Youth",
    type: "Conference presentation",
    venue:
      "National Seminar on Positive Psychology for Holistic Development.",
  },
  {
    year: 2023,
    authors: "Desai, V. Das, M.",
    date: "2023",
    title:
      "Exploring the Experiences of LGBTQIA + Youth in India: a Descriptive Content Review",
    type: "Conference presentation",
    venue:
      "Virtual Asia-Pacific Mental Health Symposium (VAMHS).",
  },
  {
    year: 2023,
    authors: "George, L. & Das, M.",
    date: "2023",
    title:
      "Pain Perception and Cancer: A Review on Current Day Therapeutic Techniques",
    type: "Conference presentation",
    venue:
      "Virtual Asia-Pacific Mental Health Symposium (VAMHS), 2023.",
  },

  {
    year: 2022,
    authors: "Choudhury, S., Palo, S & Das, M.",
    date: "2022",
    title: "Case study on 'Bandhan Bank'",
    type: "Conference presentation",
    venue:
      "International Conference on Case Development (ICCD), ICFAI Tripura.",
  },
  {
    year: 2022,
    authors: "Choudhury, S., Palo, S & Das, M.",
    date: "2022",
    title:
      "Security in the Age of Flexibility: The Case of Bandhan Bank",
    type: "Conference presentation",
    venue: "INDAM 2023 Conference at SBM-NMIMS Mumbai.",
  },
  {
    year: 2022,
    authors: "Tripathi, A. & Das, M.",
    date: "2022",
    title: 'We Rent Only to Families": Rental Housing and Singlehood in Indian Cities',
    type: "Conference presentation",
    venue: "Web Conference on Law and Singlehood in India.",
  },
  {
    year: 2022,
    authors: "Tripathi, A. & Das, M.",
    date: "2022",
    title:
      "Unpacking the 'Bihariness': Reflections on Indian Predator: The Butcher of Delhi",
    type: "Conference presentation",
    venue:
      "International Conference on Migrant Workers, Cultural (Re) Production, and the Culture Industry in South Asia, Tezpur University.",
  },

  {
    year: 2020,
    authors: "Das, M.",
    date: "2020",
    title: "Poor Sleep: An Epidemic keeping Indians awake",
    type: "NHRD Event",
    venue: "NHRD Event, Mumbai Chapter.",
  },
  {
    year: 2019,
    authors: "Das, M.",
    date: "2019",
    title:
      "Perfectionist? You don’t need to sleep: An interplay of Daytime Sleepiness and Task Performance",
    type: "Doctoral colloquium presentation",
    venue: "13th Annual ISDSI Conference.",
  },
  {
    year: 2018,
    authors: "Das, M.",
    date: "2018",
    title: "Understanding the sleep inadequacy problem among Research Students",
    type: "Doctoral colloquium presentation",
    venue: "Management Doctoral Colloquium, IIT Kharagpur.",
  },
  {
    year: 2017,
    authors: "Das, M.",
    date: "2017",
    title: "Understanding the sleep inadequacy among corporate professionals",
    type: "Conference presentation",
    venue: "INDAM Conference, IIM Indore.",
  },
  {
    year: 2017,
    authors: "Das, M.",
    date: "2017",
    title: "Poster Presentation on the Poor Sleeping Patterns of the youth",
    type: "Poster presentation",
    venue: "Indian Society for Sleep Research (ISSR).",
  },
];

const yearGroups = [
  {
    label: "2026 — Present",
    years: [2026],
  },
  {
    label: "2020 — 2025",
    years: [2025, 2024, 2023, 2022, 2020],
  },
  {
    label: "2015 — 2019",
    years: [2019, 2018, 2017],
  },
];

const photoPlaceholders = [
  {
    className: "conference-photo conference-photo-large",
    label: "Conference",
  },
  {
    className: "conference-photo conference-photo-small",
    label: "Presentation",
  },
  {
    className: "conference-photo conference-photo-small",
    label: "Academic engagement",
  },
  {
    className: "conference-photo conference-photo-wide",
    label: "Research",
  },
];

import { useState } from "react";



  // All sections start collapsed
export default function ConferencesPanel() {
  let number = 1;

  const [openGroups, setOpenGroups] =
    useState<Record<string, boolean>>({});
  return (
    <section className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1440px] px-8 pb-16 pt-28 lg:px-16 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[minmax(300px,0.8fr)_minmax(0,1.7fr)] lg:gap-20">

          {/* Left visual column */}
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <div className="mb-10">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-700">
                Academic Engagement
              </p>

              <h1 className="text-5xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl">
                Conferences
              </h1>

              <p className="mt-6 max-w-md text-base leading-7 text-slate-600">
                Conference presentations, research discussions, and academic
                engagements across psychology, workplace well-being, and
                emerging social and technological issues.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:gap-3">
              {photoPlaceholders.map((photo, index) => (
                <div
                  key={photo.label}
                  className={`${photo.className} ${
                    index === 0 ? "lg:row-span-2" : ""

                  }`}
                >
                  <span>{photo.label}</span>
                </div>
              ))}
            </div>

            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-slate-400">
              Conferences &amp; presentations
            </p>
          </div>

          {/* Right content column */}
          <div className="pt-20">
            {yearGroups.map((group) => {
              const groupItems = conferences.filter((conference) =>
                group.years.includes(conference.year)
              );

              const isOpen = openGroups[group.label];

              return (
                <section
                  key={group.label}
                  className="mb-16 last:mb-0"
                >
                  {/* Collapsible section header */}
                  <div className="mb-7 border-b border-slate-200 pb-4">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenGroups((prev) => ({
                          ...prev,
                          [group.label]: !prev[group.label],
                        }))
                      }
                      className="flex w-full items-end justify-between text-left"
                      aria-expanded={isOpen}
                    >
                      <h2 className="text-2xl font-medium tracking-[-0.02em] text-slate-950">
                        {group.label}
                      </h2>

                      <span className="flex items-center gap-4 text-sm tracking-[0.18em] text-slate-400">
                        {String(groupItems.length).padStart(2, "0")}

                        <span className="text-lg leading-none">
                          {isOpen ? "−" : "+"}
                        </span>
                      </span>
                    </button>
                  </div>

                  {/* Conference entries */}
                  <div className={isOpen ? "block" : "hidden"}>
                    {groupItems.map((conference) => {
                      const currentNumber = number++;

                      return (
                        <article
                          key={`${conference.year}-${currentNumber}-${conference.title}`}
                          className="group border-b border-slate-200 py-7 first:pt-2"
                        >
                          <div className="grid gap-5 sm:grid-cols-[52px_minmax(0,1fr)]">

                            {/* Conference number */}
                            <span className="pt-1 text-sm font-medium tracking-[0.12em] text-blue-700">
                              {String(currentNumber).padStart(2, "0")}
                            </span>

                            <div>

                              {/* Date */}
                              <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                                {conference.date}
                              </p>

                              {/* Title */}
                              <h3 className="max-w-3xl text-lg font-medium leading-7 tracking-[-0.01em] text-slate-950">
                                {conference.title}
                              </h3>

                              {/* Authors */}
                              <p className="mt-3 text-sm font-medium text-slate-600">
                                {conference.authors}
                              </p>

                              {/* Type + Venue */}
                              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                                <span className="text-slate-700">
                                  {conference.type}
                                </span>{" "}
                                · {conference.venue}
                              </p>

                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}