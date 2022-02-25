import emailjs from 'emailjs-com';
import React from 'react';

export default function CompleteOrder() {
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
			<div className="container-order">
				<form onSubmit={sendEmail}>
					<div className="row pt-5 mx-auto">
						<div className="complete-order">
							<input
								type="submit"
								className="btn btn-info"
								value="Complete order"
								onClick={() => alert('successful purchase')}
							></input>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
