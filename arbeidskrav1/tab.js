
let resourceHTML = ""


resources.map(resource => resourceHTML += `
            
                    <button id="tab" onclick="showContent('${resource.category}')" >${resource.category}</button>
               `
        )

document.getElementById("navtabs").innerHTML = resourceHTML

function showContent(categoryname) {
    const filter = resources.filter(resource => resource.category === categoryname)
    const selectedCategory = filter[0]
    const contentHTML = `
        <article>
            <h2 id="headtext">${selectedCategory.category}</h2>
            <p id="text">${selectedCategory.text}</p>
            <nav id="links">
                <ul>
                    ${selectedCategory.sources
                        .map(
                            source =>
                                `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`
                        )
                        .join('')}
                </ul>
            </nav>
        </article>
        `
    document.getElementById("showContent").innerHTML = contentHTML
}

showContent("HTML")



