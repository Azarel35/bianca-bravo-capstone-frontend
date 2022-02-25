import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';

import RedDress from '../../../static/assets/images/red-dress.jpg';
import GreenDress from '../../../static/assets/images/greendress.jpg';
import BlackDress from '../../../static/assets/images/dressblack.jpg';
import BlouseBlue from '../../../static/assets/images/blouseblue.jpg';
import BlouseWhite from '../../../static/assets/images/whiteBlouse.jpg';
import FucsiaBlouse from '../../../static/assets/images/blusarosa.jpg';
import jeans from '../../../static/assets/images/jeans.jpg';
import PantsStripes from '../../../static/assets/images/pantsrayas.jpg';
import BeigePants from '../../../static/assets/images/beigepants.jpg';

export default function ImagesSlider() {
	var settings = {
		dots: true,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		arrows: true,
		slidesToScroll: 1,
		className: 'slides',
	};
	return (
		<div className="wrapper-slides" style={{ padding: 24 }}>
			<Slider {...settings}>
				<div>
					<img
						src={BlackDress}
						width="100%"
						height="100%"
						style={{ objectFit: 'cover', objectPosition: 'center' }}
					/>
				</div>
				<div>
					<img
						src={RedDress}
						width="100%"
						height="100%"
						style={{ objectFit: 'cover', objectPosition: 'center' }}
					></img>
				</div>
				<div>
					<img
						src={GreenDress}
						width="100%"
						height="100%"
						style={{ objectFit: 'cover', objectPosition: 'center' }}
					></img>
				</div>

				<div>
					<img
						src={BlouseBlue}
						width="100%"
						height="100%"
						style={{ objectFit: 'cover', objectPosition: 'center' }}
					/>
				</div>
				<div>
					<img
						src={BlouseWhite}
						width="100%"
						height="100%"
						style={{ objectFit: 'cover', objectPosition: 'center' }}
					/>
				</div>
				<div>
					<img
						src={FucsiaBlouse}
						width="100%"
						height="100%"
						style={{ objectFit: 'cover', objectPosition: 'center' }}
					/>
				</div>
				<div>
					<img
						src={jeans}
						width="100%"
						height="100%"
						style={{ objectFit: 'cover', objectPosition: 'center' }}
					/>
				</div>
				<div>
					<img
						src={PantsStripes}
						width="100%"
						height="100%"
						style={{ objectFit: 'cover', objectPosition: 'center' }}
					/>
				</div>
				<div>
					<img
						src={BeigePants}
						width="100%"
						height="100%"
						style={{ objectFit: 'cover', objectPosition: 'center' }}
					/>
				</div>
			</Slider>
		</div>
	);
}
