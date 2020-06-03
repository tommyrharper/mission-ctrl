const windowsShortcuts = [
  { name: "Show Command Palette", combo: ['Control', 'Shift', 'p'] },
  { name: "Quick Open, Go to File..", combo: ['Control', 'p'] },
  { name: "User Settings", combo: ['Control', ','] },
  { name: "Cut Line (empty selection)", combo: ['Control', 'x'] },
  { name: "Copy Line (empty selection)", combo: ['Control', 'c'] },
  { name: "Move line up", combo: ['Alt', 'ArrowUp'] },
  { name: "Move line down", combo: ['Alt', 'ArrowDown'] },
  { name: "Copy line up", combo: ['Shift', 'Alt', 'ArrowUp'] },
  { name: "Copy line down", combo: ['Shift', 'Alt', 'ArrowDown' ] },
  { name: "Delete line", combo: ['Control', 'Shift', 'k'] },
  { name: "Insert line above", combo: ['Control', 'Enter'] },
  { name: "Insert line below", combo: ['Control', 'Shift', 'Enter'] },
  { name: "Jump to matching bracket", combo: ['Control', 'Shift', '\\'] },
  { name: "Indent line", combo: ['Control', ']'] },
  { name: "Outdent line", combo: ['Control', '['] },
  { name: "Go to beginning of line", combo: ['Home'] },
  { name: "Go to end of line", combo: ['End'] },
  { name: "Toggle line comment", combo: ['Control', '/'] },
  { name: "Insert cursor above", combo: ['Control', 'Alt', 'ArrowUp'] },
  { name: "Insert cursor below", combo: ['Control', 'Alt', 'ArrowDown'] },
  { name: "Find", combo: ['Control', 'f'] },
  { name: "Find next", combo: ['F3'] },
  { name: "Find previous", combo: ['Shift', 'F3'] },
  { name: "Open File..", combo: ['Control', 'o'] },
  { name: "Save", combo: ['Control', 's'] },
  { name: "Reopen closed editor", combo: ['Control', 'Shift', 't'] },
  { name: "Show integrated terminal", combo: ['Control', '`'] },
  { name: "Toggle full screen", combo: ['F11'] },
  { name: "Create new terminal", combo: ['Control', 'Shift', '`'] },
  { name: "Zoom in", combo: ['Control', '='] },
  { name: "Zoom out", combo: ['Control', '-'] },
  { name: "Expand selection", combo: ['Shift', 'Alt', 'ArrowRight'] },
  { name: "Shrink selection", combo: ['Shift', 'Alt', 'ArrowLeft'] },
  { name: "Toggle Sidebar visability", combo: ['Control', 'b']}
]

export default windowsShortcuts

// Replace Control h ---> perhaps put this one in
// { name: "Replace", combo: ['Control', 'h'] },

// { name: "Copy", combo: ['Control', 'c'] },
// { name: "Cut", combo: ['Control', 'x'] },
// { name: "Undo", combo: ['Control', 'z'] },
// { name: "Paste", combo: ['Control', 'v'] }