'use client';

import React from 'react';
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
    type: "eCommerce Website Design",
    link: "/portfolio/prestige-flower-shop"
  },
  {
    img: project_img_2,
    title: "Fortmeade Design",
    type: "Corporate Website Development",
    link: "/portfolio/fortmeade-design"
  },
  {
    img: project_img_3,
    title: "Press Cabal",
    type: "PR Agency Website",
    link: "/portfolio/press-cabal"
  },
  {
    img: project_img_4,
    title: "Think Canada Fair",
    type: "Event Website UI/UX",
    link: "/portfolio/think-canada-fair"
  }
];

const ProjectAreaHomeOne = () => {

  const hoverTextRefs: React.RefObject<HTMLDivElement>[] | any = [];
  
  const moveText = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const hoverTextRef = hoverTextRefs[index];
    if (hoverTextRef.current) {
      const item = hoverTextRef.current.getBoundingClientRect();
      const x = e.clientX - item.left; 
      const y = e.clientY - item.top;

      const children = hoverTextRef.current.children;
      if (children[0] && children[0].children[2]) { 
        (children[0].children[2] as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      }
    }
  };

  return (
    <>
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
                    ref={(element) => {
                      hoverTextRefs[index] = React.createRef();
                      hoverTextRefs[index].current = element;
                    }}
                    onMouseMove={(e) => moveText(e, index)} 
                  >
                    <Link href={project.link}>
                      <div className="tp-portfolio-thumb">
                        <Image src={project.img} style={{ height: 'auto' }} alt={project.title} />
                      </div>
                      <div className="tp-portfolio-info mt-20 text-center">
                        <h5 className="tp-portfolio-title">{project.title}</h5>
                        <p className="tp-portfolio-type">{project.type}</p>
                      </div>
                      <div className="tp-portfolio-view-btn-3">
                        <span>View <br /> Work</span>
                      </div>
                    </Link>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectAreaHomeOne;
