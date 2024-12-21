export const WINE_TYPES = {
  RED: 'Red',
  WHITE: 'White'
};

export const COUNTRIES = {
  FRANCE: 'France',
  AUSTRALIA: 'Australia'
};

export const STOCK_STATUS = {
  IN_STOCK: 1,
  OUT_OF_STOCK: 0
};

export default function WineFilters(props) {
  const filterConfigs = [
    {
      label: 'Red',
      filter: {type: WINE_TYPES.RED}
    },
    {
      label: 'White',
      filter: {type: WINE_TYPES.WHITE}
    },
    {
      label: 'All',
      filter: {type: null}
    },
    {
      label: 'France',
      filter: {country: COUNTRIES.FRANCE}
    },
    {
      label: 'Australia',
      filter: {country: COUNTRIES.AUSTRALIA}
    },
    {
      label: 'In Stock',
      filter: {stock: STOCK_STATUS.IN_STOCK}
    },
    {
      label: 'Out of Stock',
      filter: {stock: STOCK_STATUS.OUT_OF_STOCK}
    }
  ];

  return(
    filterConfigs.map((config,index) => (
      <button
        key={index}
        onClick={() => props.filterFunction(config.filter)}
      >
        {config.label}
      </button>
    ))
  )
}
