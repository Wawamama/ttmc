let themes = [
    {
        theme: 'Patrick Bruel'
    },
    {
        theme: 'Choucroute'
    },
    {
        theme: 'Las Vegas'
    },
    {
        theme: 'Winamax'
    },
    {
        theme: 'Koh Lanta'
    }
]


const pickTheme = (themes) => {
    let randomIndex = Math.floor(Math.random()* themes.length);
    console.log(randomIndex)
    return themes[randomIndex].theme;
}

const showTheme = () => {
    document.querySelector('.theme').textContent = pickTheme(themes);
    console.log('here')
}


showTheme();
console.log('script loadeeeed');
console.log(pickTheme(themes));