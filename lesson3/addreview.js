const addProductReviewEl = document.getElementById("add_product_review");
console.log(addProductReviewEl);

addProductReviewEl.addEventListener('click', function () {

    const nextval =
        localStorage.getItem(document.querySelector("#product_name").value)
            ? localStorage.getItem(document.querySelector("#product_name").value) + '[@:@]' + document.querySelector("#product_review").value
            : document.querySelector("#product_review").value;
    localStorage.setItem(
        document.querySelector("#product_name").value,
        nextval
    );

});

