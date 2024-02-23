import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.scss';
import Search from '../../Assets/images/search.svg';
import Star from '../../Assets/images/star.png';

const Home = () => {
  const[listBusiness, setListBusiness] = useState([]);
  const getListBusiness = async() => {

    await axios.get(`http://localhost:5000/api/yelp`, 
      {
        params: {
        term: 'delis',
        latitude: 37.786882,
        longitude:-122.399972,
        limit: 20
      }
    })
    .then((res) => {
          console.log(res);
          setListBusiness(res.data.businesses);
    })
  }
  
  useEffect(() => {
    getListBusiness();
  }, []);

  return (
    <div>
      <div className="container">
      <div className="searchBox">
            <div className="text">
                <h4>Search Business By Term, Location, Latitude, Longitude </h4>  
            </div>
            <div className="innerBox">
              <div className="inputPage">
                <div>Term</div>
                <input placeholder="Term"/>
                <div>Location</div>
                <input placeholder="Location"/>
                <div>Latitude</div>
                <input placeholder="Latitude"/>
                <div>Longitude</div>
                <input placeholder="Longitude"/>
              </div>
              <div className="buttonSearch">
                  <button >Cari</button>
                  <img src={Search} />
              </div>
            </div>
        </div>
        <div className="cardSection">
        {
          listBusiness.length > 0 ?
          listBusiness.map((item, index) => {
            return (
              <Link to={"/detail/"+item.id} style={{ color: '#000000', textDecoration: 'none' }}>
                <div className="cardbox">
                  <img src={item.image_url} alt={item.name} />
                  <div className="title">{item.name}</div>
                  <div>Price: {item.price}</div>
                  <div>Phone: {item.phone}</div>
                  <div className="rating">
                    <img src={Star} alt="Rating"/>
                    {item.rating}
                  </div>
                </div>
              </Link>
            );
          })
          :
          null
        }
        </div>
      </div>
    </div>
  );
}


export default Home;