"use client";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardComponents from "../components/CardComponent";
import Search from "../../../public/search.svg";
export default function Planets() {
  const [planets, setPlanets] = useState<any[]>([]);
  const [api, setApi] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const fetchData = async (
    searchTerm: any,
    link = `${process.env.NEXT_PUBLIC_API_LIVE_URL}/planets`
  ) => {
    console.log(searchTerm);
    // Function to fetch data for given page
    try {
      const response = await axios.get(link, {
        params: {
          // "filters[$or][0][name][$contains]":
          //   searchTerm.toUpperCase() || searchTerm.toLowerCase(),
          search: searchTerm,
        },
      });
      setPlanets(response.data.results);
      setApi(response.data);
    } catch (error) {
      console.error("Error fetching planets:", error);
    }
  };

  useEffect(() => {
    fetchData(searchTerm);
  }, [searchTerm]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between galaxy-box">
      <Header />
      <div className="pt-10">
        <h1 className="text-2xl font-bold  text-center mb-4">Planets</h1>
        <div className="grow max-md:hidden mr-4 mb-6">
          <input
            type="text"
            placeholder="поиск по названию планеты"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-2 bg-transparent rounded-[0.6rem] w-full h-[2.5rem] pl-[.9rem]"
          />
        </div>
        <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-1">
          {planets?.map((planet: any) => (
            <CardComponents
              key={planet?.id}
              title={planet?.name?.toString()}
              characteristics={"climate"}
              characteristicsContent={planet?.climate?.toString()}
              secondCharacteristics={"population"}
              secondCharacteristicsContent={planet?.population?.toString()}
              thirdCharacteristics={"terrain"}
              thirdCharacteristicsContent={planet?.terrain?.toString()}
              // img={planet.img}
            />
          ))}
        </div>
      </div>
      <Pagination fetchData={fetchData} api={api} name={"planets"} />
      <Footer />
    </main>
  );
}
