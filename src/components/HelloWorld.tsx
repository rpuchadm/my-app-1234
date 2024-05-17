import React from "react"

import Alert from "react-bootstrap/Alert"
import { FaBomb } from "react-icons/fa"

interface HelloWorldProps {
  name: string
}

const HelloWorld = (props: HelloWorldProps) => {
  return <Alert variant="warning"><FaBomb size={25} /> {props.name}</Alert>
}

export default HelloWorld
