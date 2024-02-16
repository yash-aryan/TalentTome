import { useState } from 'react';
import { ResumeEditor } from './components/ResumeEditor';
import { ResumePreview } from './components/ResumePreview';
import './styles/App.css';

function App() {
	const [formData, setFormData] = useState({});

	function handleSentData(newFormData) {
		setFormData(prev => ({ ...prev, ...newFormData }));
	}

	return (
		<main className="main-content">
			<ResumeEditor liveValues={formData} formName={'overview'} sendData={handleSentData} />
			<ResumePreview formData={formData} />
		</main>
	);
}

export default App;
