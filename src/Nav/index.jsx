import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [elements, setElements] = useState();

  useEffect(() => {
    fetch("/jsons/icons.json").then(async (el) => {
      setElements(await el.json());
    });
  });

  return (
    <nav className="flex h-screen sticky top-0 bg-stone-950">
      <ul className="flex flex-col gap-10 p-12">
        {elements?.map((element) => {
          return (
            <li key={element.title}>
              <Link to={element.link}>
                <img src={element.icon} alt={element.title} className="w-12" />

                <p>{element.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
