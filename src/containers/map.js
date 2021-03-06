import React, { Component } from 'react';
import { connect } from 'react-redux';
import Map from './google_map';
import Establishment from './establishment';
import Advert from './advert';

import * as actions from '../actions';

class MapPage extends Component {
	componentWillUnmount() {
		this.props.resetInformation(actions.RESET_ESTABLISHMENT);
		this.props.resetInformation(actions.RESET_ADVERT);
	}

	render() {
		return (
			<div>
				<Map lat={47.656} lng={-122.3095} />
				<Establishment />
				<Advert />
			</div>
		);
	}
}

export default connect(null, actions)(MapPage);
