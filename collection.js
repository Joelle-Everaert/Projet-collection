const collection = [
        {
            title: 'Friends',
            author: ['Marta Kauffman', 'David Crane'],
            image: 'photos/friends.jpg',
            category: [
                {
                    genre: 'Comedy',
                    tagStyle : "tag is-primary mx-2"
                },
                {
                    genre: 'Romance',
                    tagStyle: "tag is-danger"
                }
            ],
            link: 'https://www.youtube.com/watch?v=-6-rrJIL-nM',
            description: " Les péripéties de six jeunes new-yorkais liés par une profonde amitié. Entre amour, travail et famille, ils partagent leurs bonheurs et leurs soucis.",
        },

        {
            title: 'How I met your Mother',
            author: ['Carter Bays', 'Graig Thomas'],
            image: 'photos/HowIMetYourMother.jpeg',
            category: [
                {
                    genre: 'Comedy',
                    tagStyle : "tag is-primary mx-2"
                },
                {
                    genre: 'Romance',
                    tagStyle: "tag is-danger"
                }
            ],
            link: 'https://www.youtube.com/watch?v=tCy5IbsQi4s',
            description: "Le Ted du futur raconte en 2030 à ses enfants comment il a rencontré leur mère en écumant les soirées hallucinantes avec ses meilleurs amis.",
        },

        {
            title: 'Orange is the new black',
            author: 'Jenji Kohan',
            image: 'photos/orange is the new black.jpg',
            category: [
                {
                    genre: 'Comedy',
                    tagStyle : "tag is-primary mx-2"
                },
                {
                    genre: 'Drama',
                    tagStyle: "tag is-link"
                }
            ],
            link: 'https://www.youtube.com/watch?v=lNvocVbXE_Y',
            description: "Une new-yorkaise privilégiée finit en prison quand elle est rattrapée par son passé criminel.",
        },

        {
            title: 'How to Get Away with Murder',
            author: 'Peter Nowalk',
            image: 'photos/murder.jpg',
            category: [
                {
                    genre: 'Thriller',
                    tagStyle : "tag is-warning mx-2"
                },
                {
                    genre: 'Mystery',
                    tagStyle: "tag is-dark"
                }
            ],
            link: 'https://www.youtube.com/watch?v=xsNolDDn7-I',
            description: "La série raconte l’histoire d'Annalise Keating, professeure de droit pénal et avocate renommée à la tête de son propre cabinet à Philadelphie. Chaque année, quelques-uns de ses étudiants ont le privilège de travailler dans son cabinet. Mais un jour, ces derniers sont impliqués dans un meurtre…",
        },

        {
            title: 'Game of Thrones',
            author: ['David Benioff', 'D. B. Weiss', 'George R. R. Martin'],
            image: 'photos/Game of throne.jpg',
            category: [
                {
                    genre: 'Fantasy',
                    tagStyle : "tag is-info mx-2"
                },
                {
                    genre: 'Drama',
                    tagStyle: "tag is-link"
                }
            ],
            link: 'https://www.youtube.com/watch?v=aAF12LNAeNI',
            description: "Neuf familles nobles rivalisent pour le contrôle du Trône de Fer dans les sept royaumes de Westeros. Pendant ce temps, des anciennes créatures mythiques oubliées reviennent pour faire des ravages.",
        },

        {
            title: 'Stranger Things',
            author:['Matt Duffer', 'Ross Duffer'],
            image: 'photos/stranger thing.jpg',
            category: [
                {
                    genre: 'Science fiction',
                    tagStyle : "tag is-black mx-2"
                },
                {
                    genre:'Horror',
                    tagStyle: "tag is-light"
                }
            ],
            link: 'https://www.youtube.com/watch?v=IZeBDCuApTo',
            description: "À Hawkins, dans l'Indiana, en 1983. Lorsque Will Byers disparaît de son domicile, ses amis se lancent dans une recherche semée d'embûches pour le retrouver.",
        },

        {
            title: 'The Walking dead',
            author: 'Frank Darabont',
            image: 'photos/The walking dead.jpg',
            category: [
                {
                    genre:'Horror',
                    tagStyle :"tag is-light mx-2"
                },
                {
                    genre:'Drama',
                    tagStyle: "tag is-link"
                }
            ],
            link: 'https://www.youtube.com/watch?v=AbtiqJGhWyY',
            description: "Rick Grimes cherche sa femme et son fils après s'être réveillé d'un long coma. Il découvre alors un monde désolé, ravagé par une terrible épidémie.",
        },

        {
            title: 'Black Mirror',
            author: 'Charlie Brooker',
            image: 'photos/black mirror.jpg',
            category: [
                {
                    genre: 'Thriller',
                    tagStyle : "tag is-warning mx-2"
                },
                {
                    genre:'Science fiction',
                    tagStyle:"tag is-black"
                }
            ],
            link: 'https://www.youtube.com/watch?v=nSDviEdvw4U',
            description: "haque épisode de cette anthologie montre la dépendance des hommes vis-à-vis de tout ce qui a un écran et les conséquences de cette dépendance.",
        },

        {
            title: 'Scorpion',
            author: 'Nick Santora',
            image: 'photos/Scorpion.jpg',
            category: [
                {
                    genre:'Mystery',
                    tagStyle :"tag is-dark mx-2"
                },
                {
                    genre:'Drama',
                    tagStyle:"tag is-link"
                }
            ],
            link: 'https://www.youtube.com/watch?v=BnIT59GUzto',
            description: "Inspiré d'une histoire vraie, le projet est centré Walter, un génie excentrique, et son réseau international de super-génies qui forment la dernière ligne de défense contre les menaces complexes du monde moderne.",
        },

        {
            title: 'The Umbrella Academy',
            author: ['Jeremy Slater','Steve Blackman'],
            image: 'photos/Umbrella.jpg',
            category: [
                {
                    genre:'Fantastic',
                    tagStyle :"tag is-success mx-2"
                },
                {
                    genre:'Drama',
                    tagStyle:"tag is-link"
                }
            ],
            link: 'https://www.youtube.com/watch?v=95mXLi_6tW8',
            description: "Une famille de super-héros déjantés se réunit pour tenter de résoudre le mystère entourant la mort de leur père, la menace d'une apocalypse et bien plus encore. Adaptée de la bande dessinée de Gerard Way et Gabriel Bá.",
        },
    ]


// DEBUT DU JS

    const containercard = document.querySelector('.containercard');
    containercard.innerHTML='';

    const columns = document.createElement('div')
    columns.className='columns is-multiline'

    containercard.appendChild(columns);
    

    for (let element of collection) {

    // Premiere partie de la carte
       
        const column = document.createElement('div');
        column.className = 'column is-one-quarter'; 

        const card = document.createElement('div')
        card.className ='card has-background-white-ter'

        const imageContent=document.createElement('div')
        imageContent.className = 'card-image has-text-centered px-8'
        
        const image=document.createElement('img')
        image.setAttribute('src', element.image)
        image.setAttribute('alt', 'Image de description')
        

        imageContent.appendChild(image);
        card.appendChild(imageContent)
        column.appendChild(card);
        columns.appendChild(column);

    // fin de premiere partie de la carte
       
        
    // contenue de la carte (tag/titre/contenu)

        const cardContent= document.createElement('div');
        cardContent.className = 'card-content'

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

    // début du footer 
        
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

    //fin du footer 

// FIN JS
        

        

        
        


       
    
    }

    

