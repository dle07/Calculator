import React from 'react'

export default function InnerBody(props) {
    return (
        <div className="innerBody">

        <div className="row" id="input">
        
        <div>{props.tempNumber}{props.recentOperation ==="X"?"*": props.recentOperation}{props.negativeHolder===true?"-":""}{props.nextNumber}</div>
        <div>{props.outputNumber}</div>

        </div>

        <div className="row">
        <button style={{flex:2.26}} name="A/C" onClick={props.clearHandler}>A/C</button>
        <button name="%" onClick={props.handleOperation}>%</button>
        <button id="last" name="/" onClick={props.handleOperation}>/</button>
        </div>

        <div className="row">
        <button value="1" onClick={ props.addHandler}>1</button>
        <button value="2" onClick={ props.addHandler}>2</button>
        <button value="3" onClick={ props.addHandler}>3</button>
        <button id="last" name="X" onClick={props.handleOperation}>X</button>
        </div>

        <div className="row">
        <button value="4" onClick={ props.addHandler}>4</button>
        <button value="5" onClick={ props.addHandler}>5</button>
        <button value="6" onClick={ props.addHandler}>6</button>
        <button id="last" name="-" onClick={props.handleOperation}>-</button>
        </div>

        <div className="row">
        <button value="7" onClick={ props.addHandler}>7</button>
        <button value="8" onClick={ props.addHandler}>8</button>
        <button value="9" onClick={ props.addHandler}>9</button>
        <button id="last" name="+" onClick={props.handleOperation}>+</button>
        </div>

        <div className="row">
        <button style={{flex:2.26}} onClick={ props.zeroHandler} value="0">0</button>
        <button>.</button>
        <button id="lastest" onClick={props.equalHandler} >=</button>
        </div>

        
        
       
        
            
        </div>
    )
}
