import React from 'react'

class SushiWallet extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            balanceToAdd: 0

        }
    }

    updateBalanceToAdd = (event) => {
        this.setState({balanceToAdd: parseInt(event.target.value, 10)})
    }

    updateBalance = (event) => {
        event.preventDefault();
        this.props.addBalance(this.state.balanceToAdd); 
        this.setState({balanceToAdd: 0})
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => {this.updateBalance(event)}}>
                    <label for="balance-to-add">Balance To Add: </label>
                    <input 
                        type="number" 
                        name="balance-to-add" 
                        value={this.state.balanceToAdd}
                        onChange={this.updateBalanceToAdd}
                    ></input>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default SushiWallet