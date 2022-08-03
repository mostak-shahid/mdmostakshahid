import React from "react";
import Banner from "../../components/Banner/Banner";
import AllPageData from "../../page-data.json";
const Single = (props) => {
  const pageData = AllPageData[props.slug];
  return (
    <>
      <Banner title={pageData.banner.title} intro={pageData.banner.intro} type={pageData.banner.type}/>    
    </>
  );
};

export default Single;
