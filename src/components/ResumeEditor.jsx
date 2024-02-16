import '../styles/ResumeEditor.css';
import { inputData } from '../data/inputData';
import { Inputs } from './Inputs';

export function ResumeEditor({ liveValues, formName, sendData }) {
	return (
		<div className="resume-editor">
			<form className="form">
				<Inputs dataList={getInputData()} onChange={onChange} />
			</form>
		</div>
	);

	function onChange(e) {
		const { name, value } = e.target;
		sendData({ [name]: value });
	}

	function getInputData() {
		return inputData[formName].map(data => {
			data.value = liveValues[data.name] || '';
			return data;
		});
	}
}
