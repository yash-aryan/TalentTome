export function TextField(props) {
	const commonClass = 'input-wrap ';
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

export function FormButtons() {
	return (
		<div className="form__btn-wrap">
			<button type="reset" className="form__btn form__btn--reset">
				Cancel
			</button>
			<button type="submit" className="form__btn form__btn--submit">
				Confirm Edits
			</button>
		</div>
	);
}
