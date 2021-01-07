import React from 'react'

function Welcome(props) {
    return <h3>Hello, {props.name}</h3>;
  }

function Props2() {
    return (
        <div>
            <h3>Props 2</h3>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    )
}

export default Props2
