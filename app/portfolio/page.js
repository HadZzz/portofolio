"use client";
import { context } from "@/context/context";
import TrueManLayout from "@/layout/TrueManLayout";
import { useContext, useEffect, useState } from "react";

const portfolioItems = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9",
    title: "Japanese Learning App",
    description:
      "Aplikasi pembelajaran bahasa Jepang dengan fitur kosakata, kanji, dan quiz interaktif",
    technologies: ["React Native", "Firebase", "Redux", "API"],
    category: "Mobile Development",
    github: "https://github.com/HadZzz/japanese-app",
    demo: "#",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc",
    title: "Aplikasi Pesanan",
    description:
      "Aplikasi manajemen pesanan dan inventaris untuk restoran dan cafe",
    technologies: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    category: "Full Stack",
    github: "https://github.com/HadZzz/aplikasi-pesanan",
    demo: "#",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a",
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with Next.js and modern web technologies",
    technologies: ["Next.js", "React", "PWA", "Locomotive"],
    category: "Web Development",
    github: "https://github.com/HadZzz/portofolio-main",
    demo: "/",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65",
    title: "Inventory System",
    description: "Sistem manajemen inventaris untuk tracking stok dan gudang",
    technologies: ["Laravel", "MySQL", "Bootstrap"],
    category: "Full Stack",
    github: "https://github.com/HadZzz/inventory-system",
    demo: "#",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
    title: "Absensi Mobile",
    description:
      "Aplikasi absensi mobile dengan fitur GPS dan face recognition",
    technologies: ["React Native", "Firebase", "Node.js"],
    category: "Mobile Development",
    github: "https://github.com/HadZzz/absensi-mobile",
    demo: "#",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1528164344705-47542687000d",
    title: "Sistem Sekolah",
    description: "Sistem informasi akademik untuk manajemen data sekolah",
    technologies: ["PHP", "MySQL", "CodeIgniter"],
    category: "Full Stack",
    github: "https://github.com/HadZzz/sistem-sekolah",
    demo: "#",
  },
];

const categories = [
  "All",
  "Web Development",
  "Full Stack",
  "Mobile Development",
];

const Index = () => {
  const { banner_image_function, page_info_function } = useContext(context);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    banner_image_function("/img/banner2.jpg");
    page_info_function("Portfolio", "portfolio", "My Recent Projects");
  }, []);

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <TrueManLayout>
      <div className='trm-categories mb-4'>
        {categories.map((category) => (
          <button
            key={category}
            className={`trm-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className='row g-4'>
        {filteredItems.map((item) => (
          <div className='col-md-6' key={item.id}>
            <div className='trm-portfolio-item'>
              <div className='trm-cover-frame'>
                <img
                  className='trm-cover'
                  src={`${item.img}?auto=format&fit=crop&w=800&q=80`}
                  alt={item.title}
                  loading='lazy'
                />
              </div>
              <div className='trm-item-description'>
                <span className='trm-category-label'>{item.category}</span>
                <h6 className='text-truncate'>{item.title}</h6>
                <p className='trm-text-sm text-truncate-2'>
                  {item.description}
                </p>
                <div className='trm-technologies'>
                  {item.technologies.map((tech, index) => (
                    <span key={index} className='trm-label'>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='trm-links'>
                  <a
                    href={item.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='trm-btn'
                    title='View on GitHub'
                  >
                    <i className='fab fa-github'></i> Code
                  </a>
                  {item.demo !== "#" && (
                    <a
                      href={item.demo}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='trm-btn'
                    >
                      <i className='fas fa-external-link-alt'></i> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </TrueManLayout>
  );
};
export default Index;
