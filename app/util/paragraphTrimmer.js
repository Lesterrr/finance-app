export const paragraphTrimmer = (content) => {
  // If content has more than 50 letters it will be trim.
  let trimmedContent;
  if (content.length > 110) {
    trimmedContent = content.substr(0, 110) + "...";
  } else {
    return content;
  }
  return trimmedContent;
};
