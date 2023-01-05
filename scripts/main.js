// JavaScript om de menu-items te laten werken als knoppen
const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        // Voer de actie uit die je wilt uitvoeren als de gebruiker op de link klikt
    });
});




//leeftijd dropdown 0-100 loop
for (var i = 0; i <= 100; i++) {
    var option = document.createElement("option");
    option.text = i;
    option.value = i;
    ageSelect.add(option);
}