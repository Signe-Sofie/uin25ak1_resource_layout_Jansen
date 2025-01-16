let resourceHTML = ""


resources.map(resource => resourceHTML += `
            <ul>
                <li>
                    <p class="tab">${resource.category}</p>
                </li>
            </ul>`
        )

document.getElementById("navtabs").innerHTML = resourceHTML

function updateContent() {
    let content = ""
    resources.map((resource, index) => content += `
        <h2 id="headtext">${resource.category}</h2>
        <p>${resource.text}</p>
        <ul>
            <il>${resource.sources}</il>
        </ul>`
    ) 
    
}
document.getElementById("headtext").innerHTML = resourceHTML