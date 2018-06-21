import React from 'react';

export default function Navigation(props) {
  return (
    <nav> 
				<ul className="clearfix">
					<li><a className="what" 
						href="#"
						onClick={() => props.showModal()}
						>What ?</a></li>
					<li><a className="new" href="">+ New Game</a></li>
				</ul>
			</nav>
  );
}