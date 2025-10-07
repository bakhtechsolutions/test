'use client';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import project1 from "@/assets/img/portfolio/dermarepair.jpg";
import project2 from "@/assets/img/portfolio/bookbekee.jpg";
import project3 from "@/assets/img/portfolio/maple.jpg";
import project4 from "@/assets/img/portfolio/avilla.jpg";
import project5 from "@/assets/img/portfolio/island.jpg";
import project6 from "@/assets/img/portfolio/beautypreneur.jpg";

const portfolio_content = {
  subtitle: 'Projects',
  title: 'Featured Works',
  portfolio_data: [
    { id: 1, img: project1, title: 'Dermarepair Skincare', category: 'Ecommerce Website', link: '/portfolio/dermarepair-skincare' },
    { id: 2, img: project2, title: 'BOOK BEKEE', category: 'Booking Website', link: '/portfolio/book-bekee' },
    { id: 3, img: project3, title: 'Maple Education Canada Inc.', category: 'Corporate Website', link: '/portfolio/maple-education' },
    { id: 4, img: project4, title: 'Avilla Mag', category: 'News & Magazine Website', link: '/portfolio/avilla-mag' },
    { id: 5, img: project5, title: 'Island Supermarket', category: 'Ecommerce Website', link: '/portfolio/island-supermarket' },
    { id: 6, img: project6, title: 'Beautypreneur Hub', category: 'Business & Directory', link: '/portfolio/beautypreneur-hub' },
  ]
};
const { subtitle, title, portfolio_data } = portfolio_content;

const PortfolioAreaHomeOne = () => {
  return (
    <section className="tp-portfolio-area p-relative z-index-1 pt-120 pb-100 fix">
      <div className="container">
        <div className="row text-center mb-60">
          <div className="col-xl-12">
            <span className="tp-section-subtitle tp-portfolio-subtitle">{subtitle}</span>
            <h3 className="tp-section-title tp_title_anim">{title}</h3>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="tp-portfolio-item-wrapper grid-view">
          <div className="row g-4">
            {portfolio_data.map((item) => (
              <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                <div className="tp-portfolio-item tp-portfolio-card">
                  <Link href={item.link}>
                    <div className="tp-portfolio-thumb w-img fix">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={600}
                        height={400}
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                      />
                    </div>
                    <div className="tp-portfolio-content">
                      <h3 className="tp-portfolio-title">{item.title}</h3>
                      <p className="tp-portfolio-category">{item.category}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Button */}
        <div className="text-center mt-60">
          <Link href="/portfolio" className="tp-btn tp-hover-btn tp-hover-btn-item">
            Explore More Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioAreaHomeOne;
