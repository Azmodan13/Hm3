import './Info.css'


function Info({item}) {





    return(
        <div className='info__wrapper'>
            <img className='info__img' src={item.image} alt={item.name} />
            <div className='info__title'>Name: <span>{item.name}</span> </div>
            <div>species: <span>{item.species}</span></div>

        </div>
    )
}

export default Info