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
    
}