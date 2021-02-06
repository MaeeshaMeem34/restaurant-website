import React, { createContext } from 'react'
import {db} from "../../../Firebase";

export  const PizzaContext = createContext();

export class PizzaContextProvider extends React.Component{
    state={
        pizzas:[]
    }

    componentDidMount(){
        const prevItem = this.state.pizzas;
        db.collection('Products').onSnapshot(snapshot=>{
            let changes = snapshot.docChanges();
            changes.forEach(change => 
                {
                    if(change.type ==='added'){
                        prevItem.push({
                            ID: change.doc.id,
                            ProductName: change.doc.data().ProductName,
                            ProductDescription: change.doc.data().ProductDescription,
                            ProductPrice: change.doc.data().ProductPrice,
                            ProductImg : change.doc.data().ProductImg,

                        })
                    }
                    this.setState({
                        pizzas: prevItem
                    })

                
            });
        })
    }

    render(){
        return(
            <PizzaContext.Provider value={{pizzas: [...this.state.pizzas]}}>
                {this.props.children}
            </PizzaContext.Provider>
        )
    }


}

