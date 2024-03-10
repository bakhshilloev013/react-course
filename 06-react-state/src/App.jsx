import { Component } from 'react';
import './App.css';

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 24,
            text: '++',
            position: '',
        };
    }

    nextYear = () => {
        this.setState((state) => ({
            years: state.years + 1,
        }));
    };

    commitInputValue = (e) => {
        this.setState({
            position: e.target.value,
        });
    };

    render() {
        const { name, surname, link } = this.props;
        const { position, years } = this.state;
        return (
            <div>
                <button onClick={this.nextYear}>{this.state.text}</button>
                <h1>
                    My name is {name}, surname - {surname}, age - {years},
                    position - {position || 'default'}
                </h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    <input
                        type="text"
                        value={position}
                        onChange={this.commitInputValue}
                    />
                </form>
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
