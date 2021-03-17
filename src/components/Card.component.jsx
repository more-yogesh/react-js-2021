import dummy from './../default.png';
const Card = ({ name, price }) => {
    return (
        <div className="card">
            <div className="card-header">
                <img src={dummy} alt={dummy} width="100%" />
            </div>
            <div>
                <p>{name}</p>
                <p>{price}</p>
            </div>
            <div className="card-footer">
                <a href="#">Show</a>
            </div>
        </div>
    );
}

export default Card;

// 1. functional component
// 2. class component