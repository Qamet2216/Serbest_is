        servicesInfo = `
            <hr>
            <h3>💄 Xidmətlər və Qiymətlər:</h3>
            <ul>
                <li>Saç kəsimi — 20 AZN</li>
                <li>Keratin — 50-150 AZN</li>
                <li>Perma — 50-150 AZN</li>
                <li>Makiyaj — 40 AZN</li>
            </ul>
        `;
    }
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <div class="modal-body">
                <img src="${style.img}" alt="${style.name}">
                <div class="modal-text">
                    <h2>${style.name}</h2>
                    <p><strong>1. Ən çox istifadə olunduğu illər:</strong> ${style.years.replace("Ən çox istifadə olunduğu illər: ", "")}</p>
                    <p><strong>2. Yaş qrupu:</strong> ${style.ageGroup}</p>
                    <p><strong>3. Saç haqqında məlumat:</strong> ${style.description}</p>
                    <p><strong>4. Məşhur istifadəçilər:</strong> ${style.celebrities}</p>
                    ${barberInfo}
                    ${servicesInfo}
                </div>
            </div>
        </div>
    `;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function showStyles(type) {
    const gallery = document.getElementById("gallery");
    const input = document.getElementById("searchInput");
    gallery.innerHTML = "";
    input.style.display = "block";

    styles[type].forEach((style, index) => {
        const card = document.createElement("div");
        card.className = "style-card";
        card.innerHTML = `
            <img src="${style.img}" alt="${style.name}" onclick="openModal(${index}, '${type}')">
            <p>${style.name}</p>
        `;
        gallery.appendChild(card);
    });
}

function searchStyles() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".style-card");

    cards.forEach(card => {
        const name = card.querySelector("p").textContent.toLowerCase();
        card.style.display = name.includes(input) ? "block" : "none";
    });
}

