const windowsShortcuts = [
  {
    name: "Show Command Palette",
    combo: ["Control", "Shift", "P"],
    hint: ["Control", "Shift", "p"],
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
    name: "Copy Line (empty selection)",
    combo: ["Control", "c"],
    hint: ["Control", "c"],
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
    name: "Copy line up",
    combo: ["Shift", "Meta", "ArrowUp"],
    hint: ["Shift", "Alt", "Up arrow"],
  },
  {
    name: "Copy line down",
    combo: ["Shift", "Meta", "ArrowDown"],
    hint: ["Shift", "Alt", "Down arrow"],
  },
  {
    name: "Delete line",
    combo: ["Control", "Shift", "K"],
    hint: ["Control", "Shift", "k"],
  },
  {
    name: "Insert line below",
    combo: ["Control", "Enter"],
    hint: ["Control", "Enter"],
  },
  {
    name: "Insert line above",
    combo: ["Control", "Shift", "Enter"],
    hint: ["Control", "Shift", "Enter"],
  },
  {
    name: "Jump to matching bracket",
    combo: ["Control", "Shift", "|"],
    hint: ["Control", "Shift", "\\"],
  },
  { name: "Indent line", combo: ["Control", "]"], hint: ["Control", "]"] },
  { name: "Outdent line", combo: ["Control", "["], hint: ["Control", "["] },
  { name: "Go to beginning of line", combo: ["Home"], hint: ["Home"] },
  { name: "Go to end of line", combo: ["End"], hint: ["End"] },
  { name: "Toggle line comment", combo: ["Control", "/"], hint: ["Control", "/"] },
  {
    name: "Insert cursor above",
    combo: ["Control", "Alt", "ArrowUp"],
    hint: ["Control", "Alt", "Up arrow"],
  },
  {
    name: "Insert cursor below",
    combo: ["Control", "Alt", "ArrowDown"],
    hint: ["Control", "Alt", "Down arrow"],
  },
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
  {
    name: "Create new terminal",
    combo: ["Control", "Shift", "¬"],
    hint: ["Control", "Shift", "`"],
  },
  { name: "Zoom in", combo: ["Control", "="], hint: ["Control", "+"] },
  { name: "Zoom out", combo: ["Control", "-"], hint: ["Control", "-"] },
  {
    name: "Expand selection",
    combo: ["Shift", "Meta", "ArrowRight"],
    hint: ["Shift", "Alt", "Right arrow"],
  },
  {
    name: "Shrink selection",
    combo: ["Shift", "Meta", "ArrowLeft"],
    hint: ["Shift", "Alt", "Left arrow"],
  },
  {
    name: "Toggle Sidebar visibility",
    combo: ["Control", "b"],
    hint: ["Control", "b"],
  },
];

export default windowsShortcuts;
