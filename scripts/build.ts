import { updateDist } from '@gkd-kit/tools';
import subscription from './check';

const today = new Date();
subscription.version =
  today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

await updateDist(subscription);
