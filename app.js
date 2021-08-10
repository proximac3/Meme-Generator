// Submit Button
const createNewMeme = document.querySelector('form')

//Delete meme button
const deleteButton = document.createElement('button')
deleteButton.innerText = 'Delete Meme'

// create meme click event
createNewMeme.addEventListener('click', function (e) {
    e.preventDefault()

    //input values
    const image = document.querySelector('form #image')
    const topText = document.querySelector('form #top_text')
    const bottomText = document.querySelector('form #bottom_text')

    //creating meme
    const meme = document.createElement('div')
    const memeImage = document.createElement('img')
    meme.append(memeImage, deleteButton)

    const topTextP = document.createElement('p')
    const BottomTextP = document.createElement('p')
    topTextP.innerText = topText.value
    BottomTextP.innerText = bottomText.value
    meme.append(BottomTextP)
    meme.prepend(topTextP)

    //style meme
    meme.children[1].style.border = '2px solid rgb(76,137,128)'
    meme.children[1].style.width = '600px'
    meme.children[1].style.height = '700px'
    meme.children[1].style.padding = '2px'
    meme.style.margin = "20px 0px"
    meme.style.position = 'relative'

    //meme text style
    meme.children[0].style.position = 'absolute'
    meme.children[3].style.position = 'absolute'
            //top text
    meme.children[0].style.left = '50%'
    meme.children[0].style.transform = 'translateX(-50%)'
    meme.children[0].style.fontSize = '25px'
    meme.children[0].style.margin = '0px 0px'
    meme.children[0].style.fontWeight = 'bold'
    meme.children[0].style.fontFamily = 'courier New'
    //bottom text
    meme.children[3].style.left = '50%'
    meme.children[3].style.transform = 'translateX(-50%)'
    meme.children[3].style.top = '90%'
    meme.children[3].style.fontSize = '25px'
    meme.children[3].style.margin = '0px 0px'
    meme.children[3].style.fontWeight = 'bold'
    meme.children[3].style.fontFamily = 'courier New'
    
    //delete button style
    meme.children[2].style.position = 'absolute'
    meme.children[2].style.width = '100px'
    meme.children[2].style.top = '710px'
    meme.children[2].style.right = '10px'
    meme.children[2].style.backgroundColor = 'rgb(227,228,193)'
    meme.children[2].style.borderRadius = '5px'
    
    // Results selector.
    const results = document.querySelector('.results')

    // append element to DOM
    if (e.target.type === 'submit') {
        meme.children[1].src = image.value
        results.appendChild(meme)

        //clearing input fields after submission
        image.value = ' '
        topText.value = ' '
        bottomText.value = ' '

    }


})

//delete meme click event
deleteButton.addEventListener('click', function (e) {
    e.target.parentElement.remove()
    // console.log(e.target.parentElement)
})








