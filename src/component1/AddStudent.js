import React, { Component } from 'react'

import axios from 'axios'

class AddStudent extends Component {
    state = {
        name: "",
        surname: "",
        age: '',
    }

    changeText = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    refreshData = () => {
        this.props.refreshStud()
    }

    submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/', this.state)
            .then((response) => {
                if (response.status === 200) {
                    this.refreshData()
                }
            })
            .catch((error) => {
                console.log(error);
            })

        this.setState({
            name: "",
            surname: '',
            age: ''
        })
    }
    render() {
        return (
            <div >
                < form onSubmit={this.submitHandler} >
                    <table >
                        <thead > </thead> < tbody >
                            <tr >
                                <td className="" >
                                    <label > Name: </label>
                                </td>
                                <td >
                                    <input type="text"
                                        onChange={this.changeText}
                                        value={this.state.name}
                                        placeholder="Enter Your Name"
                                        name="name" />
                                </td> </tr> <tr >
                                < td >
                                    <label > Surname: </label>
                                </td>
                                <td >
                                    <input type="text"
                                        onChange={this.changeText}
                                        value={this.state.surname}
                                        placeholder="Enter Your surname"
                                        name="surname" />
                                </td>
                            </tr>
                            <tr >
                                <td >
                                    <label > Age: </label>
                                </td>
                                <td >
                                    <input type="number"
                                        onChange={this.changeText}
                                        value={this.state.age}
                                        placeholder="Enter Your age"
                                        name="age" />
                                </td>
                            </tr>
                            <tr >
                                <td > </td>
                                <td >
                                    <button className="btn btn-success"
                                        type="submit" > Add Name </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form> </div>
        )
    }
}

export default AddStudent