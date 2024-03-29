import { getSizes, setSize } from "./database.js"


// diamond function iterates through size array

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
    )
    
export const DiamondSizes = () => {
    const sizes = getSizes()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItemsArray.join("")
    html += "</ul>"

    return html
}

