# React Spreadsheet Prototype

A static, front-end-only React prototype implementing a pixel-perfect spreadsheet UI as per the [Figma design](https://www.figma.com/design/3nywpu5sz45RrCmwe68QZP/Intern-Design-Assigment?node-id=2-2535&t=DJGGMt8I4fiZjoIB-1).

---

## Project Overview

This project is a spreadsheet-like interface built with React 18 and TypeScript, styled using Tailwind CSS. It mimics the look and feel of Google Sheets/Excel with interactive grid cells, buttons, and tabs.

Key features:

- Pixel-close UI matching the provided Figma design.
- Spreadsheet grid powered by `react-table`.
- Interactive buttons and tabs that reflect state changes or log actions.
- Fully typed with TypeScript strict mode.
- Clean, maintainable, and linted codebase.
- No external state management; local component state is used.
- Responsive layout adhering closely to design specs.

---

## Tech Stack

- React 18 (bootstrapped with Vite)
- TypeScript (strict mode enabled)
- Tailwind CSS (utility-first styling)
- react-table (grid management)
- ESLint + Prettier (linting and formatting)

---

## Setup & Run

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/EshanKhairwar/react-prototype-spreadsheet.git
cd react-spreadsheet-prototype
npm install
# or
yarn install
