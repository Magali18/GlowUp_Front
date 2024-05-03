import Cards from "../Components/Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../redux/cardHandler";

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    const products = useSelector ((state)=> state.card.products)
  if (!products){
    console.log('esta vacio')
  } else{
    console.log('esta con la info')
  }
    return (
        <div>
            <Cards products={products}/>
        </div>
    )
};
export default Home;