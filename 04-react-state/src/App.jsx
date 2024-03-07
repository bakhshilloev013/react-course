import './App.css';

function WhoAmI(props) {
    return (
        <div>
            <h1>
                My name is {props.name}, surname - {props.surname}
            </h1>
            <a href={props.link}>My profile</a>
        </div>
    );
}

function App() {
    return (
        <div>
            <WhoAmI name="John" surname="Smith" link="instagram.com" />
        </div>
    );
}

export default App;
