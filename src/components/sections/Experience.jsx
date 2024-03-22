import { useState } from 'react';
import { inputNames, tabNames } from '../../data/names-src';
import { AccordionController } from '../accordion-handlers';
import { TextField } from '../elements';

const identifier = tabNames[1];
const names = inputNames[identifier];

export function ExpInputs({ tab, dataList }) {
	// Returns empty div to prevent losing states when not the active tab.
	if (tab !== identifier) return <div></div>;

	const filtered = {};
	for (const name in dataList) {
		if (!names.includes(name)) continue;
		filtered[name] = dataList[name];
	}

	return (
		<>
			<AccordionController dataList={filtered} delSection={handleDelete} />
		</>
	);

	function addSection() {}

	function handleDelete(index) {
		
	}
}

function InputCollection(props) {
	return (
		<div className="accordion__dropdown">
			<fieldset>
				<TextField
					type="text"
					label="Title of Position"
					placeholder="Design Lead"
					name={names[0]}
					value={props.values[names[0]] ?? ''}
					onChange={props.onChange}
				/>
				<TextField
					type="text"
					label="Company name"
					placeholder="Google"
					name={names[1]}
					value={props.values[names[1]]}
					onChange={props.onChange}
				/>
				<TextField
					type="textarea"
					label="Job responsibilities"
					placeholder="Job description / Main responsibilities / Impact"
					name={names[2]}
					value={props.values[names[2]]}
					onChange={props.onChange}
				/>
				<div className="input-row-wrap">
					<TextField
						type="date"
						label="Start date"
						name={names[3]}
						value={props.values[names[3]]}
						onChange={props.onChange}
					/>
					<TextField
						type="date"
						label="End date"
						name={names[4]}
						value={props.values[names[4]]}
						onChange={props.onChange}
					/>
				</div>
			</fieldset>
		</div>
	);
}

export function ExpPreview({ dataList }) {
	return (
		<section>
			<h2>Work Experience</h2>
			{dataList.map(data => {
				<section>
					<div>
						<h3>{data[names[0]]}</h3>
						<span>{data[names[3]].concat('+', data[names[0]])}</span>
					</div>
					<em>{data[names[1]]}</em>
					<p>{data[names[2]]}</p>
				</section>;
			})}
		</section>
	);
}
