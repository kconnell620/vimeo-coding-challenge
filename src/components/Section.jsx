import React from 'react';
import './Section.css';

const Section = (props) => {

    // will choose background color and image orientation based on props
    const orderClass = props.imageOrientation === "Left" ? 'image-left' : ''
    const colorClass = props.backgroundColor === "Black" ? 'black-background' : 'white-background'
    

    return (
        <div style={{backgroundColor: props.backgroundColor,color: props.textColor, boxShadow: "0 0 20px 20px " + `${props.backgroundColor}`}}className={colorClass}>
            <div className={`${orderClass} section`}>
                <div className="text section-part">
                    <h2>
                    {props.title}
                    </h2>
                    <p>
                        {props.text}
                    </p>
                </div>
                <img className="image section-part" src={props.image}/>
            </div>
           
        </div>
    )
}

export default Section