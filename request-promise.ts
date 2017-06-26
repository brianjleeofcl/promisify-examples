import { promisify } from 'util';
import { get, post, patch, del } from 'request';

const [ getPm, postPm, patchPm, deletePm ] = [get, post, patch, del].map(promisify);

getPm('http://github.com').then(({statusCode, body}) => {
  if (statusCode !== 200) console.error(new Error('Something went wrong :/'))
  else console.log(body)
})