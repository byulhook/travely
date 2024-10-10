interface newField {
  [key: string]: string;
}
interface Fields {
  [key: string]: string;
}
interface Entity {
  [key: string]: string;
}

// 카멜케이스를 스네이크케이스로 변환하는 함수
// ex) camelToSnakeCase('loginId') => 'login_id'
function camelToSnakeCase(str: string) {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

// 스네이크케이스를 카멜케이스로 변환하는 함수
// ex) snakeToCamelCase('login_id') => 'loginId'
function snakeToCamelCase(str: string) {
  return str.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace('-', '').replace('_', ''),
  );
}

// 배열의 스네이크케이스로 변환, 단일 객체에 대한 변환
// ex) convertKeysToSnakeCase(['loginId', 'userName']) => ['login_id', 'user_name']
function convertKeysToSnakeCase(keys = []) {
  return keys.map((key) => camelToSnakeCase(key));
}

// 필드(배열 안에 객체가 들어 있는 형태)를 스네이크케이스로 변환, 배열 안에 객체가 들어 있는 형태에 대한 변환
// ex) convertFieldsToSnakeCase([{ loginId: 'test', userName: 'test' }, { loginId: 'test', userName: 'test' }]) => [{ login_id: 'test', user_name: 'test' }, { login_id: 'test', user_name: 'test' }]
function convertFieldsToCamelCase(fields: Fields[]) {
  return fields.map((field) => {
    const newField: newField = {};
    for (const key in field) {
      newField[snakeToCamelCase(key)] = field[key];
    }
    return newField;
  });
}

// 객체의 키를 카멜케이스로 변환, 단일 객체에 대한 변환
// ex) convertEntityKeysToCamelCase({ login_id: 'test', user_name: 'test' }) => { loginId: 'test', userName: 'test' }
function convertEntitySnakeToCamelCaseKeys(entity: Entity) {
  const newEntity: newField = {};
  for (const key in entity) {
    newEntity[snakeToCamelCase(key)] = entity[key];
  }
  return newEntity;
}

export { convertKeysToSnakeCase, convertFieldsToCamelCase, convertEntitySnakeToCamelCaseKeys };
