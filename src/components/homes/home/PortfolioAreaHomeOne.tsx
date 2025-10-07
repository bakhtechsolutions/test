'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import project_img_1 from "@/assets/img/portfolio/3/portfolio-1.jpg";
import project_img_2 from "@/assets/img/portfolio/3/portfolio-2.jpg";
import project_img_3 from "@/assets/img/portfolio/3/portfolio-3.jpg";
import project_img_4 from "@/assets/img/portfolio/3/portfolio-4.jpg";

type Project = {
  img: StaticImageData;
  title: string;
  type: string;
  link: string;
};

const projects: Project[] = [
  {
    img: project_img_1,
    title: "Prestige Flower Shop",
    type: "eCommerce Website",
    link: "/portfolio/prestige-flower-shop"
  },
  {
    img: project_img_2,
    title: "Fortmeade Design",
    type: "Corporate Website",
    link: "/portfolio/fortmeade-design"
  },
  {
    img: project_img_3,
    title: "Press Cabal",
    type: "PR Website",
    link: "/portfolio/press-cabal"
  },
  {
    img: project_img_4,
    title: "Think Canada Fair",
    type: "Event Site (UI/UX)",
    link: "/portfolio/think-canada-fair"
  }
];

const ProjectAreaHomeOne: React.FC = () => {
  // keep refs stable between renders
  const hoverTextRefs = useRef<Array<HTMLDivElement | null>>([]);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    hoverTextRefs.current[index] = el;
  };

  const moveText = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const hoverTextRef = hoverTextRefs.current[index];
    if (!hoverTextRef) return;

    const rect = hoverTextRef.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // move the view button smoothly to cursor
    const btn = hoverTextRef.querySelector<HTMLElement>('.tp-portfolio-view-btn-3');
    if (btn) {
      // translate with small offset so the button centers under cursor
      btn.style.transform = `translate(${x - btn.offsetWidth / 2}px, ${y - btn.offsetHeight / 2}px)`;
      btn.style.transition = 'transform 0s';
    }
  };

  const resetBtn = (index: number) => {
    const hoverTextRef = hoverTextRefs.current[index];
    const btn = hoverTextRef?.querySelector<HTMLElement>('.tp-portfolio-view-btn-3');
    if (btn) {
      btn.style.transform = '';
      btn.style.transition = 'transform 300ms ease';
    }
  };

  return (
    <div className="tp-portfolio-area tp-btn-trigger-2 p-relative z-index-1 pt-280 pb-40 fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 text-center pb-30 portfolio-sec-pin">
            <h3 className="tp-section-title-3 tp_title_anim">Featured Projects</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="tp-portfolio-item-wrapper-3">

              {projects.map((project, index) => (
                <div
                  key={index}
                  className="tp-portfolio-item-3 portfolio-panel pb-80 tp-hover-reveal-text"
                  ref={(el) => setRef(el, index)}
                  onMouseMove={(e) => moveText(e, index)}
                  onMouseLeave={() => resetBtn(index)}
                >
                  <Link href={project.link} className="tp-portfolio-link">
                    <div className="tp-portfolio-thumb">
                      {/* use fill so image covers the container — parent has position:relative and set height via CSS */}
                      <Image src={project.img} alt={project.title} fill style={{ objectFit: 'cover' }} />
                    </div>

                    {/* Overlayed project info */}
                    <div className="tp-portfolio-info">
                      <h5 className="tp-portfolio-title">{project.title}</h5>
                      <p className="tp-portfolio-type">{project.type}</p>
                    </div>

                    {/* Floating view button that follows mouse */}
                    <div className="tp-portfolio-view-btn-3" aria-hidden>
                      <span>View<br/>Work</span>
                    </div>
                  </Link>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAreaHomeOne;
