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
      label: 'All',
      filter: {type: null}
    },
    {
      label: 'Red',
      filter: {type: WINE_TYPES.RED}
    },
    {
      label: 'White',
      filter: {type: WINE_TYPES.WHITE}
    },
    {
      label: 'France',
      filter: {country: COUNTRIES.FRANCE}
    },
    {
      label: 'Australia',
      filter: {country: COUNTRIES.AUSTRALIA}
    }
  ];

  return(
    <div className="wine-filters">
      {
        filterConfigs.map((config,index) => (
          <button
            key={index}
            onClick={() => props.onFilter(config.filter)}
          >
            {config.label}
          </button>
        ))
      }
      <button
        onClick={props.onClear}
      >
        Clear
      </button>
    </div>
  )
}
