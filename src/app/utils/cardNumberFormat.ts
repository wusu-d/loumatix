const formatCardNumber = (value: string) => {
  return value
    .replace(/\s?/g, "")
    .replace(/(\d{4})/g, "$1 ")
    .trim();
};

export { formatCardNumber };
