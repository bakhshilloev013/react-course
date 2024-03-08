import './App.css';

// props - это объект со свойтсвами переденными в этот компонент
function WhoAmI(props) {
    // исходя из того что props это объект его можно деструктурировать либо в поле для аргументов либо обыденным нам способом:
    const { name, surname, link } = props;
    return (
        <div>
            <h1>
                My name is {name}, surname - {surname}
            </h1>
            <a href={link}>My profile</a>
        </div>
    );
}

function App() {
    return (
        <div>
            {/* значаения для свойств компонента передаются в виде атрибутов, эти атрибуты будут свойствами в объекте свойств props */}
            <WhoAmI name="John" surname="Smith" link="instagram.com" />
        </div>
    );
}

export default App;
