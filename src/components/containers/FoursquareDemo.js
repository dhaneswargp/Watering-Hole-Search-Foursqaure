import React, { Component } from "react";
import { connect } from "react-redux";
import "../layout/App.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";



var foursquare = require("react-foursquare")({
  // use your foursquare account ID below
  // clientID: '',
  // clientSecret: ''
});

class FoursquareDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    let params = {
      ll: this.props.lat + ", " + this.props.lng,
      categoryId: this.props.category,
      radius: this.props.radius,
      limit: 50
    };
    console.log(
      "componengt Didmount",
      this.props.lat,
      this.props.lng,
      this.props.radius
    );
    this.fetchPlaces(params);
  }

  componentWillReceiveProps(nextProps) {
    let params = {
      ll: nextProps.lat + ", " + nextProps.lng,
      categoryId: nextProps.category,
      radius: nextProps.radius,
      limit: 50
    };
    console.log(
      "component WillReceive",
      this.props.lat,
      this.props.lng,
      this.props.radius
    );
    this.fetchPlaces(params);
  }

  fetchPlaces = params => {
    foursquare.venues
      .getVenues(params)
      .then(res => {
        this.setState({ items: res.response.venues });
      })
      .catch(err => {
        console.log("err: ", err);
      });
  };

  render() {
    const CondRender = props => {
      const ivan = this.props.lng;
      if (ivan === "1") {
        return <div className="gif" />;
      } else {
        return (
          <div className="ListBlock">
            {this.state.items.map(item => {
              if (
                item.categories[0].id === "4bf58dd8d48988d11b941735" ||
                item.categories[0].id === "50327c8591d4c4b30a586d5d" ||
                item.categories[0].id === "4bf58dd8d48988d11d941735" ||
                item.categories[0].id === "4bf58dd8d48988d116941735"
              )
                return (
                  <div
                    className={(() => {
                      switch (item.categories[0].id) {
                        case "50327c8591d4c4b30a586d5d":
                          return "ListItem";
                        case "4bf58dd8d48988d11b941735":
                          return "ListItem2";
                        case "4bf58dd8d48988d11d941735":
                          return "ListItem3";
                        case "4bf58dd8d48988d116941735":
                          return "ListItem4";
                        default:
                          return null;
                      }
                    })()}
                    key={item.id}
                  >
                    <div className="listIcon">
                      <img
                        className="listIconImg"
                        src={(() => {
                          switch (item.categories[0].id) {
                            case "50327c8591d4c4b30a586d5d":
                              return require("../layout/brewery_list.png");
                            case "4bf58dd8d48988d11b941735":
                              return require("../layout/bar_list.png");
                            case "4bf58dd8d48988d11d941735":
                              return require("../layout/sports_bar_list.png");
                            case "4bf58dd8d48988d116941735":
                              return require("../layout/pub_list.png");
                            default:
                              return null;
                          }
                        })()}
                        alt=""
                        height={50}
                      />
                    </div>
                    <div className="listDetails">
                      <h5 className="Head5">{item.name}</h5>
                      <h6 className="Head6">
                        {item.location.formattedAddress}
                      </h6>
                      <a className="WebLink" href={item.url} target="_blank">
                        {item.url}
                      </a>
                      <br />
                    </div>
                    <div className="listButton">
                      <a
                        className="DirectionsText"
                        target="_blank"
                        href={
                          "https://www.google.com/maps/dir/?api=1&origin=" +
                          this.props.lat +
                          "," +
                          this.props.lng +
                          "&destination=" +
                          item.location.lat +
                          "," +
                          item.location.lng +
                          "&travelmode=walking"
                        }
                      >
                        <button
                          className={(() => {
                            switch (item.categories[0].id) {
                              case "50327c8591d4c4b30a586d5d":
                                return "ButtonColor";
                              case "4bf58dd8d48988d11b941735":
                                return "ButtonColor2";
                              case "4bf58dd8d48988d11d941735":
                                return "ButtonColor3";
                              case "4bf58dd8d48988d116941735":
                                return "ButtonColor4";
                              default:
                                return null;
                            }
                          })()}
                        >
                          Get directions
                        </button>
                      </a>
                    </div>
                  </div>
                );
            })}
          </div>
        );
      }
    };

    return <div>{CondRender()}</div>;
  }
}

const stateToProps = state => {
  return {
    lat: state.address.lat,
    lng: state.address.lng,
    radius: state.address.radius,
    category: state.address.category
  };
};

export default connect(stateToProps)(FoursquareDemo);
