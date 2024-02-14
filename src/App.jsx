import './styles/App.css';
import { useState } from 'react';
import { pageData } from './data/page-data';

// Imported Components
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { EditContainer } from './components/EditContainer';
import { PreviewContainer } from './components/PreviewContainer';
import { GithubLink } from './components/GithubLink';

function App() {
	const appName = 'Talent Tome',
		headerLevel = 1,
		initalIndexState = pageData[0].id;

	const [activeIndex, setActiveIndex] = useState(initalIndexState);

	function handleNavClick(dataId) {
		setActiveIndex(dataId);
	}

	return (
		<>
			<header className="header">
				<Header type={headerLevel} text={appName} />
				<Navbar
					initalIndex={initalIndexState}
					pageData={pageData}
					callbackFn={handleNavClick}
				/>
			</header>
			<main className="main-content">
				<EditContainer
					activeIndex={activeIndex}
					pageData={pageData}
					headerLevel={headerLevel + 1}
				/>
				<PreviewContainer />
			</main>
			<footer className="footer">
				<GithubLink />
			</footer>
		</>
	);
}

export default App;
