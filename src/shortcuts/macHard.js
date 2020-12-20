const macShortcuts = [
  {
    name: "Show Command Palette",
    combo: ["Shift", "Meta", "p"],
    hint: ["Shift", "Command", "p"],
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
    name: "Copy Line (empty selection)",
    combo: ["Meta", "c"],
    hint: ["Command", "c"],
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
    name: "Copy line up",
    combo: ["Shift", "Alt", "ArrowUp"],
    hint: ["Shift", "Alt/Option", "Up arrow"],
  },
  {
    name: "Copy line down",
    combo: ["Shift", "Alt", "ArrowDown"],
    hint: ["Shift", "Alt/Option", "Down arrow"],
  },
  {
    name: "Delete line",
    combo: ["Shift", "Meta", "k"],
    hint: ["Shift", "Command", "k"],
  },
  {
    name: "Insert line above",
    combo: ["Meta", "Enter"],
    hint: ["Command", "Enter"],
  },
  {
    name: "Insert line below",
    combo: ["Shift", "Meta", "Enter"],
    hint: ["Shift", "Command", "Enter"],
  },
  {
    name: "Jump to matching bracket",
    combo: ["Shift", "Meta", "\\"],
    hint: ["Shift", "Command", "\\"],
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
  {
    name: "Insert cursor above",
    combo: ["Alt", "Meta", "ArrowUp"],
    hint: ["Alt/Option", "Command", "Up arrow"],
  },
  {
    name: "Insert cursor below",
    combo: ["Alt", "Meta", "ArrowDown"],
    hint: ["Alt/Option", "Command", "Down arrow"],
  },
  { name: "Find", combo: ["Meta", "f"], hint: ["Command", "f"] },
  { name: "Find next", combo: ["Meta", "g"], hint: ["Command", "g"] },
  {
    name: "Find previous",
    combo: ["Shift", "Meta", "g"],
    hint: ["Shift", "Command", "g"],
  },
  { name: "Open File..", combo: ["Meta", "o"], hint: ["Command", "o"] },
  { name: "Save", combo: ["Meta", "s"], hint: ["Command", "s"] },
  {
    name: "Show integrated terminal",
    combo: ["Control", "`"],
    hint: ["Control", "`"],
  },
  {
    name: "Toggle full screen",
    combo: ["Control", "Meta", "f"],
    hint: ["Control", "Command", "f"],
  },
  {
    name: "Create new terminal",
    combo: ["Control", "Shift", "`"],
    hint: ["Control", "Shift", "`"],
  },
  { name: "Zoom in", combo: ["Meta", "="], hint: ["Command", "+"] },
  {
    name: "Zoom out",
    combo: ["Shift", "Meta", "-"],
    hint: ["Shift", "Command", "-"],
  },
  {
    name: "Expand selection",
    combo: ["Control", "Shift", "Meta", "ArrowRight"],
    hint: ["Control", "Shift", "Command", "Right arrow"],
  },
  {
    name: "Shrink selection",
    combo: ["Control", "Shift", "Meta", "ArrowLeft"],
    hint: ["Control", "Shift", "Command", "Left arrow"],
  },
  {
    name: "Toggle Sidebar visibility",
    combo: ["Meta", "b"],
    hint: ["Command", "b"],
  },
  //// NEW SHORTCUTS
  {
    name: "Go to beginning of file", // WORKS
    combo: ["Meta", "ArrowUp"],
    hint: ["Command", "Up arrow"],
  },
  {
    name: "Go to end of file", // WORKS
    combo: ["Meta", "ArrowDown"],
    hint: ["Command", "Down arrow"],
  },
  // { // CAN'T WORK, CHROME CHANGES PAGE
  //   name: "Scroll line up",
  //   combo: ["PageUp", "Control"],
  //   hint: ["Fn", "Control", "Up arrow"],
  // },
  // { // CAN'T WORK, CHROME CHANGES PAGE
  //   name: "Scroll line down",
  //   combo: ["PageDown", "Control"],
  //   hint: ["Fn", "Control", "Down arrow"],
  // },
  {
    name: "Scroll page up", // WORKS
    combo: ["PageUp", "Meta"],
    hint: ["Fn", "Command", "Up arrow"],
  },
  {
    name: "Scroll page down", // WORKS
    combo: ["PageDown", "Meta"],
    hint: ["Fn", "Command", "Down arrow"],
  },
  // {
  //   name: "Fold region", // Needs converting to event code
  //   combo: ["Alt", "Meta", "["],
  //   hint: ["Alt/Option", "Command", "["],
  // },
  // {
  //   name: "Unfold region", // Needs converting to event code
  //   combo: ["Alt", "Meta", "]"],
  //   hint: ["Alt/Option", "Command", ""],
  // },
  // {
  //   name: "Toggle block comment", // Needs coverting to event.code
  //   combo: ["Shift", "Alt", "a"],
  //   hint: ["Shift", "Alt/Option", "a"],
  // },
  // {
  //   name: "Toggle word wrap", // Needs coverting to event.code
  //   combo: ["Alt", "z"],
  //   hint: ["Alt/Option", "z"],
  // },
  {
    name: "Undo last cursor operation", // WORKS
    combo: ["Meta", "u"],
    hint: ["Command", "u"],
  },

];

export default macShortcuts;

// Shortcuts not yet supported:
// Keyboard Shortcuts -> command k command s
// Fold/unfold all subregions -> command k command [ -> command k command ]
// Fold/unfold all regions -> command k command 0 -> command k command j
// Add/remove line comment -> command k command c --- PRETTY USELESS ---


// Save As, New File, Save All, Close editor, Format document, "Replace?", New window/instance, Reopen closed editor
