const Counter = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* counter */}
        <div
          className="trm-counter-up trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          <div className="trm-counter-number">
            <span className="trm-counter">03</span>
            <span className="trm-counter-symbol">+</span>
          </div>
          <div className="trm-divider trm-mb-20 trm-mt-20" />
          <div className="trm-label">Completed projects</div>
        </div>
        {/* counter end */}
      </div>
    </div>
  );
};
export default Counter;
