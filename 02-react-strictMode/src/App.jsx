import { Component } from 'react';
import './App.css';

// На самом деле компоненты должны лежать в отдельном документе и мы их будем экспортировать  
const Header = () => {
    return <h2>Hello world!</h2>;
};

// const Field = () => {
//     const holder = 'Enter Here';
//     const styledField = {
//         width: '300px',
//     };
//     return <input type="text" placeholder={holder} style={styledField} />;
// };

// Раннее компоненты создавались с помощью class. Сейчас в тренде function компонент
// Чтобы создать компонент Field с помощью классов для начала нужно импортировать из библиотеки react класс Component и указать наследование от этого Component
class Field extends Component {
    // Метод render будет создавать компонент точно так же как и функции
    render() {
        const holder = 'Enter Here';
        const styledField = {
            width: '300px',
        };

        return <input type="text" placeholder={holder} style={styledField} />;
    }
}

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

export { Header };
export default App;