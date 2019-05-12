import React, { Component } from 'react';
import Axios from 'axios';
import MoviesBD from '../MoviesDB/MoviesDB';
import { Container, Row, Col } from 'reactstrap';
import './MoviesApi.scss';

export default class MoviesApi extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
		}
	}

	componentDidMount() {
		Axios.get(`https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=d4c0074da85e38a882a3e60c46830006`)
			.then(response => {
				this.setState({ movies: response.data.results })
			})
			.catch(error => console.log(error))
	}

	render() {
		return (
			<Container>
							<h1 className="titleP" >Book your movie tickets fast</h1>

				<Row>
					{this.renderMapMovies()}
				</Row>
			</Container>
		)
	}

	renderMapMovies = () => (
		this.state.movies.map((movie) => {
			return (
				<Col key={movie.original_title} xs={6}>
					<MoviesBD {...movie} />
				</Col>
			)
		})
	)
}

