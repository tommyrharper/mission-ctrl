import React, { Component } from "react";

export class ShortcutPreview extends Component {
  joinCombo = (combo) => {
    return combo.join(" + ")
  }

  shortcutRow = (shortcut) => {
    return (
      <tr key={shortcut.name} className="score">
        <td>{shortcut.name}</td>
        <td>{this.joinCombo(shortcut.hint)}</td>
      </tr>
    );
  };

  render() {
    const shortcutsMapped = this.props.shortcuts.map(this.shortcutRow);

    return (
      <div>
        <h2>Shortcut List</h2>
        <table>
          <thead>
            <tr>
              <th>Shortcut</th>
              <th>Key Combo</th>
            </tr>
          </thead>
          <tbody>{shortcutsMapped}</tbody>
        </table>
      </div>
    );
  }
}

export default ShortcutPreview;
