function customRender(reactElement, container){
  // // make a dom element
  // const domElement = document.createElement(reactElement.type)
  // // now inject inner element
  // domElement.innerHtTML = reactElement.children
  // domElement.setAttribute('href', reactElement.props.href)
  // domElement.setAttribute('target', reactElement.props.target)

  //4- container.appendChild(domElement)
  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML  = reactElement.children
  for (const prop in reactElement.props){
    domElement.setAttribute(prop, reactElement.props[prop])
  }

}










// the html u have returned , how does react sees it after compiling

const { Children, default: React } = require("react")

// 3- how in react elements r made, so we made them by ourselves whatever react returns it sees it as a tree
const reactElement = {
      // type tells what elements is of which type
      type: 'a',
      // object
      props : {
        href: 'https://google.com',
        target: '_blank'
      },
      Children: 'Click me to visit google'
}




// 5- that above one was not working (apni marzi s cheze banadi thi) so it turned out if the whole htmls was given it was working
const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)


const anotherUser = "chai and react"


// 6- real way to do this 
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target='_blank'},
  'click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)



// 1- take a container jisme root element ko uthake le aye
const mainContainer = document.querySelector('#root')
// we want to inject some element in root/div




//1-  render method is needed- inject reactElement into main container  
customRender(reactElement, main)

