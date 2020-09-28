import React, { Component } from 'react'
import StudentForm from '../component/StudentForm'
import StudentTable from '../component/StudentTable'

class Student extends Component {
    state = {
        students: [
            {
                _id: 1,
                name: 'ss',
                surname: 'ssa',
                age: 21
            }
        ],
        formData: {
            _id: null,
            name: 'sa',
            surname: '',
            age: 1
        }
    }

    deleteStudent = (index) => {
        const newTodo = this.state.students.filter((i) => {
            return index !== i._id;
        })
        this.setState({
            students: newTodo
        })
    }

    addStudent = (name, surname, age) => {
        this.setState({
            formData: [...this.state.formData, {
                id: Math.random().toString(36).substr(2, 9),
                name: name,
                surname: surname,
                age: age,
            }]
        })
    }
    changeText = (e) => {
        
        this.setState({
            formData: [{
                // [e.target.name]: e.target.value
                name: e.target.value
            }]
        })
    }
    // submitHandler = (e) => {
    //     e.preventDefault()
    //     this.props.addStudent(this.state.name, this.state.salary);

    //     this.setState({
    //         name: "",
    //         salary: ''
    //     })
    // }

    render() {

        return (
            <div>
                {
                    <StudentForm
                        addStudent={this.addStudent}
                        changeText={this.changeText}
                        valueState={this.state.formData}
                    ></StudentForm>

                }

                <div className="text-center">
                    {
                        <StudentTable
                            students={this.state.students}
                            deleteStudent={this.deleteStudent}
                        // status={this.isEdit}

                        />

                    }
                </div>
            </div>
        )
    }
}

export default Student
