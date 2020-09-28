import React, { Component } from 'react'

class StudentForm extends Component {
    // state = {
    //     name: "",
    //     // city:"",
    //     salary: '',
    //     // status: ''
    // }
    // changeText = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }
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
                <form onSubmit={this.submitHandler}>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td className="" >
                                    <label> Name: </label>
                                </td>
                                <td>
                                    <input type="text"
                                        onChange={this.props.changeText}
                                        value={this.props.valueState.name}
                                        placeholder="Enter Your Name"
                                        name="name" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label> Surname: </label>
                                </td>
                                <td>
                                    <input type="text"
                                        onChange={this.props.changeText}
                                        value={this.props.valueState.surname}
                                        placeholder="Enter Your surname"
                                        name="surname" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label> Age: </label>
                                </td>
                                <td>
                                    <input type="number"
                                        onChange={this.props.changeText}
                                        value={this.props.valueState.age}
                                        placeholder="Enter Your age"
                                        name="age" />
                                </td>
                            </tr>
                            <tr>
                                <td> </td>
                                <td>
                                    <button className="btn btn-success"
                                        type="submit" > Add Name </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

export default StudentForm
