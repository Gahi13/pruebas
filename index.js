let traducion={
    ingles:"The cat communicates through vocalizations. The most popular are its characteristic meowing and purring, but it can howl, moan, growl and hiss.11 In addition, it adopts poses or expressions that inform its peers, its enemies or its caregivers, of its mood or its intentions. Along with the dog, it is the most popular domestic animal, as a pet, as an aid in the fight against rodents or both. Because of its wide range of potential prey, its high efficiency as a predator, and its high reproductive success—especially if colonies are artificially supplied with food without taking additional measures to limit their fertility—the domestic cat is included in the list of one hundred most harmful invasive alien species in the world12 from the International Union for Conservation of Nature.",
    español: "El gato se comunica a través de vocalizaciones. Las más populares son su característico maullido y el ronroneo, pero puede aullar, gemir, gruñir y bufar.11​ Además, adopta poses o expresiones que informan, a sus congéneres, sus enemigos o sus cuidadores, de su ánimo o sus intenciones. Junto con el perro, es el animal doméstico más popular, como mascota, como ayuda en la lucha contra roedores o ambas cosas. Por su amplio abanico de presas potenciales, por su alta eficiencia como depredador, y por su elevado éxito reproductivo —especialmente si se suministra artificialmente alimento a las colonias sin tomar medidas adicionales para limitar su fertilidad— el gato doméstico está incluido en la lista de las cien especies exóticas invasoras más dañinas del mundo12​ de la Unión Internacional para la Conservación de la Naturaleza."
}

let botonIngles=document.getElementById('ingles')
let botonEspañol=document.getElementById('español')
let texto= document.getElementById('texto')

botonIngles.addEventListener('click', function() {
texto.textContent= traducion.ingles
})
botonEspañol.addEventListener('click', function() {
    texto.textContent= traducion.español
 })