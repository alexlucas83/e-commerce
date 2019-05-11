import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import './MoviesDB.scss'
import Modals from '../Modals/Modals'


export default function MoviesDB({ original_title, poster_path, overview }) {

	return (

		<Container className="MoviesDB">
			<Row>
				<Col xs={6}>
			<h3 width="400px">{original_title}</h3>
			<img src={poster_path} width="500px" alt="poster_path"/>
			{/* <p>{overview}</p> */}
			<Modals overview={overview}/>
			</Col>
			</Row>
		</Container>
	)
}
