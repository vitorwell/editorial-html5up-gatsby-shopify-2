module.exports = {
    product: {
        text     : { button: 'Comprar' },
        iframe   : false,
        contents : {
            img   : false,
            title : false,
            price : false,
            options: false
        },
        templates : {
            button : '<button class="button primary icon solid fa-cart-plus {{data.classes.product.button}}">{{data.buttonText}}</button>'
        },
        buttonDestination: 'cart',
        quantiyLabel: 'Quantidade'
    },
    toggle: {
        contents: {
            count: true,
            icon: true,
            title: false,
        },
        styles: {
            button: {
                'background-color': '#78b657',
            }
        }
    },
    cart: {
        startOpen: false,
        contents: {
            title: true,
            lineItems: true,
            footer: true,
            note: true,
        },
        text: {
            title: 'Carrinho',
            empty: 'Seu Carrinho está vazio.',
            button: 'Finalizar Compra',
            total: 'Total',
            currency: 'BRL',
            notice: 'O envio e desconto serão calculados na finalização da compra.',
            noteDescription: 'Deixe alguma instrução especial aqui',
        },
        styles: {
            button: {
                'background-color': '#78b657',
            }
        }
    }
}
