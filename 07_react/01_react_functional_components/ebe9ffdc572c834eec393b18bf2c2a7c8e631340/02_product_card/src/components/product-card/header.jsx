import React from "react";


const CardHeader = ( {name, platform_logo} ) => {

  console.log(platform_logo);

  return <div className = "bg-dark text-white p-2 card-header w-100">
     {name}
     <div className = "logo">
     {platform_logo.map((logo) => {
  return (
    <img  src = {logo} key= { `platform_logo-${name}` } />
  )
})}
    </div>
     </div>;
};

export default CardHeader;

// It must display:
//- product name
//- platforms logos

/*
{platform_logo.map((logo) => {
  return (
    <img src = {logo} />
  )
})}*/
