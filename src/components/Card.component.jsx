import dummy from './../default.png';
const Card = () => {
    return (
        <div className="card">
            <div className="card-header">
                <img src={dummy} alt={dummy} width="100%"/>
            </div>
            <div className="card-footer">
                <a href="#">Show</a>
            </div>
        </div>
    );
}

export default Card;