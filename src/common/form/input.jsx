import React from 'react'

export default props => (
    <input { ...props.input } // destruction : expandindo, espalhando essas propriedades dentro dessee imput
        className="form-control"
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        type={props.type} />
    )