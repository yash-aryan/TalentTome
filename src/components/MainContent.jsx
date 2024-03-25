import '../styles/MainContent.css';
import { useState } from 'react';
import { tabNames } from '../data/names-src';
import { ResumeDisplay } from './ResumeDisplay';
import { Navbar } from './Navbar';
import { EducationInputs } from './sections/Education';
import { ExperienceInputs } from './sections/Experience';
import { OverviewInputs } from './sections/Overview';

export function MainContent() {
	const [currTab, setCurrTab] = useState(tabNames[1]);
	const [formData, setFormData] = useState({});

	const formProps = {
		tabData: formData[currTab],
		sendChange: handleChange,
		sendSubmit: handleSubmit,
	};

	return (
		<main className="main-content">
			<section className="resume-editor">
				<Navbar sendTab={handleNavClick} />
				{getFormComponent(currTab, formProps)}
			</section>
			<section>
				<ResumeDisplay currTab={currTab} formData={formData} />
			</section>
		</main>
	);

	function handleNavClick(newTab) {
		if (currTab === newTab) return;
		setCurrTab(newTab);
	}

	function handleChange(name, value, sectionId = null) {
		const currTabData = formData[currTab];
		if (sectionId === null) {
			const newTabData = { ...currTabData, [name]: value };
			return setFormData({ ...formData, [currTab]: newTabData });
		}

		if (Array.isArray(currTabData) && currTabData.length !== 0) {
			const newTabData = currTabData.map((data, index) => {
				if (index === sectionId) data[name] = value;
				return data;
			});
			return setFormData({ ...formData, [currTab]: newTabData });
		}

		const newTabData = [{ [name]: value }];
		return setFormData({ ...formData, [currTab]: newTabData });
	}

	function handleSubmit(data) {
		setFormData({ ...formData, [currTab]: data });
	}
}

function getFormComponent(tab, props) {
	switch (tab) {
		case tabNames[0]:
			return <OverviewInputs {...props} />;
		case tabNames[1]:
			return <ExperienceInputs {...props} />;
		case tabNames[2]:
			return <EducationInputs {...props} />;
	}
}
