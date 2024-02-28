import React from 'react'; // отвечает за работу всего функционала React библиотеки, например такие как jsx код и т.д.
import ReactDOM from 'react-dom/client'; // отвечает за работу на странице
import App from './App.jsx'; // импорт компонента App
import './index.css'; // импорт стилизаций из документа index.css

// const elem = <h2>Hello world!</h2> // пример jsx кода

// пример построения элементов в React без jsx кода. P.S: именно под средством технологии Babel наш код загружается на страницу в таком ниже указанном виде
// метод createElement() принимает 3 аргумента: 1) какой html тег создать 2) объект с атрибутами 3) значение внутри тега
// const elem = React.createElement(
//     'h2',
//     { className: 'greetings', id: 'example' },
//     'Hello world!'
// );

// Примерно такую структуру(объект) возвращает метод createElement. Именно такой объект загружается в VirtualDOM. Чем больше вложений в теге тем больше будет объект, именно по этой причине лучше стоит применять jsx синтаксис.
// const elem = {
//     type: 'h2',
//     props: {
//         className: 'greetings',
//         id: 'example',
//         children: 'Hello world!',
//     },
// };

const text = 'Hello world!';

// JSX всегда загружает только один тег если вы хотите передать несколько строк html тегов вы сначала должны их обернуть в один единый тег div или тому подоному или React.Fragment, пример:(<>...</>)
const elem = (
    <div>
        {/* <h2>Hello world!</h2> */}
        <h1>{text}</h1>{' '}
        {/* Внутри jsx кода вы можете использовать любой(кроме тех у которых тип данных относиться к Объектам) JS выражение, для этого нужно обернуть это выражение в фигурные скобки */}
        {/* Если заметили два привычных нам атрибута class и for пишется в React по другому так как это всё же JS, тут насколько вам известно команды class и for зарезервированы поэтому именно эти два атрибута в jsx синтаксисе имеют другой вид.*/}
        <h2 className="first-class">Hello galaxy!</h2>
        <label htmlFor="">For example</label>
        <input type="text" />
        {/* Стоит отметить что остальные атрибуты которые в HTML состоят из нескольких слов тут в jsx коде они имеют camelCase синтаксис. Например атрибут tabindex в jsx синтаксисе имеет вид tabIndex */}
        <button tabIndex={0}>Click</button>
    </div>
);

// ReactDOM.createRoot — это метод в библиотеке React, который используется для создания корневого компонента React для приложения. Передаем ему div с id root для образования корневого компонента React внутри этого div. Корневой компонент служит точкой входа в React приложение
// ReactDOM.createRoot(document.getElementById('root')).render(
//    // <React.StrictMode>
//    //   <App />
//    // </React.StrictMode>,
// elem
// );

// Вернём нормальный вид для полноценной работы
ReactDOM.createRoot(document.getElementById('root')).render(
  // Вводим строгий режим в React пример 'use strict' из JS, только по правилам React
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
