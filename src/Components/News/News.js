


export default function News({news}) {


    return(
        <div>
                            {news ? news.map((item)=> 
    <div>{item.title}</div>   
    ) : null}

        </div>
    )
}