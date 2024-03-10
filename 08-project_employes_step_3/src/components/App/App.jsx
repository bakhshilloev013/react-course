import AppFilter from '../AppFilter/AppFilter';
import AppInfo from '../AppInfo/AppInfo';
import EmployesAddForm from '../EmployesAddForm/EmployesAddForm';
import EmployesList from '../EmployesList/EmployesList';
import SearchPanel from '../SearchPanel/SearchPanel';
import './App.css';

function App() {
    const data = [
        { name: 'Jon S.', salary: 800, increase: false },
        { name: 'Alex P.', salary: 900, increase: true },
        { name: 'Conor M.', salary: 1000, increase: false },
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployesList data={data} />
            <EmployesAddForm />
        </div>
    );
}

export default App;
