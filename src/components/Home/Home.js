import React from 'react';
import { Button } from 'react-bootstrap';
import useReviews from '../../hooks/useReviews';
import Item from '../Item/Item';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='home-container'>
            <div className='info-container'>
                <h2>Choose Your Happiness For Future!! </h2>
                <h2><span>And Select Your Uniqe Products</span></h2>
                <p>This Company Will Provide You Always Best Products Ever We Made.We Are Always Ready To Keep Your Necessary Products.This All Are Uniqe And Best Qualityful Products.Choose Your Own And Your Precious One.</p>
                <Button>Exolore</Button>
            </div>
            <div className='img-container'>
                <img src="https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.large.jpg" alt="" />
            </div>
            <br />
            <h2>Customers Reviews(4)</h2>
            <div className='review-container'>
                {
                    reviews.map(review => <Item
                        key={review.id}
                        review={review}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Home;