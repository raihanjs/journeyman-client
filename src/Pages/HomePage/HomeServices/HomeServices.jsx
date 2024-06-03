import React from "react";
import ServiceCard from "../../../Components/ServiceCard";

export default function HomeServices() {
  return (
    <section className="my-5">
      <div className="container">
        <div className="flex justify-between">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </section>
  );
}
