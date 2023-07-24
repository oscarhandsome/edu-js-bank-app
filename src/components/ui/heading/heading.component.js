import ChildComponent from '@/core/component/child.component'
import renderService from '@/core/services/render.service'

import styles from './heading.module.scss'
import template from './heading.template.html'

export class Heading extends ChildComponent {
	constructor() {
		super({ title: '' })
	}

	render() {
		this.element = renderService.htmlToelement(template, [], styles)

		return this.element
	}
}
