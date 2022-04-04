import { useEffect, useState } from "react"

const getReviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('packages.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    return [reviews, setReviews];
}

export default getReviews;