import type { FormData, FengShuiResult } from './fengShuiLogic';

export async function generateFengShuiWithAI(
  data: FormData
): Promise<FengShuiResult> {
  const response = await fetch('/api/gemini', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fullName: data.fullName,
      day: data.day,
      month: data.month,
      year: data.year,
      gender: data.gender,
      currentDirection: data.currentDirection,
    }),
  });

  let result: any;

  try {
    result = await response.json();
  } catch {
    throw new Error('Phản hồi từ máy chủ không hợp lệ');
  }

  if (!response.ok) {
    const message =
      result?.error?.message ||
      result?.message ||
      result?.error ||
      'AI request failed';

    throw new Error(message);
  }

  return result as FengShuiResult;
}