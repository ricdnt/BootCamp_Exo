import React from "react";
import ClickUnClick from './screenShootButton';

const CardBody = ({ cover, firstReleaseDate, genres, summary, screenshot }) => {

  const [showScreenShots, setShowScreenShots] = React.useState(false);

  return ( 
  
  <div>

    <div className = "d-flex bg-primary w-100">
        <div>
          <img src = {cover.url} alt="" className = "pr-2" />
        </div>

       <div>
        <p>Release Date: {firstReleaseDate}</p>
        <p>{genres.map((genre) => genre.name)}</p>
        <p>{summary}</p>
        </div>
    </div>

    {showScreenShots ? (
      <div>
      <div className = "bg-success text-center p-3">
        <button className = "btn btn-dark"
          onClick = {() => setShowScreenShots(false)}

        >Hide Screenshots
        </button>
      </div>
        
          
     <div className = "row">
              
                {screenshot.map((screenshot, index) => (
                       <div className = "col-2" key= {`screenshot-${index}`}>
                    
                           <img src= {screenshot.url}  className="img-fluid" />
                    
                        </div>
                  ))}
             
               </div>

          
    </div>
    ):(

      <div>
        
       <div className = "bg-success text-center p-3">
          <button className = "btn btn-dark"
          onClick = {() => setShowScreenShots(true)}
          >Show Screenshots
          </button>
        </div>

        

         </div>
    
    )}

    
    
</div>

  )
};

export default CardBody;
