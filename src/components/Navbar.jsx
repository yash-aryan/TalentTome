import { useState } from 'react';
import '../styles/Navbar.css';

export function Navbar({ initalIndex, pageData, onClick }) {
	const className = 'nav-bar';
	const [activeIndex, setActiveIndex] = useState(initalIndex);

	function handleClick(e) {
		setActiveIndex(+e.target.dataset.id);
		onClick(+e.target.dataset.id);
	}

	return (
		<nav className={className}>
			<ul className="nav-bar__list">
				{pageData.map(item => {
					return (
						<li key={item.id}>
							<NavbarItem
								isActive={activeIndex === item.id}
								parentClass={className}
								onClick={handleClick}
								dataId={item.id}
								dataName={item.name}
							/>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

function NavbarItem({ isActive, parentClass, onClick, dataId, dataName }) {
	let className = parentClass + '__item';
	if (isActive) className += ' active';

	return (
		<button
			type="button"
			className={className}
			onClick={onClick}
			data-id={dataId}
			aria-label={'Edit ' + dataName}
		>
			{dataName}
		</button>
	);
}
