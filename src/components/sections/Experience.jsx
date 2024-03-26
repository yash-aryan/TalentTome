import { inputNames, tabNames } from '../../data/names-src';
import { getFormData } from '../../utils/form-data';
import { FormButtons, TextField } from '../form-elems';

const identifier = tabNames[1];
const names = inputNames[identifier];

export function ExperienceInputs({
	tabData = [{ [names[0]]: '', [names[1]]: '', [names[2]]: '', [names[3]]: '', [names[4]]: '' }],
	sendChange,
	sendSubmit,
}) {
	return (
		<form className="form" onSubmit={onSubmit}>
			<h2 className="form__title">Edit Experience</h2>
			<button type="button" className="form__add-section" onClick={addSection}>
				New Section
			</button>
			{tabData.map((data, index) => {
				return (
					<Section
						key={index}
						data={data}
						index={index}
						onChange={onChange}
						deleteSection={deleteSection}
					/>
				);
			})}
			<FormButtons />
		</form>
	);

	function onChange(e, index) {
		const name = e.target.name.slice(0, -1);
		const value = e.target.value;
		sendChange(name, value, index);
	}

	function onSubmit(e) {
		e.preventDefault();
		const formData = getFormData(e.target);
		const compiled = [];

		for (let name in formData) {
			const index = name.slice(-1);
			if (compiled[index]) compiled[index][name.slice(0, -1)] = formData[name];
			else compiled[index] = { [name.slice(0, -1)]: formData[name] };
		}
		sendSubmit(compiled);
	}

	function addSection() {
		sendSubmit(tabData.toSpliced(tabData.length, 0, {}));
	}

	function deleteSection(index) {
		sendSubmit(tabData.toSpliced(index, 1));
	}
}

function Section({ data, index, onChange, deleteSection }) {
	return (
		<section>
			<button type="button" onClick={() => deleteSection(index)}>
				Delete Section
			</button>
			<TextField
				type="text"
				label="Title of Position"
				placeholder="Design Lead"
				name={names[0].concat(index)}
				value={data[names[0]] ?? ''}
				onChange={e => onChange(e, index)}
			/>
			<TextField
				type="text"
				label="Company name"
				placeholder="Google"
				name={names[1].concat(index)}
				value={data[names[1]] ?? ''}
				onChange={e => onChange(e, index)}
			/>
			<TextField
				type="textarea"
				label="Job responsibilities"
				placeholder="Job description / Main responsibilities / Impact"
				name={names[2].concat(index)}
				value={data[names[2]] ?? ''}
				onChange={e => onChange(e, index)}
			/>
			<div className="input-row-wrap">
				<TextField
					type="date"
					label="Start date"
					name={names[3].concat(index)}
					value={data[names[3]] ?? ''}
					onChange={e => onChange(e, index)}
				/>
				<TextField
					type="date"
					label="End date"
					name={names[4].concat(index)}
					value={data[names[4]] ?? ''}
					onChange={e => onChange(e, index)}
				/>
			</div>
		</section>
	);
}

export function ExperienceDisp({ formData }) {
	if (formData.length === 0) return;

	return (
		<section className="display-section display-section--experience">
			<h2 className="display-section__title">Work Experience</h2>
			{formData.map((data, index) => {
				return (
					<section className="entry" key={index}>
						<div className="entry__row-wrap">
							{data[names[0]] && <h3>{data[names[0]]}</h3>}
							{data[names[3]] && data[names[4]] && (
								<strong className="entry__date">{data[names[3]].concat(' - ', data[names[4]])}</strong>
							)}
						</div>
						{data[names[1]] && <em>{data[names[1]]}</em>}
						{data[names[2]] && <p>{data[names[2]]}</p>}
					</section>
				);
			})}
		</section>
	);
}
