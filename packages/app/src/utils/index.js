import {
  CID,
  CONDITION,
  DOWNLOAD_SPEED,
  FIRING_TYPES,
  HEATING_TYPE,
  HOUSE_NUMBER,
  KELLER,
  LIVING_SPACE,
  NUMBER_OF_ROOMS,
  OBJECT_NUMBER,
  PROVISION_FREE,
  PURCHASE_PRICE,
  REGION,
  STREET,
  UPLOAD_SPEED,
  YEAR_CONSTRUCTED,
  ZIP_CODE,
} from "./constants";

export const chartData = (rawData, opacity = 1) => {
  return rawData.map((e, i) => {
    const x = parseFloat(e[PURCHASE_PRICE]);
    const y = parseFloat(e[LIVING_SPACE]);

    return {
      x,
      y,
      opacity
    };
  });
};

export const uniqueValues = (rawData, propsName) => {
  return [...new Set(rawData.map(item => item[propsName]))];
};

export const filterLabel = (filterItem) => {
  if (filterItem.indexOf('Alt_Hohenschönhausen') > -1) {
    return 'Alt Hohenschönhausen';
  }
  return filterItem.slice(0, filterItem.indexOf('_'));
};

export const numFormatter = (num) => {
  if (num > 999 && num < 1000000){
    return (num / 1000).toFixed(1) + 'K';
  } else if (num > 1000000){
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num < 900){
    return num;
  }
};

const getAddress = (item) => {
  let result = '';
  if (item[STREET] !== 'no_information') {
    result += `${item[STREET].replaceAll('_', ' ')} `;
  }

  if (item[HOUSE_NUMBER] !== 'no_information' && item[HOUSE_NUMBER] !== 'X') {
    result += `${item[HOUSE_NUMBER]} `;
  }

  return result;
};

const showPlaceHolderForBlank = (result) => !result || !result.length ? '-' : result;

const getFuelType = (item) => {
  return item[FIRING_TYPES] && item[FIRING_TYPES] !== 'no_information'
    ? item[FIRING_TYPES].replaceAll('_', ' ') : '';
};

const getConstructedYear = (item) => {
  return item[YEAR_CONSTRUCTED] ? parseInt(item[YEAR_CONSTRUCTED]) : '';
};

const getCondition = (item) => {
  return item[CONDITION] && item[CONDITION] !== 'no_information'
    ? item[CONDITION].replaceAll('_', ' ') : '';
};

export const tableData = (rawData) => {
  return rawData.map(item => ({
    id: `${parseInt(item[CID])}-${item[OBJECT_NUMBER]}`,
    region: `${item[ZIP_CODE].slice(0, 5)}, ${filterLabel(item[REGION])}`,
    purchasePrice: parseInt(item[PURCHASE_PRICE]),
    size: parseInt(item[LIVING_SPACE]),
    roomNumbers: parseFloat(item[NUMBER_OF_ROOMS]),
    livingSapce: parseFloat(item[LIVING_SPACE]),
    internet: `Upload: ${item[UPLOAD_SPEED]}, Download: ${item[DOWNLOAD_SPEED]}`,
    address: showPlaceHolderForBlank(getAddress(item)),
    cellar: item[KELLER],
    constructed: `${showPlaceHolderForBlank(getConstructedYear(item))}`,
    provisionFree: `${item[PROVISION_FREE]}`,
    heatingType: `${item[HEATING_TYPE]}`,
    fuel: `${showPlaceHolderForBlank(getFuelType(item))}`,
    condition: `${showPlaceHolderForBlank(getCondition(item))}`
  }));
};

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
