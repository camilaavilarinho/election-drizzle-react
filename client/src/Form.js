import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <form onSubmit={(event) => {
          event.preventDefault()
          this.props.castVote(this.candidateId.value)
      }}>
        <div className="form-group">
          <label>Select Candidate</label>
          <br/>
          <select ref={(input) => this.candidateId = input} className="form-control">
            {this.props.candidates.map((candidate, i) => {
                return <option key={i} value={candidate.id}>{candidate.name}</option>
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Vote</button>
        <hr />
      </form>
    );
  }
}
