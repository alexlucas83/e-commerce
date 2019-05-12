import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import './MoviesDB.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const baseImageUrl = 'https://image.tmdb.org/t/p/w500'

export default class MoviesDB extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}

	render() {
		console.log(this.props)
		const { original_title, overview, poster_path, backdrop_path, release_date, vote_average } = this.props

		return (
			<Container className="MoviesDB">
				<Row>
					<Col xs={6}>
						{this.renderFilm({ original_title, poster_path })}
						{this.renderModal({ original_title, backdrop_path, overview, release_date, vote_average })}
					</Col>
				</Row>
			</Container>
		)

	}

	renderFilm = ({ original_title, poster_path }) => (
		<>
			<h3 className="title" width="400px">{original_title}</h3>
			<img className="poster" src={`${baseImageUrl}${poster_path}`} width="500px" alt="poster_path" />
		</>
	)


	renderModal = ({ original_title, backdrop_path, overview, release_date, vote_average }) => (
		<>
			<Button  classname="buttonOverview" color="danger" onClick={this.toggle}>Overview</Button>
			<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
				<ModalHeader toggle={this.toggle}><strong>{original_title}</strong></ModalHeader>
				<ModalBody>
					<img className="path" src={`${baseImageUrl}${backdrop_path}`} width="465px" alt="backdrop_path" />
					<p className="POverview" >{overview}</p>
					<p className="release" ><strong>Release Date:{release_date}</strong></p>
					<p><strong>Vote Average :{vote_average}</strong></p>
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
					<Button color="secondary" onClick={this.toggle}>Cancel</Button>
				</ModalFooter>
			</Modal>
		</>
	)
}