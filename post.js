window.addEventListener('load', ()=>{
    addFormEventListener()
})


function addFormEventListener()
{
    const postForm = document.querySelector('#post-form')
    
    postForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)

        const userInput = Object.fromEntries(formData.entries())

        createPost(userInput)
    })
}


function createPost(postDetails)
{
    if(!postDetails.post_title || !postDetails.post_content)
    {
        alert("Please enter all the details")
        return
    }
    // posts refers to blog articles posts

    const userInputObject = {
        title: postDetails.post_title,
        body: postDetails.post_content,
        userId: 1
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInputObject),
    })
    .then(response => response.json())
    .then(data => {
        console.log("Post created successfully", data)
    })
}