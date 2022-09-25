import {useEffect} from 'react'



function Data({setData}) {


    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((data) => {
            setData(data.results);
        });
    }, []);

}


export default Data