"use client";

import axios from "axios";
import useSWR from "swr";

const fetcher = async (url) => {
  console.log("url = " + url);
  return await axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => {
          if (error.response.status !== 409) throw error;
      });
};


export default function Home() {


 

  const { data, error, isLoading } = useSWR(
    "/api/",
    fetcher
);

console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home
    </main>
  )
}

