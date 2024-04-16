import '../styles/Navbar.css';
import { tabNames } from '../data/names-src';

export function Navbar({ sendTab }) {
	return (
		<nav className='nav-sections-wrap'>
			<ul className='section-list'>
				{tabNames.map(name => {
					return (
						<li className='section-list__item' key={name}>
							<button type='button' onClick={handleClick} value={name}>
								{name}
							</button>
						</li>
					);
				})}
			</ul>
		</nav>
	);

	function handleClick(e) {
		sendTab(e.target.value);
	}
}
