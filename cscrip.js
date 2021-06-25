const contain = document.getElementById('container')

// ! navbar
const navBar = document.createElement('div')
contain.appendChild(navBar)
navBar.classList.add('navbar')
//header
const brand = document.createElement('h1')
navBar.appendChild(brand)
brand.textContent = 'HighOnCoding'
// navigation
const navList = document.createElement('ul')
navBar.appendChild(navList)
//home li 
const homeLink = document.createElement('li')
homeLink.textContent = 'Home'
homeLink.classList.add('active')
navList.appendChild(homeLink)
//category li
const CategoriesLink = document.createElement('li')
CategoriesLink.textContent = 'Categories'
navList.appendChild(CategoriesLink)

// ! header2 
const subheader = document.createElement('div')
contain.appendChild(subheader)
subheader.classList.add('second-header')
// subheading
const title = document.createElement('h2')
subheader.appendChild(title)
title.textContent = 'Curse of the Current Reviews'
// paragraph
const para = document.createElement('div')
subheader.appendChild(para)
para.textContent = 'Random paragraph'

// ! content
const content = document.createElement('div')
contain.appendChild(content)
content.classList.add('main-content')
//header
const heading = document.createElement('h3')
content.appendChild(heading)
heading.textContent = 'Hello WatchKit'
//paragraph
const paragraph = document.createElement('p')
content.appendChild(paragraph)
paragraph.textContent = 'Last month Apple released the anticipated WatchKit Framework for developers in the'
//footer
const foot = document.createElement('footer')
content.appendChild(foot)
foot.textContent = 'This is a footer'

// ! content 2
const content2 = document.createElement('div')
contain.appendChild(content2)
content2.classList.add('main-content')
//header 
const heading2 = document.createElement('h3')
content2.appendChild(heading2)
heading2.textContent = 'Introduction to Swift'
//paragraph
const paragraph2 = document.createElement('p')
content2.appendChild(paragraph2)
paragraph2.textContent = 'Paragraph2 has so much stuff'
//footer
const foot2 = document.createElement('footer')
content2.appendChild(foot2)
foot2.textContent = 'This is footer2'