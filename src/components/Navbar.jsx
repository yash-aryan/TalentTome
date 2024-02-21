import '../styles/Navbar.css';
import { sectionNames } from '../data/inputsConfig';

export function Navbar({ sendTarget }) {
	return (
		<nav className="nav-sections-wrap">
			<ul className="section-list">
				{sectionNames.map(name => {
					return (
						<li className="section-list__item" key={name}>
							<button onClick={handleClick} value={name}>
								{name}
							</button>
						</li>
					);
				})}
			</ul>
		</nav>
	);

	function handleClick(e) {
		sendTarget(e.target.value);
	}
}
