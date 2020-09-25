export const paragraphTrimmer = (content, maxLength = 85) => {
  // If content has more than 50 letters it will be trim.
  let trimmedContent;
  if (content.length > maxLength) {
    trimmedContent = content.substr(0, maxLength) + "...";
  } else {
    trimmedContent = content.substring(0, content.length);
  }
  return trimmedContent;
};
