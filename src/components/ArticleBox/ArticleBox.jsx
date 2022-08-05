import React from "react";
import { NavLink } from "react-router-dom";
import './ArticleBox.scss';
const ArticleBox = (props) => {
  return (
    <div className={["mos-article-box", props.data?.class].join(' ')}>
      {/* mos-icon-box-top mos-icon-box-start||mos-icon-box mos-icon-box-bottom mos-icon-box-center||mos-icon-box mos-icon-box-top mos-icon-box-end */}
      {/* mos-icon-box mos-icon-box-left mos-icon-box-center||mos-icon-box mos-icon-box-right mos-icon-box-center */}
      {/* mos-icon-box-move-up, mos-icon-box-icon-scale, mos-icon-box-box-scale,  */}
      {/*icon-valign: top, middle, bottom || icon-align: left,right,none || content-align:left,right,center || cls*/}
      <div className="media-wrapper">
        <div className="image-wrapper">
          <img className="img-fluid img-article" src="https://dummyimage.com/1920x1280/999999/000000" alt="" />
        </div>
      </div>
      <div className="desc-wrapper">
        <div class="info"><div class="meta">05/JAN/2020 - BY SMITH</div></div>
        <h4 className="title">{props.data.title}</h4>
        <div
          className="intro"
          dangerouslySetInnerHTML={{ __html: props.data.intro }}
        />
        {props.data?.link?.to && (
          <div className="btn-wrapper">
            <NavLink
              to={props.data.link.to}
              className={props.data?.link?.show? "btn btn-bg" : "position-absolute top-0 start-0 bottom-0 end-0 opacity-0"}
            >
              <span className="text-btn">{props.data?.link?.text}</span>
              <span className="arrow-btn" />
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleBox;
