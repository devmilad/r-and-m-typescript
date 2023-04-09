import Hero from "../components/Hero";
import Statistic from "../components/Statistic";
import Card from "../components/Card";
import { useState } from "react";
import { DataType, resultsType, useFetch } from "../hooks/useFetch";
import { Visited } from "../components/Visited";




export const Home= () => {
 
 

  document.title="Rick and Morty | HomePage"
  return (

    <div>
      <Hero />
      <Statistic />
      <Card />
      <Visited />
    </div>
  )
}
