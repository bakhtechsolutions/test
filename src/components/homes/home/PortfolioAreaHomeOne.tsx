"use client";
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import portfolio_img_1 from "@/assets/img/portfolio/portfolio-2.jpg";
import portfolio_img_2 from "@/assets/img/portfolio/portfolio-3.jpg";
import portfolio_img_3 from "@/assets/img/portfolio/portfolio-1.jpg";

import UpArrowIconPortfolio from '@/svg/home/PortfolioIcons/UpArrowIconPortfolio';
import RitghtArrowIconPortfolio from '@/svg/home/PortfolioIcons/RitghtArrowIconPortfolio';

const portfolio_content = {
  subtitle: 'Project',
  title: 'Latest projects',
  portfolio_data: [
    {
      id: 2,
      img: portfolio_img_2,
      bg_img: "/assets/img/portfolio/portfolio-3.jpg",
      title: 'Space Needle',
    },
    {
      id: 3,
      img: portfolio_img_3,
      bg_img: "/assets/img/portfolio/portfolio-1.jpg",
      title: "Crisis Cleanup",
    }
  ]
}
const { subtitle, title, portfolio_data } = portfolio_content


const PortfolioAreaHomeOne = () => {

  return (
    <>
      <section className="tp-portfolio-area tp-btn-trigger-2 p-relative z-index-1 pt-280 pb-40 fix">
        <div className="tp-portfolio-top-text tp-portfolio-bg-text d-flex align-items-center tp-portfolio-bg-text-animation">
          <p>{title}</p>
          <p>{title}</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-portfolio-wrapper pr-30 pt-55">
                <div className="tp-section-title-wrapper mb-60">
                  <div className="tp-section-title-inner tp_title_anim p-relative">
                    <span className="tp-section-subtitle tp-portfolio-subtitle">{subtitle}</span>
                    <h3 className="tp-section-title tp_title_anim">{title}</h3>
                  </div>
                </div>
                <div className="tp-portfolio-item-wrapper">
                  <div className="tp-portfolio-item mb-70">
                    <Link href="/portfolio-details">
                      <div className="tp-portfolio-thumb img-1 w-img fix ">
                        <div className="tp-portfolio-thumb-img include-bg d-none"
                          style={{ backgroundImage: 'url(/assets/img/portfolio/portfolio-2.jpg)' }}></div>
                        <div className="tp-portfolio-thumb-img ">
                          <Image data-speed="0.85" style={{ objectFit: 'cover', height: "auto" }} src={portfolio_img_1} alt="image-here" />
                        </div>
                      </div>
                      <div className="tp-portfolio-content">
                        <h3 className="tp-portfolio-title">Brand Identity </h3>
                        <div className="tp-portfolio-meta d-flex align-items-center">
                          <span className="tp-portfolio-meta-count">01</span>
                          <span className="tp-portfolio-meta-arrow">
                            <RitghtArrowIconPortfolio />
                          </span>
                          <div className="tp-portfolio-meta-hover">
                            <span>Branding</span>
                            <span className="tp-portfolio-meta-link">View Project</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="tp-portfolio-more tp-hover-btn-wrapper tp-btn-bounce-2 d-none d-lg-block">
                  <Link href="/portfolio-details"
                    className="tp-hover-btn tp-hover-btn-item tp-btn-circle-2 d-flex align-items-center justify-content-center flex-column">
                    <span className="tp-btn-circle-text-2">
                      Explore <br /> All Project
                      <span className="tp-btn-circle-arrow-2">
                        <UpArrowIconPortfolio />
                      </span>
                    </span>
                    <i className="tp-btn-circle-dot"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tp-portfolio-item-wrapper pl-50">
                {portfolio_data.map((item, i) =>
                  <div key={i} className="tp-portfolio-item mb-70">
                    <Link href="/portfolio-details">
                      <div className="tp-portfolio-thumb img-2 w-img fix">

                        <div className="tp-portfolio-thumb-img include-bg d-none"
                          style={{ backgroundImage: `url(${item.bg_img})`, height: "auto" }}></div>
                        <div className="tp-portfolio-thumb-img">
                          <Image data-speed="0.85" style={{ height: "auto",}} src={item.img} alt="image-here" />
                        </div>
                      </div>
                      <div className="tp-portfolio-content">
                        <h3 className="tp-portfolio-title">{item.title}</h3>
                        <div className="tp-portfolio-meta d-flex align-items-center">
                          <span className="tp-portfolio-meta-count">02</span>
                          <span className="tp-portfolio-meta-arrow">
                            <RitghtArrowIconPortfolio />
                          </span>
                          <div className="tp-portfolio-meta-hover">
                            <span>Branding</span>
                            <span className="tp-portfolio-meta-link">View Project</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )} 
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioAreaHomeOne;


'use client';

import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import project_img_1 from "@/assets/img/portfolio/3/portfolio-1.jpg";
import project_img_2 from "@/assets/img/portfolio/3/portfolio-2.jpg";
import project_img_3 from "@/assets/img/portfolio/3/portfolio-3.jpg";
import project_img_4 from "@/assets/img/portfolio/3/portfolio-4.jpg";


type DataType = StaticImageData[];
const project_imgs: DataType = [project_img_1, project_img_2, project_img_3, project_img_4];

const ProjectAreaHomeThree = () => {


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
      <div className="tp-project-3__area p-relative black-bg-3 pt-110">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-project-3__title-box pb-30 text-center portfolio-sec-pin">
                <h3 className="tp-section-title-3 tp_title_anim">Featured Projects</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-portfolio-item-wrapper-3">

                {project_imgs.map((img, index) =>
                  <div key={index} className="tp-portfolio-item-3 portfolio-panel pb-80 tp-hover-reveal-text"
                    ref={(element) => {
                      hoverTextRefs[index] = React.createRef();
                      hoverTextRefs[index].current = element;
                    }}
                    onMouseMove={(e) => moveText(e, index)} 
                  >
                    <Link href="/portfolio-details">
                      <Image src={img} style={{ height: 'auto' }} alt="image-here" />
                      <span></span>
                      <div className="tp-portfolio-view-btn-3">
                        <span>View <br /> Work</span>
                      </div>
                    </Link>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectAreaHomeThree;



