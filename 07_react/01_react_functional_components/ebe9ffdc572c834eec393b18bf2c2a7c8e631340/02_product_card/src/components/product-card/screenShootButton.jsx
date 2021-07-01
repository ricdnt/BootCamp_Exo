import React from 'react';



function  ClickUnClick( {screenshot} ) {

      const [ on, setOn ] = React.useState("SHOW SCREENSHOOT");

 return (
    <div> 
        <button className = "bg-secondary rounded" onClick = { () => {
            
            return (
                <div>
                {screenshot.map((screenshot, index ) => { <img src = {screenshot.url} key = {index} /> })}
                </div>
                  )

            setOn("X")
           
         } }>
        {on}
        </button>
    </div>

 )
}

export default ClickUnClick;

/*     
                   // screenshot.map( (screenshot, index ) => { <img src = {screenshot.url} key = {index}/> })
                     //  </div>
                     //  </div>)
                     //  {setOn(coucou)}
                     //*/
