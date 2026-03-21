import React, { useState, useEffect } from 'react';

const defaultStocks = [
    { symbol: "NIFTY 50", price: "22,519.40", change: "+151.40", percent: "+0.68%", isUp: true },
    { symbol: "SENSEX", price: "74,227.63", change: "+503.55", percent: "+0.68%", isUp: true },
    { symbol: "RELIANCE", price: "2,950.10", change: "-12.50", percent: "-0.42%", isUp: false },
    { symbol: "TCS", price: "3,890.00", change: "+45.20", percent: "+1.17%", isUp: true },
    { symbol: "HDFCBANK", price: "1,450.70", change: "+15.30", percent: "+1.07%", isUp: true },
    { symbol: "INFY", price: "1,485.25", change: "-5.80", percent: "-0.39%", isUp: false },
    { symbol: "ITC", price: "420.50", change: "+2.10", percent: "+0.50%", isUp: true },
    { symbol: "SBIN", price: "750.80", change: "+8.90", percent: "+1.20%", isUp: true },
];

const StockTicker = () => {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        const fetchStocks = async () => {
            try {
                // We use Yahoo Finance via a generic public CORS proxy to retrieve real-time data free of charge.
                const symbols = "RELIANCE.NS,TCS.NS,HDFCBANK.NS,INFY.NS,ITC.NS";
                const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbols}`;
                const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
                
                const response = await fetch(proxyUrl);
                const data = await response.json();
                
                if (data.contents) {
                    const parsed = JSON.parse(data.contents);
                    if (parsed && parsed.quoteResponse && parsed.quoteResponse.result) {
                        const fetchedStocks = parsed.quoteResponse.result.map(quote => ({
                            symbol: quote.symbol.replace('.NS', ''),
                            price: quote.regularMarketPrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
                            change: quote.regularMarketChange > 0 ? `+${quote.regularMarketChange.toFixed(2)}` : quote.regularMarketChange.toFixed(2),
                            percent: quote.regularMarketChangePercent > 0 ? `+${quote.regularMarketChangePercent.toFixed(2)}%` : `${quote.regularMarketChangePercent.toFixed(2)}%`,
                            isUp: quote.regularMarketChange >= 0
                        }));
                        
                        // We append fixed indexes to ensure they are always present.
                        setStocks([
                            { symbol: "NIFTY 50", price: "22,519.40", change: "+151.40", percent: "+0.68%", isUp: true }, 
                            { symbol: "SENSEX", price: "74,227.63", change: "+503.55", percent: "+0.68%", isUp: true },
                            ...fetchedStocks
                        ]);
                        return;
                    }
                }
                throw new Error("Invalid format");
            } catch (err) {
                // If API fails or is rate limited, gracefully fallback so the UI never breaks.
                console.warn("Using fallback stock data due to network/cors issues.");
                setStocks(defaultStocks);
            }
        };

        fetchStocks();
        const interval = setInterval(fetchStocks, 60000); // 1 minute delay
        return () => clearInterval(interval);
    }, []);

    // Create a continuous sequence to fill the horizontal space for a smooth marquee loop
    const displayStocks = [...stocks, ...stocks, ...stocks, ...stocks];

    return (
        <div className="w-full bg-slate-900 border-t border-slate-700 overflow-hidden py-1.5 flex items-center shadow-inner relative z-20">
            <div className="flex whitespace-nowrap animate-marquee">
                {displayStocks.map((stock, idx) => (
                    <div key={idx} className="flex items-center text-xs font-semibold mx-6 font-mono group cursor-default">
                        <span className="text-white mr-2 group-hover:text-blue-300 transition-colors">{stock.symbol}</span>
                        <span className="text-gray-300 mr-2">{stock.price}</span>
                        <span className={stock.isUp ? "text-green-400" : "text-red-400"}>
                            {stock.change} ({stock.percent})
                            {stock.isUp ? (
                                <svg className="inline w-3 h-3 ml-1 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" /></svg>
                            ) : (
                                <svg className="inline w-3 h-3 ml-1 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                            )}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StockTicker;
