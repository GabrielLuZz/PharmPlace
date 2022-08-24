const formatName = (name) => {
  const words = name.split(" ");
  let newName = words.slice(0, 3).join(" ") + "...";

  return newName;
};

export default formatName;
