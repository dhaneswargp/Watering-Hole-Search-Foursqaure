import constants from '../constants';

var initialState = {
    radius: 1000,
    lat:1,
    // lat:"",
    lng:1,
    // lng:"",
    category:"4bf58dd8d48988d11b941735,50327c8591d4c4b30a586d5d,4bf58dd8d48988d11d941735,4bf58dd8d48988d116941735"
}

export default(state= initialState, action) => {
    let newState = Object.assign({}, state)

    switch(action.type){
        
        case constants.UPDATE_RADIUS:
            console.log("In reducer received radius");
            newState['radius'] =  action.radius;
            return newState;

        case constants.UPDATE_LAT:
            console.log("In reducer received LAT", action.lat, action.lng);
            newState['lat'] =  action.lat;
            newState['lng'] =  action.lng;
            return newState;

        case constants.UPDATE_CATEGORY:
            console.log("In reducer received LAT", action.category);
            newState['category'] =  action.category;
            return newState;

        case constants.UPDATE_LNG:
            console.log("In reducer received Lng", action.lat, action.lng);
            newState["lat"] = action.lat;
            newState["lng"] = action.lng;
            return newState;

        default:
            return state;

    }

}
