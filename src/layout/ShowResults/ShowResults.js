import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ShowResults = ({searchResults}) => {
    return (
        <ImageList sx={{ width: "100%" }} variant="woven" cols={5} gap={8}>
            {searchResults.map((searchResult) => (
                <ImageListItem key={searchResult.images.fixed_height.url}>
                <img
                    src={`${searchResult.images.fixed_height.url}?w=161&fit=crop&auto=format`}
                    srcSet={`${searchResult.images.fixed_height.url}?w=161&fit=crop&auto=format&dpr=2 2x`}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export default ShowResults
