import React, {useState} from 'react';
import ImageList from '@mui/material/ImageList';
import ItemGif from '../../components/ItemGif/ItemGif';
import { myFavs, SEARCH } from '../../helpers/constants';

const ShowResults = ({searchResults, pageLoaded, setSearchResults}) => {

    //const [searchResults, setsearchResults] = useState(searchResults)
    const dataLS = JSON.parse(localStorage.getItem(myFavs) || "[]");
    
    return (
        <ImageList sx={{ width: "100%" }} variant="woven" cols={5} gap={8}>
            {
            searchResults.map((searchResult) => {
                let dataImg;
                let isFav = false;
                if(pageLoaded === SEARCH){
                    isFav = (dataLS.some((itemFav) => itemFav.id === searchResult.id));
                    dataImg = {
                        id: searchResult.id,
                        src: searchResult.images.fixed_height.url,
                        title: searchResult.title
                    }
                } else{
                    dataImg = {...searchResult}
                    isFav = true;
                }

                return (
                    <ItemGif 
                        key={searchResult.id}
                        itemResult={dataImg } 
                        isFavorite={isFav}
                        setSearchResults={setSearchResults}
                        pageLoaded={pageLoaded}
                    />)
                }) 
                }
        </ImageList>
    );
}

export default ShowResults
