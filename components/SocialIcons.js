'use client';
import OptimizedImage from './OptimizedImage';

const SocialIcons = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '/img/icons/linkedin.svg',
      url: 'https://linkedin.com/in/your-profile',
      alt: 'LinkedIn Profile'
    },
    {
      name: 'GitHub',
      icon: '/img/icons/github.svg',
      url: 'https://github.com/HadZzz',
      alt: 'GitHub Profile'
    },
    {
      name: 'Instagram',
      icon: '/img/icons/instagram.svg',
      url: 'https://instagram.com/your-profile',
      alt: 'Instagram Profile'
    },
    {
      name: 'Twitter',
      icon: '/img/icons/twitter.svg',
      url: 'https://twitter.com/your-profile',
      alt: 'Twitter Profile'
    },
    {
      name: 'WhatsApp',
      icon: '/img/icons/whatsapp.svg',
      url: 'https://wa.me/6285876120167', // Ganti dengan nomor WhatsApp Anda
      alt: 'WhatsApp Contact'
    }
  ];

  return (
    <div className="trm-social">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="trm-social-item"
          title={social.name}
        >
          <OptimizedImage
            src={social.icon}
            alt={social.alt}
            width={24}
            height={24}
            priority={true}
            className="trm-icon"
          />
        </a>
      ))}
      <style jsx>{`
        .trm-social {
          display: flex;
          gap: 15px;
          align-items: center;
        }
        .trm-social-item {
          transition: transform 0.3s ease;
        }
        .trm-social-item:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default SocialIcons; 