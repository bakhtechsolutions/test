'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import dermarepair from "@/assets/img/portfolio/portfolio-1.jpg";
import bookbekee from "@/assets/img/portfolio/portfolio-1.jpg";
import maple from "@/assets/img/portfolio/portfolio-1.jpg";
import avilla from "@/assets/img/portfolio/portfolio-1.jpg";
import island from "@/assets/img/portfolio/portfolio-1.jpg";
import beautypreneur from "@/assets/img/portfolio/portfolio-1.jpg";

const projects = [
  { id: 1, title: "Dermarepair Skincare", type: "Ecommerce Website", image: dermarepair, link: "/portfolio/dermarepair-skincare" },
  { id: 2, title: "BOOK BEKEE", type: "Booking Website", image: bookbekee, link: "/portfolio/book-bekee" },
  { id: 3, title: "Maple Education Canada Inc.", type: "Corporate Website", image: maple, link: "/portfolio/maple-education" },
  { id: 4, title: "Avilla Mag", type: "News & Magazine Website", image: avilla, link: "/portfolio/avilla-mag" },
  { id: 5, title: "Island Supermarket", type: "Ecommerce Website", image: island, link: "/portfolio/island-supermarket" },
  { id: 6, title: "Beautypreneur Hub", type: "Business & Directory", image: beautypreneur, link: "/portfolio/beautypreneur-hub" },
];

const PortfolioAreaHomeOne: React.FC = () => {
  return (
    <section className="modern-portfolio-section">
      <div className="container">
        <div className="portfolio-header">
          <h2 className="portfolio-title">Featured Projects</h2>
          <p className="portfolio-subtitle">
            A showcase of selected works across eCommerce, corporate, and creative web experiences.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <Link href={project.link} key={project.id} className="portfolio-card">
              <div className="portfolio-image">
                {/* Next/Image with fill: parent must be position:relative and have explicit height */}
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
              </div>

              <div className="portfolio-glass">
                <h3 className="portfolio-project-title">{project.title}</h3>
                <p className="portfolio-project-type">{project.type}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioAreaHomeOne;
