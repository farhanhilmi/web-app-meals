class FilterTab extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        const val = $('input[name=radio]:checked').val();
        document.getElementById("results").innerHTML = val;
        return val;
    }

    render() {
        this.innerHTML = `

        <style>
            .tab {
                width: 75%;
                text-align: center;
                margin-left:140px;
            }

            .tab input[type="radio"] {
                display: none;
            }
            .tab input[type="radio"]:checked + .box {
                background-color:rgb(101, 247, 218);
            }
            .tab input[type="radio"]:checked + .box span {
                color: white;
            }
            .tab input[type="radio"]:checked + .box span:before {
                opacity: 1;
            }
            .tab .box {
                width: 100px;
                height: 30px;
                background-color: white;
                transition: all 250ms ease;
                border-radius: 5px;
                will-change: transition;
                display: inline-block;
                text-align: center;
                cursor: pointer;
                position: relative;
                font-family:Arial, Helvetica, sans-serif;
                font-weight: 600;
                margin-bottom: 5px;
            }

            .tab .box span {
                position: auto;
                margin-top: auto;
                left: 0;
                right: 0;
                font-size: 13px;
                user-select: none;
            }
            .tab .box span:before {
            position: auto;
                left: 0;
                right: 0;
                transition: all 300ms ease;
                font-size: 13px;
                user-select: none;
            }

            @media (max-width:560px) {
                .tab {
                    width: 75%; 
                    margin-left:43px;
                
                }
            }

        </style>
    <br>

        <h3 style="text-align:center;">Filter By Area</h3>
        <hr>
        <div class="tab">
                <label>
                    <input type="radio" name="radio" id="areaUS" class="filterBtnElement" value="American" checked/>
                    <div class="box">
                        <span>American</span>
                    </div>
                </label>

                <label>
                    <input type="radio" name="radio" id="areaCA" class="filterBtnElement" value="British" />
                    <div class="box">
                        <span>British</span>
                    </div>
                </label>

                <label>
                <input type="radio" name="radio" id="areaCA" class="filterBtnElement" value="canadian" />
                <div class="box">
                    <span>Canadian</span>
                </div>
                </label>
                
                <label>
                <input type="radio" name="radio" id="areaCA" class="filterBtnElement" value="Chinese" />
                <div class="box">
                    <span>Chinese</span>
                </div>
                </label>

                <label>
                <input type="radio" name="radio" id="areaCA" class="filterBtnElement" value="canadian" />
                <div class="box">
                    <span>Canadian</span>
                </div>
                </label>

                <label>
                <input type="radio" name="radio" id="areaCA" class="filterBtnElement" value="Dutch" />
                <div class="box">
                    <span>Dutch</span>
                </div>
                </label>

                <label>
                <input type="radio" name="radio" id="areaCA" class="filterBtnElement" value="Egyptian" />
                <div class="box">
                    <span>Egyptian</span>
                </div>
                </label>

                <label>
                <input type="radio" name="radio" id="areaCA" class="filterBtnElement" value="French" />
                <div class="box">
                    <span>French</span>
                </div>
                </label>

                <label>
                <input type="radio" name="radio" id="areaCA" class="filterBtnElement" value="Greek" />
                <div class="box">
                    <span>Greek</span>
                </div>
                </label>

                <label>
                <input type="radio" name="radio" id="areaCA" class="filterBtnElement" value="Italian" />
                <div class="box">
                    <span>Italian</span>
                </div>
                </label>

                <label>
                <input type="radio" name="radio" id="areaCA" class="filterBtnElement" value="Japanese" />
                <div class="box">
                    <span>Japanese</span>
                </div>
                </label>

                <label>
                <input type="radio" name="radio" id="areaCA" class="filterBtnElement" value="Mexican" />
                <div class="box">
                    <span>Mexican</span>
                </div>
                </label>

                <label>
                <input type="radio" name="radio" id="areaCA" class="filterBtnElement" value="Spanish" />
                <div class="box">
                    <span>Spanish</span>
                </div>
                </label>

                <label>
                <input type="radio" name="radio" id="areaCA" class="filterBtnElement" value="Thai" />
                <div class="box">
                    <span>Thai</span>
                </div>
                </label>

                <label>
                <input type="radio" name="radio" id="areaCA" class="filterBtnElement" value="Turkish" />
                <div class="box">
                    <span>Turkish</span>
                </div>
                </label>

                <label>
                <input type="radio" name="radio" id="areaCA" class="filterBtnElement" value="Unknown" />
                <div class="box">
                    <span>Others</span>
                </div>
                </label>
        </div>
          <hr>

    `;
                
        this.querySelectorAll('.filterBtnElement').forEach(item => {
            item.addEventListener('click', this._clickEvent)
            
        })

        window.onload = () => {
            document.getElementById('areaUS').click();
            
        }

     
        
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

customElements.define("filter-tab", FilterTab);