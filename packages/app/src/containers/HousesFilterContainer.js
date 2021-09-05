import { connect } from 'react-redux';
import { applyHousesFilter } from '../store/actions/houses';
import { selectRegions } from '../store/selectors/houses';
import { HousesFilter } from '../components/HousesFilter';

const mapStateToProps = (state) => {
  const regions = selectRegions(state);

  return {
    regions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilter: (filter) => dispatch(applyHousesFilter(filter)),
  };
};

export const HousesFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HousesFilter);
