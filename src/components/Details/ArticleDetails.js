import {useState} from "react";

const ArticleDetails = () => {

    const [location, setLocation] = useState('');

    const getLocation = () => {
        console.log(window.location.pathname);
        setLocation(window.location.pathname);
    }
    
    return(
        <div onLoad={getLocation}>
            <h2>{location}</h2>
        </div>
    );
}

export default ArticleDetails;