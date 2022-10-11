import "./Person.scss";
import data from "../Variables/data";

function Person() {
    return data.map((person) => {
        const { id, picture, name, email, dob } = person;
        return (
            <div className="Person" key={id.value}>
                <img src={picture.medium} alt="pfp" />
                <div className="info">
                    <div className="name">
                        {name.first} {name.last}
                    </div>
                    <div>{email}</div>
                    <div>{dob.age} years old</div>
                </div>
            </div>
        );
    });
}

export default Person;
