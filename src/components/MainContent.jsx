import '../styles/MainContent.css';
import { useState } from 'react';
import { ResumeEditor } from './ResumeEditor';
import { ResumePreview } from './ResumePreview';

export function MainContent() {
	const [savedData, setSavedData] = useState({});
	const [unsavedData, setUnsavedData] = useState({});

	return (
		<main className="main-content">
			<ResumeEditor
				liveValues={getLatestData()}
				sendEdits={handleSent}
				cancelEdits={handleCancel}
				confirmEdits={handleConfirmed}
			/>
			<ResumePreview formData={getLatestData()} />
		</main>
	);

	function handleSent(newFormData) {
		setUnsavedData(prev => ({ ...prev, ...newFormData }));
	}

	function handleConfirmed(newFormData) {
		setUnsavedData({});
		setSavedData(prev => {
			for (let key in newFormData) {
				prev[key] = newFormData[key];
			}
			return prev;
		});
	}

	function handleCancel() {
		setUnsavedData({});
	}

	function getLatestData() {
		// Returns the combined data overwritten data from saved & unsaved states.

		const latestData = { ...savedData };
		for (let key in unsavedData) {
			latestData[key] = unsavedData[key];
		}
		return latestData;
	}
}
