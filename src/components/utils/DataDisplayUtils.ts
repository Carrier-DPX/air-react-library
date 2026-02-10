/**
 * Get display string for Avatar component
 * Formats a string (name, initials, etc.) for display in Avatar
 */
export const getDisplayStringForAvatar = (input: string): string => {
  if (!input) return "";
  
  // If it's already initials (2-3 characters), return as-is
  if (input.length <= 3 && input.split(" ").length === 1) {
    return input.toUpperCase();
  }
  
  // Extract initials from name
  const words = input.trim().split(/\s+/);
  if (words.length >= 2) {
    // First letter of first word + first letter of last word
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  } else if (words.length === 1 && words[0].length > 0) {
    // Single word - take first 2 characters
    return words[0].substring(0, 2).toUpperCase();
  }
  
  return input.toUpperCase();
};
