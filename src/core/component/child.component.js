export default class ChildComponent {
	/**
	 * Render the child component content
	 * @return {HTMLLIElement}
	 */
	render() {
		throw new Error('Render method must be implemneted in the child class')
	}
}
