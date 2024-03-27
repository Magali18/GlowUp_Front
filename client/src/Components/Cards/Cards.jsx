import RecipeReviewCard from '../Card/Card'
import './Cards.css'
const arrayCard = [RecipeReviewCard, RecipeReviewCard, RecipeReviewCard,RecipeReviewCard,RecipeReviewCard,RecipeReviewCard];
const Cards = ()=> {
    return (
        <div className='card-list'>
      {arrayCard.map((Card, index) => (
        <Card key={index} />
      ))}
        </div>
    )
};

export default Cards;