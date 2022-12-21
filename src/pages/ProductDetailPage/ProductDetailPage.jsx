import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as itemsAPI from '../../utilities/items-api';
import './ProductDetailPage.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CategoryList from "../../components/CategoryList/CategoryList";

export default function ProductDetailPage({ handleAddToOrder }) {
    const [itemDetails, setItemDetails] = useState({});
    const {itemId} = useParams();

    useEffect(() => {
        const getItem = async () => {
            const itemData = await itemsAPI.getById(itemId);
            setItemDetails(itemData);
        }
        getItem();
    }, [itemId]);


    return (
        <div className="ProductDetailPage">
            
            <h1>{itemDetails.name}</h1>
            <p>{itemDetails.description}</p>
            <Carousel  style={{thumbHeight: '20vmin'}} >
                {itemDetails.images?.map((url, idx) => (
                    <div className="image" key={idx}><img src={`${url}`} alt=""  /></div>
                ))}
            </Carousel>
            <span>${itemDetails.price}</span>
            <button className="btn-sm" onClick={() => handleAddToOrder(itemDetails._id)}>
            ADD TO CART</button>  
        </div>
      );
}