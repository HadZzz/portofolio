const Services = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-mt-40 trm-title-with-divider">
          Layanan Jasa Pembuatan Website Sukoharjo <span data-number={3} />
        </h5>
      </div>
      <div className="col-lg-6">
        {/* service */}
        <div
          className="trm-service-icon-box trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          <div className="trm-service-content">
            <div className="trm-icon">
              <img
                src="/img/icons/icon-1.svg"
                alt="Jasa Pembuatan Website WordPress Sukoharjo"
                className="trm-black-icon"
              />
              <img
                src="/img/icons/icon-1w.svg"
                alt="Jasa Website WordPress Sukoharjo"
                className="trm-white-icon"
              />
            </div>
            <h6 className="trm-mb-20">Jasa Website WordPress Premium</h6>
            <div className="trm-mb-20">
              Layanan pembuatan website WordPress profesional di Sukoharjo dengan template premium.
              Cocok untuk berbagai kebutuhan bisnis seperti company profile, toko online, 
              blog, portofolio, dan website UMKM. Dilengkapi fitur SEO dan optimasi performa.
            </div>
            <a
              data-fancybox=""
              href="#trm-order"
              className="trm-label trm-label-color"
            >
              Pesan Sekarang <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
        {/* service end */}
      </div>
      <div className="col-lg-6">
        {/* service */}
        <div
          className="trm-service-icon-box trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          <div className="trm-service-content">
            <div className="trm-icon">
              <img
                src="/img/icons/icon-2.svg"
                alt="Jasa Pembuatan Landing Page Sukoharjo" 
                className="trm-black-icon"
              />
              <img
                src="/img/icons/icon-2w.svg"
                alt="Jasa Landing Page Sukoharjo"
                className="trm-white-icon"
              />
            </div>
            <h6 className="trm-mb-20">Jasa Landing Page Profesional</h6>
            <div className="trm-mb-20">
              Spesialis pembuatan landing page di Sukoharjo dengan desain modern dan konversi tinggi.
              Dioptimasi untuk SEO dan kecepatan loading, cocok untuk promosi produk/jasa, 
              campaign marketing, dan halaman penjualan yang efektif.
            </div>
            <a
              data-fancybox=""
              href="#trm-order"
              className="trm-label trm-label-color"
            >
              Pesan Sekarang <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
        {/* service end */}
      </div>
      <div className="col-lg-6">
        {/* service */}
        <div
          className="trm-service-icon-box trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          <div className="trm-service-content">
            <div className="trm-icon">
              <img
                src="/img/icons/icon-3.svg"
                alt="Jasa Pembuatan Website Custom Sukoharjo"
                className="trm-black-icon"
              />
              <img
                src="/img/icons/icon-3w.svg"
                alt="Web Development Sukoharjo"
                className="trm-white-icon"
              />
            </div>
            <h6 className="trm-mb-20">Jasa Website Custom</h6>
            <div className="trm-mb-20">
              Layanan pembuatan website custom di Sukoharjo dengan teknologi terkini.
              Dikembangkan sesuai kebutuhan spesifik bisnis Anda, dengan fitur-fitur
              khusus, sistem manajemen konten, integrasi API, dan optimasi SEO lengkap.
            </div>
            <a
              data-fancybox=""
              href="#trm-order"
              className="trm-label trm-label-color"
            >
              Pesan Sekarang <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
        {/* service end */}
      </div>
    </div>
  );
};
export default Services;
