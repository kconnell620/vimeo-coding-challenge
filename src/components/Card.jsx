import React from 'react';
import './Card.css';
import playbutton from '../assets/playbutton.png'

const Card = (props) => {
    return (
        // makes background image transparent for visibility
        <div  style={{background: "linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(" + props.image + ") no-repeat", backgroundSize: "cover"}}className="card">
            {/* // dynamically will choose image based on props */}
            <img className="slide-image" src={`${props.image}`}/>
            <div className="right-content">
                <h3>{props.title}</h3>
                <p className="body-text">{props.text}</p>
                <div className="button-area">
                    {/* div acting as button */}
                    <div className="buy-button" role="button">
                        <img src={playbutton} />
                        <p>Buy Now</p>
                    </div>
                    <button className="watch-button">Watch Trailer</button>
                </div>
            </div>
                
        </div>
       
    )
}

export default Card