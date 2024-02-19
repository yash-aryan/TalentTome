import '../styles/ResumePreview.css';
// import { useState } from 'react';
import { inputsConfig } from '../data/inputsConfig';
import { previewConfig } from '../data/previewConfig';
import { ResumeSection } from './ResumeSection';

export function ResumePreview({ formData }) {
	const sectionName = 'overview';

	return (
		<article className="resume-preview">
			<ResumeSection
				inputData={getInputData(sectionName)}
				formData={formData}
				sectionClass={sectionName}
			/>
		</article>
	);
}

function getInputData(sectionName) {
	// Returns a copy of previewConfig of a particular section with added properties from inputsConfig.
	const inputData = [];

	previewConfig[sectionName].forEach((data, index) => {
		const dataCopy = { ...data };
		dataCopy.name = inputsConfig[sectionName][index].name;
		dataCopy.placeholder = inputsConfig[sectionName][index].placeholder;
		inputData.push(dataCopy);
	});

	return inputData;
}
