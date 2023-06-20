import { getTitle } from '@/config/seo.config'

export class BaseScreen {
	/**
	 * Create a new BaseScreenInstance
	 * @constructor
	 * @param {Object} options - The options for the BaseScreen
	 * @param {string} options.title - The title of the screen.
	 */
	constructor({ title }) {
		document.title = getTitle(title)
	}

	/**
	 * Render the child component content
	 * @return {HTMLLIElement}
	 */
	render() {
		throw new Error('Render method must be implemneted in the child class')
	}
}
