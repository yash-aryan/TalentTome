import { tabNames } from '../data/names-src';
import '../styles/ResumeEditor.css';
import { ExpInputs } from './sections/Experience';

export function ResumeEditor({ tab, formData, sendEdits }) {
	const commonProps = {
			sendChange: handleChange,
			tab,
			dataList: formData.filter(data => data.tab === tab),
		},
		title = tab[0].toUpperCase() + tab.slice(1);

	return (
		<section className="resume-editor">
			<form className="form" onSubmit={handleSubmit}>
				<h2 className="form__title">{'Edit '.concat(title)}</h2>
				{/* <Overview {...commonProps} /> */}
				<ExpInputs {...commonProps} />
				{/* <Education {...commonProps} /> */}
				<div className="form__btn-wrap">
					<button type="reset" className="form__btn form__btn--reset">
						Cancel
					</button>
					<button type="submit" className="form__btn form__btn--submit">
						Confirm Edits
					</button>
				</div>
			</form>
		</section>
	);

	function handleChange(data) {
		sendEdits(data);
	}

	function handleSubmit(e) {
		e.preventDefault();
	}
}
