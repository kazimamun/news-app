import React from 'react';
import { useEffect } from 'react';

const AllNews = () => {
    useEffect(()=>{
        fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=7359cfc89d914e3a9edb4c4ac8524547')
            .then(res=>res.json())
            .then(data=>console.log(data.articles))
    })
    return (
        <div>
            
        </div>
    );
};

export default AllNews;