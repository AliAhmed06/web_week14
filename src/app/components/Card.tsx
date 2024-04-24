"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Card({}) {
  const router = useRouter();

  return (
    <div className="h-[200px]  rounded-md overflow-hidden flex">
      <img
        src="/images/event1.jpg"
        alt=""
        className="h-full w-[30%] object-cover"
      />

      <div className=" w-[70%] p-10 bg-white">
        <h4>test</h4>
        <h4>test</h4>
        <h4>test</h4>
        <div className="flex items-end justify-end">
          <button
            className="rounded-md py-2 px-6"
            onClick={() => router.push("/events/single")}
          >
            Explore Event
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
