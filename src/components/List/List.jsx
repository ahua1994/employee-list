import "./List.scss";
import Person from "../Person/Person";

function List() {
    return (
        <>
            <div className="List">
                <p className="title">List of Employees</p>
                <p className="count">n Employees</p>
                <Person />
            </div>
        </>
    );
}

export default List;
