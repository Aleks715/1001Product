document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById('product-select');
    const priceDisplay = document.getElementById('price-display');
    
    if (select) {
        select.addEventListener('change', function() {
            priceDisplay.innerText = "ფასი: " + this.value + " ₾";
        });
    }
});



document.addEventListener("DOMContentLoaded", () => {

    const select = document.getElementById('product-select');
    const priceDisplay = document.getElementById('price-display');
    const form = document.querySelector("form");

    if (select) {
        select.addEventListener('change', function() {
            priceDisplay.innerText = "ფასი: " + this.value.split("—")[1];
        });
    }


    form.addEventListener("submit", function(e) {
        e.preventDefault(); // აღარ გადაგიყვანს სხვა გვერდზე

        const phone = document.querySelector('input[name="phone"]').value;

        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(() => {

            form.innerHTML = `
                <div class="success-message">
                    <h2>მადლობა შეკვეთისთვის ❤️</h2>
                    <p>ჩვენ მალე დაგიკავშირდებით.</p>
                </div>
            `;

        })
        .catch(() => {
            alert("დაფიქსირდა შეცდომა, სცადეთ თავიდან");
        });

    });

});


const images = document.querySelectorAll(".gallery img");
const viewer = document.getElementById("image-viewer");
const bigImage = document.getElementById("big-image");
const close = document.getElementById("close");

images.forEach(img => {
    img.addEventListener("click", () => {
        viewer.style.display = "flex";
        bigImage.src = img.src;
    });
});

close.onclick = () => {
    viewer.style.display = "none";
};

viewer.onclick = (e) => {
    if(e.target === viewer){
        viewer.style.display = "none";
    }
};



document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById('product-select');
    const quantityInput = document.getElementById('quantity');
    const priceDisplay = document.getElementById('price-display');
    const form = document.querySelector("form");

    function updatePrice() {
        // ფასის ამოღება select-ის value-დან (მაგ: "20 ₾" -> 20)
        const unitPriceText = select.value.split("—")[1];
        const unitPrice = parseInt(unitPriceText.replace("₾", "").trim());
        const quantity = parseInt(quantityInput.value) || 1;
        
        // ფასის გადაანგარიშება
        priceDisplay.innerText = "ფასი: " + (unitPrice * quantity) + " ₾";
    }

    if (select) select.addEventListener('change', updatePrice);
    if (quantityInput) quantityInput.addEventListener('input', updatePrice);

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        })
        .then(() => {
            form.innerHTML = `
                <div class="success-message" style="padding: 20px; text-align: center;">
                    <h2>მადლობა შეკვეთისთვის ❤️</h2>
                    <p>ჩვენ მალე დაგიკავშირდებით.</p>
                </div>
            `;
        })
        .catch(() => alert("დაფიქსირდა შეცდომა, სცადეთ თავიდან"));
    });
});
