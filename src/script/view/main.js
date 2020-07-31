import '../component/meal-list.js';
import '../component/search-bar.js';
import '../component/filter-tab.js';

import DataSource from '../data/data-source.js';

const main = () => {

    const searchElement = document.querySelector("search-bar");
    const ByAreaElement = document.querySelector("filter-tab"); 
    const mealListElement = document.querySelector("meal-list");
    const IdMeal = document.querySelector("#mealId");

    // document.querySelector("#mealId").onclick = () => {
    //     const IdMeal = document.querySelector("#mealId").textContent;
    //     console.log(IdMeal)
    // }

    // IdMeal.clickEvent = function(){
        
    //     console.log("ha");
    // }

    const onButtonSearchClicked = async () => {
        
        try{
            const result = await DataSource.filterByCategory(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const onButtonAreaClicked = async () => {
        try{
            const result = await DataSource.filterByArea(ByAreaElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };


    const onImageClicked = async () => {
        try{
            const result = await DataSource.lookMealDetail(IdMeal.value);
            renderResult(result);
        } catch {
            fallbackResult(message);
        }
    }

    const renderResult = results => {
        mealListElement.meals = results;
    };

    const fallbackResult = message => {
        mealListElement.renderError(message);
    };

    ByAreaElement.clickEvent = onButtonAreaClicked;
    searchElement.clickEvent = onButtonSearchClicked;
    // mealListElement.clickEvent = onImageClicked;

    // getListArea()

}


export default main;
