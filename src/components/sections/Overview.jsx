import { inputNames, tabNames } from '../../data/names-src';
import { getFormData } from '../../utils/form-data';
import { FormButtons, TextField } from '../form-elems';

const identifier = tabNames[0];
const names = inputNames[identifier];

export function OverviewInputs({ tabData = {}, sendSubmit }) {
	return (
		<form className="form" onSubmit={onSubmit}>
			<h2 className="form__title">Edit Overview</h2>
			<TextField
				type="text"
				label="Fullname"
				placeholder="Ryuko Matoi"
				name={names[0]}
				value={tabData[names[0]]}
			/>
			<TextField
				type="text"
				label="Job Title"
				placeholder="Software Developer"
				name={names[1]}
				value={tabData[names[1]]}
			/>
			<TextField
				type="type"
				label="Location"
				placeholder="City, Country"
				name={names[2]}
				value={tabData[names[2]]}
			/>
			<TextField
				type="tel"
				label="Phone"
				placeholder="+55 55555-55555"
				name={names[3]}
				value={tabData[names[3]]}
			/>
			<TextField
				type="email"
				label="Email"
				placeholder="example@example.com"
				name={names[4]}
				value={tabData[names[4]]}
			/>
			<FormButtons />
		</form>
	);

	function onSubmit(e) {
		e.preventDefault();
		sendSubmit(getFormData(e.target));
	}
}

export function OverviewDisp({ formData }) {
	return (
		<section className="display-section display-section--overview">
			<h2>{formData[names[0]]}</h2>
			<strong>{formData[names[1]]}</strong>
			<ul>
				<li>{formData[names[2]]}</li>
				<li>{formData[names[3]]}</li>
				<li>{formData[names[4]]}</li>
			</ul>
		</section>
	);
}
