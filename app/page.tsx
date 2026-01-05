import React from 'react';
import Image from 'next/image';
import DataTable from '@/components/DataTable';
import Link from 'next/link';
import { cn, formatCurrency } from '@/lib/utils';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { fetcher } from '@/lib/coingecko.actions';


// Dummy TrendingCoin dataset
const dummyTrendingCoins: TrendingCoin[] = [
  {
    item: {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      market_cap_rank: 1,
      thumb: '/logo.svg',
      large: '/logo.svg',
      data: {
        price: 45230.50,
        price_change_percentage_24h: {
          usd: 3.25,
        },
      },
    },
  },
  {
    item: {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      market_cap_rank: 2,
      thumb: '/logo.svg',
      large: '/logo.svg',
      data: {
        price: 2850.75,
        price_change_percentage_24h: {
          usd: 2.15,
        },
      },
    },
  },
  {
    item: {
      id: 'ripple',
      name: 'Ripple',
      symbol: 'XRP',
      market_cap_rank: 6,
      thumb: '/logo.svg',
      large: '/logo.svg',
      data: {
        price: 2.42,
        price_change_percentage_24h: {
          usd: -1.85,
        },
      },
    },
  },
  {
    item: {
      id: 'cardano',
      name: 'Cardano',
      symbol: 'ADA',
      market_cap_rank: 8,
      thumb: '/logo.svg',
      large: '/logo.svg',
      data: {
        price: 0.98,
        price_change_percentage_24h: {
          usd: 5.42,
        },
      },
    },
  },
];

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
        data={dummyTrendingCoins}
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