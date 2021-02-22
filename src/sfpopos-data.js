import data from './sfpopos-data.json';

data.forEach((obj, id) => { obj.id = id });

export default data;