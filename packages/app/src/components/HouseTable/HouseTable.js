import { useState, useEffect, useMemo } from 'react'

import { col } from './lib/config';
import { tableData } from "../../utils";
import { Table } from './components/Table';

export const HouseTable = ({ houses, filtered }) => {
  const [rows, setRows] = useState([]);

  const columns = useMemo(() => col, []);

  useEffect(() => {
    if (filtered.length) {
      setRows(tableData(filtered));
    } else {
      setRows(tableData(houses));
    }
  }, [houses, filtered]);

  const data = useMemo(() => rows, [rows]);

  return (
    <Table
      columns={columns}
      data={data}
    />
  );
};
