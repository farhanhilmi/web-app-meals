class FooterSection extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" crossorigin="anonymous" />
        <link rel="stylesheet" href="./src/style/style.css">
    
        <div class="wrapper">
            <div class="profile-card js-profile-card">
                <div class="profile-card__img">
                <img src="https://i.ibb.co/fH4F0D5/farhanilmi.jpg" alt="profile card">
                </div>

                <div class="profile-card__cnt js-profile-cnt">
                <div class="profile-card__name">Farhan Hilmi</div>
                <div class="profile-card__txt"><strong>Sumedang, Indonesia</strong></div>
 
                
                <div class="profile-card-ctr">
                    <button class="profile-card__button button--blue js-message-btn">Message</button>
                    <button class="profile-card__button button--orange">Follow</button>
                </div>
                </div>

                <div class="profile-card-message js-message">
                <form class="profile-card-form">
                    <div class="profile-card-form__container">
                        <textarea placeholder="Tuliskan sesuatu..."></textarea>
                    </div>

                    <div class="profile-card-form__bottom">
                    <button class="profile-card__button button--blue js-message-close">
                        Send
                    </button>

                    <button class="profile-card__button button--gray js-message-close">
                        Cancel
                    </button>
                    </div>
                </form>

                <div class="profile-card__overlay js-message-close"></div>
                </div>

            </div>

            </div>


        `;

        const btn = this.shadowDOM.querySelector(".js-message-btn");
        const card = this.shadowDOM.querySelector(".js-profile-card");
        const closeBtn = this.shadowDOM.querySelectorAll(".js-message-close");

        btn.addEventListener("click", (e) => {
            e.preventDefault();
            card.classList.add("active");
        });

        closeBtn.forEach((element, _) => {
            console.log(element);
            element.addEventListener("click", (e) => {
                e.preventDefault();
                card.classList.remove("active");
            });
        });


    }
}

customElements.define("footer-section", FooterSection);