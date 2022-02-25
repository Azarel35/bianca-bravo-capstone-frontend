import emailjs from 'emailjs-com';
import React from 'react';

export default function FormUser() {
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_q4nbvvr',
				'template_fsue23m',
				e.target,
				'user_EmJOAO1oBQI1352apqzkX'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	}

	return (
		<div>
			<div className="form-container">
				<form onSubmit={sendEmail}>
					<div className="wrapper-form">
						<h2>New customer registration</h2>
						<div className="form-name">
							<input
								type="text"
								className="form-control"
								placeholder="Name"
								name="name"
							/>
						</div>
						<div className="form-email">
							<input
								type="email"
								className="form-control"
								placeholder="Email Address"
								name="email"
							/>
						</div>

						<div className="form-street">
							<input
								type="address"
								className="form-control"
								placeholder="Street Address"
								name="address"
							/>
						</div>

						<div className="form-number">
							<input
								type="address"
								className="form-control"
								placeholder="Number Address"
								name="address"
							/>
						</div>
						<div className="form-city">
							<input
								type="address"
								className="form-control"
								placeholder="City Address"
								name="address"
							/>
						</div>

						<div className="form-button">
							<input
								type="submit"
								className="btn-info"
								value="Registration successful"
							></input>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
