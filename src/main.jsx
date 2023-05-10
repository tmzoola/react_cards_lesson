import React from "react";
import Card from "./card";
import './index.css'

class Main extends React.Component{
    render(){
        return(
            <div className="wrapper">
                <Card title='Enjoy beauty place in Bali City'/>
                <Card title='Enjoy beauty place in Rom City'/>
                <Card title='Enjoy beauty place in Japan City'/>
                <Card title='Enjoy beauty place in Japan City'/>
                <Card title='Enjoy beauty place in Paris City'/>
                <Card title='Enjoy beauty place in Bali City'/>
            </div>
        )
    }
}
export default Main