import React, { Component } from 'react'

import AddStudent from './AddStudent'
import StudentTable from './StudentTable'
import axios from 'axios'

class Student extends Component {
    state = {
        students: [],
        isEdit: false
    }

    componentDidMount() {
        this.getAllStudent()
    }

    deleteData = (index) => {
        axios.delete(`http://localhost:8000/api/${index}`)
            .then(() => {
                const newTodo = this.state.students.filter((i) => {
                    return index !== i._id;
                })
                this.setState({
                    students: newTodo
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getAllStudent = () => {
        axios.get('http://localhost:8000/api/')
            .then((responce) => {
                this.setState({
                    students: responce.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                { this.isEdit && (
                    <AddStudent
                        refreshStud={this.getAllStudent()}
                    ></AddStudent>
                )
                }

                <div className="text-center">
                    {this.state.students && (
                        <StudentTable
                            students={this.state.students}
                            deleteData={this.deleteData}
                            status={this.isEdit}

                        />
                    )
                    }
                </div>
            </div>
        )
    }
}

export default Student
