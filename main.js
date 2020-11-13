// DEBUT DU JS

// CONTAINERCARD
const containercard = document.querySelector('.containercard');
containercard.innerHTML='';

const columns = document.createElement('div')
columns.className='columns is-multiline'

containercard.appendChild(columns);

    //FILTRE EXO --> changé le nom de la grosse boucle 
    // for (let element of collection par la nom de notre constante)
    
    // ==> serie en deux mots

    // const serieEnDeuxMots = []
    // for (let element of collection){
    //     if(element.title.match(' ')){
    //         serieEnDeuxMots.push(element)
    //     }
    // }

    // ==> serie commence par H

    // const serieParH =[]
    // for (let element of collection){
    //     if(element.title.startsWith('H')){
    //         serieParH.push(element)
    //     }
    // }

    // Serie par genre

    // const serieParGenre =[]
    // for(let element of collection){
    //     if(element.category.find(c => c.genre === 'Horror')){
    //         serieParGenre.push(element)
    //     }
    // }

for (let element of collection) {

// Column
    const column = document.createElement('div');
    column.className = 'column is-one-quarter'; 

    const card = document.createElement('div')
    card.className ='card has-background-white-ter'
// Image
    const imageContent=document.createElement('div')
    imageContent.className = 'card-image has-text-centered px-8'
    
    const image=document.createElement('img')
    image.setAttribute('src', element.image)
    image.setAttribute('alt', 'Image de description')
    

    imageContent.appendChild(image);
    card.appendChild(imageContent)
    column.appendChild(card);
    columns.appendChild(column);

// CARD-CONTENT      

    const cardContent= document.createElement('div');
    cardContent.className = 'card-content'

// TAG (on fait une boucle)

for (let tag of element.category) {
    const tag1 = document.createElement('span');
    tag1.innerText = tag.genre;
    tag1.className = tag.tagStyle;
    cardContent.appendChild(tag1);
    }

    const title = document.createElement('p')
    title.className= 'title is-3'
    title.textContent= element.title

    const subtitle= document.createElement('p')
    subtitle.className= 'subtitle is-6'
    subtitle.textContent = element.author

    const content= document.createElement('div')
    content.style.paddingBottom='20px'
    content.classNAme='content has-text-justified'
    content.textContent= element.description

    card.appendChild(cardContent)
    cardContent.appendChild(title)
    cardContent.appendChild(subtitle)
    cardContent.appendChild(content)

//FOOTER
    
    const footer= document.createElement('footer');
    footer.className = 'card-footer'
    

    const lienYoutube=document.createElement('a')
    lienYoutube.className= 'card-footer-item fas fa-2x'
    lienYoutube.setAttribute('href', element.link)
    lienYoutube.setAttribute('target', '_blank')

    const iconeYoutube=document.createElement('i')
    iconeYoutube.className='fab fa-youtube-square'

    lienYoutube.appendChild(iconeYoutube)
    cardContent.appendChild(footer)
    footer.appendChild(lienYoutube)

}
//FIN JS