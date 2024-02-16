import { BlankLink, Heading, Link, Paragraph } from './Elements';

export function ResumeSection({ sectionList, inputData, formData, sectionClass }) {
	return (
		<section className={sectionClass + ' resume-section'}>
			{sectionList.map((data, index) => {
				const value = formData[inputData[index].name] || inputData[index].placeholder;
				switch (data.type) {
					case 'heading':
						return (
							<Heading
								key={inputData[index].id}
								className={data.className}
								text={value}
								level={data.level}
							/>
						);
					case 'paragraph':
						return (
							<Paragraph
								key={inputData[index].id}
								className={data.className}
								text={value}
								id={inputData[index].id}
							/>
						);
					case 'link':
						return (
							<Link
								key={inputData[index].id}
								className={data.className}
								hrefPrefix={data.hrefPrefix}
								link={value}
							/>
						);
					case 'blank':
						return (
							<BlankLink
								key={inputData[index].id}
								className={data.className}
								link={value}
							/>
						);
					default:
						return;
				}
			})}
		</section>
	);
}
