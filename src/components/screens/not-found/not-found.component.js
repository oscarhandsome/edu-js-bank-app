import { BaseScreen } from '@/core/component/base-screen.component'

export class NotFound extends BaseScreen {
	constructor() {
		super({ title: 'Not gound' })
	}

	render() {
		return '<p>Not Found</p>'
	}
}