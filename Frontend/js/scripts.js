const API_URL = 'http://localhost:8000';

const HTMLResponseProducts = document.querySelector("#products");
let div = document.createElement('div');
div.setAttribute('class', 'row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center');

fetch(`${API_URL}/products`)
    .then((response) => response.json())
    .then((products) => {
        products.forEach(product => {
            let elem = document.createElement('div');
            elem.setAttribute('class', 'col mb-5');

            let card = document.createElement('div');
            card.setAttribute('class', 'card h-100');

            let img = document.createElement('img');
            img.setAttribute('class', 'card-img-top');
            img.setAttribute('src', `${product.url_image}`);
            img.setAttribute('onerror', 'imgError(this);');

            let card_body = document.createElement('div');
            card_body.setAttribute('class', 'card-body p-4');

            let card_body_child = document.createElement('div');
            card_body_child.setAttribute('class', 'text-center');

            let h5 = document.createElement('h5');
            h5.setAttribute('class', 'fw-bolder');
            h5.appendChild(document.createTextNode(`${product.name}`));

            let card_footer = document.createElement('div');
            card_footer.setAttribute('class', 'card-footer p-4 pt-0 border-top-0 bg-transparent');

            let card_footer_child = document.createElement('div');
            card_footer_child.setAttribute('class', 'text-center');

            let options = document.createElement('a');
            options.setAttribute('class', 'btn btn-outline-dark mt-auto');
            options.setAttribute('href', '#');
            options.appendChild(document.createTextNode('View options'));
            
            card_footer_child.appendChild(options);
            card_footer.appendChild(card_footer_child);

            card_body_child.appendChild(h5);
            card_body_child.appendChild(document.createTextNode(`$ ${product.price}`));
            card_body.appendChild(card_body_child);

            card.appendChild(img);
            card.appendChild(card_body);
            card.appendChild(card_footer);

            elem.appendChild(card);
            div.appendChild(elem);
        });

        HTMLResponseProducts.appendChild(div);
    });



const HTMLResponseCategories = document.querySelector("#categories");
let ul = document.createElement('ul');
ul.setAttribute('class', 'dropdown-menu');
ul.setAttribute('aria-labelledby', 'navbarDropdown');

fetch(`${API_URL}/categories`)
    .then((response) => response.json())
    .then((categories) => {
        categories.forEach(category => {
            let elem = document.createElement('li');

            let a = document.createElement('a')
            a.setAttribute('class', 'dropdown-item');
            a.setAttribute('href', '#!');
            a.appendChild(document.createTextNode(`${category.name}`));

            elem.appendChild(a);
            ul.appendChild(elem);
        });

        HTMLResponseCategories.appendChild(ul);
    });