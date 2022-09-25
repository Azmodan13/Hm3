import  './Basket.css'

function Basket({trash}) {


    return(
        <div className="basket">
            <img src="https://cdn-icons-png.flaticon.com/512/3141/3141477.png" alt="" />
            <span className='cercle'>{trash}</span>
        </div>
    )
}

export default Basket