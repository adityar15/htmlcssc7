// console.log("Hello !")

// // const name = "Aditya"
// // let name = "Aditya"
// // console.log(name)


// // name = "Adi"

// // console.log(name)


// let city = "Lancaster"

// // template syntax
// // let statement = `My name is ${name} and I live in ${city}`

// // console.log(statement)

// const numbers = [1,2,3,4,5,6,7,8,9]

// let squaredEvenNumbers = numbers.filter((currentValue, index, numbers)=>{
//     return currentValue % 2 == 0
// }).map((currentValue, index, numbers)=>{
//     return currentValue * currentValue
// })


// console.log(squaredEvenNumbers)

// // map fn will be used for list rendering in react
// let squaredNumbers = numbers.map((currentValue, index, numbers)=>{
//     return currentValue * currentValue
// })

// console.log(squaredNumbers)
// // console.log(numbers[4])


// const sum = numbers.reduce((accumalatedValue, currentValue, index, numbers)=>{
//     accumalatedValue = accumalatedValue + currentValue
//     return accumalatedValue
// }, 0)

// console.log(sum)

// const person = {
//     name: "Aditya",
//     lastname: "Kadam",
//     address: {
//         line: "XYZ",
//         line2:"ABC"
//     }
// }

// // console.log(person.name)

// // console.log(person.address.line2)

// // console.log(multiply(10, 20))
// // console.log(multiply(35, 12312))


// function multiply(num1, num2)
// {
//     // whatever code within this function
//     // let num1 = 10
//     // let num2 = 20

//     return num1 * num2
// }



// const add = (num1, num2) => num1 + num2

// // console.log(add(10, 20))


// // for(let i=0; i<numbers.length; i++)
// // {
// //     console.log(numbers[i])
// // }

// let i = 0

// // while(i<numbers.length)
// // {
// //     console.log(numbers[i])
// //     i++
// // }

const API_URL = "https://api.github.com/users"

// document.createElement('html_element_TagName')

function searchUserDetailsOnGithub()
{

    const myButton = document.getElementById('my-button')
    const usernameInput = document.querySelector('#username-input')


    myButton.addEventListener('click', () => {
        
        const username = usernameInput.value

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
            
            // details of the user
            const image = document.querySelector("#user-image")

            const usernameText = document.querySelector("#username-text")

            const followerCount = document.querySelector("#followers-count")

            const publicRepos = document.querySelector("#public-repos")       


            image.src = data.avatar_url

            usernameText.innerHTML = data.login
            usernameText.href = data.html_url

            followerCount.innerHTML = `Followers : ${data.followers}`    
            
            publicRepos.innerHTML = `Public Repos : ${data.public_repos}`

           
        })
    })

}




window.addEventListener('load', () => {
    searchUserDetailsOnGithub()
})


