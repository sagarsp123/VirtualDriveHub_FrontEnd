import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import axios from 'axios';

const MyBarChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMakers, setSelectedMakers] = useState([]);

  useEffect(() => {
    const fetchAllCars = async () => {
      try {
        const res = await axios.get("http://localhost:8800/listings");
        setData(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchAllCars();
  }, []);

  useEffect(() => {
    if (!loading) {
      const filteredData = data.filter((d) => selectedMakers.includes(d.MakerName));
      drawBarChart(filteredData.slice(0, 10));
      drawScatterPlot(filteredData.slice(0, 10)); // Display top 10 car makes in scatterplot
    }
  }, [loading, data, selectedMakers]);

  const handleMakerChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedMakers(selectedOptions);
  };

  const drawBarChart = (filteredData) => {
    d3.select('#bar-chart-container').selectAll('*').remove();

    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select('#bar-chart-container')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand().range([0, width]).padding(0.1);
    const y = d3.scaleLinear().range([height, 0]);

    x.domain(filteredData.map((d) => d.MakerName));
    y.domain([0, d3.max(filteredData, (d) => d.price)]);

    svg
      .selectAll('.bar')
      .data(filteredData)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d.MakerName))
      .attr('width', x.bandwidth())
      .attr('y', (d) => y(d.price))
      .attr('height', (d) => height - y(d.price))
      .attr('fill', 'steelblue');

    svg
      .selectAll('.bar-label')
      .data(filteredData)
      .enter()
      .append('text')
      .attr('class', 'bar-label')
      .attr('x', (d) => x(d.MakerName) + x.bandwidth() / 2)
      .attr('y', (d) => y(d.price) - 5)
      .attr('text-anchor', 'middle')
      .attr('fill', 'red')
      .text((d) => d.price);

    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g').call(d3.axisLeft(y));
  };

  const drawScatterPlot = (filteredData) => {
    d3.select('#scatter-plot-container').selectAll('*').remove();

    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select('#scatter-plot-container')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand().range([0, width]).padding(0.1);
    const y = d3.scaleLinear().range([height, 0]);

    x.domain(filteredData.map((d) => d.MakerName));
    y.domain([0, d3.max(filteredData, (d) => d.price)]);

    // Draw connecting lines
    for (let i = 0; i < filteredData.length - 1; i++) {
      svg
        .append('line')
        .attr('x1', x(filteredData[i].MakerName) + x.bandwidth() / 2)
        .attr('y1', y(filteredData[i].price))
        .attr('x2', x(filteredData[i + 1].MakerName) + x.bandwidth() / 2)
        .attr('y2', y(filteredData[i + 1].price))
        .attr('stroke', 'gray')
        .attr('stroke-width', 1);
    }

    svg
      .selectAll('.dot')
      .data(filteredData)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('cx', (d) => x(d.MakerName) + x.bandwidth() / 2)
      .attr('cy', (d) => y(d.price))
      .attr('r', 5)
      .attr('fill', 'steelblue');

    svg
      .selectAll('.dot-label')
      .data(filteredData)
      .enter()
      .append('text')
      .attr('class', 'dot-label')
      .attr('x', (d) => x(d.MakerName) + x.bandwidth() / 2)
      .attr('y', (d) => y(d.price) - 10)
      .attr('text-anchor', 'middle')
      .attr('fill', 'red')
      .text((d) => d.price);

    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g').call(d3.axisLeft(y));
  };

  return (
    <div>
      <div style={{ marginBottom: '20px', marginTop: '20px' }}>
        <h1 style={{ fontWeight: 'bold' }}>Visual Representation of Cars Makers with respect to their prices</h1>
        <br></br>
        <label style={{ fontSize: '18px', marginRight: '10px' }}>Select MakerNames:</label>
        <select
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box',
          }}
          multiple
          onChange={handleMakerChange}
        >
        
          {data.map((d) => (
            <option key={d.MakerName} value={d.MakerName}>
              {d.MakerName}
            </option>
          ))}
        </select>
      </div>
      <div id="bar-chart-container"></div>
      <br></br>
        <br></br>
      <div id="scatter-plot-container"></div>
    </div>
  );
};

export default MyBarChart;
