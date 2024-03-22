const commonClass = 'input-wrap ';

export function TextField(props) {
	const commonProps = {
		name: props.name,
		placeholder: props.placeholder,
		value: props.value,
		onChange: props.onChange,
	};

	return (
		<label className={commonClass.concat(props.className ?? '')}>
			{props.label}
			{props.type === 'textarea' ? (
				<textarea
					rows={props.rows ?? 8}
					cols={props.cols ?? 20}
					{...commonProps}
				></textarea>
			) : (
				<input type={props.type} {...commonProps} />
			)}
		</label>
	);
}
