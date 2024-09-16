function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    // pegar tag img
    const img = document.querySelector('#profile img')
    // substituir a img
    if(html.classList.contains('light')) {
        // si tiver ligth.mode, adicionar a imagem light 
       img.setAttribute('src','assets/avatar-ligth.png ')
    } else {
    //   se tiver dark,mode adicionar a img dark,mode
     img.setAttribute('src','assets/avatar.png ')
    }

  
}
