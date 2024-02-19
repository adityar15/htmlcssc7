const API_URL = "https://jsonplaceholder.typicode.com/users"


function addFormEventListener()
{
    const searchForm = document.querySelector('#search-form')
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const userID = document.querySelector("#userid-input").value
        searchUserDetailsByID(userID)
    })
}



function searchUserDetailsByID(userID)
{
    if(userID > 10 || userID < 0)
    {
        alert("Please enter user id in range of 1-10")
        return
    }

    fetch(`${API_URL}/${userID}`).then((response) => {
        return response.json()
    }).then((data) => {
        if(!data?.email)
        {
            alert("User Id not found")
            return
        }
        hydrateUserDetails(data)
        // details of the user
       
    })
}

function hydrateUserDetails(userDetails)
{

    const usernameText = document.querySelector("#username-text")
    const emailText = document.querySelector("#email-text")
    const nameText = document.querySelector("#name-text")
    


    usernameText.innerHTML = userDetails.username
    emailText.innerHTML = `Email : ${userDetails.email}`    
    nameText.innerHTML = `Full name : ${userDetails.name}`
}

window.addEventListener('load', ()=>{
    addFormEventListener()
})