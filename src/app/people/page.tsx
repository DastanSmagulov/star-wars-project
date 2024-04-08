"use client";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardComponents from "../components/CardComponent";
export default function People() {
  const [searchTerm, setSearchTerm] = useState("");
  const [people, setPeople] = useState([]);
  const fetchData = async (
    searchTerm: any,
    link = "https://swapi.dev/api/people"
  ) => {
    // Function to fetch data for given page
    try {
      const response = await axios.get(link, {
        params: {
          // "filters[$or][0][name][$contains]":
          //   searchTerm.toUpperCase() || searchTerm.toLowerCase(),
          search: searchTerm,
        },
      });
      setPeople(response.data);
    } catch (error) {
      console.error("Error fetching planets:", error);
    }
  };
  useEffect(() => {
    fetchData(searchTerm);
  }, [searchTerm]);
  console.log(searchTerm);
  console.log(people);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between people-box">
      <Header />
      <div className="pt-10">
        <h1 className="text-2xl font-bold text-center mb-4">People</h1>
        <div className="grow max-md:hidden mr-4 mb-6">
          <input
            type="text"
            placeholder="Поиск по имени персонажа"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-2 border-white rounded-[0.6rem] w-full h-[2.5rem] pl-[.9rem]"
          />
        </div>
        <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-1">
          {people?.results?.map((person: any) => (
            <CardComponents
              key={person?.id}
              title={person?.name?.toString()}
              characteristics={"gender"}
              characteristicsContent={person?.gender?.toString()}
              secondCharacteristics={"birth year"}
              secondCharacteristicsContent={person?.birth_year?.toString()}
              thirdCharacteristics={"hair color"}
              thirdCharacteristicsContent={person?.hair_color?.toString()}
              // img={planet.img}
            />
          ))}
        </div>
      </div>
      <Pagination fetchData={fetchData} api={people} name={"people"} />
      <Footer />
    </main>
  );
}
