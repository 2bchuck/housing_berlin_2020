import { connect } from 'react-redux';
import { HouseTable } from '../components/HouseTable';

const mapStateToProps = ({ houses: { houses, filtered }}) => {
  return { houses, filtered };
};

export const HousesTableContainer = connect(
  mapStateToProps
)(HouseTable);
