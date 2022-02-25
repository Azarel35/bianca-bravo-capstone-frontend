import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import ImagesSlider from '../slider/imagesSlider';
import desc from '../../../static/assets/images/desc.jpg';
import flowers from '../../../static/assets/images/flowers.jpg';

export default class PageContainer extends Component {
	constructor() {
		super();

		this.state = {
			isLoading: true,
		};
	}

	render() {
		const emailLog = sessionStorage.getItem('email');
		if (this.state.isLoading && emailLog !== 'bianca01@test.com') {
			return <div>You must log in and then click on BA&SH</div>;
		}

		return (
			<div>
				<div className="images-container">
					<img
						src={flowers}
						width="531px"
						height="200px"
						media="(max-width:	400px)"
					/>
					<img src={desc} />
					<img src={flowers} width="531px" height="200px" />
				</div>
				<div className="category-link-wrapper">
					<div className="category-link">
						<NavLink to="/dresses" activeClassName="nav-link-active">
							Dresses <FontAwesomeIcon icon={faArrowRight} />
						</NavLink>
					</div>
					<div className="category-link">
						<NavLink to="/blouses" activeClassName="nav-link-active">
							Blouses <FontAwesomeIcon icon={faArrowRight} />
						</NavLink>
					</div>
					<div className="category-link">
						<NavLink to="/pants" activeClassName="nav-link-active">
							Pants <FontAwesomeIcon icon={faArrowRight} />
						</NavLink>
					</div>
				</div>
				<ImagesSlider />
			</div>
		);
	}
}
