import React, { useEffect, useState, useRef, useCallback } from "react";
import { ethers } from "ethers";
import { contractAddress, rpcUrl, abi } from "../contract-config";
import * as d3 from "d3";

const getContract = () => {
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  return new ethers.Contract(contractAddress, abi, provider);
};

const fetchBatchHistoryPrice = async (symbolCode, roundId, maxRounds) => {
  const contract = getContract();
  const response = await contract.getBatchHistoryPrice(
    symbolCode,
    roundId,
    maxRounds
  );
  console.log("getBatchHistoryPrice response:", response);

  const [prices, total] = response;
  const formattedPrices = prices.map((price) => ({
    timestamp: new Date(price.timestamp.toNumber() * 1000), // Convert to JS Date object
    price: price.price.div(ethers.BigNumber.from(100)),
  }));

  console.log("Formatted Prices:", formattedPrices);
  return formattedPrices;
};

const createChart = (data, chartElement) => {
  console.log("Creating chart with data:", data);

  const margin = { top: 20, right: 30, bottom: 30, left: 60 };
  const width = chartElement.offsetWidth - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  const svg = d3
    .select(chartElement)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const x = d3
    .scaleTime()
    .domain(d3.extent(data, (d) => d.timestamp))
    .range([0, width]);

  const paddingPercentage = 0.1;
  const minPrice = d3.min(data, (d) => d.price.toNumber());
  const maxPrice = d3.max(data, (d) => d.price.toNumber());
  const priceRange = maxPrice - minPrice;
  const padding = priceRange * paddingPercentage;

  const y = d3
    .scaleLinear()
    .domain([minPrice - padding, maxPrice + padding])
    .range([height, 0]);

  const line = d3
    .line()
    .x((d) => x(d.timestamp))
    .y((d) => y(d.price.toNumber()));

  svg
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "#10B981") // green color
    .attr("stroke-width", 1.5)
    .attr("d", line);

  svg
    .append("g")
    .attr("transform", `translate(0,${height})`)
    .call(
      d3
        .axisBottom(x)
        .ticks(d3.timeHour.every(1))
        .tickFormat(d3.timeFormat("%H:%M"))
    );

  svg.append("g").call(d3.axisLeft(y).ticks(5));
};

const BatchHistoryPrice = ({ symbolCode, roundId, maxRounds }) => {
  const [batchHistoryPrice, setBatchHistoryPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const chartRef = useRef(null);

  const fetchAndSetData = useCallback(async () => {
    try {
      const data = await fetchBatchHistoryPrice(symbolCode, roundId, maxRounds);
      setBatchHistoryPrice(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [symbolCode, roundId, maxRounds]);

  useEffect(() => {
    fetchAndSetData();
  }, [fetchAndSetData]);

  useEffect(() => {
    if (batchHistoryPrice && batchHistoryPrice.length > 0) {
      const chartElement = chartRef.current;
      createChart(batchHistoryPrice, chartElement);

      return () => {
        d3.select(chartElement).select("svg").remove();
      };
    }
  }, [batchHistoryPrice]);

  if (loading)
    return (
      <div className="text-center mt-10">
        <div className="inline-block animate-spin ease duration-300 w-4 h-4 bg-background rounded-full"></div>
        <span className="ml-2 text-accent">Loading...</span>
      </div>
    );

  if (error)
    return (
      <div className="text-center mt-10">
        <span className="text-red-500">Error: {error.message}</span>
      </div>
    );

  return (
    <div className="bg-white shadow-md rounded-md p-6 mx-auto max-w-4xl">
      <h2 className="text-lg font-semibold mb-4 text-accent text-center">
        График цен
      </h2>
      <div ref={chartRef} className="w-full"></div>
    </div>
  );
};

export default BatchHistoryPrice;
