function toggleMode() {
    const html = document.documentElement;
    
    // if(!html.classList.contains('dark')) {
    //     html.classList.add('dark')
    // } else {
    //     html.classList.remove('dark')
    // }
    html.classList.toggle('dark')

    const img = document.querySelector(".profile_img")
    if (!html.classList.contains('dark')) {
        img.setAttribute('src', './img/luffy.webp')
        img.setAttribute('alt', 'Imagem do personagem héroi Luffy sorrindo da obra One Piece')
    } else {
        img.setAttribute('src', './img/blackbeard.webp')
        img.setAttribute('alt', 'Imagem do personagem vilão Barba Negra sorrindo da obra One Piece')
    }

    const p = document.querySelector('.profile_name')
    if (!html.classList.contains('dark')) {
        p.textContent = "Monkey D. Luffy";
    } else {
        p.textContent = "Marshall D. Teach";
    }

    const characterLink = document.querySelector("#link-character")
    if (!html.classList.contains('dark')) {
        characterLink.setAttribute('href', 'https://onepiece.fandom.com/pt/wiki/Monkey_D._Luffy')
    } else {
        characterLink.setAttribute ('href', 'https://onepiece.fandom.com/pt/wiki/Marshall_D._Teach')
    }

    const powersLink = document.querySelector("#link-powers")
    if (!html.classList.contains('dark')) {
        powersLink.setAttribute('href', 'https://www.youtube.com/watch?v=8fy8HAvs7Q4')
    } else {
        powersLink.setAttribute ('href', 'https://www.youtube.com/watch?v=5ZPu6vh4ZvM')
    }
}
