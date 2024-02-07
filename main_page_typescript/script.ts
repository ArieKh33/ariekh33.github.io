const data = [
    {
        id: "HTML5",
        title: "My experiences with: HTML5",
        description: "No website exists without HTML and as my introduction into programming I have to say that I enjoy working with it a lot since it's simple and very intuitive.",
        logo: "main_page_language_logos/html-logo.svg"
    },
    {
        id: "CSS3",
        title: "My experiences with: CSS3",
        description: "Unlike HTML, CSS isn't mandatory but it will definitely make your website stand out more, and what I aim to accomplish with css is to make every website as simple and readable as I possible.",
        logo: "main_page_language_logos/css3-logo.svg"
    },
       {
        id: "PHP",
        title: "My experiences with: PHP",
        description: "After playing around with some HTML and CSS it was about time to start with an actual programming language and PHP would be my first. It gave me a nice introduction into how to make simple programs and a great introduction of how to work with databases.",
        logo: "main_page_language_logos/php-logo.svg"
    },
       {
        id: "JavaScript",
        title: "My experiences with: JavaScript",
        description: "Only working with HTML and CSS to create websites is fun and all but it leaves a lot to be desired, so when I found out about the endless possibilities with JavaScript I was delighted to see that it is definitely one of the easier and more fun languages to use.",
        logo: "main_page_language_logos/javascript-logo.svg"
    },
       {
        id: "Bootstrap",
        title: "My experiences with: Bootstrap",
        description: "My preference at first was to hard code everything, and to a point it is still very important to learn the fundamentals, but after looking around I found bootstrap and I have to say that it is an interesting experience to work with. It was a nice and simple introduction on how frameworks work.",
        logo: "main_page_language_logos/bootstrap-logo.svg"
    },
]

function listenToButton(language_button){
    const languageTitle = document.getElementById("titleLanguage");
    const languageDescription = document.getElementById("languageExplain");
    const languageLogo = document.getElementById("language_logo") as HTMLImageElement;

    if(languageTitle && languageDescription && languageLogo){
        // @ts-ignore
        const result = data.find(item => item.id === language_button.id);

        languageTitle.innerHTML = result.title;
        languageDescription.innerHTML = result.description;
        languageLogo.src = result.logo;
    }

}

const getButtons = () => {
    const language_buttons = document.querySelectorAll(".language-button");
    let i: number;
    for(i = 0; i < language_buttons.length; i += 1){
        if(language_buttons[i]){
            language_buttons[i].addEventListener("click", (event) => {
                listenToButton(event.target);
            });
        }
    }
}

getButtons();