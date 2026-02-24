import { fetcher } from "@/lib/coingecko.actions";
import DataTable from "../DataTable";
import Image from "next/image";
import { formatCurrency } from "@/lib/utils";


const Categories = async () => {
    const categories = await fetcher<Category[]>('/coins/categories');

    const colums: DataTableColumn<Category>[] = [
        {
            header: 'Category', cellClassName: 'category-cell', cell: (category) =>
                category.name
        },

        {
             header:'Top Gainers', 
             cellClassName:'top-gainers-cell',
             cell: (category) => 
                category.top_3_coins.map(coin => (
                    <Image src={coin} alt={coin} key={coin} width={28} height={28} />
                )

                )
        },
        {
            header:'24h Change',
            cellClassName: 'change-cell',
            cell: (category) => category.market_cap_change_24h,
        },

        {
            header: 'Market Cap', 
            cellClassName: 'market-cap-cell', 
            cell: (category) =>formatCurrency(category.market_cap),
        },

        {
            header: '24h Volume',
            cellClassName: 'volume-cell',
            cell: (category) => formatCurrency(category.volume_24h),
        },

    ]

    return <div id="categories" className="custom-scrollbar">
        <h4>Top Categories</h4>

        <DataTable
            columns={colums}
            data={categories?.slice(0, 10)}
            rowKey={
                (_, index) => index}
            tableClassName="mt-3"
        />


    </div>

}

export default Categories