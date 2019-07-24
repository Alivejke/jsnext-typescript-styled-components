import axios from 'axios';

import { ProductType } from '../interfaces';

export function getProducts (request: string): Promise<[ProductType]> {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost:3000${request}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log('Error', error);
        reject(null);
      });
  });
};
