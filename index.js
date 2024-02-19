const API_URL = "https://api.github.com/users"

// document.createElement('html_element_TagName')

function addFormEventListener()
{
    const searchForm = document.querySelector('#search-form')
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const username = document.querySelector("#username-input").value
        searchUserDetailsOnGithub(username)
    })
}


function hydrateUserDetails(userDetails)
{
    const image = document.querySelector("#user-image")

    const usernameText = document.querySelector("#username-text")

    const followerCount = document.querySelector("#followers-count")

    const publicRepos = document.querySelector("#public-repos")       

    image.src = userDetails.avatar_url

    usernameText.innerHTML = userDetails.login
    usernameText.href = userDetails.html_url

    followerCount.innerHTML = `Followers : ${userDetails.followers}`    
    
    publicRepos.innerHTML = `Public Repos : ${userDetails.public_repos}`

}


function searchUserDetailsOnGithub(username)
{

        if(username == "")
        {
            alert("Please enter your Github username")
            return
        }

        fetch(`${API_URL}/${username}`).then((response) => {
            return response.json()
        }).then((data) => {

            if(data?.message)
            {
                alert("Username not found")
                return
            }
            hydrateUserDetails(data)
            // details of the user
           
        })
}




window.addEventListener('load', () => {
    addFormEventListener()
})


