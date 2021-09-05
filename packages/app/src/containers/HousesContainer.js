import { connect } from 'react-redux';
import { App } from '../App';
import { fetchHousesRequest } from '../store/actions/houses';

const mapDispatchToProps = { fetchHousesRequest };

export const HousesContainer = connect(
  null,
  mapDispatchToProps
)(App);
