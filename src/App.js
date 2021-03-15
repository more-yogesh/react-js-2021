import TopTeams from './components/TopTeams.component';

function App() {

    let name = "YOGESH";

    let teams = ['india', 'England', 'USA'];

    let Greeting = () => <h1>Hii</h1>;

    const WelcomeGreet = () => <div>
        <h1>Welcome React Developers</h1> <h2>(React JS)</h2>
    </div>;




    const { totalRuns, wins, loose } = {
        totalRuns: 50520,
        wins: 680,
        loose: 266
    };




    // react provide syntactic sugar: In computer science, syntactic sugar is syntax within a programming language that is designed to make things easier to read or to express.

    return (
        <div>
            {/* <h1>Hello {name}</h1> */}
            {/* <h2>{teams.length}</h2> */}
            {/* <Greeting /> */}
            {/* <WelcomeGreet /> */}
            {/* <TopTeams best="INDIA" />
            <TopTeams best={name} /> */}
            <h2>Total Runs: {totalRuns}</h2>
            <h2>Total Wins: {wins}</h2>

            <TopTeams best="India" topTeams={teams} />
        </div>
    );
}

export default App;