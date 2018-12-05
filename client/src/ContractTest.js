import React from 'react'
import PropTypes from 'prop-types'

class ContractTest extends React.Component{
    constructor(props, context) {
        super(props)
        // isso só funciona se o drizzleState for initialized
        this.contracts = context.drizzle.contracts

        console.log('contracts: ', this.contracts)

        this.dataKey = this.contracts.Election.methods["candidatesCount"].cacheCall()
        console.log(this.dataKey)

        //candidates datakey

        /* this.candidatesKey = this.contracts.Election.methods["candidates"].cacheCall([])
        console.log('candidatesKey: ', this.candidatesKey) */

    }

    render(){
        /* var displayData = this.props.Election["candidates"][this.candidatesKey].value
        console.log(displayData) */
        return <h1>Hello From contract Test</h1>
    }

}

ContractTest.contextTypes = {
    drizzle: PropTypes.object
}

export default ContractTest