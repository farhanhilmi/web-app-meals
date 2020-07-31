class SearchBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        let val = this.querySelector("#searchElement").value;
        document.getElementById("results").innerHTML = val;
        return val;
    }

    render() {
        this.innerHTML = `

        <style>
        .header-section {
            height: 65rem;
            background: #655f58 url('https://images.squarespace-cdn.com/content/v1/5abbec19f8370a187f55fec9/1577910593353-G2UBP6QGMPC0EV39XH13/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/Alinea+Collective+Japanese+LR-2.jpg?format=1500w');
            background-repeat: no-repeat;
            background-position: top center;
            background-size: cover;
            opacity:0.8;
        }
        .header-text {
            height: 575px;
        }
        .webTitle {
            display: block;
        }
        .webTitle h1 {
            font-family: "Merienda", cursive;
        }
        .header-search {
            width: 600px;
            margin: 40px auto 100px auto;
            border-radius: 8px;
            background: #fff;
            -webkit-box-shadow: 0 4px 8px rgba(2,2,2,0.14);
            -moz-box-shadow: 0 4px 8px rgba(2,2,2,0.14);
            box-shadow: 0 4px 8px rgba(2,2,2,0.14);
            position: relative;
            height: 65px;
        }
        
        .header-tagline {
            padding: 190px 0 10px;
            font-size: 50px;
            line-height: 80px;
            -webkit-text-shadow: 0 4px 6px rgba(0,0,0,.20);
            -moz-text-shadow: 0 4px 6px rgba(0,0,0,.20);
            text-shadow: 0 4px 6px rgba(0,0,0,.20);
            font-family: 'LatoWebBlack', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            text-align: center;
            color: #ffffff;
            margin: 0;
            position: relative;
        }
        .header-content {
            position: relative;
            display: table;
            height: 100%;
            width: 100%;
        }
        
        @media (max-width: 3000px){
            .header-section{
                margin: 0 0 0 0;
                overflow:hidden;
            }
            .header-text {
                width: 100%;
                display: block !important;
            }
            .header-content {
                text-align: left;
            }
        }

       

        .input-search {
            text-align: center;
            width:100%;
            height: 100%;
            float:left;
            border: none;
            border-radius: 5px;
            position:relative;
            margin:11px 0 0 0px;
            font-size: large;
            font-weight: bold;
        }
        .input-search::placeholder {
            font-size: large;
            text-align: center;
        }
        @media (max-width: 560px){
            .header-tagline {
                padding: 190px 0 10px;
                font-size: 20px;
                width: 280px;
                margin-left:20px;
                overflow:hidden;
                line-height: 80px;
            }

            .input-search {
                font-size:15px;
            }

            .header-search {
                width: 300px;
                height: 60px;
            }
            .input-search::placeholder {
                font-size: 15px;
            }
        
        }
        </style>

        <section id="home" class="header-section">
            <div class="container">
                <div class="header-content" data-stellar-offset-parent="true">
                    <div class="header-text" data-wow-duration="1s" data-wow-delay="0.5s">
                        <!-- TAGLINE -->
                        <div class="webTitle">
                            <h1 class="header-tagline">Cari Makanan Terbaik Di Penjuru Dunia</h1>
                        </div>
                        <div class="header-search clearfix">
                            <input id="searchElement" type="text" class="input-search" placeholder="Cari makanan berdasarkan category">
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       `;

        $(function () {
            const availableCat = [
                "Beef",        
                "Breakfast",
                "Chicken",
                "Dessert",
                "Goat",
                "Lamb",
                "Miscellaneous",   
                "Pasta",
                "Pork",
                "Seafood", 
                "Side",
                "Starter",
                "Vegan",   
                "Vegetarian"
            ];
            $("#searchElement").autocomplete({
                source: availableCat
            });
        
        });
       
        this.querySelector("#searchElement").addEventListener("keyup", this._clickEvent);
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

customElements.define("search-bar", SearchBar);