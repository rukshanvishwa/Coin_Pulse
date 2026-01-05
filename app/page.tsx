import React from 'react';
import Image from 'next/image';
import DataTable from '@/components/DataTable';
import Link from 'next/link';
import { cn, formatCurrency } from '@/lib/utils';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { fetcher } from '@/lib/coingecko.actions';


// Dummy TrendingCoin dataset


const columns: DataTableColumn<TrendingCoin>[] = [  
  {
    header: 'Name',
    cellClassName: 'name-cell',
    cell: (coin) => {
      const item = coin.item;

      return (
        <Link href={`/coins/${item.id}`}>
          <div className="flex items-center gap-3">
            <Image src={item.large} alt={item.name} width={36}
              height={36} />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-xs text-gray-500">{item.symbol}</p>
            </div>
          </div>
        </Link>
      )
    }
  },
  {
    header: '24h Change',
    cellClassName: 'change-cell',
    cell: (coin) => {
      const item = coin.item;
      const isTrendingUp = item.data.price_change_percentage_24h.
        usd > 0;

      return (
        <div className={cn('price-change flex items-center gap-1', isTrendingUp ?
          'text-green-500' : 'text-red-500')}>
          {isTrendingUp ? (
            <TrendingUp width={16} height={16} />
          ) : (
            <TrendingDown width={16} height={16} />
          )}
          <p>{Math.abs(item.data.price_change_percentage_24h.usd).toFixed(2)}%</p>
        </div>
      )
    }
  },
  {
    header: 'Price',
    cellClassName: 'price-cell',
    cell: (coin) => formatCurrency(coin.item.data.price)
  },
];

const page = async() => {
  // Using Bitcoin as a default coin for display
  // const coin = dummyTrendingCoins[0].item;
const coin = await fetcher<CoinDetailsData>('/coins/bitcoin',{
  dex_pair_format:'symbol'
});


  return <main className="main-container">
    <section className="home-grid">
      <div id='coin-overview'>
        <div className='header pt-2'>
          <Image src={coin.image.large} alt={coin.name} 
            width={56} height={56} />
          <div className='info'>
            <p>{coin.name} / {coin.symbol.toUpperCase()}</p>
            <h1>{formatCurrency(coin.market_data.current_price.usd)}</h1>
          </div>
        </div>
      </div>

      <p>Trending Coins</p> 
      <DataTable
        data={[]}
        columns={columns}
        rowKey={(row) => row.item.id}
      />
    </section>

    <section className="w-full mt-7 space-y-4">
      <p>Categories</p>
    </section>
  </main>
}

export default page