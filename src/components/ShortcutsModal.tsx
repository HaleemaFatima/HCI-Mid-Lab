import React from "react";
import { X, Keyboard } from "react-bootstrap-icons";
import "./Modal.css";

interface ShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShortcutsModal: React.FC<ShortcutsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const shortcuts = [
    { key: "Z", desc: "Undo", detail: "Undo the changes" },
    { key: "Y", desc: "Redo", detail: "Redo the changes" },
    { key: "B", desc: "Begin", detail: "Begin to create a new polyline" },
    {
      key: "D",
      desc: "Delete",
      detail: "Remove the point you are pointing to",
    },
    { key: "M", desc: "Move", detail: "Drag a point to a new location" },
    {
      key: "R",
      desc: "Refresh",
      detail: "Erase screen and redraw all polylines",
    },
    { key: "Q", desc: "Quit", detail: "Exit from the program" },
  ];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <div className="header-title">
            <Keyboard size={20} className="text-emerald-400" />
            <h2>Instructions of Use</h2>
          </div>
          <button onClick={onClose} className="close-icon-btn">
            <X size={20} />
          </button>
        </div>
        <p className="instructions">
          Use your keyboard to select an operation, and use your mouse to draw
          on the canvas.
        </p>
        <div className="modal-body">
          {shortcuts.map((s) => (
            <div key={s.key} className="shortcut-row">
              <span className="key-cap">{s.key}</span>
              <div className="shortcut-text">
                <span className="shortcut-name">{s.desc}</span>
                <span className="shortcut-desc">{s.detail}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="modal-footer">
          <button onClick={onClose} className="ok-button">
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShortcutsModal;
