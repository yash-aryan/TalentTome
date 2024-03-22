import { tabNames } from '../data/names-src';
import '../styles/ResumePreview.css';
import { ExpPreview } from './sections/Experience';

export function ResumePreview({ formData }) {
	return (
		<section className="resume-preview">
			{getSections()}
		</section>
	);

	function getSections() {
		for (const tab in formData) {
			switch (tab) {
				case tabNames[0]:
					<ExpPreview key={tabNames[0]} formData={formData} />
			}
		}
	}
}
