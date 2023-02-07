import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from '../data.json';

const ItemDetailContainer = props => {
    const delayTimeFetchData = 500;
    const { id } = useParams();
    const [obj, setObj] = useState({});
    
    useEffect(() => {
		// Bringing data. this could be a call to an api
		const fetchData = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(data);
			}, delayTimeFetchData);
		});
		fetchData.then(res => {
            const objFound = res.find(obj => obj.id === +id);
            setObj(objFound);
        });
	}, []);

    return (
        <>
            <h1>{obj.title}</h1>
            <h2>{obj.price}</h2>
            <img src={obj.pictureUrl} alt="" />
        </>
    )
};

export default ItemDetailContainer;