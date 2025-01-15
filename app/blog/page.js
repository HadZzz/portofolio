"use client";
import { context } from "@/context/context";
import TrueManLayout from "@/layout/TrueManLayout";
import { useContext, useEffect } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js and PWA",
    description:
      "Learn how to create a Progressive Web App using Next.js and modern web technologies",
    date: "March 2024",
    category: "Web Development",
    image: "/img/blog/nextjs-pwa.jpg",
    slug: "getting-started-nextjs-pwa",
  },
  {
    id: 2,
    title: "Building E-commerce Platform for Local Business",
    description:
      "Case study: How I built an e-commerce platform for local businesses in Solo",
    date: "February 2024",
    category: "Case Study",
    image: "/img/blog/ecommerce-case.jpg",
    slug: "ecommerce-platform-case-study",
  },
  {
    id: 3,
    title: "React Native vs Flutter: Which One to Choose?",
    description:
      "A comprehensive comparison between React Native and Flutter for mobile development",
    date: "January 2024",
    category: "Mobile Development",
    image: "/img/blog/react-flutter.jpg",
    slug: "react-native-vs-flutter",
  },
];

const Index = () => {
  const { banner_image_function, page_info_function } = useContext(context);

  useEffect(() => {
    banner_image_function("/img/banner2.jpg");
    page_info_function("My Blog", "blog", "Tech Insights & Tutorials");
  }, []);

  return (
    <TrueManLayout>
      <div className='row'>
        {blogPosts.map((post) => (
          <div className='col-lg-4 col-md-6' key={post.id}>
            <a
              href={`/blog/${post.slug}`}
              className='trm-blog-card trm-scroll-animation'
            >
              <div className='trm-cover-frame'>
                <img className='trm-cover' src={post.image} alt={post.title} />
              </div>
              <div className='trm-blog-content'>
                <div className='trm-meta'>
                  <span className='trm-category'>{post.category}</span>
                  <span className='trm-date'>{post.date}</span>
                </div>
                <h6 className='trm-blog-title'>{post.title}</h6>
                <p className='trm-blog-description'>{post.description}</p>
                <span className='trm-read-more'>
                  Read More <i className='fas fa-arrow-right'></i>
                </span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </TrueManLayout>
  );
};

export default Index;
