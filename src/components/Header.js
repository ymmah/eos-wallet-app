import React, {Component} from 'react'
import UserSummary from './UserSummary'
// import UserQuery from '../query/User'

class Header extends Component {
	static defaultProps = {
		className: 'Nav row no-gutters px-4 items-center space-between bg-dark-grey' 
	}

	render() {
		const {className} = this.props

		return (
			<header className={className}>
				<h1>EOS</h1>
				<UserSummary />
			</header>
		)
	}
}

export default Header

