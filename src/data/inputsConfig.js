import { idFactory } from '../utils/idFactory';
import { sectionNames } from './sectionNames';

// All the Data/Schema to build form inputs for each section (provided by sectionNames.js).

const commonClass = 'text-field';
const id = idFactory();
export const inputsConfig = {
	[sectionNames[0]]: getOverview(),
};

function getOverview() {
	return [
		{
			id: id.generate(),
			type: 'text',
			className: commonClass,
			name: 'fullname',
			label: 'Fullname',
			placeholder: 'Ryuko Matoi',
		},
		{
			id: id.generate(),
			type: 'text',
			className: commonClass,
			name: 'jobTitle',
			label: 'Job Title',
			placeholder: 'Web Developer',
		},
		{
			id: id.generate(),
			type: 'text',
			className: commonClass,
			name: 'location',
			label: 'Location',
			placeholder: 'City, Country',
		},
		{
			id: id.generate(),
			type: 'tel',
			className: commonClass,
			name: 'phone',
			label: 'Phone',
			placeholder: '+55 555-555-5555',
		},
		{
			id: id.generate(),
			type: 'email',
			className: commonClass,
			name: 'email',
			label: 'Email',
			placeholder: 'example@example.com',
		},
		{
			id: id.generate(),
			type: 'text',
			className: commonClass,
			name: 'website',
			label: 'Website',
			placeholder: 'example.com',
		},
	];
}
