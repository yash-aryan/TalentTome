// Single source for all naming.

export const tabNames = ['overview', 'experience', 'education'];

// Unique identifiers for the "name" prop to describe the kind of value they hold.
export const inputNames = {
	[tabNames[0]]: ['fullname', 'jobTitle', 'location', 'phone', 'email'],
	[tabNames[1]]: ['work', 'company', 'desc', 'start', 'end'],
	[tabNames[2]]: ['study', 'institute', 'start', 'end'],
};
