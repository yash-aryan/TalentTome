import '../styles/ResumePreview.css';
// import { useState } from 'react';
import { inputData } from '../data/inputData';
import { sectionData } from '../data/sectionData';
import { ResumeSection } from './ResumeSection';

// const placeholderData = {};
// inputData['overview'].forEach(data => (placeholderData[data.name] = data.placeholder));

export function ResumePreview({ formData }) {
	const section = 'overview';
	return (
		<article className="resume-preview">
			<ResumeSection
				sectionList={sectionData[section]}
				inputData={inputData[section]}
				formData={formData}
				sectionClass={section}
			/>
		</article>
	);
}
