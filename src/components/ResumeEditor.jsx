import '../styles/ResumeEditor.css';
import { inputsConfig } from '../data/inputsConfig';
import { InputCollection } from './InputCollection';

export function ResumeEditor({ liveValues, sectionName, sendEdits, cancelEdits, confirmEdits }) {
	return (
		<div className="resume-editor">
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

		return inputsConfig[sectionName].map(data => {
			data.value = liveValues[data.name] || '';
			return data;
		});
	}
}
