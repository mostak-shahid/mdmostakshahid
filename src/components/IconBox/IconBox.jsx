import React from "react";
import { FaHeart } from "react-icons/fa";
const IconBox = (props) => {
  return (
    <div className="mos-icon-box position-relative">
        {/* mfn-icon-box-top mfn-icon-box-start||mfn-icon-box mfn-icon-box-bottom mfn-icon-box-center||mfn-icon-box mfn-icon-box-top mfn-icon-box-end */}
        {/* mfn-icon-box mfn-icon-box-left mfn-icon-box-center||mfn-icon-box mfn-icon-box-right mfn-icon-box-center */}
        {/* mfn-icon-box-move-up, mfn-icon-box-icon-scale, mfn-icon-box-box-scale,  */}
      <div className="icon-wrapper">
      <FaHeart />
      </div>
      <div className="desc-wrapper">
        <h4 className="title">{props.data.title}</h4>
        <div className="intro" dangerouslySetInnerHTML={{__html:props.data.intro}} />
      </div>
    </div>
  );
};

export default IconBox;
