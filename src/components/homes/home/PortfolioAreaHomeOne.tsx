'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import dermarepair from '@/assets/img/portfolio/dermarepair.jpg';
import bookbekee from '@/assets/img/portfolio/bookbekee.jpg';
import maple from '@/assets/img/portfolio/maple.jpg';
import avilla from '@/assets/img/portfolio/avilla.jpg';
import island from '@/assets/img/portfolio/island.jpg';
import beautypreneur from '@/assets/img/portfolio/beautypreneur.jpg';

const projects = [
  {
    id: 1,
    title: "Dermarepair Skincare",
    type: "Ecommerce Website",
    image: dermarepair,
    link: "/portfolio/dermarepair-skincare",
  },
  {
    id: 2,
    title: "BOOK BEKEE",
    type: "Booking Website",
    image: bookbekee,
    link: "/portfolio/book-bekee",
  },
  {
    id: 3,
    title: "Maple Education Canada Inc.",
    type: "Corporate Website",
    image: maple,
    link: "/portfolio/maple-education",
  },
  {
    id: 4,
    title: "Avilla Mag",
    type: "News & Magazine Website",
    image: avilla,
    link: "/portfolio/avilla-mag",
  },
  {
    id: 5,
    title: "Island Supermarket",
    type: "Ecommerce Website",
    image: island,
    link: "/portfolio/island-supermarket",
  },
  {
    id: 6,
    title: "Beautypreneur Hub",
    type: "Business & Directory",
    image: beautypreneur,
    link: "/portfolio/beautypreneur-hub",
  },
];

const PortfolioAreaHomeOne = () => {
  return (
    <section className="portfolio-section pt-120 pb-100">
      <div className="container">
        <div className="text-center mb-60">
          <h2>Featured Projects</h2>
          <p>
            A selection of websites and digital experiences I’ve designed and developed.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <Link href={project.link}>
                <div className="portfolio-image">
                  <Image src={project.image} alt={project.title} />
                </div>
                <div className="portfolio-info">
                  <h3>{project.title}</h3>
                  <p>{project.type}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-60">
          <Link href="/portfolio" className="explore-btn">
            Explore More Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioAreaHomeOne;
