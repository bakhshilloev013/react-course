import AppFilter from '../AppFilter/AppFilter';
import AppInfo from '../AppInfo/AppInfo';
import EmployesAddForm from '../EmployesAddForm/EmployesAddForm';
import EmployesList from '../EmployesList/EmployesList';
import SearchPanel from '../SearchPanel/SearchPanel';
import './App.css';

function App() {
    return <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel />
            <AppFilter />
        </div>

        <EmployesList />
        <EmployesAddForm />
    </div>;
}

export default App;
