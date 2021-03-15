const TopTeams = ({ best, topTeams }) => {
    // object destucturing ^ uper hai  
    return (
        <div>
            <h1>World's Best 3 Teams are:</h1>
            <p>The best team is {best}</p>
            <div>
                {topTeams.map((value, index) => {
                    return (
                        <h5>{index + 1}. {value}</h5>
                    );
                })}
            </div>
        </div>
    );
}

export default TopTeams;