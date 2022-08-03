import React from "react";
import Banner from "../../components/Banner/Banner";
import Section from "../../components/Section/Section";
import AllPageData from "../../page-data.json";
const Single = (props) => {
  const pageData = AllPageData[props.slug];
  return (
    <>
      <Banner
        title={pageData.banner.title}
        intro={pageData.banner.intro}
        type={pageData.banner.type}
      />
      {pageData?.sections.length &&
        pageData.sections.map((item, index) => (
          <Section data={item} key={index} />
        ))}
    </>
  );
};

export default Single;
