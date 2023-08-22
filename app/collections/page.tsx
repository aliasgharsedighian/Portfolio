import React from "react";
import { CollectionsData } from "@/components/collectionData";
import { Collections } from "../../typing";
import PageWrapper from "../pageWrapper";
import MyModal from "./test";
import TabExample from "./TabExample";

function CollectionPage() {
  return (
    <PageWrapper>
      <section className="collections-container">
        <span className="circle-top"></span>
        <div className="collections shadow-2xl">
          <div className="collection-title">
            <div className="title">
              <h3>Popular Collections</h3>
            </div>
            <div className="collection-tag">
              <a href="#">Profile</a>
              <a href="#">New York</a>
              <a href="#">Relaxing</a>
              <a href="#">Person</a>
              <a href="#">Fashion</a>
            </div>
          </div>
          <div className="popular-image-container">
            {CollectionsData?.map((collect: Collections) => {
              return (
                <div key={collect.id} className="popular-images">
                  <div className="img-area">
                    <div className="large-img shadow-xs">
                      <img src={collect.image1} alt="" />
                    </div>
                    <div className="small-img">
                      <img src={collect.image2} alt="" />
                      <img src={collect.image3} alt="" />
                      <img src={collect.image4} alt="" />
                    </div>
                    <div className="tag">
                      <span>{collect.tag}</span>
                      <div className="view-count">
                        <img src="images/popular image/img.png" alt="" />
                        <p>{collect.view}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <MyModal />
            <TabExample />
          </div>
        </div>
        <span className="circle-bottom"></span>
      </section>
    </PageWrapper>
  );
}

export default CollectionPage;
