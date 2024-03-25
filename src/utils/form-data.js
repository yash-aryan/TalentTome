export function getFormData(formElem) {
	const formData = {};
	for (let [name, value] of new FormData(formElem)) {
		formData[name] = value;
	}
	return formData;
}
