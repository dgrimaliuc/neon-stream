import { useState } from 'react';
import { createChunks } from '../utils';

export function useChunks(array, chunkSize) {
  const [loadIndex, setLoadIndex] = useState(1);
  const chunks = createChunks(array, chunkSize);

  const loadMore = () => setLoadIndex((prev) => prev + 1);

  const isEnd = loadIndex >= chunks.length - 1;
  return { chunks, loadIndex, loadMore, isEnd, setLoadIndex };
}
