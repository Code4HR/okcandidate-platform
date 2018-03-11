import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Hr from './../atoms/Hr';
import Alert from './../organisms/Alert';
import TextField from './../organisms/TextField';

import {
    getLocationByGPS,
    getLocationByAddress,
    fetchNonRegionLimitedSurveys
} from './../../store/actions/pick-survey-actions';

class LocationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {address: ''};
    }

    updateAddress(event) {
        const address = event.target.value;
        this.setState({
            address: address
        });
    }

    search(event) {
        event && event.preventDefault();
        this.props.dispatch(getLocationByAddress(this.state.address), () => {
            this.setState({address: ''});
        });
    }

    geolocate() {
        this.props.dispatch(getLocationByGPS());
    }

    skip() {
        this.props.dispatch(fetchNonRegionLimitedSurveys());
    }

    render() {
        return (
            <form className="location-form" onSubmit={this.search.bind(this)}>
                <section>
                    {this.props.status.message &&
                        <Alert
                            level={this.props.status.level}
                            message={this.props.status.message} />
                    }
                </section>
                <section className="by-address">
                    <TextField
                        label="Locate Using Address"
                        name="address"
                        value={this.state.address}
                        onChange={this.updateAddress.bind(this)}
                        button={
                            <button
                                type="button"
                                onClick={this.search.bind(this)}>
                                Search
                            </button>
                        }/>
                </section>
                <Hr label="or" />
                <section className="by-gps">
                    <label htmlFor="gps">Or use GPS</label>
                    <button
                        type="button"
                        id="gps"
                        onClick={this.geolocate.bind(this)}>
                        Use GPS
                    </button>
                </section>

                <Hr label="or" />

                <section className="skip">
                    <label htmlFor="skip">Or skip it</label>
                    <button
                        type="button"
                        id="skip"
                        onClick={this.skip.bind(this)}>
                        Don't search
                    </button>
                </section>
            </form>
        );
    }
}

LocationForm.propTypes = {
    dispatch: PropTypes.func,
    addressError: PropTypes.string,
    status: PropTypes.object
};

export default LocationForm;
