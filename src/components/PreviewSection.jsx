import { BlankLink, Heading, Link, Paragraph } from './Elements';

// Component that takes all required config for the particular section & returns section to be used in resume previewing.

export function PreviewSection({ inputData, sectionClass }) {
	return (
		<section className={sectionClass + ' preview-section'}>
			{inputData.map(data => {
				if (!data.shouldPreview) return;

				const value = data.value;
				const className = 'preview-' + data.name;

				switch (data.previewType) {
					case 'heading':
						return (
							<Heading
								key={data.id}
								className={className}
								text={value}
								level={data.headingLevel}
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
