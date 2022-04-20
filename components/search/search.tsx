import { useState } from "react";
import { Combobox } from "@headlessui/react";
import Styles from "./search.module.css";

const cities = [
  "São Paulo, SP",
  "Rio de Janeiro, RJ",
  "Florianópolis, SC",
  "Porto Alegre, RS",
  "Belo Horizonte, MG",
];

export function Search() {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [query, setQuery] = useState("");

  const filteredCities =
    query === ""
      ? cities
      : cities.filter((city) => {
          return city.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      value={selectedCity}
      onChange={setSelectedCity}
      as="div"
      className={Styles.search}
    >
      <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
      <Combobox.Options>
        {filteredCities.map((city) => (
          <Combobox.Option key={city} value={city}>
            {city}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
}
