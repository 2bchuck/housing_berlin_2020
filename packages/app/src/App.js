import { useEffect } from 'react';

import { HousesFilterContainer } from './containers/HousesFilterContainer';

import "./App.css";
import { HousesTableContainer } from './containers/HousesTableContainer';
import { HousesChartContainer } from './containers/HousesChartContainer';

export function App({ fetchHousesRequest }) {
  useEffect(() => {
    fetchHousesRequest('berlin');
  }, [fetchHousesRequest]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-5xl font-bold">Berlin Housing 2020</h1>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-2">
            <div className="px-4 sm:px-0">
              <HousesChartContainer />
            </div>
          </div>
          <HousesFilterContainer />
        </div>
      </div>

      <HousesTableContainer />
    </div>
  );
}
