import React, { Component } from "react";
import { Link } from "react-router-dom";

class Body extends Component {
	render() {
		return (
			// Main div wrapper starts
			<div className="homepage-body">
				{/* jumbotron cover starts */}
				<div className="banner" />
				{/* jumbotron cover ends */}

				{/* Middle body starts */}
				<div className="middle-body">
					<h3 className="h3">Welcome to ProgramLearners.com</h3>

					{/* =================================1st Card Wrapper Starts====================== */}
					<div class="card-deck card-wrapper">
						{/* ===========================Individual card starts=============== */}
						<Link to="/c" class="card homepage-body-card">
							<div class="card-body custom-card">
								<h5 class="card-title">CSS</h5>
								<p class="card-text">
									CSS stands for Cascading Style Sheets. CSS describes how HTML
									elements are to be displayed on screen, paper, or in other
									media.
								</p>
							</div>
						</Link>
						{/* ==================Individual card ends=================== */}

						{/* ===================Individual card starts===================== */}
						<Link to="/javascript" class="card homepage-body-card">
							<div class="card-body custom-card">
								<h5 class="card-title">JavaScript</h5>
								<p class="card-text">
									JavaScript is a very powerful client-side scripting language.
									JavaScript is used mainly for enhancing the interaction of a
									user with the webpage.
								</p>
							</div>
						</Link>
						{/* ==================Individual card ends==================== */}

						{/* =========================Individual card starts==================== */}
						<Link to="/php" class="card homepage-body-card">
							<div class="card-body custom-card">
								<h5 class="card-title">PHP</h5>
								<p class="card-text">
									PHP is an acronym for "PHP: Hypertext Preprocessor" PHP is a
									widely-used, open source scripting language PHP scripts are
									executed on the server
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
							<div class="card-body custom-card">
								<h5 class="card-title">C++</h5>
								<p class="card-text">
									C++ is a cross-platformed language that can be used to create
									sophisticated high-performance applications. C++ was developed
									in Bell labs 1979.
								</p>
							</div>
						</Link>
						{/* ========================Individual card end============== */}

						{/* ======================Individual card starts=========== */}
						<Link to="/java" class="card homepage-body-card">
							<div class="card-body custom-card">
								<h5 class="card-title">JAVA</h5>
								<p class="card-text">
									Java is a popular programming language, created in 1995. It is
									one of the most popular programming language in the world.
								</p>
							</div>
						</Link>
						{/* =======================Individual card ends=============== */}

						{/* =======================Individual card starts================== */}
						<Link to="/html" class="card homepage-body-card">
							<div class="card-body custom-card">
								<h5 class="card-title">HTML</h5>
								<p class="card-text">
									HTML is the standard markup language for creating Web pages.
									HTML stands for Hyper Text Markup Language .
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
