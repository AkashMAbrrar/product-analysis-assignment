import React from 'react';
import useReviews from '../../hooks/useReviews';
import Item from '../Item/Item';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='rev-container'>
            {
                reviews.map(review => <Item
                    key={review.id}
                    review={review}
                ></Item>)
            }
        </div>
    );
};

export default Reviews;