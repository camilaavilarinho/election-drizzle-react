import React from "react";
//import { ContractData } from 'drizzle-react-components'
import PropTypes from "prop-types";
//import ContactTest from './ContractTest'
import Table from "./Table";
import Form from "./Form";

class MyDrizzleApp extends React.Component {
  constructor(props, context) {
    super(props);

    this.state = {
      candidatek: '',
    }

    this.hasVoted = false;

    // isso só funciona se o drizzleState for initialized
    this.contracts = context.drizzle.contracts;

    this.dataKey = this.contracts.Election.methods[
      "candidatesCount"
    ].cacheCall();

    this.address = this.contracts.Election.currentProvider.selectedAddress;

    this.castVote = this.castVote.bind(this);

  }

  /* componentDidMount(){
    const candidateK = this.contracts.Election.methods.candidates.cacheCall(1)
    console.log("candidateK: ", candidateK)
    this.setState({ candidatek: candidateK })

    //const candidate1 = this.props.Election.candidates[candidateK]
    //console.log("candidate1: ", candidate1)
    const candidate1 = this.getCandidate(candidateK)
    console.log("candidate1: ", candidate1)

  } */



  getCandidatesKey = () => {
    const value = this.props.Election.candidatesCount[this.dataKey];
    const count = value && value.value;
    let candidates = [];

    for (var i = 1; i <= count; i++) {
      const candidatesKey = this.contracts.Election.methods[
        "candidates"
      ].cacheCall(i);
      const candidate = this.props.Election.candidates[candidatesKey];
      candidates = [...candidates];
      candidates.push({
        id: candidate && candidate.value[0],
        name: candidate && candidate.value[1],
        voteCount: candidate && candidate.value[2]
      });
    }

    const votekey = this.contracts.Election.methods.voters.cacheCall(
      this.props.account
    );
    const voted =
      this.props.Election.voters[votekey] &&
      this.props.Election.voters[votekey].value;
    //console.log('voted: ', voted)
    if (voted) this.hasVoted = true;


    return candidates;
  };

  /*  watchEvents(){
        this.contracts.Election.events.votedEvent({}, {
            fromBlock: 0,
            toBlock: 'latest'
        }).watch((error, event) => {
            this.setState({voting: false})
        })
    } */

  castVote(candidateId) {
    this.setState({ voting: true });
    this.contracts.Election.methods.vote.cacheSend(candidateId, {
      from: this.props.account
    });
    this.hasVoted = true;
  }

  render() {
    const candidates = this.getCandidatesKey();
    return (
      <div>
        <h1>Election Results</h1>
        <Table candidates={candidates} />
        <hr />
        {!this.hasVoted ? (
          <Form candidates={candidates} castVote={this.castVote} />
        ) : null}
        <p>Your account: {this.props.account}</p>
      </div>
    );
  }
}

MyDrizzleApp.contextTypes = {
  drizzle: PropTypes.object
};

export default MyDrizzleApp;
