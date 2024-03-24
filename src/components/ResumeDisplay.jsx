import '../styles/ResumeDisplay.css';
import { tabNames } from '../data/names-src';
import { ExperienceDisp } from './sections/Experience';
import { EducationDisp } from './sections/Education';
import { OverviewDisp } from './sections/Overview';

export function ResumeDisplay({ formData }) {
	return (
		<div className="resume-display">
			{Object.keys(formData).map(section => {
				return getSectionComponents(section, formData[section]);
			})}
		</div>
	);
}

function getSectionComponents(section, formData) {
	switch (section) {
		case tabNames[0]:
			return <OverviewDisp key={section} formData={formData} />;
		case tabNames[1]:
			return <ExperienceDisp key={section} formData={formData} />;
		case tabNames[2]:
			return <EducationDisp key={section} formData={formData} />;
	}
}
