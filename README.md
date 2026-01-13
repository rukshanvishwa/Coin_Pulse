# CoinPulse

A modern, real-time cryptocurrency analytics platform built with Next.js and React. CoinPulse provides comprehensive market data, interactive charts, and trending cryptocurrency insights powered by the CoinGecko API.

## Overview

CoinPulse is a full-stack cryptocurrency tracking application that delivers real-time market analysis and trending coin data. The platform features interactive candlestick charts, detailed coin overviews, and a searchable database of cryptocurrencies with market performance metrics.

## Key Features

- **Interactive Charts**: Real-time candlestick charts with lightweight-charts for detailed OHLC data visualization
- **Coin Overview**: Detailed information about individual cryptocurrencies including price, market cap, and price changes
- **Trending Coins**: Automatically fetched and displayed trending cryptocurrencies with market metrics
- **Responsive Design**: Fully responsive UI built with Tailwind CSS for seamless experience across devices
- **Type-Safe**: Full TypeScript support for robust development
- **Server-Side Rendering**: Next.js 16 with App Router for optimal performance and SEO
- **Async Components**: React 19 Suspense boundaries with custom fallback loading states
- **Code Quality**: ESLint and Prettier integration for consistent code standards

## Tech Stack

- **Frontend Framework**: [Next.js 16](https://nextjs.org) with App Router
- **React**: 19.2.3
- **Language**: TypeScript 5
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Charts**: [Lightweight Charts](https://tradingview.github.io/lightweight-charts/)
- **Icons**: [Lucide React](https://lucide.dev)
- **UI Components**: Class Variance Authority, Tailwind Merge
- **API**: [CoinGecko API](https://www.coingecko.com/en/api)
- **Code Quality**: ESLint 9, Prettier 3

## Project Structure

```
coinpulse/
├── app/                              # Next.js App Router
│   ├── layout.tsx                   # Root layout
│   ├── page.tsx                     # Home page
│   └── globals.css                  # Global styles
├── components/                       # React components
│   ├── CandlestickChart.tsx        # Chart visualization
│   ├── DataTable.tsx               # Data table component
│   ├── Header.tsx                  # Header navigation
│   ├── home/                       # Home page components
│   │   ├── CoinOverview.tsx        # Bitcoin overview section
│   │   ├── TrendingCoins.tsx       # Trending coins display
│   │   └── fallback.tsx            # Loading states
│   └── ui/                         # Reusable UI components
│       └── table.tsx               # Table primitive
├── lib/                             # Utilities and actions
│   ├── coingecko.actions.ts        # API fetching functions
│   └── utils.ts                    # Helper functions
├── constants.ts                     # Application constants & chart config
├── type.d.ts                        # Global type definitions
├── next.config.ts                  # Next.js configuration
├── tsconfig.json                   # TypeScript configuration
├── tailwind.config.ts              # Tailwind CSS configuration
└── package.json                    # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ or newer
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd coinpulse
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the project root:
   ```env
   COINGECKO_BASE_URL=https://api.coingecko.com/api/v3
   COINGECKO_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

## Available Scripts

- **`npm run dev`** - Start the development server with hot reload
- **`npm run build`** - Build the application for production
- **`npm start`** - Start the production server
- **`npm run lint`** - Run ESLint to check code quality
- **`npm run lint:fix`** - Fix ESLint issues automatically
- **`npm run format`** - Format code with Prettier
- **`npm run format:check`** - Check code formatting without changes

## Core Components

### CoinOverview
Displays detailed information about Bitcoin including:
- Current price and market metrics
- 24-hour candlestick chart with OHLC data
- Price change indicators

### TrendingCoins
Shows trending cryptocurrencies with:
- Real-time market data
- Price change percentages
- Trending indicators
- Sortable data table

### CandlestickChart
Interactive chart component featuring:
- Lightweight-charts integration
- Responsive sizing
- Price data visualization
- Customizable theme

## API Integration

The application uses the [CoinGecko API](https://www.coingecko.com/en/api) for cryptocurrency data:

- **Trending Coins**: `/search/trending` - Fetches currently trending cryptocurrencies
- **Coin Details**: `/coins/{id}` - Retrieves detailed coin information
- **OHLC Data**: `/coins/{id}/ohlc` - Gets candlestick chart data

All API requests are server-side rendered using Next.js Server Actions for optimal performance and security.

## Performance Optimizations

- **React Suspense**: Async boundaries with fallback states for smooth loading
- **Next.js Image Optimization**: Optimized image loading from CoinGecko CDN
- **Data Revalidation**: Configurable ISR (Incremental Static Regeneration) with 60-300 second intervals
- **Server-Side Rendering**: Initial render on server for faster first contentful paint

## Development Guidelines

### Code Style
- TypeScript for type safety
- ESLint configuration for consistent code standards
- Prettier for automatic code formatting

### Best Practices
- Use Server Components for data fetching
- Implement Suspense boundaries for async operations
- Follow component composition patterns
- Maintain responsive design principles

### Running Quality Checks
```bash
# Check code quality
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Verify formatting
npm run format:check
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `COINGECKO_BASE_URL` | CoinGecko API base URL | Yes |
| `COINGECKO_API_KEY` | CoinGecko API key | Yes |

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using the [Vercel Platform](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

For detailed instructions, see [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Troubleshooting

### API Key Issues
- Ensure `COINGECKO_API_KEY` is set in `.env.local`
- Verify the API key is valid and not expired
- Check API rate limits

### Chart Not Displaying
- Verify OHLC data is being fetched correctly
- Check browser console for rendering errors
- Ensure lightweight-charts is properly installed

### Build Errors
- Clear Next.js cache: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Node.js version compatibility

## Future Enhancements

- [ ] Advanced search and filtering
- [ ] Cryptocurrency category pages
- [ ] Price alerts and notifications
- [ ] Portfolio tracking
- [ ] User authentication and saved preferences
- [ ] Multiple chart timeframe options
- [ ] Additional technical indicators

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss proposed changes.

## License

This project is open source and available under the MIT License.

## Support

For support, please create an issue in the repository or contact the development team.

## Acknowledgments

- [CoinGecko](https://www.coingecko.com) - Cryptocurrency data provider
- [Next.js](https://nextjs.org) - React framework
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Lightweight Charts](https://tradingview.github.io/lightweight-charts/) - Professional charting library

---

**Last Updated**: January 2026  
**Version**: 0.1.0
