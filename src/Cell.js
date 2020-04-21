import React from 'react'

export default class Cell extends React.Component {
    
    state = {
        color: this.props.value
    }

    clickedCell = () => {
        this.setState({color: '#333'})
    }

    render(){
        return <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.clickedCell}></div>
    }
}