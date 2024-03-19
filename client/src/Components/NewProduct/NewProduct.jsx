import Grid from "@mui/material/Grid"
import "./NewProduct.css"
const NewProduct = ()=>{
    return(
<div className="fondo">
    <Grid container>
        <Grid item xs={12} sm={6} className="bordes" style={{height:'100vh'}}></Grid>
        <Grid item xs={12}  sm={6} className="bordes" style={{height:'100vh'}}></Grid>

    </Grid>

</div>
    )
};
export default NewProduct;