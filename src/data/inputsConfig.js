import { idFactory } from '../utils/idFactory';

/*
- Main source of data to describe each section & it's containing data.
- Describes what `input` and `preview` type should be built to `collect` and `display` the data respectively.

*/

const id = idFactory();

const sectionNames = ['overview', 'experience', 'education'];
const inputsConfig = {
	[sectionNames[0]]: getOverview(),
	[sectionNames[1]]: getExperience(),
	[sectionNames[2]]: getEducation(),
};

function getOverview() {
	return [
		{
			id: id.generate(),
			shouldPreview: true,
			name: 'fullname',
			label: 'Fullname',
			placeholder: 'Ryuko Matoi',
			inputType: 'text',
			previewType: 'heading',
			headingLevel: 2,
		},
		{
			id: id.generate(),
			shouldPreview: true,
			name: 'jobTitle',
			label: 'Job Title',
			placeholder: 'Web Developer',
			inputType: 'text',
			previewType: 'paragraph',
		},
		{
			id: id.generate(),
			shouldPreview: true,
			name: 'location',
			label: 'Location',
			placeholder: 'City, Country',
			inputType: 'text',
			previewType: 'paragraph',
		},
		{
			id: id.generate(),
			shouldPreview: true,
			name: 'phone',
			label: 'Phone',
			placeholder: '+55 555-555-5555',
			inputType: 'tel',
			previewType: 'link',
			linkPrefix: 'tel:',
		},
		{
			id: id.generate(),
			shouldPreview: true,
			name: 'email',
			label: 'Email',
			placeholder: 'example@example.com',
			inputType: 'email',
			previewType: 'link',
			linkPrefix: 'mailto:',
		},
		{
			id: id.generate(),
			shouldPreview: true,
			name: 'website',
			label: 'Website',
			placeholder: 'example.com',
			inputType: 'text',
			previewType: 'blank',
		},
	];
}

function getEducation() {
	return [
		{
			id: id.generate(),
			shouldPreview: true,
			name: 'study1',
			label: 'Title of study',
			placeholder: "Bachelor's Computer Science",
			inputType: 'text',
			previewType: 'heading',
			headingLevel: 3,
		},
		{
			id: id.generate(),
			shouldPreview: true,
			name: 'institute1',
			label: 'Institute Name',
			placeholder: 'Honnouji Academy',
			inputType: 'text',
			previewType: 'heading',
			headingLevel: 4,
		},
		{
			id: id.generate(),
			shouldPreview: true,
			name: 'studyDateEnd1',
			label: 'Study End Year',
			placeholder: '',
			inputType: 'date',
			previewType: 'paragraph',
		},
	];
}

function getExperience() {
	return [
		{
			id: id.generate(),
			shouldPreview: true,
			name: 'role1',
			label: 'Title of position',
			placeholder: 'Work Role',
			inputType: 'text',
			previewType: 'heading',
			headingLevel: 3,
		},
		{
			id: id.generate(),
			shouldPreview: true,
			name: 'company1',
			label: 'Company name',
			placeholder: 'Company name',
			inputType: 'text',
			previewType: 'heading',
			headingLevel: 4,
		},
		{
			id: id.generate(),
			shouldPreview: true,
			name: 'jobDesc1',
			label: 'Responsibilities',
			placeholder: 'Description / Main Responsibilities & Impact',
			inputType: 'textarea',
			previewType: 'paragraph',
		},
		{
			id: id.generate(),
			shouldPreview: true,
			name: 'workDateStart1',
			label: 'Start Date',
			placeholder: '',
			inputType: 'date',
			previewType: 'paragraph',
		},
	];
}
