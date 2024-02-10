const productList = document.querySelector(".product_list");
const reviewList = document.querySelector(".rewiev_list");

window.addEventListener('load', function () {

    for (let i = 0; i < localStorage.length; i++) {

        const pEl = document.createElement('p');
        pEl.addEventListener('click', () => {

            const array = localStorage.getItem(localStorage.key(i)).split('[@:@]');

            let child = reviewList.firstChild;
            while (child) {
                reviewList.removeChild(child);
                child = reviewList.firstChild;
            }

            array.forEach(element => {
                const divEl = document.createElement('div');
                divEl.classList.add('product_row');
                divEl.classList.add('review_justify');
                const prEl = document.createElement('p');
                prEl.innerHTML = element;

                const btnEl = document.createElement('button');
                btnEl.textContent = 'Удалить';
                btnEl.disabled = element === '';

                btnEl.addEventListener('click', () => {
                    reviewList.removeChild(divEl);
                    const array2 = localStorage.getItem(localStorage.key(i)).split('[@:@]');

                    const ind = array2.findIndex((elm) => elm === element);
                    array2.splice(ind, 1);

                    let value = "";
                    for (let j = 0; j < array2.length; j++) {
                        if (j > 0) {
                            value = value + '[@:@]';
                        }
                        value = value + array2[j];
                    };

                    localStorage.setItem(localStorage.key(i), value);
                });

                divEl.appendChild(prEl);
                divEl.appendChild(btnEl);
                console.log(divEl);
                reviewList.appendChild(divEl);
            });
        });

        pEl.innerHTML = localStorage.key(i);
        productList.insertAdjacentElement('beforeBegin', pEl);

    };
})