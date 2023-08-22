"use client";

import Link from "next/link";
import { SampleDesignData } from "@/components/SampleDesignData";
import "@/styles/SampleDesign.css";
import PageWrapper from "./pageWrapper";
import { motion } from "framer-motion";
import HomeSlider from "./HomeSlider";

const variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, trasition: { stagerChildren: 0.3 } },
};

const images = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 1 } },
};

function HomePage() {
  return (
    <div className="flex flex-col">
      <HomeSlider />
      <PageWrapper>
        <section className="sample-container ">
          <div className="sample-title">
            <span className=" dark:bg-white opacity-100"></span>
            <h5>Sample convert figma Design</h5>
            <span className="dark:bg-white opacity-100"></span>
          </div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            className="samples"
          >
            {SampleDesignData.map((sample) => {
              return (
                <motion.div
                  variants={images}
                  key={sample.id}
                  className="sample-area dark:bg-gray-100 dark:shadow-lg"
                >
                  <div className="sample-img">
                    <Link href={sample.link}>
                      <img src={sample.img} alt="" />
                    </Link>
                  </div>
                  <div className="sample-text">
                    <Link href={sample.link}>
                      <p>{sample.title}</p>
                      {sample.description && (
                        <p className="sample-description">
                          {sample?.description}
                        </p>
                      )}
                    </Link>
                    <span>{sample.date}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      </PageWrapper>
    </div>
  );
}

export default HomePage;
