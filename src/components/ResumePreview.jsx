import '../styles/ResumePreview.css';
import { inputsConfig } from '../data/inputsConfig';
import { PreviewSection } from './PreviewSection';

export function ResumePreview({ formData }) {
	const previewSections = ['overview', 'experience', 'education'];
	const inputData = {};

	previewSections.forEach(sectionName => {
		inputData[sectionName] = inputsConfig[sectionName].map(data => {
			data.value = formData[data.name] || data.placeholder;
			return data;
		});
	});

	return (
		<article className="resume-preview">
			{previewSections.map(sectionName => {
				return (
					<PreviewSection
						key={sectionName}
						inputData={inputData[sectionName]}
						formData={formData}
						sectionClass={sectionName}
					/>
				);
			})}
		</article>
	);
}
