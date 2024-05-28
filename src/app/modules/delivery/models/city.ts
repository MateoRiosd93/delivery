export interface City {
  id: number;
  name: string;
  description: string;
  surface: number;
  population: number;
  postalCode: string;
  departmentId: number;
  department?: string;
  touristAttractions?: string;
  presidents?: string;
  indigenousReservations?: string;
  airports?: string;
  radios?: string;
}

// TODO: Se podria mapear mejor el tipado de lo que vino como null
// en esta caso se mapea string pero todo estos datos opcionales en caso de que no lleguen
