import React from 'react'

const CartWidget = ({ itemQ=0 }) => {

	const shoppingCartHandler = () => {
		alert(`Productos actuales en el carrito: ${itemQ}`);
	};

	return (
		<button className='flex bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={shoppingCartHandler}>
			<div>🛒</div>
			<span>{itemQ}</span>
		</button>
	);
}

export default CartWidget