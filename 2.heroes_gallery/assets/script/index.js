let heroes = `[
{
    "name": "Супермен",
    "universe": "DC Comics",
    "alterego": "Кларк Кент",
    "occupation": "борец за справедливость",
    "friends": "собака Крипто",
    "superpowers": "непробиваемость, суперсила, полёт, самоисцеление, суперзрение и суперслух, классный костюм",
    "url": "https://images.unsplash.com/photo-1650568922476-7e5aa8ed62b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fCVEMSU4MSVEMSU4MyVEMCVCRiVEMCVCNSVEMSU4MCVEMCVCQyVEMCVCNSVEMCVCRHxlbnwwfHwwfHx8MA%3D%3D",
    "info": "Полная противоположность своему противнику Бэтмену. Если Брюс Уэйн был простым человеком и стал героем, то Супермен героем родился, но вынужден был изображать выходца из бедной канзасской семьи. Последний представитель планеты Криптон был отправлен на Землю прямо перед тем, как его родина была уничтожена. Супермен — некий хамелеон от мира комиксов. В своем первом выпуске в 1938 году он был просто человек-огромный мускул, который умел только разбивать стены и выбивать двери. Позднее к его умениям добавилась способность летать. Дальше у многочисленных воплощений Кларка, от подростка в «Тайнах Смоллвиля» до величественного «Человека из стали», разный уровень и количество суперспособностей. Неизменным остается его слабое место — уязвимость к Криптониту, радиоактивному веществу с родной планеты."
},
{
    "name": "Железный человек",
    "universe": "Marvel Comics",
    "alterego": "Тони Старк",
    "occupation": "гений, миллиардер, плейбой, филантроп",
    "friends": "Мстители",
    "superpowers": "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
    "url": "https://images.unsplash.com/photo-1578319957886-2fbf15574e96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fCVEMCVCNiVEMCVCNSVEMCVCQiVEMCVCNSVEMCVCNyVEMCVCRXxlbnwwfHwwfHx8MA%3D%3D",
    "info": "Пожалуй, самый популярный современный супергерой. У него много общего с мрачной птицей ночи Бэтменом: оба потеряли родителей в детстве, стали борцами с преступностью без особых сверхсил, невероятно богатые. Только если Бэтменом восхищаются, то Тони Старка — обожают :) То ли дело в шикарной актерской игре Роберта Дауни мл., который выбил роль у Николаса Кейджа и Тома Круза, то ли в хорошо прописанном персонаже. Прототипом для героя послужили Илон Маск и изобретатель Говард Хьюз. Железный Человек не всегда ходил в красном модном костюме: в своих первых версиях 1963 года он был скромного серого цвета. Увы, в киновоплощении бронекостюм даже не из металла — его делали из пластика и стекловолокна."
},
{
    "name": "Тор",
    "universe": "Marvel Comics",
    "alterego": "нет; полное имя — Тор Одинсон",
    "occupation": "борец за справедливость, скандинавский бог",
    "friends": "Мстители",
    "superpowers": "всё, что может бог, плюс молот Мьелнир",
    "url": "https://plus.unsplash.com/premium_photo-1674684220582-5f104666708f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUQwJUJDJUQwJUJFJUQwJUJCJUQwJUJEJUQwJUI4JUQxJThGfGVufDB8fDB8fHww",
    "info": "Персонаж Тора основан на образе одноименного скандинавского бога. Тор во вселенной Marvel — родной сын Одина и древнейшей богини Геи. После рождения сына Один забрал его в Асгард, где растил вместе со своей женой, богиней Фригг. Последнюю Тор всегда считал своей настоящей матерью и лишь много позже узнал правду о своем рождении. Стоит сказать, что до нынешнего Тора в исполнении Криса Хемсворта у супергероя было несколько воплощений. В одном из них он погиб в схватке с мифическим змеем Мидгардом. Это привело к Рагнареку — некоему апокалипсису в скандинавской мифологии."
}
]`;

document.addEventListener("DOMContentLoaded", function (){
    let heroesCards = JSON.parse(heroes);
    let cardsContent = "";
    for (let hero of heroesCards){
        cardsContent += `<div class ="hero" data-hero="${hero.name}">
        <h2>${hero.name}</h2>
        <img src="${hero.url}" alt="${hero.name}">
        <div>Автор: ${hero.name}</div>
        <div>Вселенная: ${hero.universe}</div>
        <div>АльтерЭго: ${hero.alterego}</div>
        <div>Занятие: ${hero.occupation}</div>
        <div>Друзья: ${hero.friends}</div>
        <div>Суперспособность: ${hero.superpowers}</div>
        <div class="rating" data-hero="${hero.name}">
                    ${[1, 2, 3, 4, 5].map(i => `<div class="star" data-star="${i}"></div>`).join("")}
        </div>
        </div>`;
    }
    document.getElementById("cardsContainer").innerHTML = cardsContent;
    
    document.getElementById("cardsContainer").addEventListener("click", function(event) {
        if (event.target.classList.contains("star")) {
            const heroElement = event.target.closest(".hero");
            const heroName = heroElement.getAttribute("data-hero");
            const rating = event.target.getAttribute("data-star");

            let heroRatings = JSON.parse(localStorage.getItem("heroRatings")) || {};
            heroRatings[heroName] = rating;
            localStorage.setItem("heroRatings", JSON.stringify(heroRatings));

            const ratingStars = heroElement.querySelectorAll(".star");
            ratingStars.forEach(star => {
                star.classList.remove("active");
                if (parseInt(star.getAttribute("data-star")) <= parseInt(rating)) {
                    star.classList.add("active");
                }
            });
        }
    });

    const savedRatings = JSON.parse(localStorage.getItem("heroRatings")) || {};
    document.querySelectorAll(".hero").forEach(heroElement => {
        const heroName = heroElement.getAttribute("data-hero");
        if (savedRatings[heroName]) {
            const ratingStars = heroElement.querySelectorAll(".star");
            ratingStars.forEach(star => {
                if (parseInt(star.getAttribute("data-star")) <= parseInt(savedRatings[heroName])) {
                    star.classList.add("active");
                }
            });
        }
    });
});







