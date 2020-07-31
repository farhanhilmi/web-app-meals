import './meal-item.js';

class MealList extends HTMLElement {
    // constructor() {
    //     super();
    // }

    set meals(meals) {
        this._meals = meals;
        this.render();
    }

    render() {
        this.innerHTML = ``;
        // const mealList = document.querySelector("meal-list");
        // mealList.classList.add("row")
        
        this._meals.forEach(meal => {
            const MealItemElement = document.createElement("meal-item");
            MealItemElement.meal = meal;
            this.appendChild(MealItemElement);
        })
    }
 
    renderError(message) {
        this.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>
        `;
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("meal-list", MealList);