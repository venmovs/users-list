export type NestedObject = Record<string, any>;

const flattenObject = (
  obj: NestedObject,
  parentKey = '',
): NestedObject => Object.keys(obj).reduce((acc, key) => {
  const value = obj[key];
  const newKey = parentKey ? `${parentKey}_${key}` : key;
  if (typeof value === 'object' && !Array.isArray(value)) {
    const flatObject = flattenObject(value, newKey);
    return { ...acc, ...flatObject };
  }
  return { ...acc, [newKey]: value };
}, {});

export default flattenObject;
