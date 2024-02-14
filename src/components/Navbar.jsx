import { useState } from 'react';
import '../styles/Navbar.css';

/*
- Self-operating Navbar component that behaves like a radio-button to load one page at a time.
- Applies 'active' class to the clicked navbar item for styling. 
- clicked navbar item's id is passed into the callbackFn.
*/

export function Navbar({ initalIndex, pageData, callbackFn }) {
	const className = 'nav-bar';
	const [activeIndex, setActiveIndex] = useState(initalIndex);

	function handleClickId(itemId) {
		setActiveIndex(itemId);
		callbackFn(itemId);
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
								onClick={handleClickId}
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
			onClick={() => onClick(dataId)}
			aria-label={'Edit ' + dataName}
		>
			{dataName}
		</button>
	);
}
