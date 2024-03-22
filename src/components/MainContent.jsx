import '../styles/MainContent.css';
import { useState } from 'react';
import { tabNames } from '../data/names-src';
import { ResumeEditor } from './ResumeEditor';
import { ResumePreview } from './ResumePreview';
import { Navbar } from './Navbar';

export function MainContent() {
	const [currTab, setCurrTab] = useState(tabNames[1]);
	const [formData, setFormData] = useState({ all: [], saved: [] });

	return (
		<main className="main-content">
			<Navbar sendTab={handleNavClick} />
			<ResumeEditor tab={currTab} formData={mergeFormData()} sendEdits={handleChange} />
			<ResumePreview tab={currTab} formData={mergeFormData()} />
		</main>
	);

	function handleNavClick(newTab) {
		if (currTab === newTab) return;
		setCurrTab(newTab);
	}

	function mergeFormData() {
		const merged = { ...formData.saved };
		for (let [name, value] of Object.entries(formData.unsaved)) {
			merged[name] = value;
		}
		return merged;
	}

	function handleChange(newData) {
		// Updates the state with new data.
		const targetIndex = formData.unsaved.findIndex(data => {
			return data.tab === currTab && data.section === newData.section;
		});

		if (targetIndex === -1) return setFormData({ ...formData, unsaved: [newData] });

		setFormData({
			...formData,
			unsaved: formData.unsaved.map((data, index) => {
				if (index === targetIndex) data.value = newData.value;
				return data;
			}),
		});
	}

	function deleteTabSection(index) {
		// Remove formData of particular section & re-assign section index.
		const newTabData = formData
			.filter(data => data.tab === currTab)
			.filter(data => data.section !== index);

		const nonTabData = formData.filter(data => data.tab !== currTab);

		setFormData([...nonTabData, ...newTabData]);
	}
}
