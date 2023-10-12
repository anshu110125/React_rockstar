import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
    return(
        <div>
 <h3>custom react to main</h3>
        </div>
       
    
    )
    }
    // const reactElement = {
    //     type: 'a',
    //     props: {
    //         href: 'https://google.com',
    //         target: '_blank'
    //     },
    //     children: 'Click me to visit google'
    // }
    
    const anElement=(
        <a href="https://google.com" target='_blank'>Visit google</a> 
    )
    const reactElement=React.createElement(
        'a',
        {href:'http://google.com',target:'_blank'},
        'click to visit google'
    )

    

ReactDOM.createRoot(document.getElementById('root')).render(
     <App/>
)
