function slidesPlugin() {
    const slides = document.querySelectorAll('.slide')

    function getRandomElement(arr) {
        let randIndex = Math.floor(Math.random() * arr.length);
        return arr[randIndex];
    }
    
   smoothly(getRandomElement(slides).classList.add('active'))
    
    for (const slide of slides){
        slide.addEventListener('click', () => {
            clearActiveClasses()
    
            smoothly(slide.classList.add('active'))
        })
    }
    
    function clearActiveClasses(){
        slides.forEach((slide) => {
            smoothly(slide.classList.remove('active'))
        })
    }
}
slidesPlugin()
