import React from "react";

function Footer() {
	return (
		<div className="footer-card-wrapper">
			<div className="footer-card">
				<h4>Contact Us</h4>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				<hr className="hr" />
				<h4>About us</h4>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<div className="footer-card-2">
				<div class="input-group mb-3">
					<input
						type="text"
						class="form-control"
						placeholder="Subscribe to our newsletter"
						aria-label="Subscribe to our newsletter"
						aria-describedby="button-addon2"
					/>
					<div class="input-group-append">
						<button
							class="btn btn-outline-secondary footer-btn"
							type="button"
							id="button-addon2"
						>
							Button
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Footer;
