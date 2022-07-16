export const baseUrl = 'https://swapi.dev/api/';

export const ERRORMESSAGE = {
  sendSearchDataError: 'Sending search data failed',
  fetchSearchDataError: 'Could not fetch film data',
};

export enum SEARCHTYPE {
  FILMS = 'films',
  PLANETS = 'planets',
  PEOPLE = 'people',
  STARSHIPS = 'starships',
  VEHICLES = 'vehicles',
  SPECIES = 'species',
}

export const _MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365;
