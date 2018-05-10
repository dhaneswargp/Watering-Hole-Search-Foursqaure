import constants from '../constants';

export default{
    
    updateRadius: (radius) =>{
        console.log("we are calling action and then send it to reducers");
        return{
            type:constants.UPDATE_RADIUS,
            radius: radius
        }
    },

    updateLat: (lat, lng) => {
        console.log("we are calling action and then send it to reducers", lat, lng);
        return{
            type:constants.UPDATE_LAT,
            lat: lat,
            lng: lng,
        }

    },

    updateCategory: (category) => {
        console.log("we are calling action and then send it to reducers", category);
        return{
            type:constants.UPDATE_CATEGORY,
            category: category
        }

    },

    updateLng: (lat, lng) => {
        console.log("we are calling action and then send it to reducers", lat, lng);
        return {
          type: constants.UPDATE_LNG,
          lat: lat,
          lng: lng
        };
    }
    
}