import MyDrizzleApp from './MyDrizzleApp';
import { drizzleConnect } from 'drizzle-react'

const mapStateToProps = state => {
    return {
      account: state.accounts[0],
      drizzleStatus: state.drizzleStatus,
      Election: state.contracts.Election
    }
  }

  const MyDrizzleContainer = drizzleConnect(MyDrizzleApp, mapStateToProps);

  export default MyDrizzleContainer;


