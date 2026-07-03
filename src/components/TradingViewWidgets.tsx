import { useEffect, useRef, useState } from "react";

interface TickerSymbol {
  proName: string;
  title: string;
}

// 1. REAL-TIME TICKER TAPE WIDGET
export function TradingViewTicker() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear previous widget
    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FX_IDC:XAUUSD", title: "XAU/USD (GOLD)" },
        { proName: "OANDA:EURUSD", title: "EUR/USD" },
        { proName: "OANDA:GBPUSD", title: "GBP/USD" },
        { proName: "OANDA:USDJPY", title: "USD/JPY" },
        { proName: "OANDA:AUDUSD", title: "AUD/USD" },
        { proName: "OANDA:USDCAD", title: "USD/CAD" },
        { proName: "BINANCE:BTCUSDT", title: "BTC/USDT" },
      ],
      showSymbolLogo: true,
      colorTheme: "dark",
      isTransparent: true,
      displayMode: "adaptive",
      locale: "en",
    });

    container.appendChild(script);

    return () => {
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <div className="w-full bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-1 select-none overflow-hidden relative z-40">
      <div ref={containerRef} className="tradingview-widget-container"></div>
    </div>
  );
}

// 2. DETAILED TRADING CHART WIDGET
interface MiniChartProps {
  symbol?: string;
  theme?: "gold" | "emerald";
}

export function TradingViewMainChart({ symbol = "OANDA:XAUUSD", theme = "gold" }: MiniChartProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const widgetDiv = document.createElement("div");
    widgetDiv.id = `tradingview_chart_${Math.random().toString(36).substr(2, 9)}`;
    widgetDiv.style.height = "100%";
    widgetDiv.style.width = "100%";
    container.appendChild(widgetDiv);

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (typeof TradingView !== "undefined") {
        // @ts-ignore
        new TradingView.widget({
          width: "100%",
          height: "100%",
          symbol: symbol,
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          toolbar_bg: "#0c0c0c",
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          container_id: widgetDiv.id,
          gridColor: "rgba(255, 255, 255, 0.02)",
          backgroundColor: "#080808",
          studies: ["RSI@tv-basicstudies", "MASimple@tv-basicstudies"],
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      if (container) container.innerHTML = "";
    };
  }, [symbol]);

  return (
    <div className="w-full h-[450px] rounded-xl overflow-hidden border border-white/5 bg-[#080808] relative">
      <div ref={containerRef} className="w-full h-full"></div>
      <div className="absolute top-3 left-4 pointer-events-none z-10 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">Live Bloomberg Datafeed</span>
      </div>
    </div>
  );
}

// 3. PURE CANVAS ANIMATED CANDLESTICK CHART BACKGROUND
export function CandlestickBgChart() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    interface Candle {
      x: number;
      open: number;
      close: number;
      high: number;
      low: number;
      color: string;
      glowIntensity: number;
    }

    const candles: Candle[] = [];
    const candleWidth = 14;
    const spacing = 8;
    const totalCandles = Math.floor(width / (candleWidth + spacing));

    // Seed initial candles
    let currentPrice = height * 0.5;
    for (let i = 0; i < totalCandles; i++) {
      const x = i * (candleWidth + spacing) + spacing;
      const isUp = Math.random() > 0.45; // slightly upward bias for Gold XAU
      const size = Math.random() * 40 + 5;
      const open = currentPrice;
      const close = isUp ? open - size : open + size;
      const high = Math.min(open, close) - Math.random() * 20;
      const low = Math.max(open, close) + Math.random() * 20;

      candles.push({
        x,
        open,
        close,
        high,
        low,
        color: isUp ? "#34d399" : "#ef4444", // Emerald or Red
        glowIntensity: Math.random() * 8 + 2,
      });

      currentPrice = close;
      // Clamp price within bounds
      if (currentPrice < height * 0.15) currentPrice = height * 0.3;
      if (currentPrice > height * 0.85) currentPrice = height * 0.7;
    }

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    let frameCount = 0;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      frameCount++;

      // Shift candles and add new one occasionally
      if (frameCount % 60 === 0) {
        candles.shift();
        const lastCandle = candles[candles.length - 1];
        const isUp = Math.random() > 0.45;
        const size = Math.random() * 35 + 5;
        const open = lastCandle.close;
        const close = isUp ? open - size : open + size;
        const high = Math.min(open, close) - Math.random() * 20;
        const low = Math.max(open, close) + Math.random() * 20;

        candles.push({
          x: width - candleWidth - spacing,
          open,
          close,
          high,
          low,
          color: isUp ? "#c4a14e" : "#10b981", // Luxury Gold vs cyber emerald
          glowIntensity: Math.random() * 10 + 3,
        });

        // Recalculate x values for sliding effect
        candles.forEach((c, index) => {
          c.x = index * (candleWidth + spacing) + spacing;
        });
      }

      // Draw horizontal support/resistance key levels
      ctx.strokeStyle = "rgba(196, 161, 78, 0.08)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      [height * 0.25, height * 0.5, height * 0.75].forEach((yLevel) => {
        ctx.beginPath();
        ctx.moveTo(0, yLevel);
        ctx.lineTo(width, yLevel);
        ctx.stroke();

        // Draw pricing labels
        ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
        ctx.font = "8px JetBrains Mono";
        ctx.fillText(`$${(1950 + (height - yLevel) * 0.5).toFixed(2)}`, width - 50, yLevel - 3);
      });
      ctx.setLineDash([]); // Reset line dash

      // Draw trendline (Smart Money Liquidity sweep)
      ctx.strokeStyle = "rgba(16, 185, 129, 0.15)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(candles[0].x, candles[0].high);
      ctx.bezierCurveTo(
        width * 0.3,
        height * 0.2,
        width * 0.6,
        height * 0.8,
        candles[candles.length - 1].x,
        candles[candles.length - 1].close
      );
      ctx.stroke();

      // Render Candles
      candles.forEach((c) => {
        // Draw wick
        ctx.strokeStyle = c.color;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(c.x + candleWidth / 2, c.high);
        ctx.lineTo(c.x + candleWidth / 2, c.low);
        ctx.stroke();

        // Draw body with gold or emerald glass glowing feel
        ctx.fillStyle = c.color;
        const bodyHeight = Math.abs(c.open - c.close);
        const y = Math.min(c.open, c.close);

        ctx.shadowBlur = c.glowIntensity;
        ctx.shadowColor = c.color;
        ctx.fillRect(c.x, y, candleWidth, Math.max(1, bodyHeight));
        ctx.shadowBlur = 0; // Reset
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-35 select-none pointer-events-none"
    />
  );
}
