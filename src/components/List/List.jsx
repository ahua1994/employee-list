import "./List.scss";
import Person from "../Person/Person";
import data from "../Variables/data";

function List() {
    return (
        <>
            <div className="List">
                <p className="title">List of Employees</p>
                <p className="count">({data.length} Employees)</p>
                <Person data={data} />
            </div>
        </>
    );
}

export default List;
