"use client";
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import portfolio_img_1 from "@/assets/img/portfolio/2/AvillaMAG.jpg";
import portfolio_img_2 from "@/assets/img/portfolio/2/AvillaMAG.jpg";
import portfolio_img_3 from "@/assets/img/portfolio/2/AvillaMAG.jpg";

const portfolio_content = {
  subtitle: 'Project',
  title: 'Latest projects',
  portfolio_data: [
    {
      id: 1,
      img: portfolio_img_1,
      title: 'Dermarepair Skincare',
      category: 'Ecommerce Website',
      url: '/portfolio-details',
      link: 'www.dermarepairskincare.co.uk'
    },
    {
      id: 2,
      img: portfolio_img_2,
      title: 'BOOK BEKEE',
      category: 'Booking Website',
      url: '/portfolio-details',
      link: 'www.bookbekee.com'
    },
    {
      id: 3,
      img: portfolio_img_3,
      title: 'Maple Education Canada Inc.',
      category: 'Corporate Website',
      url: '/portfolio-details',
      link: 'www.mapleeducation.ca'
    },
    {
      id: 4,
      img: portfolio_img_1,
      title: 'Avilla Mag',
      category: 'News & Magazine Websites',
      url: '/portfolio-details',
      link: 'www.avillamag.com'
    },
    {
      id: 5,
      img: portfolio_img_2,
      title: 'Island Supermarket',
      category: 'Ecommerce Website',
      url: '/portfolio-details',
      link: 'www.islandsupermarket.ng'
    },
    {
      id: 6,
      img: portfolio_img_3,
      title: 'Beautypreneur Hub',
      category: 'Business & Directory',
      url: '/portfolio-details',
      link: 'www.beautypreneurhub.com'
    }
  ]
};
const { subtitle, title, portfolio_data } = portfolio_content;

const PortfolioAreaHomeOne = () => {
  return (
    <section className="tp-portfolio-area p-relative z-index-1 pt-140 pb-80">
      {/* Keep text section classnames intact */}
      <div className="container">
        <div className="tp-section-title-wrapper mb-60 text-center">
          <div className="tp-section-title-inner tp_title_anim p-relative">
            <span className="tp-section-subtitle tp-portfolio-subtitle">{subtitle}</span>
            <h3 className="tp-section-title tp_title_anim">{title}</h3>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {portfolio_data.map((item) => (
            <div key={item.id} className="portfolio-card">
              <Link href={item.url}>
                <div className="portfolio-card-thumb">
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="portfolio-card-img"
                    style={{ objectFit: 'cover', width: '100%', height: 'auto', borderRadius: '12px' }}
                  />
                  {/* Hover Effect */}
                  <div className="portfolio-card-overlay"></div>
                </div>
                <div className="portfolio-card-body">
                  <h4 className="portfolio-card-title">{item.title}</h4>
                  <p className="portfolio-card-category">{item.category}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioAreaHomeOne;
