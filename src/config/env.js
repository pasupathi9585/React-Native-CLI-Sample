import {DEV_BACKEND_URL, PROD_BACKEND_URL} from '@env';

const devEnvironment = {
  DEV_BACKEND_URL,
};

const productionEnvironment = {
  PROD_BACKEND_URL,
};

export default __DEV__ ? devEnvironment : productionEnvironment;
