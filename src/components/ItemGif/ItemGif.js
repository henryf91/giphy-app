import React, {useState} from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Star } from '@mui/icons-material';
import { myFavs, SEARCH } from '../../helpers/constants';

const ItemGif = ({itemResult, isFavorite, setSearchResults, pageLoaded}) => {

    const [isFav, setIsFav] = useState(isFavorite)

    const saveItemFavs = () => {
        if(!isFav) {
            const dataLS = JSON.parse(localStorage.getItem(myFavs) || "[]");
            const updatedDataLS = JSON.stringify([
                ...dataLS,
                {
                    'id': itemResult.id,
                    'src': itemResult.src,
                    'title': itemResult.title,
                }
            ]);
            localStorage.setItem(myFavs, updatedDataLS);
            setIsFav(true)
        
        }else{
            const dataLS = JSON.parse(localStorage.getItem(myFavs));
            const updatedDataLS = dataLS.filter((itemFav) => itemFav.id !== itemResult.id);
            localStorage.setItem(myFavs, JSON.stringify(updatedDataLS));
            if(pageLoaded !== SEARCH) setSearchResults(updatedDataLS) 
            setIsFav(false);
        }
    }

    return(
        <ImageListItem>
            <img
                src={`${itemResult.src}?w=161&fit=crop&auto=format`}
                srcSet={`${itemResult.src}?w=161&fit=crop&auto=format&dpr=2 2x`}
                loading="lazy"
            />
            <ImageListItemBar
                sx={{
                    background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                }}
                title={itemResult.title}
                position="top"
                actionIcon={
                    <IconButton
                        sx={{ color: 'white' }}
                        aria-label={`star`}
                        onClick={() => {saveItemFavs()}}
                    >
                        {!isFav ? (<StarBorderIcon /> ) : (  <Star /> ) }
                    </IconButton>
                }
                actionPosition="left"
            />
        </ImageListItem>
    );
}

export default ItemGif;