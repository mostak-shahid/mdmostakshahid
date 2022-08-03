import React from "react";

const IconBox = (props) => {
  return (
    <div class="mos-icon-box position-relative">
        {/* mfn-icon-box-top mfn-icon-box-start||mfn-icon-box mfn-icon-box-bottom mfn-icon-box-center||mfn-icon-box mfn-icon-box-top mfn-icon-box-end */}
        {/* mfn-icon-box mfn-icon-box-left mfn-icon-box-center||mfn-icon-box mfn-icon-box-right mfn-icon-box-center */}
        {/* mfn-icon-box-move-up, mfn-icon-box-icon-scale, mfn-icon-box-box-scale,  */}
      <div class="icon-wrapper">
        <i class="far fa-file-code" aria-hidden="true"></i>
      </div>
      <div class="desc-wrapper">
        <h4 class="title">Coding &amp; testing</h4>
        <div class="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus.
        </div>
      </div>
    </div>
  );
};

export default IconBox;
