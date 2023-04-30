import React, { useState, useEffect } from "react";
import EzReactTable from 'ez-react-table';

import '../App.css'



export default function App() {
  const [coins, setCoins] = useState([]);
  const fetchCoins = async () => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      const data = await res.json();
      setCoins(data);
    } catch (e) {
      alert("Api error");
    }
  };
  const makeStyles = {
    fontFamily: "arial ",
    fontSize: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    inset: 0,
    color: "#e66",
    backgroundColor: "#016594",
    borderRadius: "1em",
    cursor: "pointer",
    height: "100vh",
  };



  useEffect(() => {
    fetchCoins();
  }, []);
  const columns = [
    {
      
      alignItems:"center",
      title: "Coin",
      key: "name",
      width: 300,
      render: (value, object) => {
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <img height="20px" width="20px" src={object?.image} alt="coin" />
            <span style={{ marginLeft: "10px" }}>{object?.name}</span>
          </div>
        );
      },
    },
    {
      title: "Sembol",
      center: true,
      key: "symbol",
      width: 300,
      render: (value, object) => <div>{value.toUpperCase()}</div>,
    },
    {
      title: "Fiyat",
      key: "current_price",
      width: 300,
      render: (value, object) => <div>{`$${value}`}</div>,
    },
    {
      title: "Değişim",
      key: "price_change_percentage_24h",
      width: 300,
      render: (value, object) => {
        return (
          <div style={{ color: /-/i.test(value) ? "#E52B3F" : "#08D2CF" }}>
            {value}%
          </div>
        );
      },
    },
  ];
  return (
    
<div style={makeStyles}>
<EzReactTable
  cols={columns}
  data={coins}
  title="Kripto Borsası"
  tableHeight={400}
  defaultSort="name"
  accentColor="#5D17DF"
  darkMode
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
/>
  </div>

  );
}
