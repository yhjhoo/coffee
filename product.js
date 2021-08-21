import confetti from 'canvas-confetti';
confetti.create(document.getElementById('canvas'), {
    resize: true,
    useWorker: true,
})({ particleCount: 200, spread: 200 });

class Product extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        const html = `
        <style>
            .product {
                line-height: 32px;
            }
            
            .product .name {
                display: inline-block;
                width: 55pt;
            }
                        
            .product .price {
                font-weight: bold;
            }

            img {
                vertical-align: middle;
            }
        
        </style>

        <div class="product">
            <img src="${this.getAttribute('icon')}" height="32px" width="32px">
            <span class="name">${this.getAttribute("title")}</span>
            <span class="price">$${this.getAttribute("price")}</span>
        </div>
        `

        this.innerHTML = html;
    }
}

customElements.define("kr-product", Product);