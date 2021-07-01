import React from "react";
import CardHeader from './header';
import CardBody from './body';
import CardFooter from './footer';

const ProductCard = ( { product }) => {
  const platformLogos = product.platforms.map( (platform) => platform.platform_logo.url);
  
  const bodyProps = {
    cover: product.cover,
    firstReleaseDate: product.first_release_date,
    genres: product.genres,
    summary: product.summary,
    screenshot: product.screenshots
  };
  

  return <div>
    <CardHeader name = {product.name} platform_logo = {platformLogos} ></CardHeader>
    <CardBody {...bodyProps} />
    <CardFooter />
  </div>;
};

export default ProductCard;
