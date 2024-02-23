import React, { useState } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import './Detail.scss';

const Detail = () => {
    const[detail, setDetail] = useState([]);
    const { id } = useParams();
    axios.get(`http://localhost:5000/api/yelp/detail`,
    {
        params: {
            id: id
        }
    })
    .then((res) => {
        console.log(res.data);
        setDetail(res.data);
    })

    return(
        <div className="container">
            <div className="content">
                <img src={detail.image_url} alt={detail.name} />
                <div className="body">
                    <h3>{detail.name}</h3>
                    <div>Alias: {detail.alias}</div>
                    <div>Phone: {detail.display_phone}</div>
                    <div>Review Count: {detail.review_count}</div>
                    <div>Rating: {detail.rating}</div>
                    <div>Price: {detail.price}</div>
                </div>
            </div>
        </div>
    )
}

export default Detail;