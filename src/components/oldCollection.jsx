// Component which takes config of inputs as `dataList` & returns a collection of inputs inside a fragment.

import { Input, Textarea } from './elements';

export function commonCollection({ dataList, onChange }) {
	return (
		<>
			{dataList.map(data => {
				return (
					<label key={data.id} className="input-wrap">
						{data.label}
						{getInput(data)}
					</label>
				);
			})}
		</>
	);

	function getInput(data) {
		switch (data.inputType) {
			case 'textarea':
				return (
					<Textarea
						name={data.name}
						className={data.className}
						cols={30}
						rows={8}
						value={data.value}
						onChange={onChange}
					/>
				);
			default:
				return (
					<Input
						type={data.inputType}
						name={data.name}
						value={data.value}
						placeholder={data.placeholder}
						onChange={onChange}
					/>
				);
		}
	}
}
