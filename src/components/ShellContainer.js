import React, { Component } from 'react'
import './index.css'
import InnerBody from './InnerBody'



export default class ShellContainer extends Component {
    constructor(){
        super()
        
        this.state = {
        

        tempNumber:"",
        outputNumber:"",
        nextNumber:"",
        
        pastOperation:"",
        recentOperation:"",
        negativeHolder:false,

        }
        
        this.clearHandler = this.clearHandler.bind(this);
        this.equalHandler = this.equalHandler.bind(this);
        this.addHandler = this.addHandler.bind(this);
        this.handleOperation = this.handleOperation.bind(this);
        this.zeroHandler = this.zeroHandler.bind(this);

    }

    render() {
        return (
            <div className="shellContainer">

                <InnerBody {...this.state} 
                equalHandler={this.equalHandler}
                clearHandler={this.clearHandler} 
                addHandler={this.addHandler}
                handleNegation= {this.handleNegation}
                handleOperation = {this.handleOperation}
                zeroHandler = {this.zeroHandler}
                
                />

            </div>
        )
    }

    addHandler( event){

        
        let tempVal=event.target.value;
        if( this.state.recentOperation ===""){
        this.setState ( ()=>{
            return{
                tempNumber: this.state.tempNumber + tempVal,
            }
        })
        }else{
        this.setState ( ()=>{
            return{
                nextNumber: this.state.nextNumber + tempVal,
            }
        })

    }
    }

    handleOperation(event){
        let val=event.target.name;
        if(this.state.outputNumber !=="" ){
            this.setState({
                tempNumber:this.state.outputNumber,
                nextNumber:"",
                recentOperation:event.target.value,
                negativeHolder:false,
            })
        }
        if(this.state.recentOperation ==="-" && val ==="-")return;
        else if(this.state.recentOperation !=="-" && this.state.recentOperation !== "" && val ==="-"){
            this.setState( {
                negativeHolder:true,
                
            })
        }else if(this.state.recentOperation !== "" )this.setState({recentOperation:val});
        else{
            this.setState( ()=>{
                return{
                    recentOperation: val,
                }
            })
    }
    }

    zeroHandler(){

        if(this.state.tempNumber !== ""){
            this.setState( () => {
                return{
                
                tempNumber:this.state.tempNumber + "0",
                }
            })
        }

    }


    clearHandler(){
        this.setState( ()=>{
            return{
                
                tempNumber:"",
                outputNumber:"",
                nextNumber:"",
        
                
                recentOperation:"",
                negativeHolder:false,
                equation: this.tempNumber+this.recentOperation,
            }

        })
    }


    equalHandler(){

        if(this.state.nextNumber ==="")return;

        

        let temp1=parseFloat(this.state.tempNumber);
        let temp2=parseFloat(this.state.nextNumber);

        let output=0;

        if(this.state.negativeHolder===true){
            temp2=temp2 * (-1.0);
        }

            switch(this.state.recentOperation){
                
                case "+":   output = temp1 +temp2;break;
                case "-":   output = temp1 -temp2;break;
                case "X":   output = temp1 * temp2;break;
                case "/":   output = temp1 /temp2;break;
                default: break;
            }

            this.setState(()=>{
                return{
                    outputNumber:output,
                    
                }
            })
        
    
    }
}
