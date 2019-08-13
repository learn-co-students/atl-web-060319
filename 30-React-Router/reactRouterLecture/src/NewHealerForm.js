import React from 'react';

class NewHealerForm extends React.Component{

    constructor(){
        super()
        this.state={
            name: "",
            description: "",
            image: ""
        }
    }

    handleInput=(e)=>{
        this.setState({ [e.target.name]: e.target.value }, ()=> console.log("state", this.state))
    }

    render(){
        return(

            <div>

                <form className="ui two column grid form">
                <h3> Add a New Healer! </h3>
                <div className="field">
                    <label>Name</label>
                    <input onChange = {this.handleInput}  type="text" name="name" placeholder={this.state.name}/>
                </div>
                <div className="field">
                    <label>Description</label>
                    <input onChange = {this.handleInput} type="text" name="description" placeholder={this.state.description}/>
                </div>
                <div className="field">
                    <div className="field">
                    <label>Image</label>

                    <input onChange = {this.handleInput} type="text" name="image" placeholder={this.state.image}/>
                    </div>
                </div>
                <button onClick={     (e)=> { this.props.addNewHealer(this.state) }    }   className="ui small button" type="submit">Submit</button>
                </form>
            </div>


        )

    }


}

export default NewHealerForm;