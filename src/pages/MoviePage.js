import React from "react";
import { useParams } from "react-router-dom";

export default function MoviePage() {
  const route_parameters = useParams();

  return <div>hello I'm a moviepage</div>;
}
