import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import data from '../data.json';

const ItemListContainer = props => {
	const delayTimeFetchData = 500;
	const { id } = useParams();
	const [items, setItems] = useState([]);
	
	useEffect(() => {
		const fetchData = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(data);
			}, delayTimeFetchData);
		});
		fetchData.then(res => {
			if (id) {
				const bebidasByCategory = res.filter(bebidas => bebidas.tipo.toLowerCase() === id);
				setItems(bebidasByCategory);
				return;
			}
			setItems(res)
		});
	}, [id]);

	return (
		<>
			{
				id &&
				<h1>{id.toUpperCase()}</h1>
			}
			<div style={{display: 'flex', flexWrap: 'wrap'}}>
				{
					items && items.map(item => (
						<Item {...item} />
					))
				}	
			</div>
		</>
	);
}

export default ItemListContainer;
