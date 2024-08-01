// Behind Scenes In React App

let  root = document.querySelector("#root")
function AddInHtml(Element, root){
    let domElement = document.createElement(Element.tag)
    domElement.innerHTML = Element.child
    
    for (const key in Element.props) {
            domElement.setAttribute(key , Element.props[key])
    }

    root.appendChild(domElement)
}

//here we take HTMl tag and Create in DOM
let Element = {
    tag: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    child: "Click for Open Google"
}

AddInHtml(Element,root)