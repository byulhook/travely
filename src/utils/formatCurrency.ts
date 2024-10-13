export default function formatCurrency(input: number | string): string {
  const number = typeof input === 'string' ? Number(input) : input;

  if (isNaN(number)) {
    throw new Error('잘못된 입력입니다: 숫자 또는 숫자 형태의 문자열이어야 합니다.');
  }

  return number.toLocaleString();
}
