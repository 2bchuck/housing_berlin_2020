import { useEffect, useState } from 'react';
import { scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';
import { chartData } from '../../../utils';
import AxisLeft from './AxisLeft';
import AxisBottom from './AxisBottom';

const w = 600;
const h = 600;
const margin = {
  top: 40,
  bottom: 40,
  left: 40,
  right: 40
};

const width = w - margin.right - margin.left;
const height = h - margin.top - margin.bottom;

export const HouseChart = ({ houses, filtered }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [isFiltered, setIsFiltered] = useState(false);
  const props = { r: 3, fill: 'lightblue' };
  
  useEffect(() => {
    setData(chartData(houses));
  }, [houses]);
  
  useEffect(() => {
    setIsFiltered(filtered.length > 0);
    setFilteredData(chartData(filtered));
  }, [filtered]);

  const xScale = scaleLinear()
    .domain(extent(data, d => d.x))
    .range([0, width]);

  const yScale = scaleLinear()
    .domain(extent(data, d => d.y))
    .range([height, 0]);

  const circles = data.map((d, i) => (
    <circle
      key={i}
      r={props.r}
      cx={xScale(d.x)}
      cy={yScale(d.y)}
      style={{ fill: props.fill, opacity: isFiltered ? 0.2 : 1 }}
    />
  ));

  const filteredCircles = filteredData.map((d, i) => (
    <circle
      key={i}
      r={props.r}
      cx={xScale(d.x)}
      cy={yScale(d.y)}
      style={{ fill: 'mediumpurple' }}
    />
  ));

  return (
    <div>
      <svg viewBox={`0 0 ${h} ${w}`}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <AxisLeft yScale={yScale} width={width} />
          <AxisBottom xScale={xScale} height={height} />
          {circles}
          {filteredCircles}
        </g>
      </svg>
    </div>
  );
};
