import { BlankLink, Heading, Link, Paragraph } from './Elements';

// Component that takes all required config for the particular section & returns section to be used in resume previewing.

export function ResumeSection({ inputData, formData, sectionClass }) {
	return (
		<section className={sectionClass + ' resume-section'}>
			{inputData.map(data => {
				const value = formData[data.name] || data.placeholder;
				const className = 'preview-' + data.name;

				switch (data.type) {
					case 'heading':
						return (
							<Heading
								key={data.id}
								className={className}
								text={value}
								level={data.level}
							/>
						);
					case 'paragraph':
						return <Paragraph key={data.id} className={className} text={value} />;
					case 'link':
						return (
							<Link
								key={data.id}
								className={className}
								hrefPrefix={data.hrefPrefix}
								link={value}
							/>
						);
					case 'blank':
						return <BlankLink key={data.id} className={className} link={value} />;
					default:
						return;
				}
			})}
		</section>
	);
}
