import EmployesListItem from '../EmployesListItem/EmployesListItem';
import './EmployesList.css';

function EmployesList() {
    return (
        <ul className="app-list list-group">
            <EmployesListItem />
            <EmployesListItem />
            <EmployesListItem />
        </ul>
    );
}

export default EmployesList;
