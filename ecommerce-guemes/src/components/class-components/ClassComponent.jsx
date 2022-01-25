
import React, {Component, Fragment}from "react";
import CartIcon from "../../icon/CartIcon";

export class ClassComponent extends Component{
    constructor(){
        super();
        this.state = {
            name: "Juan",
            surname: "Gomez"
        };
    }

    updateName = () => {
        this.setState({name: 'Angie'});
    }


    render(){
        console.log(this.props)
        // destructuring to avoid writting this.props.attr
        const {name, age} = this.props;

        return(
            // Fragment nos ayuda para que esto no aparezca envuelto en un div
            // poner las etiquetas vacias es un equivalente a fragment <></>
            <Fragment>
                <div onClick={this.updateName}>
                    <h1>nombre {this.state.name}</h1>
                </div>
            </Fragment>
        );
    }
}