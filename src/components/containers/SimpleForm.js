import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { connect } from "react-redux";
import actions from "../../actions";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../layout/App.css";
import "react-dropdown/style.css";

class SimpleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ""
    };
  }

  onChange = (address, lat, lng) => {
    this.setState({ address });
  };

  handlePlaceSelect = (address, placeId) => {
    geocodeByAddress(address)
      .then(results => {
        getLatLng(results[0])
          .then(response => {
            let { lat, lng } = response;
            this.props.updateLat(lat, lng);
            this.setState({
              address
            });
            console.log(
              "Inside simple form handleplaceselect",
              this.props.lat,
              this.props.lng
            );
          })
          .catch(error => {
            console.error("Error", error);
          });
      })
      .catch(error => {
        console.error("Error", error);
      });
  };

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
      placeholder: "Type your location..."
    };

    const renderSuggestion = ({ formattedSuggestion }) => (
      <div>
        <img src={require("../layout/placeholder_suggestion.png")} width={18}/> &#160;
        <strong>{ formattedSuggestion.mainText }</strong>{' '}
        <small>{ formattedSuggestion.secondaryText }</small>
      </div>
    )
  

    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <PlacesAutocomplete
            inputProps={inputProps}
            onSelect={(address, placeId) =>
              this.handlePlaceSelect(address, placeId)
            }
            renderSuggestion={renderSuggestion}
          />
        </form>
      </div>
    );
  }
}
const stateToProps = state => {
  return {
    lat: state.address.lat,
    lng: state.address.lng
  };
};

const dispatchToProps = dispatch => {
  return {
    updateLat: (lat, lng) => dispatch(actions.updateLat(lat, lng))
  };
};

export default connect(stateToProps, dispatchToProps)(SimpleForm);
