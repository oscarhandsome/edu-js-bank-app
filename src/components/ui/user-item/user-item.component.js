import ChildComponent from '@/core/component/child.component'
import renderService from '@/core/services/render.service'

import styles from './user-item.module.scss'
import template from './user-item.template.html'

export class UserItem extends ChildComponent {
	constructor(user, isGray = false, onClick) {
		super()

		if (!user) throw new Error('User should be passed!')
		if (!user?.name) throw new Error('User must have a "name"!')
		if (!user?.avatarPath) throw new Error('User must have a "avatarPath"!')

		this.user = user
		this.isGray = isGray
		this.onClick = onClick
	}

	render() {
		this.element = renderService.htmlToelement(template, [], styles)

		return this.element
	}
}
