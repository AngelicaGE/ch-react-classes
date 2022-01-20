
import React, {Component, Fragment}from "react";
import CartIcon from "../../icon/CartIcon";

export class ClassComponent extends Component{
    render(){
        console.log(this.props)
        // destructuring to avoid writting this.props.attr
        const {name, age} = this.props;

        return(
            // Fragment nos ayuda para que esto no aparezca envuelto en un div
            // poner las etiquetas vacias es un equivalente a fragment <></>
            <Fragment>
                <CartIcon></CartIcon>
                <div>
                    <h1>nombre {this.props.name}</h1>
                    <h1>Edad {this.props.age}</h1>
                </div>
                <div>
                    <h1>nombre {this.props.name}</h1>
                    <h1>Edad {this.props.age}</h1>
                </div>
            </Fragment>
        );
    }
}