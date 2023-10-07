import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <h3>
                {name} is {student ? "a" : "not a"} student
            </h3>
            <div>
                <Form.Check
                    type="switch"
                    id="switch"
                    label="switch"
                    checked={editMode}
                    onChange={updateEditMode}
                />
                {editMode ? (
                    <div>
                        <Form.Control
                            id="name"
                            value={name}
                            onChange={updateName}
                        />
                        <Form.Check
                            type="checkbox"
                            id="student"
                            label="student"
                            name="student"
                            checked={student}
                            onChange={updateStudent}
                        />
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
}
