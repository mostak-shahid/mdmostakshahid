import React from 'react'

const Section = (props) => {
    return (
        <section className={["section", props.type?props.type:"template-1"].join(' ')}>
            <div className="section-wrapper">
                <div className="container">
                    <div className="part-1 text-center">
                        <span className="sub-title">Subtitle</span>
                        <h2 className="title">Title</h2>
                        <div className="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, odio?</div>
                    </div>
                    <div className="part-2">
                        <div className="row">
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section