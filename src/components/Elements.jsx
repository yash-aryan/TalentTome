export function Heading(props) {
	switch (+props.level) {
		case 1:
			return <h1 className={props.className}>{props.text}</h1>;
		case 2:
			return <h2 className={props.className}>{props.text}</h2>;
		case 3:
			return <h3 className={props.className}>{props.text}</h3>;
		case 4:
			return <h4 className={props.className}>{props.text}</h4>;
		case 5:
			return <h5 className={props.className}>{props.text}</h5>;
		case 6:
			return <h6 className={props.className}>{props.text}</h6>;
		default:
			return null;
	}
}

export function Paragraph(props) {
	return <p className={props.className}>{props.text}</p>;
}

export function Link(props) {
	return (
		<a href={props.hrefPrefix + props.link} className={props.className}>
			{props.link}
		</a>
	);
}

export function BlankLink(props) {
	return (
		<a
			href={'https://' + props.link}
			className={props.className}
			target="_blank"
			rel="noopener noreferrer"
		>
			{props.link}
		</a>
	);
}

export function Textarea(props) {
	return (
		<textarea
			name={props.name}
			className={props.className}
			cols={props.cols}
			rows={props.rows}
			value={props.value}
			onChange={props.onChange}
		></textarea>
	);
}

export function Input(props) {
	return (
		<input
			type={props.type}
			name={props.name}
			value={props.value}
			placeholder={props.placeholder}
			onChange={props.onChange}
		/>
	);
}
