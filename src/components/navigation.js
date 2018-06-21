import React from 'react';

export default function Navigation(props) {
  return (
    <nav> 
				<ul class="clearfix">
					<li><a class="what" 
						href="#"
						onClick={this.props.showModal()}
						>What ?</a></li>
					<li><a class="new" href="">+ New Game</a></li>
				</ul>
			</nav>
  );
}