import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Practice2() {
  const dublerowSlide = {
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: 1000,
    spaceBetween: 30,
    margin: 30,
    rows: 2, // Removes the linear order. Would expect card 5 to be on next row, not stacked in groups.
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          spaceBetween: 2,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
          rows: 1, // This doesn't appear to work in responsive (Mac/Chrome)
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          rows: 1, // This doesn't appear to work in responsive (Mac/Chrome)
        },
      },
    ],
  };
  return (
    <>
      <div className="practice-area-section2 pb-120">
        <div className="container-fluid">
          <div className="row align-items-end">
            <div className="col-xl-6 overflow-hidden position-relative">
              <div className="section-title2 sibling3 text-xl-start text-center">
                <span>Practice Area</span>
                <h2>We are for you to give you the best solutions.</h2>
              </div>
              <Slider
                spaceBetween={20}
                {...dublerowSlide}
                className="slick-wrapper mt-40"
              >
                <div className="practice-single2">
                  <span className="sl-number">01</span>
                  <div className="image">
                    <img src="assets/images/bg/practice23.png" alt="image" />
                  </div>
                  <div className="content">
                    <div className="icon">
                      <img
                        src="assets/images/icons/practice-icon21.svg"
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <h5>
                        <Link href="/practice-details">
                          Civil Litigation & Property Matters
                        </Link>
                      </h5>
                      <p>
                        Our team of Advocates and consultants provide clients
                      </p>
                      <Link href="/practice-details">
                        <a className="details-btn">Learn More</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="practice-single2">
                  <span className="sl-number">02</span>
                  <div className="image">
                    <img src="assets/images/bg/practice24.png" alt="image" />
                  </div>
                  <div className="content">
                    <div className="icon">
                      <img
                        src="assets/images/icons/practice-icon21.svg"
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <h5>
                        <Link href="/practice-details">
                          Service Law & Administrative Law
                        </Link>
                      </h5>
                      <p>Service Law & Administrative Law</p>
                      <Link href="/practice-details">
                        <a className="details-btn">Learn More</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="practice-single2">
                  <span className="sl-number">03</span>
                  <div className="image">
                    <img src="assets/images/bg/practice21.png" alt="image" />
                  </div>
                  <div className="content">
                    <div className="icon">
                      <img
                        src="assets/images/icons/practice-icon21.svg"
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <h5>
                        <Link href="/practice-details">
                          Criminal Litigation & Trial Advocacy
                        </Link>
                      </h5>
                      <p>We have experience in representing individuals</p>
                      <Link href="/practice-details">
                        <a className="details-btn">Learn More</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="practice-single2">
                  <span className="sl-number">04</span>
                  <div className="image">
                    <img src="assets/images/bg/practice22.png" alt="image" />
                  </div>
                  <div className="content">
                    <div className="icon">
                      <img
                        src="assets/images/icons/practice-icon21.svg"
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <h5>
                        <Link href="/practice-details">
                          Family & Matrimonial Law
                        </Link>
                      </h5>
                      <p>A lot of lawsuits are brought on when a matrimonial</p>
                      <Link href="/practice-details">
                        <a className="details-btn">Learn More</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="practice-single2">
                  <span className="sl-number">05</span>
                  <div className="image">
                    <img src="assets/images/bg/practice23.png" alt="image" />
                  </div>
                  <div className="content">
                    <div className="icon">
                      <img
                        src="assets/images/icons/practice-icon21.svg"
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <h5>
                        <Link href="/practice-details">
                          Section 138 Negotiable Instruments Act Matters
                        </Link>
                      </h5>
                      <p>
                        If you have a Cheque issued by a debtor that has bounced
                      </p>
                      <Link href="/practice-details">
                        <a className="details-btn">Learn More</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="practice-single2">
                  <span className="sl-number">06</span>
                  <div className="image">
                    <img src="assets/images/bg/practice24.png" alt="image" />
                  </div>
                  <div className="content">
                    <div className="icon">
                      <img
                        src="assets/images/icons/practice-icon21.svg"
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <h5>
                        <Link href="/practice-details">
                          Labour & Employment Laws
                        </Link>
                      </h5>
                      <p>India`s job & labour market is constantly evolving</p>
                      <Link href="/practice-details">
                        <a className="details-btn">Learn More</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="practice-single2">
                  <span className="sl-number">07</span>
                  <div className="image">
                    <img src="assets/images/bg/practice21.png" alt="image" />
                  </div>
                  <div className="content">
                    <div className="icon">
                      <img
                        src="assets/images/icons/practice-icon21.svg"
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <h5>
                        <Link href="/practice-details">
                          Alternate Disputes Resolution
                        </Link>
                      </h5>
                      <p>
                        Our lawyers are well-trained in Alternate Dispute
                        Resolution
                      </p>
                      <Link href="/practice-details">
                        <a className="details-btn">Learn More</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="practice-single2">
                  <span className="sl-number">08</span>
                  <div className="image">
                    <img src="assets/images/bg/practice22.png" alt="image" />
                  </div>
                  <div className="content">
                    <div className="icon">
                      <img
                        src="assets/images/icons/practice-icon21.svg"
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <h5>
                        <Link href="/practice-details">Family Law</Link>
                      </h5>
                      <p>Lamet imperdiet Praesentulni nonat laoreet, iacui.</p>
                      <Link href="/practice-details">
                        <a className="details-btn">Learn More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="col-xl-6 d-xl-flex d-none">
              <img
                src="assets/images/bg/practice2-right.png"
                className="img-fluid"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Practice2;
