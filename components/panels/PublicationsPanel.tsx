"use client";

import { useState } from "react";
import { publicationCategories } from "../../lib/publications";
import PublicationCategory from "../ui/PublicationCategory";

export default function PublicationsPanel() {
  const [openCategory, setOpenCategory] = useState<string | null>(
    "journal-articles",
  );

  const handleToggle = (categoryId: string) => {
    setOpenCategory((current) =>
      current === categoryId ? null : categoryId,
    );
  };

  return (
    <div className="min-h-full bg-white px-8 pb-18 pt-28 md:px-12 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <header className="mb-12">
          <p className="mb-3 text-[14px] font-medium uppercase tracking-[0.2em] text-blue-700">
            Research
          </p>

          <h1 className="text-[37px] font-semibold tracking-tight text-slate-900 md:text-[49px]">
            Publications
          </h1>
        </header>

        <div>
          {publicationCategories.map((category, index) => (
            <PublicationCategory
              key={category.id}
              title={category.title}
              publications={category.publications}
              isOpen={openCategory === category.id}
              onToggle={() => handleToggle(category.id)}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}