export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...funcArgs: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let lastExec = 0;

  return function (...args: Parameters<T>) {
    const now = Date.now();

    const execute = () => {
      lastExec = now;
      func(...args);
    };

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const timeSinceLastExec = now - lastExec;
    if (timeSinceLastExec >= wait) {
      execute();
    } else {
      timeoutId = setTimeout(execute, wait - timeSinceLastExec);
    }
  };
}
