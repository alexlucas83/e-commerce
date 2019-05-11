import React, { Component } from 'react';
import Axios from 'axios';
import MoviesBD from '../MoviesDB/MoviesDB';
import { Container, Row, Col } from 'reactstrap';
import './MoviesApi.scss';
import Modals from '../Modals/Modals';

// import MoviesOverview from '../MoviesOverview/MoviesOverview';


const baseImageUrl = 'https://image.tmdb.org/t/p/w500'

export default class MoviesApi extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			original_title: "",
			overview: "",
			poster_path: ""
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
				<Row>
					{
						this.state.movies.map((movie) => {
							return (
								<Col key={movie.original_title} xs={6}>

									<MoviesBD
										original_title={movie.original_title}
										poster_path={`${baseImageUrl}${movie.poster_path}`}
										overview={movie.overview}
									/>
									{/* <Modals /> */}

									{/* <MoviesOverview
								overview={movie.overview}
								/> */}
								</Col>
							)
						})
					}
				</Row>
			</Container>
		)
	}
}

