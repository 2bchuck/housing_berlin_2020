import { useState } from "react";
import { filterLabel } from "../../utils";

const LABEL_STYLE = 'block text-sm font-medium text-gray-700';
const INPUT_STYLE = 'mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md';

export const HousesFilter = ({
  regions,
  updateFilter = () => {}
}) => {
  const [formState, setFormState] = useState({
    selectedRegion: '',
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    minRooms: 0,
    maxRooms: 0,
    minYears: 0,
    maxYears: 0,
    isGasHeating: false,
    isCentralHeating: false,
    isNew: false
  });
  
  const handleSelect = (e) => {
    const selectedRegion = e.currentTarget.value;

    const updatedState = {
      selectedRegion,
      minPrice: 0,
      maxPrice: 0,
      minSize: 0,
      maxSize: 0,
      minRooms: 0,
      maxRooms: 0,
      minYears: 0,
      maxYears: 0,
      isGasHeating: false,
      isCentralHeating: false,
      isNew: false
    }

    setFormState(updatedState);
    updateFilter(updatedState);
  };

  const onChangeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.currentTarget.value});
  };

  const onCheckHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.checked});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateFilter(formState);
  };

  return (
    <div className="mt-5 md:mt-0 md:col-span-1">
      <form onSubmit={handleSubmit}>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <select
                className="mt-1 col-span-6 sm:col-span-6 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={handleSelect}
              >
                <option value="">Choose a region you want to see</option>
                {regions.map(item => <option key={item} value={item}>{filterLabel(item)}</option>)}
              </select>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="min-price" className={LABEL_STYLE}>Minimum price</label>
                <input
                  type="text"
                  name="minPrice"
                  className={INPUT_STYLE}
                  value={formState.minPrice}
                  onChange={onChangeHandler}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="max-price" className={LABEL_STYLE}>Maximum price</label>
                <input
                  type="text"
                  name="maxPrice"
                  className={INPUT_STYLE}
                  value={formState.maxPrice}
                  onChange={onChangeHandler}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="min-size" className={LABEL_STYLE}>Minimum size</label>
                <input
                  type="text"
                  name="minSize"
                  className={INPUT_STYLE}
                  value={formState.minSize}
                  onChange={onChangeHandler}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="max-size" className={LABEL_STYLE}>Maximum size</label>
                <input
                  type="text"
                  name="maxSize"
                  className={INPUT_STYLE}
                  value={formState.maxSize}
                  onChange={onChangeHandler}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="min-rooms" className={LABEL_STYLE}>Minimum room numbers</label>
                <input
                  type="text"
                  name="minRooms"
                  className={INPUT_STYLE}
                  value={formState.minRooms}
                  onChange={onChangeHandler}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="max-rooms" className={LABEL_STYLE}>Maximum room numbers</label>
                <input
                  type="text"
                  name="maxRooms"
                  className={INPUT_STYLE}
                  value={formState.maxRooms}
                  onChange={onChangeHandler}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="min-years" className={LABEL_STYLE}>Minimum constructed year</label>
                <input
                  type="text"
                  name="minYears"
                  className={INPUT_STYLE}
                  value={formState.minYears}
                  onChange={onChangeHandler}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="max-years" className={LABEL_STYLE}>Maximum constructed year</label>
                <input
                  type="text"
                  name="maxYears"
                  className={INPUT_STYLE}
                  value={formState.maxYears}
                  onChange={onChangeHandler}
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label className="inline-flex items-center">
                  <input className="form-checkbox" type="checkbox" checked={formState.isGasHeating} name="isGasHeating" onChange={onCheckHandler} />
                  <span className="ml-2">Gas Heating</span>
                </label>
                <label className="inline-flex items-center">
                  <input className="form-checkbox" type="checkbox" checked={formState.isCentralHeating} name="isCentralHeating" onChange={onCheckHandler} />
                  <span className="ml-2">Central Heating</span>
                </label>
                <label className="inline-flex items-center">
                  <input className="form-checkbox" type="checkbox" checked={formState.isNew} name="isNew" onChange={onCheckHandler} />
                  <span className="ml-2">Neubau</span>
                </label>
              </div>
              
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Apply
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
