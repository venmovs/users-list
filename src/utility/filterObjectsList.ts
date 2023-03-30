import { StringKeys } from '../types/StringKeys';

const filterObjectsList = <T extends Record<string, any>>(
  data: T[],
  searchString: string,
  targetParameters: StringKeys<T>[],
) => {
  const dataCopy = [...data];
  const regex = new RegExp(searchString, 'gi');
  return dataCopy.filter((element) => targetParameters.some(
    (parameter) => element[parameter].match(regex),
  ));
};

export default filterObjectsList;
