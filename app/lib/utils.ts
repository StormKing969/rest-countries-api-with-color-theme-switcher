import type { CountryObj } from "../../types";

let cachedData: CountryObj[] = [];

export async function loadData(
  name: string,
  region: string,
): Promise<CountryObj[]> {
  const response: CountryObj[] = await fetch("/data/data.json").then((res) =>
    res.json(),
  );

  if (!response) {
    return [];
  }

  const nameLower: string = name.toLowerCase();
  const regionLower: string = region.toLowerCase();

  const filteredData: CountryObj[] = response.filter((country: CountryObj) => {
    const matchesName: boolean = name
      ? country.name.toLowerCase().startsWith(nameLower)
      : true;
    const matchesRegion: boolean = region
      ? country.region.toLowerCase().startsWith(regionLower)
      : true;
    return matchesName && matchesRegion;
  });

  cachedData = filteredData;
  return filteredData;
}

export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number,
) {
  let timer: ReturnType<typeof setTimeout> | null = null;

  const debounced = (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };

  debounced.cancel = () => {
    if (timer) clearTimeout(timer);
  };

  return debounced;
}

export function formatSize(population: number): string {
  return population.toLocaleString("en-US");
}

export async function getBorderCountries(
  borderAlpha3Code: string,
): Promise<string> {
  if (cachedData.length === 0) {
    cachedData = await loadData("", "");
  }

  const match = cachedData.find((tempData: CountryObj) => {
    return tempData.alpha3Code.startsWith(borderAlpha3Code);
  });

  return match ? match.name : "";
}