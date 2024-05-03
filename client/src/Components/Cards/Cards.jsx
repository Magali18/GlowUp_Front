import RecipeReviewCard from '../Card/Card'
import './Cards.css'

const Cards = ({products})=> {
  console.log(products)
  if(products.length === 0){
    return <div>Cargando...</div>;
  }else{
    return (
      <div className='card-list'>
   {products.map((products, index) => (
      <RecipeReviewCard  product={products} key={index} />
    ))}
     </div>
 )
  }
  
};

export default Cards;