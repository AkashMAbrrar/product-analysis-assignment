import React from 'react';
import './Item.css';

const Item = (props) => {
    const { name, img, rattings } = props.review;
    return (
        <div className='item-cart'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>“Hi thank you for choosing our [product or service]. It’s our priority to continue providing top-notch service to customers like you. Please leave us a review on our Facebook page It will only take a minute, but it will make a huge difference to our company. Thank you!” </p>
            <p>{rattings}</p>
        </div>
    );
};

export default Item;