const windowsShortcuts = [
  {
    name: "Copy Line (empty selection)",
    combo: ["Control", "c"],
    hint: ["Control", "c"],
  },
  {
    name: "Quick Open, Go to File..",
    combo: ["Control", "p"],
    hint: ["Control", "p"],
  },
  { name: "User Settings", combo: ["Control", ","], hint: ["Control", ","] },
  {
    name: "Cut Line (empty selection)",
    combo: ["Control", "x"],
    hint: ["Control", "x"],
  },
  {
    name: "Move line up",
    combo: ["Alt", "ArrowUp"],
    hint: ["Alt", "Up arrow"],
  },
  {
    name: "Move line down",
    combo: ["Alt", "ArrowDown"],
    hint: ["Alt", "Down arrow"],
  },
  {
    name: "Insert line below",
    combo: ["Control", "Enter"],
    hint: ["Control", "Enter"],
  },
  { name: "Indent line", combo: ["Control", "]"], hint: ["Control", "]"] },
  { name: "Outdent line", combo: ["Control", "["], hint: ["Control", "["] },
  { name: "Go to beginning of line", combo: ["Home"], hint: ["Home"] },
  { name: "Go to end of line", combo: ["End"], hint: ["End"] },
  { name: "Toggle line comment", combo: ["Control", "/"], hint: ["Control", "/"] },
  { name: "Find", combo: ["Control", "f"], hint: ["Control", "f"] },
  { name: "Find next", combo: ["F3"], hint: ["F3"] },
  { name: "Find previous", combo: ["Shift", "F3"], hint: ["Shift", "F3"] },
  { name: "Open File..", combo: ["Control", "o"], hint: ["Control", "o"] },
  { name: "Save", combo: ["Control", "s"], hint: ["Control", "s"] },
  {
    name: "Show integrated terminal",
    combo: ["Control", "`"],
    hint: ["Control", "`"],
  },
  { name: "Toggle full screen", combo: ["F11"], hint: ["F11"] },
  { name: "Zoom in", combo: ["Control", "="], hint: ["Control", "+"] },
  { name: "Zoom out", combo: ["Control", "-"], hint: ["Control", "-"] },
  {
    name: "Toggle Sidebar visibility",
    combo: ["Control", "b"],
    hint: ["Control", "b"],
  },
];

export default windowsShortcuts;
