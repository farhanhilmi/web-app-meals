const baseUrlFilter = "https://www.themealdb.com/api/json/v1/1/filter.php?";

class DataSource {
    static filterByCategory(keyword) {
        return fetch(`${baseUrlFilter}c=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            })
    }

    static filterByArea(keyword) {
        return fetch(`${baseUrlFilter}a=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            })
    }

    static lookMealDetail(keyword){
            return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                } else {
                    return Promise.reject(`ID ${keyword} is not found`);
                }
            })
    }
}

export default DataSource;