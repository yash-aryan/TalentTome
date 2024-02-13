import { Header } from './Header';
import '../styles/EditContainer.css';

export function EditContainer({ activeIndex, pageData, headerLevel }) {
	let headerText, activePage;

	switch (activeIndex) {
		case pageData[0].id:
			headerText = pageData[0].name;
			activePage = <Overview />;
			break;
		case pageData[1].id:
			headerText = pageData[1].name;
			activePage = <Experience />;
			break;
		case pageData[2].id:
			headerText = pageData[2].name;
			activePage = <Education />;
			break;
		default:
			return;
	}

	return (
		<section className="edit-container">
			<Header type={headerLevel} text={headerText} />
			{activePage}
		</section>
	);
}

function Overview() {
	return <section className="edit-section--general"></section>;
}

function Experience() {
	return <section className="edit-section--experience"></section>;
}

function Education() {
	return <section className="edit-section--education"></section>;
}
