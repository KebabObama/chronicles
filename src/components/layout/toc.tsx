"use client";

import { useEffect, useLayoutEffect, useState } from "react";

export const ToC = () => {
  const [active, setActive] = useState<string | undefined>(undefined);
  const [elements, setElements] = useState<HTMLElement[]>([]);

  useLayoutEffect(() => {
    const temp = document.querySelectorAll("main h1, main h2, main h3") as unknown as HTMLHeadingElement[];
    const data = temp.values().toArray();
    setElements(data);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries.find((e) => e.isIntersecting);
        setActive(entry?.target.id);
      },
      { rootMargin: "-80px 0px -80% 0px" },
    );

    elements.forEach((e) => {
      observer.observe(e);
    });

    return () => observer.disconnect();
  }, [elements]);

  return (
    <aside className="hidden min-w-3xs lg:block">
      <ul className="space-y-1 sticky top-24 text-lg font-thin font-dragon-hunter">
        {elements.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={active === heading.id ? "font-medium text-primary" : "text-muted-foreground"}>
              {heading.innerText}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
