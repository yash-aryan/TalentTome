// Component which takes config of inputs & returns a collection of inputs inside a fragment.

export function InputCollection({ dataList, onChange }) {
	return (
		<>
			{dataList.map(data => {
				return (
					<label key={data.id} className={data.className}>
						{data.label}
						<input
							type={data.type}
							name={data.name}
							value={data.value}
							placeholder={data.placeholder}
							onChange={onChange}
						/>
					</label>
				);
			})}
		</>
	);
}
