import React, { useState } from 'react';
import  './Calc.css';

function Calculator() {

    const [result,setResult] = useState("");

    const handleClick = (e)=> {
      setResult(result.concat(e.target.name))
    }
    
    const clear = ()=>{
        setResult("")
    }

    const calculate = () =>{
        setResult(eval(result))
    }

  return (
    <div style={{ margin: "50px" }}  className="container">
        <h1>Calculator App</h1>
        <div className="calculator">
            <input type="text" name="screen" id="screen" value={result}/>
            <table>
                <tr>
                    <td><button onClick={handleClick} name='(' className='calc_btn'>(</button></td>
                    <td><button onClick={handleClick} name=')' className='calc_btn'>)</button></td>
                    <td><button onClick={clear} className='calc_btn'>C</button></td>
                    <td><button onClick={handleClick} name='%' className='calc_btn'>%</button></td>
                </tr>
                <tr>
                    <td><button onClick={handleClick} name='7' className='calc_btn'>7</button></td>
                    <td><button onClick={handleClick} name='8' className='calc_btn'>8</button></td>
                    <td><button onClick={handleClick} name="9" className='calc_btn'>9</button></td>
                    <td><button onClick={handleClick} name='*' className='calc_btn'>*</button></td>
                </tr>
                <tr>
                    <td><button onClick={handleClick} name='4' className='calc_btn'>4</button></td>
                    <td><button onClick={handleClick} name='5' className='calc_btn'>5</button></td>
                    <td><button onClick={handleClick} name='6' className='calc_btn'>6</button></td>
                    <td><button onClick={handleClick} name='-' className='calc_btn'>-</button></td>
                </tr>
                <tr>
                    <td><button onClick={handleClick} name='1' className='calc_btn'>1</button></td>
                    <td><button onClick={handleClick} name='2' className='calc_btn'>2</button></td>
                    <td><button onClick={handleClick} name='3' className='calc_btn'>3</button></td>
                    <td><button onClick={handleClick} name='+' className='calc_btn'>+</button></td>
                </tr>
                <tr>
                    <td><button onClick={handleClick} name='0' className='calc_btn'>0</button></td>
                    <td><button onClick={handleClick} name='.' className='calc_btn'>.</button></td>
                    <td><button onClick={handleClick} name='/' className='calc_btn'>/</button></td>
                    <td><button  onClick={calculate} className='calc_btn'>=</button></td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default Calculator