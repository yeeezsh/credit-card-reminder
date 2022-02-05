const COLOR_LIST = ["#54aa9b", "#acd6b4", "#EA90AE", "#485556"];

export const useRandomColor = (): string => {
  return COLOR_LIST[Math.floor(Math.random() * COLOR_LIST.length)];
};
