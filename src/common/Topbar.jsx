import Link from "next/link";
import React from "react";

function Topbar() {
  return (
    <>
      <div className="topbar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-3">
              <div className="phone-call2 d-flex justify-content-start align-items-center flex-row gap-2">
                <div className="icon">
                  <img
                    src="/assets/images/icons/call-icon2.svg"
                    alt="image"
                    className="img-fluid mt-1"
                  />
                </div>
                <div className="number">
                  <span>Call Us Now</span>
                  <h5>
                    <a href="tel:+9176784 96387">+91 9582678877</a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="appontment">
                <h6>
                  We Are Work Hard Any Case{" "}
                  <Link href="/contact">
                    <a>Appoinment</a>
                  </Link>{" "}
                  Now
                </h6>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-end">
              <div className="phone-call2 d-flex justify-content-start align-items-center flex-row gap-2">
                <div className="icon">
                  <img
                    src="/assets/images/icons/envelope2.svg"
                    alt="image"
                    className="img-fluid mt-1"
                  />
                </div>
                <div className="number">
                  <span>Email Now</span>
                  <h5>
                    <a href="mailto:info@advsarthakmittal.com">
                    info@advsarthakmittal.com
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
