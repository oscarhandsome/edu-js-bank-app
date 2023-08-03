import ChildComponent from '@/core/component/child.component'
import { $R } from '@/core/rquery/rquery.lib'
import renderService from '@/core/services/render.service'

import styles from './loader.module.scss'
import template from './loader.template.html'

export const LOADER_SELECTOR = '[data-component="loader"]'

export class Loader extends ChildComponent {
	constructor(width = 100, heigth = 100) {
		super()

		this.width = width
		this.heigth = heigth
	}

	render() {
		this.element = renderService.htmlToelement(template, [], styles)

		$R(this.element)
			.css('widht', `${this.width}px`)
			.css('height', `${this.height}px`)
			.addClass('bounce')

		// this.element.style = `widht: ${this.width}px; height: ${this.heigth}px`
		// this.element.classList.add('bounce')

		return this.element
	}
}
