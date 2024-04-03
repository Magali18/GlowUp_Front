import Cards from "../Components/Cards/Cards";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../redux/cardHandler";

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    return (
        <div>
            <Cards/>
        </div>
    )
};
export default Home;