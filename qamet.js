const styles = {
    kisi: [
        { name: "Fade", img: "sekil/fade.jpg", years: "Ən çox istifadə olunduğu illər: 2010-2023", ageGroup: "15-35 yaş", description: "Yanları sıfır, üst hissəsi uzun olan bu model əsasən şəhər tərzində istifadə olunur. Stilistlər tərəfindən ən çox 2010-cu ildən bu yana tövsiyə edilir.", celebrities: "David Beckham, Brad Pitt, Zayn Malik və digərləri." },
        { name: "Buzz Cut", img: "sekil/buzz cut.jpg", years: "Ən çox istifadə olunduğu illər: 2000-2020", ageGroup: "13-30 yaş", description: "Qısa və rahat, hərbi tərzə bənzər bu model 2000-ci illərin əvvəllərində geniş yayılıb və idmançılar arasında populyardır.", celebrities: "David Beckham, Brad Pitt, Zayn Malik və digərləri." },
        { name: "Pompadour", img: "sekil/pompadour.jpg", years: "Ən çox istifadə olunduğu illər: 1950-2023", ageGroup: "18-40 yaş", description: "Köhnə Hollivud stilindən ilhamlanan bu model, 1950-ci illərdən bu yana istifadə olunur və hələ də dəbdədir.", celebrities: "David Beckham, Brad Pitt, Zayn Malik və digərləri." },
        { name: "Crew Cut", img: "sekil/crew cut.jpg", years: "Ən çox istifadə olunduğu illər: 1940-2020", ageGroup: "16-35 yaş", description: "Universitet tələbələri və iş adamları üçün uyğun olan səliqəli kəsimdir.", celebrities: "Channing Tatum, Ryan Reynolds, Tom Hardy" },
        { name: "Undercut", img: "sekil/undercut.jpg", years: "Ən çox istifadə olunduğu illər: 2015-2023", ageGroup: "18-30 yaş", description: "Yanlar sıfır, üst uzun. 2015-ci ildən hipster tərzində geniş yayılıb.", celebrities: "Zayn Malik, Brad Pitt, Macklemore" },
        { name: "Quiff", img: "sekil/quiff.jpg", years: "Ən çox istifadə olunduğu illər: 2010-2022", ageGroup: "20-40 yaş", description: "Klasik və modernin qarışığı olan bu stil, ofis və dəbli görüşlər üçün uyğundur.", celebrities: "David Gandy, Zac Efron, Justin Timberlake" },
        { name: "Caesar", img: "sekil/caesar.jpg", years: "Ən çox istifadə olunduğu illər: 1990-2020", ageGroup: "15-30 yaş", description: "Antik Roma imperatorlarından ilhamlanıb, qısa və səliqəli bir görünüş yaradır.", celebrities: "George Clooney, Russell Crowe, Gerard Butler" },
        { name: "Side Part", img: "sekil/Side part.jpg", years: "Ən çox istifadə olunduğu illər: 1920-2023", ageGroup: "25-45 yaş", description: "Klassik görünüş istəyənlər üçün, əsasən korporativ mühitdə çox istifadə olunur.", celebrities: "Leonardo DiCaprio, Henry Cavill, Matt Bomer" },
        { name: "Faux Hawk", img: "sekil/fauxhawk.jpg", years: "Ən çox istifadə olunduğu illər: 2000-2020", ageGroup: "16-35 yaş", description: "Mohawk kəsiminin yumşaq versiyasıdır, daha gündəlik istifadəyə uyğundur.", celebrities: "Adam Levine, Cristiano Ronaldo, Jared Leto" },
        { name: "High Top", img: "sekil/hightop.jpg", years: "Ən çox istifadə olunduğu illər: 1980-1995", ageGroup: "15-25 yaş", description: "80-ci illərdə hip-hop mədəniyyətində geniş istifadə olunmuşdur.", celebrities: "Will Smith, Bobby Brown, Kid 'n Play" },
        { name: "Flat Top", img: "sekil/flattop.jpg", years: "Ən çox istifadə olunduğu illər: 1980-2000", ageGroup: "15-30 yaş", description: "Yanları sıx, üstü düz kəsilmiş modeldir. Texniki baxımdan çətin kəsimdir.", celebrities: "Wesley Snipes, Vanilla Ice, Mr. T" },
        { name: "French Crop", img: "sekil/frenchcrop.jpg", years: "Ən çox istifadə olunduğu illər: 2000-2023", ageGroup: "18-35 yaş", description: "Qabaq tellər qısa, arxa və yanlar daha da yığcam olur. Avropa stilidir.", celebrities: "Cillian Murphy, Tom Holland, Kit Harington" },
        { name: "Spiky", img: "sekil/spiky.jpg", years: "Ən çox istifadə olunduğu illər: 1990-2010", ageGroup: "14-28 yaş", description: "Jellə dik duran saçlar. Xüsusilə yeniyetmələr arasında məşhurdur.", celebrities: "Ryan Seacrest, Zac Efron, Justin Bieber" },
        { name: "Slick Back", img: "sekil/slickback.jpg", years: "Ən çox istifadə olunduğu illər: 1920-2023", ageGroup: "25-45 yaş", description: "Arxaya daranmış saçlar — klassik və ciddi görünüş üçün əla seçimdir.", celebrities: "David Beckham, Jake Gyllenhaal, Jon Hamm" },
        { name: "Taper", img: "sekil/taper.jpg", years: "Ən çox istifadə olunduğu illər: 2010-2023", ageGroup: "18-40 yaş", description: "Aşağıdan yuxarıya doğru incələn saç stili. Gündəlik istifadə üçün ideal.", celebrities: "Michael B. Jordan, Chris Evans, Shawn Mendes" },
        { name: "Ivy League", img: "sekil/Ivy League.jpg", years: "Ən çox istifadə olunduğu illər: 1950-2020", ageGroup: "20-50 yaş", description: "Harvard və Yale stilində klassik tələbə görünüşü.", celebrities: "Ryan Gosling, Matt Damon, Jake Gyllenhaal" },
        { name: "Bowl Cut", img: "sekil/Bowl Cut.jpg", years: "Ən çox istifadə olunduğu illər: 1990-2000", ageGroup: "10-18 yaş", description: "Uşaqlıqdan tanıdığımız kasaya bənzər sadə kəsim.", celebrities: "Jim Carrey (Dumb and Dumber), Elijah Wood (Frodo), Angus T. Jones" },
        { name: "Mohawk", img: "sekil/Mohawk.jpg", years: "Ən çox istifadə olunduğu illər: 1980-2010", ageGroup: "18-30 yaş", description: "Ortası uzun, yanları sıfır — pank stilinin təmsilçisi.", celebrities: "Travis Barker, Mr. T, David Draiman" },
        { name: "Short Fringe", img: "sekil/Short Fringe.jpeg", years: "Ən çox istifadə olunduğu illər: 2015-2023", ageGroup: "15-30 yaş", description: "Qısa qabaq tellərlə modern və yenilikçi görünüş yaradır.", celebrities: "Timothée Chalamet, Finn Wolfhard, Troye Sivan" },
        { name: "Messy Textured", img: "sekil/Messy Textured.jpg", years: "Ən çox istifadə olunduğu illər: 2018-2023", ageGroup: "20-35 yaş", description: "Təbii və dağınıq saçlar, gündəlik rahatlıq üçün uyğundur.", celebrities: "Harry Styles, Kit Harington, Joe Keery" }
    ],
    qadin: [
        { name: "Bob", img: "sekil/Bob.jpg", years: "Ən çox istifadə olunduğu illər: 1920-2023", ageGroup: "20-45 yaş", description: "Qısa və simmetrik qadın saç modeli. Klassik görünüşlü və asan formaya salınan saç stilidir.", celebrities: "Taylor Swift, Emma Watson, Natalie Portman" },
        { name: "Pixie", img: "sekil/Pixie.jpg", years: "Ən çox istifadə olunduğu illər: 1950-2023", ageGroup: "18-40 yaş", description: "Çox qısa, iddialı və müasir. Enerjili və praktiki qadınlar üçün uyğun modeldir.", celebrities: "Halle Berry, Charlize Theron, Anne Hathaway" },
        { name: "Layered", img: "sekil/Layered.jpg", years: "Ən çox istifadə olunduğu illər: 1990-2023", ageGroup: "20-50 yaş", description: "Lay-lay kəsilmiş, həcmli saç. Hər növ saç tipinə uyğundur və vizual dolğunluq yaradır.", celebrities: "Jennifer Aniston, Priyanka Chopra, Jennifer Lopez" },
        { name: "Shag", img: "sekil/Shag.jpg", years: "Ən çox istifadə olunduğu illər: 1970-2020", ageGroup: "20-40 yaş", description: "Dağınıq və qat-qat görünüş. Rahat, sərbəst və retro təsirli modeldir.", celebrities: "Miley Cyrus, Alexa Chung, Meg Ryan" },
        { name: "Lob", img: "sekil/Lob.jpg", years: "Ən çox istifadə olunduğu illər: 2010-2023", ageGroup: "25-45 yaş", description: "Uzun bob modelinin versiyası. Klassik və modernin birləşməsi sayılır.", celebrities: "Kim Kardashian, Olivia Wilde, Emma Stone" },
        { name: "Wavy", img: "sekil/Wavy.jpg", years: "Ən çox istifadə olunduğu illər: 2000-2023", ageGroup: "18-40 yaş", description: "Təbii dalğalı saçlar. Hər gün istifadə üçün çox uyğundur.", celebrities: "Blake Lively, Zendaya, Shakira" },
        { name: "Straight Long", img: "sekil/Straight Long.jpg", years: "Ən çox istifadə olunduğu illər: Hər zaman", ageGroup: "20-50 yaş", description: "Ucaboy, düz qadın saç modeli. Klassik və zərif görünüş yaradır.", celebrities: "Selena Gomez, Demi Lovato, Angelina Jolie" },
        { name: "Curly Bob", img: "sekil/Curly Bob.jpg", years: "Ən çox istifadə olunduğu illər: 1980-2020", ageGroup: "20-40 yaş", description: "Qısa və qıvırcıq saç stili. Həcmi sevənlər üçün idealdır.", celebrities: "Rihanna, Kerry Washington, Viola Davis" },
        { name: "Side Bangs", img: "sekil/Side Bangs.jpg", years: "Ən çox istifadə olunduğu illər: 2005-2023", ageGroup: "18-35 yaş", description: "Yana düşən ön tellər. Göz qapaqlarını vurğulayan romantik görünüş yaradır.", celebrities: "Ariana Grande, Selena Gomez, Taylor Swift" },
        { name: "Blunt Cut", img: "sekil/Blunt Cut.jpg", years: "Ən çox istifadə olunduğu illər: 2000-2023", ageGroup: "25-45 yaş", description: "Eyni uzunluqda düz kəsim. Minimalist və müasir görünüş yaradır.", celebrities: "Kendall Jenner, Lucy Hale, Dua Lipa" },
        { name: "Feather Cut", img: "sekil/Feather Cut.jpg", years: "Ən çox istifadə olunduğu illər: 1980-2000", ageGroup: "30-50 yaş", description: "Tüklü qatlı görünüş. Retro sevənlər üçün ideal seçimdir.", celebrities: "Farrah Fawcett, Cindy Crawford, Kate Hudson" },
        { name: "Asymmetrical", img: "sekil/Asymmetrical.jpg", years: "Ən çox istifadə olunduğu illər: 2000-2020", ageGroup: "20-40 yaş", description: "Tərəfləri fərqli uzunluqda. Müasir və cəsarətli görünüşdür.", celebrities: "Victoria Beckham, Rihanna, Sarah Paulson" },
        { name: "Undercut Bob", img: "sekil/Undercut Bob.jpg", years: "Ən çox istifadə olunduğu illər: 2015-2023", ageGroup: "25-35 yaş", description: "Altı qısa, üstü bob stili. Yenilikçi və gənc görünüş yaradır.", celebrities: "Scarlett Johansson, Ruby Rose, Kristen Stewart" },
        { name: "Boho Waves", img: "sekil/Boho Waves.jpg", years: "Ən çox istifadə olunduğu illər: 2010-2023", ageGroup: "20-40 yaş", description: "Təbii, sərbəst dalğalar. Festival və yaz görünüşləri üçün mükəmməldir.", celebrities: "Vanessa Hudgens, Sienna Miller, Gigi Hadid" },
        { name: "French Bob", img: "sekil/French Bob.jpg", years: "Ən çox istifadə olunduğu illər: 2020-2023", ageGroup: "20-35 yaş", description: "Qısa, qıvrım və fransız ilhamlı bob. Zəriflik və sənətkarlıq təəssüratı yaradır.", celebrities: "Audrey Tautou, Marion Cotillard, Lily Collins" },
        { name: "Bangs with Layers", img: "sekil/Bangs with Layers.jpg", years: "Ən çox istifadə olunduğu illər: 2000-2023", ageGroup: "18-40 yaş", description: "Ön tellərlə qatlı saç. Göz oxşayan və dəbdə qalan modeldir.", celebrities: "Zooey Deschanel, Dakota Johnson, Selena Gomez" },
        { name: "Beach Waves", img: "sekil/Beach Waves.jpg", years: "Ən çox istifadə olunduğu illər: 2015-2023", ageGroup: "20-40 yaş", description: "Sanki dənizdən çıxmış kimi dalğalar. Rahat və yay üçün ideal seçimdir.", celebrities: "Kate Hudson, Blake Lively, Jennifer Lawrence" },
        { name: "Classic Bun", img: "sekil/Classic Bun.jpg", years: "Ən çox istifadə olunduğu illər: Hər zaman", ageGroup: "25-50 yaş", description: "Təmiz və klassik topuz. Rəsmi tədbirlər və gündəlik istifadə üçün idealdır.", celebrities: "Meghan Markle, Audrey Hepburn, Angelina Jolie" },
        { name: "Curls & Fringe", img: "sekil/Curls & Fringe.jpg", years: "Ən çox istifadə olunduğu illər: 2010-2023", ageGroup: "20-35 yaş", description: "Qıvırcıq saçlar və ön çırpma. Canlı və həcmi sevənlər üçün uyğundur.", celebrities: "Zendaya, Lorde, Tracee Ellis Ross" },
        { name: "Modern Shag", img: "sekil/Modern Shag.jpg", years: "Ən çox istifadə olunduğu illər: 2020-2023", ageGroup: "18-35 yaş", description: "Yeni dövrə uyğun shag stili. Rock və alternativ tərzi sevən qadınlara uyğundur.", celebrities: "Billie Eilish, Taylor Momsen, Florence Welch" }
    ]
};


function openModal(index, type) {
    const style = styles[type][index];
    const modal = document.getElementById("modal");
    modal.style.display = "flex";

    let barberInfo = '';
    let servicesInfo = '';

    if (type === 'kisi') {
        barberInfo = `
            <hr>
            <h3>💈 Bərbərlər və Əlaqə Nömrələri:</h3>
            <ul>
                <li><strong>Allahverdiyev Əli</strong> — <a href="tel:+9940555522178">+994 55 552 21 78</a></li>
                <li><strong>Mustafayev Fəqan</strong> — <a href="tel:+994504564556">+994 50 456 45 56</a></li>
                <li><strong>Elvin Həsənov</strong> — <a href="tel:+994778814539">+994 77 881 45 39</a></li>
            </ul>
        `;

        servicesInfo = `
            <hr>
            <h3>🧾 Xidmətlər və Qiymətlər:</h3>
            <ul>
                <li>Saç kəsimi — 15 AZN</li>
                <li>Üz kəsimi — 5 AZN</li>
                <li>Keratin — 50 AZN</li>
                <li>Perma — 50 AZN</li>
            </ul>
        `;
    } else if (type === 'qadin') {
        barberInfo = `
            <hr>
            <h3>💇‍♀️ Stilistlər və Əlaqə Nömrələri:</h3>
            <ul>
                <li><strong>Nərmin Zeynalova</strong> — <a href="tel:+994553330207">+994 55 333 02 07</a></li>
                <li><strong>Hüseynova Aytac</strong> — <a href="tel:+994777770707">+994 77 777 07 07</a></li>
                <li><strong>Paşayeva Mələk</strong> — <a href="tel:+994515274145">+994 51 527 41 45</a></li>
            </ul>
        `;
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

