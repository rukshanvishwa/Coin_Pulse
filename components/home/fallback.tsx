import DataTable from '../DataTable';

export const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview-fallback">
      <div className="header">
        <div className="header-image bg-dark-700 animate-pulse"></div>
        <div className="info">
          <div className="header-line-sm bg-dark-700 animate-pulse rounded-lg"></div>
          <div className="header-line-lg bg-dark-700 animate-pulse rounded-lg"></div>
        </div>
      </div>

      <div className="space-y-4 mt-6">
        <div className="flex gap-2">
          <div className="period-button-skeleton bg-dark-700 animate-pulse rounded"></div>
          <div className="period-button-skeleton bg-dark-700 animate-pulse rounded"></div>
          <div className="period-button-skeleton bg-dark-700 animate-pulse rounded"></div>
        </div>
      </div>

      <div className="chart mt-6">
        <div className="chart-skeleton bg-dark-700 animate-pulse"></div>
      </div>
    </div>
  );
};

export const TrendingCoinsFallback = () => {
  const skeletonRows = Array.from({ length: 6 }, (_, i) => ({
    id: `skeleton-${i}`,
  }));

  const columns: DataTableColumn<{ id: string }>[] = [
    {
      header: 'Name',
      cellClassName: 'name-cell',
      cell: () => (
        <div className="name-link">
          <div className="name-image bg-dark-700 animate-pulse"></div>
          <div className="flex flex-col gap-1">
            <div className="name-line bg-dark-700 animate-pulse rounded-lg"></div>
            <div className="name-line bg-dark-700 animate-pulse rounded-lg w-16"></div>
          </div>
        </div>
      ),
    },
    {
      header: '24h Change',
      cellClassName: 'change-cell',
      cell: () => (
        <div className="change-line bg-dark-700 animate-pulse rounded-lg"></div>
      ),
    },
    {
      header: 'Price',
      cellClassName: 'price-cell',
      cell: () => (
        <div className="change-line bg-dark-700 animate-pulse rounded-lg"></div>
      ),
    },
  ];

  return (
    <div id="trending-coins-fallback">
      <h4>Trending Coins</h4>
      <div className="trending-coins-table">
        <DataTable
          data={skeletonRows}
          columns={columns}
          rowKey={(_, index) => `skeleton-row-${index}`}
          tableClassName="trending-coins-table"
          headerCellClassName="py-3!"
          bodyCellClassName="py-2!"
        />
      </div>
    </div>
  );
};
