
import { fetcher } from '@/lib/coingecko.actions';
import DataTable from '../DataTable';
import Link from 'next/link';
import Image from 'next/image';
import { cn, formatCurrency } from '@/lib/utils';
import { TrendingDown, TrendingUp } from 'lucide-react';


const TrendingCoins = async () => {
    const trendingCoins = await fetcher<{
        coins: TrendingCoin[]
    }>
        ('/search/trending', undefined, 300);


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
    return (
        <div id="trending-coins">
            <h4>Trending Coins</h4>
            <p>Trending Coins</p>
            <div id="trending-coins">
                <DataTable
                    data={trendingCoins.coins.slice(0, 6) || []}
                    columns={columns}
                    rowKey={(coin) => coin.item.id}
                    tableClassName="trending-coins-table"
                    headerCellClassName='py-3'
                />
            </div>
        </div>

    )
}

export default TrendingCoins