import Link from "next/link";
import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import InfoSection from "../common/InfoSection";
import Layout from "../components/layout/Layout";
import PracticeTestimonial from "../components/testimonial/PracticeTestimonial";

function PracticeArea() {
  return (
    <>
      <Layout>
        <Breadcrumb title="Practice Area" pageName="Practice Area" />
        <div className="practice-area-section pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7">
                <div className="section-title1 text-center">
                  <h2>Practice Services</h2>
                  <p>Explore our extensive legal services tailored to meet your specific needs.</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center g-4">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="practice-single wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.2s">
                  <div className="header">
                    <div className="icon-area"></div>
                    <h4>
                      <Link href="/practice/clpm">Civil Litigation & Property Matters</Link>
                    </h4>
                  </div>
                  <div className="body">
                    <p>
                      Assisting clients in civil lawsuits, property disputes, and legal procedures to ensure fair resolution.
                    </p>
                    <Link href="/practice/clpm" className="details-btn">Learn More</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="practice-single sibling1 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.4s">
                  <div className="header">
                    <div className="icon-area"></div>
                    <h4>
                      <Link href="/practice/slal">Service Law & Administrative Law</Link>
                    </h4>
                  </div>
                  <div className="body">
                    <p>
                      Expertise in handling disputes related to service laws and administrative procedures affecting individuals and entities.
                    </p>
                    <Link href="/practice/slal" className="details-btn">Learn More</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="practice-single wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.6s">
                  <div className="header">
                    <div className="icon-area"></div>
                    <h4>
                      <Link href="/practice/fml">Family & Matrimonial Law</Link>
                    </h4>
                  </div>
                  <div className="body">
                    <p>
                      Providing compassionate support and guidance for family disputes, divorce, child custody, and matrimonial issues.
                    </p>
                    <Link href="/practice/fml" className="details-btn">Learn More</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="practice-single sibling1 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.8s">
                  <div className="header">
                    <div className="icon-area"></div>
                    <h4>
                      <Link href="/practice/adr">Alternate Disputes Resolution</Link>
                    </h4>
                  </div>
                  <div className="body">
                    <p>
                      Specializing in arbitration, mediation, and negotiation to resolve conflicts outside of court.
                    </p>
                    <Link href="/practice/adr" className="details-btn">Learn More</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="practice-single wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="1s">
                  <div className="header">
                    <div className="icon-area"></div>
                    <h4>
                      <Link href="/practice/lel">Labour & Employment Laws</Link>
                    </h4>
                  </div>
                  <div className="body">
                    <p>
                      Guiding employers and employees through the complexities of labor and employment regulations.
                    </p>
                    <Link href="/practice/lel" className="details-btn">Learn More</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="practice-single sibling1 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="1.2s">
                  <div className="header">
                    <div className="icon-area"></div>
                    <h4>
                      <Link href="/practice/clta">Criminal Litigation & Trial Advocacy</Link>
                    </h4>
                  </div>
                  <div className="body">
                    <p>
                      Experienced in defending and prosecuting criminal cases, providing strong representation in court.
                    </p>
                    <Link href="/practice/clta" className="details-btn">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <InfoSection />
        <PracticeTestimonial />
      </Layout>
    </>
  );
}

export default PracticeArea;
