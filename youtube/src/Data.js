export const API_KEY = 'AIzaSyCdDVrU42i94_rv87y_GRgjehLHa7YKmfU'

export const value_converter = (value) => {
    if(value >= 1000000){
        return Math.floor(value/1000000)+"M"
    }
    else if (value >= 1000){
        return Math.floor(value/1000)+"K"
    }
    else{
        value
    }
}