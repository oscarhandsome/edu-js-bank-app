import ChildComponent from '@/core/component/child.component'
import renderService from '@/core/services/render.service'

import styles from './card-info.module.scss'
import template from './card-info.template.html'

export class CardInfo extends ChildComponent {
	render() {
		this.element = renderService.htmlToelement(template, [], styles)

		return this.element
	}
}
