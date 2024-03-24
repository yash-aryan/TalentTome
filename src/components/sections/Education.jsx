import { inputNames, tabNames } from '../../data/names-src';
import { getFormData } from '../../utils/form-data';
import { FormButtons, TextField } from '../form-elems';

const identifier = tabNames[2];
const names = inputNames[identifier];

export function EducationInputs({ tabData = {}, sendSubmit }) {
	return (
		<form className="form" onSubmit={onSubmit}>
			<h2 className="form__title">Edit Education</h2>
			<TextField
				type="text"
				label="Study / Degree"
				placeholder="BSc. Computer Science"
				name={names[0]}
				value={tabData[names[0]]}
			/>
			<TextField
				type="text"
				label="Institute name"
				placeholder="Example University"
				name={names[1]}
				value={tabData[names[1]]}
			/>
			<div className="input-row-wrap">
				<TextField
					type="date"
					label="Start date"
					name={names[2]}
					value={tabData[names[2]]}
				/>
				<TextField type="date" label="End date" name={names[3]} value={tabData[names[3]]} />
			</div>
			<FormButtons />
		</form>
	);

	function onSubmit(e) {
		e.preventDefault();
		sendSubmit(getFormData(e.target));
	}
}

export function EducationDisp({ formData }) {
	return (
		<section className="display-section display-section--education">
			<h2>Education</h2>
			<section>
				<div>
					<h3>{formData[names[0]]}</h3>
					<strong>{formData[names[2]].concat('+', formData[names[3]])}</strong>
				</div>
				<em>{formData[names[1]]}</em>
			</section>
		</section>
	);
}
