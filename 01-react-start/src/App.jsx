import './App.css';

const Header = () => {
    return <h2>Hello world!</h2>;
};

const Field = () => {
    const holder = 'Enter Here';
    const styledField = {
        width: '300px',
    };
    return <input type="text" placeholder={holder} style={styledField} />;
};

function Btn() {
    const text = 'Log in';
    const logged = true;

    // const res = () => {
    //     return 'Log in';
    // };
    // return <button/>
    // return <button>{res()}</button>;
    return <button>{logged ? 'Enter' : text}</button>;
}

// Компоненты это JS функции которые могут возвращать jsx элементы и внутри себя могут содержать какое-то поведение.
// Этот функция является компонентом App. Заметьте что все компоненты называются большой буквой.
function App() {
    return (
        <div className="App">
            <Header />
            <Field />
            <Btn />
        </div>
    );
}

export default App;
