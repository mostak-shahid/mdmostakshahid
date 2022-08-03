import React from 'react'
import IconBox from '../IconBox/IconBox'

const Section = (props) => {
    return (
        <section className={["section", props.type?props.type:"template-1"].join(' ')}>
            <div className="section-wrapper">
                <div className="container">
                    <div className="part-1 text-center">
                        {
                        props?.data?.subTitle && 
                        <span className="sub-title" dangerouslySetInnerHTML={{__html:props.data.subTitle}}/>
                        }
                        {
                        props?.data?.title && 
                        <h2 className="title" dangerouslySetInnerHTML={{__html:props.data.title}}/>
                        }
                        {
                        props?.data?.intro && 
                        <div className="intro" dangerouslySetInnerHTML={{__html:props.data.intro}}/>
                        }
                    </div>
                    <div className="part-2">
                        <div className="row">
                            {
                            props?.data?.elements.length &&
                            
                                    props?.data?.elements.map((item, index)=>(
                                        <div className={[props?.data?.grid].join(' ')} key={index}>
                                        {item.element === "IconBox" && <IconBox data={item} />}
                                        </div>
                                    ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section