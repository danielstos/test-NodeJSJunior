
import React from 'react';
import { Input } from 'reactstrap'

const InputComponet = (props) => (

    <>
      <Input
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={props.type || "text"} />
      {props.erro && <small>{props.erro}</small>}
  
    </>
  )



  export default InputComponet;