import { v4 as uuidv4 } from 'uuid';
import EmployesListItem from '../EmployesListItem/EmployesListItem';
import './EmployesList.css';

function EmployesList({ data }) {
    

    const elements = data.map((item) => (
        <EmployesListItem {...item} key={uuidv4()} />
    ));

    return <ul className="app-list list-group">{elements}</ul>;
}

export default EmployesList;
