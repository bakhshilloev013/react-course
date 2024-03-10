import { Component } from 'react';
import './EmployesListItem.css';

class EmployesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: '',
            like: ''
        };
    }

    setIncrease = () => {
        this.setState({
            increase: this.state.increase ? '' : 'increase',
        });
    };

    setLike = () => {
        this.setState({
            like: this.state.like ? '' : 'like'
        })
    }

    render() {
        const { name, salary } = this.props;

        return (
            <li
                className={
                    'list-group-item d-flex justify-content-between ' +
                    this.state.increase + this.state.like
                }
            >
                <span onClick={this.setLike} className="list-group-item-label">{name}</span>
                <input
                    type="text"
                    className="list-group-item-input"
                    defaultValue={salary + '$'}
                />
                <div className="d-flex justify-content-center align-items-center">
                    <button
                        onClick={this.setIncrease}
                        type="button"
                        className="btn-cookie btn-sm "
                    >
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button" className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}

export default EmployesListItem;
