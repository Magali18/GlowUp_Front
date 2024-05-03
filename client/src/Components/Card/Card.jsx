import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IoCopyOutline } from "react-icons/io5";



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card sx={{ maxWidth: "100%", bgcolorolor: "#ffff" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#87e5db' }} aria-label="recipe">
            R
          </Avatar>
        }
       
        title={props.product.name}
        subheader={
          <React.Fragment>
            <span style={{ marginRight: '5px' }}>IU:</span>
            {props.product.id} <IconButton aria-label="copy" size="large">
              <IoCopyOutline fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
      <CardMedia
        color="#ffff"
        component="img"
        height="194"
        image={props.cover_letter}
        alt={props.cover_letter}
      />
      <CardContent>
        <Typography variant="body2">
          {props.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
       
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Descripcion:</Typography>
          <Typography paragraph>{props.name}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
