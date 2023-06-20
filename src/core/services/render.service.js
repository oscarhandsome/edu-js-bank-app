import ChildComponent from '@/core/component/child.component'

class RenderService {
	/**
	 * Represents a RenderService instance.
	 * @param {string} html
	 * @param {Array} components
	 * @param {Object} [styles]
	 * @returns {HTMLElement}
	 */
	htmlToElement(html, components = [], styles) {
		const template = document.createElement('template')
		template.innerHTML = html.trim()

		const element = template.content.firstChild

		if (styles) {
			this.#applyModuleStyles(styles, element)
		}

		this.#reaplaceComponentsTags(element, components)

		return element
	}

	/**
	 * @param {HTMLElement} parentElement
	 * @param {Array} components
	 */
	#reaplaceComponentsTags(parentElement, components) {
		const componentTagPattern = /^componnet-/
		const allElements = parentElement.getElementsByTagName('*')

		for (const element of allElements) {
			const elementTagName = element.tagName.toLowerCase()
			if (componentTagPattern.test(element.tagName.toLowerCase())) {
				const componentName = elementTagName
					.replace(componentTagPattern, '')
					.replace(/-/g, '')

				const foundComponent = components.find(Component => {
					const instance =
						Component instanceof ChildComponent ? Component : new Component()

					return instance.consstructor.name.toLowerCase() === componentName
				})

				if (foundComponent) {
					const componentContent =
						foundComponent instanceof ChildComponent
							? foundComponent.render()
							: new foundComponent.render()
					element.replaceWith(componentContent)
				} else {
					console.error(
						`Component ${componentName} not found in the provided components array`
					)
				}
			}
		}
	}

	/**
	 * @param {Object} moduleStyles
	 * @param {string} element
	 * @return {void}
	 */
	#applyModuleStyles(moduleStyles, element) {
		if (!element) return

		const applyStyles = element => {
			for (const [key, value] of Object.entries(moduleStyles)) {
				if (element.classList.contains(key)) {
					element.classList.remove(key)
					element.classList.add(value)
				}
			}
		}

		if (element.getAttribute('class')) {
			applyStyles(element)
		}

		const elements = element.querySelectorAll('*')
		elements.forEach(applyStyles)
	}
}

export default new RenderService()
