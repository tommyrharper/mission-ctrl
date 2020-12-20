const macShortcuts = [
  {
    name: "Copy Line (empty selection)",
    combo: ["Meta", "c"],
    hint: ["Command", "c"],
  },
  {
    name: "Quick Open, Go to File..",
    combo: ["Meta", "p"],
    hint: ["Command", "p"],
  },
  { name: "User Settings", combo: ["Meta", ","], hint: ["Command", ","] },
  {
    name: "Cut Line (empty selection)",
    combo: ["Meta", "x"],
    hint: ["Command", "x"],
  },
  {
    name: "Move line up",
    combo: ["Alt", "ArrowUp"],
    hint: ["Alt/Option", "Up arrow"],
  },
  {
    name: "Move line down",
    combo: ["Alt", "ArrowDown"],
    hint: ["Alt/Option", "Down Arrow"],
  },
  {
    name: "Insert line above",
    combo: ["Meta", "Enter"],
    hint: ["Command", "Enter"],
  },
  { name: "Indent line", combo: ["Meta", "]"], hint: ["Command", "]"] },
  { name: "Outdent line", combo: ["Meta", "["], hint: ["Command", "["] },
  {
    name: "Go to beginning of line",
    combo: ["Home"],
    hint: ["Fn", "Left arrow"],
  },
  {
    name: "Go to end of line",
    combo: ["End"],
    hint: ["Fn", "Right arrow"],
  },
  { name: "Toggle line comment", combo: ["Meta", "/"], hint: ["Command", "/"] },
  { name: "Find", combo: ["Meta", "f"], hint: ["Command", "f"] },
  { name: "Find next", combo: ["Meta", "g"], hint: ["Command", "g"] },
  { name: "Open File..", combo: ["Meta", "o"], hint: ["Command", "o"] },
  { name: "Save", combo: ["Meta", "s"], hint: ["Command", "s"] },
  { name: "Zoom in", combo: ["Meta", "="], hint: ["Command", "+"] },
  {
    name: "Toggle Sidebar visibility",
    combo: ["Meta", "b"],
    hint: ["Command", "b"],
  },
];

export default macShortcuts;

// Save As, New File, Save All, Close editor, Format document, "Replace?", New window/instance, Reopen closed editor
