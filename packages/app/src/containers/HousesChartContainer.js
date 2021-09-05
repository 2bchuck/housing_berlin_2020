import { connect } from 'react-redux';
import { HouseChart } from '../components/HouseChart';

const mapStateToProps = ({ houses: { houses, filtered }}) => {
  return { houses, filtered };
};

export const HousesChartContainer = connect(
  mapStateToProps
)(HouseChart);
