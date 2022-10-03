import { useEffect } from "react";


export default function NewsData({setNews}) {


    useEffect(() => {
        fetch("https://hn.algolia.com/api/v1/search?query=redux")
            .then((response) => response.json())
            .then((data) => {
                setNews(data.results);
        });
    }, []);

}


