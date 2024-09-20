import { useParams } from 'react-router-dom'

function SinglePromoDetails() {
    const { id } = useParams();
   
    
    return (
        <div>
            <h1>All info of id: {id}</h1>
            
        </div>
    )
}

export default SinglePromoDetails
