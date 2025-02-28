function CustomRender(reactElement , container){
    // domelement bana ke usme reactelemt ka sara chiz dedo
    // yaha har attribute ke liye alga se likh rahe hai
   /* const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href' , reactElement.props.href)
    domElement.setAttribute('target' , reactElement.props.target)
    // ab dom ko append kar do root me 
    container.appendChild(domElement);*/

    // effect aprroch 
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
       if(prop === ' children'){
        continue;
       } 
       domElement.setAttribute(prop , reactElement.props[prop])
    }

    container.appendChild(domElement);
}



// ract me kaise render hota hai wo dekho tum jo component likte ho wo aise hi tree me convert hota hai react me
const reactElement = {
    type: 'a',
    props: {
        href: 'https:// google.com',
        target: '_blank'
    } ,
    children : '<h1>Click me to Visit Google</h1>'
}


const maincontainer = document.querySelector('#root')

// ab jo tum elmetn banye  usko root me inject kar do

CustomRender(reactElement , maincontainer)

// ab react ka jo develper hai wo bhi kuch apne hisab se react elemnt banya hogga na not like thant

const reactelement = reactElement.createElement(
    // first paranetr should be tag 
    'a',
    //second should be attribyte or object and last me text aur sabse lst me jo vaiable hai wo deo agar koi haii to
    {href :'https://google.com' , target: '_blank'},
    'click me to visit Google'
)
// ab render kar do rectelemtnt ko yaha nahi hoaga kyki ye jsx nahi hai


