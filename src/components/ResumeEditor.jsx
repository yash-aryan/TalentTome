import '../styles/ResumeEditor.css';
import { useState } from 'react';
import { inputsConfig } from '../data/inputsConfig';
import { InputCollection } from './InputCollection';
import { Heading } from './Elements';
import { Navbar } from './Navbar';

export function ResumeEditor({ liveValues, sendEdits, cancelEdits, confirmEdits }) {
	const [currSection, setCurrSection] = useState('overview');

	return (
		<div className="resume-editor">
			<Navbar sendTarget={handleNavClick} />
			<SectionTitle sectionName={currSection} />
			<form className="form" onSubmit={handleSubmit} onReset={handleReset}>
				<InputCollection dataList={getUpdatedSectionData()} onChange={handleChange} />
				<div className="form__btn-wrap">
					<button type="reset" className="form__btn --reset">
						Cancel
					</button>
					<button type="submit" className="form__btn --submit">
						Confirm Edits
					</button>
				</div>
			</form>
		</div>
	);

	function handleNavClick(targetSection) {
		if (currSection === targetSection) return;
		setCurrSection(targetSection);
	}

	function handleChange(e) {
		const { name, value } = e.target;
		sendEdits({ [name]: value });
	}

	function handleReset() {
		cancelEdits();
	}

	function handleSubmit(e) {
		e.preventDefault();
		const formData = {};
		for (let pair of new FormData(e.target)) {
			formData[pair[0]] = pair[1];
		}
		confirmEdits(formData);
	}

	function getUpdatedSectionData() {
		// Returns the form section with added property 'value', containing the latest onChange updates.

		return inputsConfig[currSection].map(data => {
			data.value = liveValues[data.name] || '';
			return data;
		});
	}
}

function SectionTitle({ sectionName = '' }) {
	const prefix = 'Edit ';
	let title;
	switch (sectionName) {
		default:
			title = sectionName[0].toUpperCase() + sectionName.slice(1);
			break;
	}

	return <Heading className="resume-editor__section-title" text={prefix + title} level={2} />;
}
