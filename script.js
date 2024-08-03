const haikus = [
                "Seems like each time I'm with you I loose my mind -- In Too Deep (All Killer No Filler)",
                "The more you take could be, and you'll lose more than you ever knew",
                "One thing I know is that I'll be alright, I know that everything will be just fine",
                "I know my hair is a mess, and you're a little bit high",
                "All I wanna know is whether I should stay, or is it time for me to go?",
                "I just wanna feel your head laying on my chest, so hold me now",


];

function mostrarSumAleatorio() {
    const randomIndex = Math.floor(Math.random() * haikus.length);
    document.getElementById('haiku').innerHTML = haikus[randomIndex];
}