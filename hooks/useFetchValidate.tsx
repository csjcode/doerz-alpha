import { useState, useEffect, useCallback } from 'react';

interface ValidationResult {
  isValid: boolean;
  error?: string;
}

interface FetchResult {
  validationResult: ValidationResult | null;
  isLoading: boolean;
  errorValidateTask: string | null;
}

export const useValidateTask = (
  taskId: string | null,
  walletAddress: string | null,
  mintAddress: string | null,
  tokenAmount: string | null
) => {
  const [result, setResult] = useState<FetchResult>({
    validationResult: null,
    isLoading: false,
    errorValidateTask: null,
  });

  if (taskId === null || walletAddress === null || mintAddress === null || tokenAmount === null) {
    throw new Error("All parameters (taskId, walletAddress, mintAddress, tokenAmount) are required!");
  }

  const fetchValidation = useCallback(async () => {
    const url = `http://localhost:3000/api/tasks/${taskId}/validate?walletAddress=${walletAddress}&mintAddress=${mintAddress}&tokenAmount=${tokenAmount}`;

    setResult((prev) => ({ ...prev, isLoading: true }));

    try {
      const response = await fetch(url, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: ValidationResult = await response.json();

      setResult({
        validationResult: data,
        isLoading: false,
        errorValidateTask: null,
      });
    } catch (error: any) {
      setResult({ validationResult: null, isLoading: false, errorValidateTask: error.message });
    }
  }, [taskId, walletAddress, mintAddress, tokenAmount]);

  useEffect(() => {
    fetchValidation();
  }, [fetchValidation]);

  return { ...result, fetchValidation };
};
