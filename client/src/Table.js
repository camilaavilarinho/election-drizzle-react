import React from 'react';

class Table extends React.Component {
    render() {
        if(this.props.candidates !== []){
            return (
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Votes</th>
                        </tr>
                    </thead>
                    <tbody >
                        {this.props.candidates.map((candidate, i) => {
                            return (
                                <tr className="item" key={i}>
                                    <th>{candidate.id}</th>
                                    <td>{candidate.name}</td>
                                    <td>{candidate.voteCount}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )
        } else return <h1>Loading...</h1>
    }
}

export default Table