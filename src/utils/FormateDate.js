export const formatDate = (value) => {
  if (!value) return '';

  let date;

  // Firestore Timestamp object
  if (typeof value === 'object' && value !== null) {
    // If it has a toDate method (Timestamp)
    if (typeof value.toDate === 'function') {
      try {
        date = value.toDate();
      } catch {
        date = null;
      }
    } else if ('seconds' in value && 'nanoseconds' in value) {
      // Plain timestamp-like object
      try {
        date = new Date(value.seconds * 1000 + Math.floor(value.nanoseconds / 1e6));
      } catch {
        date = null;
      }
    }
  }

  // Fallbacks: Date instance, string, or number
  if (!date) {
    if (value instanceof Date) {
      date = value;
    } else if (typeof value === 'string' || typeof value === 'number') {
      const parsed = new Date(value);
      if (!isNaN(parsed.getTime())) {
        date = parsed;
      }
    }
  }

  if (!date || isNaN(date.getTime())) return '';

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};