import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InspirationApi from "../../utils/InspirationApi";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import './style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxHeight: 345,
  },
  media: {
    height: 150,
  },
  // quote: {
  //   font-family: 'Yellowtail', cursive;
  // },
  // author: {

  // }
}));

function Quotes() {

 const [data, setResult] = useState([]);
 const classes = useStyles();

 useEffect(() => {
    InspirationApi.getZen()
    .then(res => setResult( res.data))
    .catch(err => console.log(err));
    }, []); 
    console.log(data);
  return (
      <div className={classes.root}>
        {data.map((quote) => (
          <Card>
            <CardActionArea className="quoteClass">
              <CardMedia
                // className={classes.media}
                // image={props.image}
              /> 
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                <div className='quote'>
                  {quote.q}
                </div>
                <div className={classes.author}>
                  - {quote.a}
                </div>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
  );
}

export default Quotes;

