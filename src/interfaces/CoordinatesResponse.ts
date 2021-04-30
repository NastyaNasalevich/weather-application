interface LocalNames {
  [key: string]: string;
}

interface CoordinatesResponse {
  country: string;
  lat: number;
  local_names: LocalNames;
  lon: number;
  name: string;
}

export default CoordinatesResponse;