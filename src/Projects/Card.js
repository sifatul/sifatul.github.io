import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        [theme.breakpoints.down('sm')]: {
            padding: 0,

        },
    },
    media: {
        height: 140,
        backgroundPosition: 'top'
    },
    productName: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        [theme.breakpoints.down('sm')]: {
            whiteSpace: 'break-spaces',

        },
    }
}));

function getTags(tags) {
    return tags.map(item => {
        return <Button className="m-1" variant="outlined" color="primary" >
            {item}
        </Button>
    });
}

export default function MediaCard(props) {
    const classes = useStyles();
    console.log("project: ", props)
    const { productName, productSummary, productThumbnailUrl, productUrl, productWebsite, subtitle, tags = [] } = props.item;
    return (
        <Card className={classes.root}>
            <CardHeader

                title={productName}
                subheader={subtitle}
            />
            <CardMedia
                className={classes.media}
                image={productThumbnailUrl}
                title="Contemplative Reptile"
            />
            <CardContent>
                {/* <Typography gutterBottom variant="h5" component="h2" className={classes.productName}>
                        {productName}
                    </Typography> */}


                <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                {productSummary}
                    {/* {productSummary.length > 80 ? (productSummary.substring(0, 80) + '...') : productSummary} */}
                </Typography>
                <Box display="flex" flexWrap="wrap" flexDirection="row" justifyContent="start">
                    {getTags(tags)}
                </Box>



            </CardContent>
            <CardActions>

                <Button variant="contained" color="primary" href={productUrl || productWebsite} target="_blank">         Live</Button>
            </CardActions>
        </Card>
    );
}
