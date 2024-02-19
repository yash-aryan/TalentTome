import { idFactory } from '../utils/idFactory';
import { sectionNames } from './sectionNames';

const id = idFactory();
export const previewConfig = {
	[sectionNames[0]]: getOverview(),
};

function getOverview() {
	return [
		{
			id: id.generate(),
			type: 'heading',
			level: 2,
		},
		{
			id: id.generate(),
			type: 'heading',
			level: 3,
		},
		{
			id: id.generate(),
			type: 'paragraph',
		},
		{
			id: id.generate(),
			type: 'link',
			hrefPrefix: 'tel:',
		},
		{
			id: id.generate(),
			type: 'link',
			hrefPrefix: 'mailto:',
		},
		{
			id: id.generate(),
			type: 'blank',
		},
	];
}
