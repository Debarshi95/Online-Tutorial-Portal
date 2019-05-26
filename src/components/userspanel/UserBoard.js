import React from 'react';
import { Link } from "react-router-dom";
import './user.css'
function UserBoard(){
return(
    	<div className="UserBoard">
           <div className="heading">
              <h3>Courses in which you have enrolled are:</h3>
            </div>
            <div id="body-card">
						<Link to="/c" className="card bg-dark" id="first">
							<div className="card-body">
								<h5 className="card-title">C</h5>
								<p className="card-text">
									This is a wider card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</p>
							</div>
						</Link>   
                        <Link to="/c" className="card bg-dark" id="second">
							<div className="card-body">
								<h5 className="card-title">Javascript</h5>
								<p className="card-text">
									This is a wider card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</p>
							</div>
						</Link>   
            </div>
                       
        </div>
)
}
export default UserBoard;