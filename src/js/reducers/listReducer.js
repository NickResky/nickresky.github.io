import _ from "lodash"

const requiredElements = [
	{
		name: "Title",
		category: "text"
	},
	{
		name: "Section",
		category: "categories"
	},
	{
		name: "Description",
		category: "text"
	}
]
var sectionCategories = []
var defaultState = {
	info: {},
	elements: [],
	sections: [],
	fetching: false
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case "FETCH_LIST_ERROR": {
			throw new Error("AAAAAH!");
			break;
		}
		case "FETCH_LIST_PENDING": {
			return {...state, fetching: true};
			break;
		}
		case "FETCH_LIST_FULFILLED": {
			var listSections = []
			_.forEach(action.payload.listElements, function(element) {
				_.forEach(requiredElements, function(requiredElement) {
					if (element.name == requiredElement.name) {
						requiredElement.uuid = element.uuid
						requiredElement.categoryData = element.elementData.predefinedCategories
					}
				})
			})
			_.forEach(action.payload.listEntries, function(entry) {
				_.forEach(requiredElements, (e) => entry[e.name] = entry[e.uuid + "_" + e.category])
				const categoryId = entry.Section[0]
				const availableCategories = requiredElements[1].categoryData
				if (availableCategories[categoryId]) {
					const category = _.find(availableCategories, (c) => c.id == categoryId)
					const existendSection = _.find(listSections, (s) => s.section == category)
					if (!existendSection) {
						listSections.push({
							"section": category,
							"entries": [entry]
						})
					}
					else {
						existendSection.entries.push(entry);
					}
				}

			})

			return {
				sections: listSections,
				info: action.payload.listInfo,
				elements: requiredElements,
				fetching: false
			}
			break;
		}
	}
	return state;
};
