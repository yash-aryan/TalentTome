import { inputNames, tabNames } from '../../data/names-src';
import { FormButtons, TextField } from '../form-elems';
import { getFormData } from '../../utils/form-data';

const identifier = tabNames[1];
const names = inputNames[identifier];

export function ExperienceInputs({ tabData = {}, sendSubmit }) {
	return (
		<form className="form" onSubmit={onSubmit}>
			<h2 className="form__title">Edit Experience</h2>
			<TextField
				type="text"
				label="Title of Position"
				placeholder="Design Lead"
				name={names[0]}
				value={tabData[names[0]]}
			/>
			<TextField
				type="text"
				label="Company name"
				placeholder="Google"
				name={names[1]}
				value={tabData[names[1]]}
			/>
			<TextField
				type="textarea"
				label="Job responsibilities"
				placeholder="Job description / Main responsibilities / Impact"
				name={names[2]}
				value={tabData[names[2]]}
			/>
			<div className="input-row-wrap">
				<TextField
					type="date"
					label="Start date"
					name={names[3]}
					value={tabData[names[3]]}
				/>
				<TextField type="date" label="End date" name={names[4]} value={tabData[names[4]]} />
			</div>
			<FormButtons />
		</form>
	);

	function onSubmit(e) {
		e.preventDefault();
		sendSubmit(getFormData(e.target));
	}
}

export function ExperienceDisp({ formData }) {
	return (
		<section className="display-section display-section--experience">
			<h2>Work Experience</h2>
			<section>
				<div>
					<h3>{formData[names[0]]}</h3>
					<strong>{formData[names[3]].concat('+', formData[names[4]])}</strong>
				</div>
				<em>{formData[names[1]]}</em>
				<p>{formData[names[2]]}</p>
			</section>
		</section>
	);
}
