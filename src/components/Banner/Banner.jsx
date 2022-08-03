import React from 'react'
import './Banner.scss'
const Banner = (props) => {
    return (
        <section className={["banner", props.type?props.type:"template-1"].join(' ')}>
            <div className="banner-wrapper">
                <div className="container">
                    <h1 className="banner-title" dangerouslySetInnerHTML={{__html:props.title}}/>
                    <div className="banner-intro" dangerouslySetInnerHTML={{__html:props.intro}}/>
                </div>
            </div>
        </section>
    )
}

export default Banner