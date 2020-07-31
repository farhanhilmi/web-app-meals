import DataSource from "../data/data-source";

class MealItem extends HTMLElement {
    // constructor() {
    //     super();
    // }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    // set clickEvent(event) {
    //     this._clickEvent = event;
    //     this.render();
    // }

    // get value() {
    //     // this.querySelector("#getId").addEventListener("click", () => {
    //     const IdMeal = this.querySelector("#mealId").textContent;
    //     //     console.log(IdMeal)
    //     // })

    //     // const val = $('input[name=radio]:checked').val();
    //     // document.getElementById("results").innerHTML = val;
    //     return idMeal;
    // }

    render() {
        // console.log(this.clickEvent)
        this.innerHTML = `

        <style>
       

        meal-list {
            margin-top:0px;
            position:relative;
            margin-bottom:50px;


            display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px;
        }

        meal-list .card {
              box-shadow: 0 4px 30px rgba(15, 22, 56, 0.35);
              margin-bottom: 30px;
              border-radius: 10px;
        }

        meal-list .card h5 {
            text-align:center;
        }
        </style>


            <div class="col-lg-3 col-md-6 col-sm-12" style="margin-top: 12px;">
                <div class="card" style="height:40rem;">
                    <img id="getId" data-toggle="modal" data-target="#exampleModalScrollable" src="${this._meal.strMealThumb}" class="img-fluid">
                    <div class="card-body">
                        <p id="mealId">${this._meal.idMeal}</p>
                        <hr>
                        <h5>${this._meal.strMeal}</h5>
                    </div>
                </div>
            </div>



        <style>
      @media (min-width: 576px) {
        .modal-dialog {
          max-width: none;
        }
      }

      .modal {
        background-color: #1b4b38;
      }

      .modal-dialog {
        width: 99%;
        height: 98%;
        padding: 0;
      }

      .modal-content {
        background-image: linear-gradient(rgb(160, 255, 181), rgb(50, 255, 232));
        height: 99%;
      }

      .modal-body img {
        height: 400px;
        margin-left: 20px;
        margin-right: 20px;
      }

      .modal-body article {
        float: left;
        margin-top: 30px;
        margin-left: 20px;
        margin-right: 20px;
      }

      

      .modal-body #ctrIngd .row {
        text-align: center;
      }

      .modal-body #ctrIngd .measure {
        font-size: 11px;
        color: rgb(63, 63, 63);
        margin-bottom: 0;
        text-transform: lowercase;
      }

      .modal-body #ctrIngd  {
        text-transform: capitalize;
      }

      .modal-body #ctrIngd hr {
        width: 800px;
      }

      #ctrIngd img {
        height: 80px;
      }


      .video-link {
        font-weight: bold;
        cursor: pointer;
        margin-left: 5px;
      }

      .video-link:hover {
        text-decoration: none;
      }

      .video-link:link {
        color: rgb(36, 33, 33);
      }

      .video-link:visited {
        color: rgb(42, 162, 241);
      }

      article .row {
        margin-left:0;
      }

      @media (max-width: 560px) {
        .modal-body {
          overflow: hidden;
        }

        .modal-body img {
          height: 260px;
          margin-left: 15px;
          margin-bottom: 20px;
        }

        .modal-body #ctrIngd {
          margin-top: 100px;
        }

        article p {
          text-align: justify;
        }

        .video-link {
          margin-left: 0;
          margin-top: 5px;
        }
      }

    </style>
    <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalScrollableTitle">Teriyaki Chicken Casserole</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img src="https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg"
              class="rounded float-left" alt="...">
            <detail-section id="ctrIngd">
              <h6>Category:</h6>
              <p>Japannese Chicken</p>
              <hr>
              <h6>Ingredients:</h6>
              <div class="row">
                <div class="col-sm">
                  <img src="https://www.themealdb.com/images/ingredients/soy sauce.png" alt="s">
                  <p class="measure">(3/4 cups)</p>
                  <p>soy sauce</p>
                </div>
                <div class="col-sm">
                  <img src="https://www.themealdb.com/images/ingredients/water.png" alt="">
                  <p>water</p>
                </div>
                <div class="col-sm">
                  <img src="https://www.themealdb.com/images/ingredients/brown sugar.png" alt="">
                  <p>brown sugar</p>
                </div>
                <div class="col-sm">
                  <img src="https://www.themealdb.com/images/ingredients/ground ginger.png" alt="">
                  <p>ground ginger</p>
                </div>
                <div class="col-sm">
                  <img src="https://www.themealdb.com/images/ingredients/minced garlic.png" alt="">
                  <p>minced garlic</p>
                </div>
                <div class="col-sm">
                  <img src="https://www.themealdb.com/images/ingredients/cornstarch.png" alt="">
                  <p class="measure">(4 Tablespoons)</p>
                  <p>cornstarch</p>
                </div>
                <div class="col-sm">
                  <img src="https://www.themealdb.com/images/ingredients/chicken breasts.png" alt="">
                  <p>chickebreasts</p>
                </div>
                <div class="col-sm">
                  <img src="https://www.themealdb.com/images/ingredients/stir-fry vegetables.png" alt="">
                  <p>stir-fry vegetables</p>
                </div>
                <div class="col-sm">
                  <img src="https://www.themealdb.com/images/ingredients/brown rice.png" alt="">
                  <p>brown rice</p>
                </div>
              </div>
              <hr>
            </detail-section>

            <article>
              <h3>Instructions: </h3>
              <p>
                Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, ½ cup
                water, brown
                sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and
                cook for one
                minute once boiling.\r\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a
                separate dish until
                smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce
                starts to thicken
                then remove from heat.\r\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over
                top of
                chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred
                chicken in the
                dish using two forks.\r\n*Meanwhile, steam or cook the vegetables according to package
                directions.\r\nAdd the cooked
                vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a
                bit to
                drizzle over the top when serving. Gently toss everything together in the casserole dish until combined.
                Return to
                oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving
                with remaining
                sauce. Enjoy!"
              </p>
            
              <h6 class="row">Video how to make Teriyaki Chicken Casserole 
                <a href="https://www.youtube.com/watch?v=fEN_fm6kX6k" target="_blank" class="video-link">  Click here</a>
              </h6>
          
            </article>
            <!-- <section class="ytb-embed">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed?v=fEN_fm6kX6k"
                  allowfullscreen></iframe>
              </div>
            </section> -->
          </div>
          <div class="modal-footer">
            <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close"> -->
            </div>
        </div>
      </div>
    </div>

    
        
        `;
      
        this.querySelector("#getId").addEventListener("click", () => {
            const IdMeal = this.querySelector("#mealId").textContent;

            DataSource.lookMealDetail(IdMeal);
            // result.forEach(meal => {
            //     console.log(meal.strMeal)
            // })
            // console.log(result.meals)
        })

    }
}

customElements.define("meal-item", MealItem);