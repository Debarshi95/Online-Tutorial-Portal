import React, { Component } from "react";
import { Link } from "react-router-dom";

class Body extends Component {
	render() {
		return (
			// Main div wrapper starts
			<div className="homepage-body">
				{/* jumbotron cover starts */}
				<div class="jumbotron jumbotron-fluid jumbotron-height">
					<h1 class="display-4">Hello, world!</h1>
				</div>
				{/* jumbotron cover ends */}

				{/* Middle body starts */}
				<div className="middle-body">
					<h2>Body</h2>

					{/* =================================1st Card Wrapper Starts====================== */}
					<div class="card-deck card-wrapper">
						{/* ===========================Individual card starts=============== */}
						<Link to="/c" class="card homepage-body-card">
							<div class="card-body">
								<h5 class="card-title">C</h5>
								<p class="card-text">
									This is a wider card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</p>
							</div>
						</Link>
						{/* ==================Individual card ends=================== */}

						{/* ===================Individual card starts===================== */}
						<Link to="/javascript" class="card homepage-body-card">
							<div class="card-body">
								<h5 class="card-title">JavaScript</h5>
								<p class="card-text">
									This card has supporting text below as a natural lead-in to
									additional content.
								</p>
							</div>
						</Link>
						{/* ==================Individual card ends==================== */}

						{/* =========================Individual card starts==================== */}
						<Link to="/php" class="card homepage-body-card">
							<div class="card-body">
								<h5 class="card-title">PHP</h5>
								<p class="card-text">
									This is a wider card with supporting text below as a natural
									lead-in to additional content. This card has even longer
									content than the first to show that equal height action.
								</p>
							</div>
						</Link>
						{/* =====================Individual card ends================ */}
					</div>
					{/* =============================1st card-wrapper ends============================ */}

					{/* =============================2nd card-wrapper starts=========================== */}
					<div class="card-deck card-wrapper">
						{/* =======================Individual card starts============= */}
						<Link to="/cpp" class="card homepage-body-card">
							<div class="card-body">
								<h5 class="card-title">C++</h5>
								<p class="card-text">
									This is a wider card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</p>
							</div>
						</Link>
						{/* ========================Individual card end============== */}

						{/* ======================Individual card starts=========== */}
						<Link to="/java" class="card homepage-body-card">
							<div class="card-body">
								<h5 class="card-title">JAVA</h5>
								<p class="card-text">
									This card has supporting text below as a natural lead-in to
									additional content.
								</p>
							</div>
						</Link>
						{/* =======================Individual card ends=============== */}

						{/* =======================Individual card starts================== */}
						<Link to="/html" class="card homepage-body-card">
							<div class="card-body">
								<h5 class="card-title">HTML</h5>
								<p class="card-text">
									This is a wider card with supporting text below as a natural
									lead-in to additional content. This card has even longer
									content than the first to show that equal height action.
								</p>
							</div>
						</Link>
						{/* ========================Individual card ends================ */}
					</div>
					{/* ================================2nd card wrapper ends=================================== */}
				</div>
				{/* Middle Body ends */}
			</div>
			// Main div wrapper ends
		);
	}
}
export default Body;
