import dummy from './../default.png';
const Card = ({ name, price, id }) => {
    const showDetails = (e) => {
        e.preventDefault();
        console.log(e);
        // alert('Product id' + id);
    }
    return (
        <div className="card">
            <div className="card-header">
                <img src={dummy} alt={dummy} width="100%" />
            </div>
            <div onClick={showDetails}>
                <p>{name}</p>
                <p>{price}</p>
            </div>
            <div className="card-footer">
                <a href="#" onClick={showDetails}>Show</a>
            </div>
        </div>
    );
}

export default Card;

// 1. functional component
// 2. class component