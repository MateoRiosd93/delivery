export interface Departament {
  id: number;
  name: string;
  description: string;
  cityCapitalId: number;
  municipalities: number;
  surface: number;
  population: number;
  phonePrefix: string;
  countryId: number;
  cityCapital?: string;
  country?: string;
  cities?: string;
  regionId: number;
  region?: string;
  naturalAreas?: string;
  maps?: string;
  indigenousReservations?: string;
  airports?: string;
}

// TODO: Se podria mapear mejor el tipado de lo que vino como null
// en esta caso se mapea string pero todo estos datos opcionales en caso de que no lleguen
