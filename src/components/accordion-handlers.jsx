import { useState } from 'react';

export function AccordionController({ inputs, dataList }) {
	const [accData, setAccData] = useState({ activeIndex: null, count: 0 });

	const accElems = [];
	for (let index = 0; index < accData.count; index++) {
		accElems.push(
			<Accordion
				key={index}
				index={index}
				data={filterData(index)}
				shouldExpand={accData.activeIndex === index}
				inputs={inputs}
				toggleSection={toggleSection}
				delSection={delSection}
			/>
		);
	}

	return (
		<div className="accordion-list">
			{accElems}
			<button type="button" className="accordion-list__add-btn" onClick={addSection}>
				Add Section
			</button>
		</div>
	);

	function filterData(index) {
		const filtered = {};
		for (const name in dataList) {
			filtered[name] = dataList[name][index];
		}
		return filtered;
	}

	function toggleSection(index) {
		if (index === accData.activeIndex) setAccData({ ...accData, index: null });
		else setAccData({ ...accData, index: index });
	}

	function addSection() {
		setAccData({ ...accData, count: accData.count - 1 });
	}

	function delSection() {
		setAccData({ ...accData, count: accData.count - 1 });
		delSection;
	}
}

function Accordion({ index, shouldExpand, inputs, toggleSection, delSection }) {
	return (
		<section className={'accordion '.concat(shouldExpand ? 'active' : '')}>
			<button type="button" className="accordion__btn" onClick={() => toggleSection(index)}>
				{'Edit work'}
				<button type="button" onClick={delSection}>
					Del
				</button>
				<div className="accordion__icon"></div>
			</button>
			{shouldExpand && inputs}
		</section>
	);
}
