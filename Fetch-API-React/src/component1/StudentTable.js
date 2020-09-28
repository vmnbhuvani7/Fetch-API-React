import React, { Component } from 'react'
import AddStudent from './AddStudent'

class StudentTable extends Component {
    onClickHandler = (index) => {
        this.props.deleteData(index)
    }

    render() {
        return (
            <div>
                {!this.props.status && <AddStudent  />}
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Surname</th>
                            <th scope="col">Age</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props && this.props.students && this.props.students.map((student, index) => (
                            <tr key={index}>
                                <th scope="row">{student._id}</th>
                                <td>{student.name}</td>
                                <td>{student.surname}</td>
                                <td>{student.age}</td>
                                <td>
                                    <button className="btn btn-success mr-2" onClick={this.toggleEditing(student)}>Update</button>
                                    <button className="btn btn-danger" onClick={() => this.onClickHandler(student._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default StudentTable
