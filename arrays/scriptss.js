const addresses = [
    "https://google.com",
    "https://bing.com",
    "https://duckduckgo.com"
]
// sets variable for list from html
const linkList = document.getElementById('linkList')
// loops through the array of addresses 
for (let i = 0; i < addresses.length; i++) {
    // creates const for a new element of li
    const addressLi = document.createElement('li')
    //adds the new element to the ul list in html
    linkList.appendChild(addressLi)
    //creates const for a (link)
    const link = document.createElement('a')
    //adds the a element to every element on the list 
    addressLi.appendChild(link)
    //writes the name of the link (without working link) to the list 
    link.textContent = addresses[i]
    //this sets the attribute foe the list to make the link work
    link.setAttribute('href', addresses[i])
}

// console.log(linkList)

