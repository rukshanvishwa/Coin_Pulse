import React from 'react';
import Image from 'next/image';
import DataTable from '@/components/DataTable';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { TrendingDown, TrendingUp } from 'lucide-react';


// Dummy TrendingCoin dataset
const dummyTrendingCoins: TrendingCoin[] = [
  {
    item: {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      market_cap_rank: 1,
      thumb: 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png',
      large: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
      data: {
        price: 89113.00,
        price_change_percentage_24h: {
          usd: 2.45,
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
      thumb: 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png',
      large: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
      data: {
        price: 3456.78,
        price_change_percentage_24h: {
          usd: -1.23,
        },
      },
    },
  },
  {
    item: {
      id: 'binancecoin',
      name: 'BNB',
      symbol: 'BNB',
      market_cap_rank: 4,
      thumb: 'https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png',
      large: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png',
      data: {
        price: 612.34,
        price_change_percentage_24h: {
          usd: 3.67,
        },
      },
    },
  },
  {
    item: {
      id: 'ripple',
      name: 'XRP',
      symbol: 'XRP',
      market_cap_rank: 5,
      thumb: 'https://assets.coingecko.com/coins/images/32/thumb/ripple.png',
      large: 'https://assets.coingecko.com/coins/images/32/large/ripple.png',
      data: {
        price: 2.89,
        price_change_percentage_24h: {
          usd: 5.12,
        },
      },
    },
  },
  {
    item: {
      id: 'solana',
      name: 'Solana',
      symbol: 'SOL',
      market_cap_rank: 6,
      thumb: 'https://assets.coingecko.com/coins/images/4128/thumb/solana.png',
      large: 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
      data: {
        price: 198.45,
        price_change_percentage_24h: {
          usd: -2.34,
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
    cell: (coin) => `$${coin.item.data.price.toFixed(2)}`
  },
];

const page = () => {
  // Using Bitcoin as a default coin for display
  const coin = dummyTrendingCoins[0].item;

  return <main className="main-container">
    <section className="home-grid">
      <div id='coin-overview'>
        <div className='header pt-2'>
          <Image src={coin.image.large} alt={coin.name} 
            width={56} height={56} />
          <div className='info'>
            <p>{coin.name} / {coin.symbol.toUpperCase()}</p>
            <h1>${coin.market_data.current_price.usd}</h1>
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