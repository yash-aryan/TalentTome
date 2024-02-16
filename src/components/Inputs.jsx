export function Inputs({ dataList, onChange }) {
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
