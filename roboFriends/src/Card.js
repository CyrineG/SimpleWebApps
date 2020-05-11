import React from 'react';

const Card = (props) => {
	const {name, email, id} = props;
	return (
		<div className='bg-light-green dib br3 pa3 space grow bw2 shadow-5'>
			<img alt='robot' src={'https://robohash.org/{id}'} height ='150px' width='150' />
			<div>
				<h2> {name} </h2>
				<p> {email} </p>
			</div>
		 </div>
		);
}

export default Card;