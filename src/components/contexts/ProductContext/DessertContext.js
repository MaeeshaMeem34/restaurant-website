import React, { createContext } from 'react'
import {db} from "../../../Firebase";

export  const DessertContext = createContext();

export class DessertContextProvider extends React.Component{
    state={
        Desserts:[]
    }

    componentDidMount(){
        const prevItem = this.state.Desserts;
        db.collection('Desserts').onSnapshot(snapshot=>{
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
                        Desserts: prevItem
                    })

                
            });
        })
    }

    render(){
        return(
            <DessertContext.Provider value={{Desserts: [...this.state.Desserts]}}>
                {this.props.children}
            </DessertContext.Provider>
        )
    }


}