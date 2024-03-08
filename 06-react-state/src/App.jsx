import { Component } from 'react';
import './App.css';

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 24,
            text: '++'
        };
    }

    nextYear = () => {
        this.setState((state) => ({
            years: state.years + 1,
        }));
    };

    render() {
        const { name, surname, link } = this.props;
        return (
            <div>
                <button onClick={this.nextYear}>{ this.state.text }</button>
                <h1>
                    My name is {name}, surname - {surname}, age -{' '}
                    {this.state.years}
                    {this.state.age}
                </h1>
                <a href={link}>My profile</a>
            </div>
        );
    }
}

function App() {
    return (
        <div>
            {/* значаения для свойств компонента передаются в виде атрибутов, эти атрибуты будут свойствами в объекте свойств props */}
            <WhoAmI name="John" surname="Smith" link="instagram.com" />
            <WhoAmI name="Alex" surname="Pereira" link="instagram.com" />
        </div>
    );
}

export default App;
