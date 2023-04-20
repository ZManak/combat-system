export const player = {
  name: localStorage.getItem("playerName") || "The Player",
  level: localStorage.getItem("level") || 1,
  exp: localStorage.getItem("exp") || 0,
  expToNextLevel: localStorage.getItem("expToNextLevel") || 100,
  health: localStorage.getItem("health") || 10,
  maxHealth: localStorage.getItem("maxHealth") || 10,
  mana: localStorage.getItem("mana") || 100,
  maxMana: localStorage.getItem("maxMana") || 100,
  strength: localStorage.getItem("strength") || 10,
  damage: localStorage.getItem("damage") || 10,
  block: localStorage.getItem("block") || 10,
  constitution: localStorage.getItem("constitution") || 10,
  intelligence: localStorage.getItem("intelligence") || 10,
  magicDefense: localStorage.getItem("magicDefense") || 10,
  dexterity: localStorage.getItem("dexterity") || 10,
  perception: localStorage.getItem("perception") || 10,
  gold: localStorage.getItem("gold") || 0,
  inventory: localStorage.getItem("inventory") || [],
  equipped: localStorage.getItem("equipped") || [],
  spells: localStorage.getItem("spells") || [],
  skills: localStorage.getItem("skills") || [],
  condition: {
    poisoned: localStorage.getItem("poisoned") || false,
    bleeding: localStorage.getItem("bleeding") || false,
    cursed: localStorage.getItem("cursed") || false,
    blind: localStorage.getItem("blind") || false,
  },
};

export const shop = {
  equipment: localStorage.getItem("shopEquipment") || [],
  consumables: localStorage.getItem("shopConsumables") || [],
  spells: localStorage.getItem("shopSpells") || [],
  skills: localStorage.getItem("shopSkills") || [],
};

export const equipment = [
  { name: "Sword", type: "weapon", damage: 5, cost: 10, weight: 3 },
  { name: "Axe", type: "weapon", damage: 10, cost: 10, weight: 5 },
  { name: "Mace", type: "weapon", damage: 15, cost: 10, weight: 7 },
  {
    name: "Dagger",
    type: "weapon",
    damage: 2,
    cost: 10,
    weight: 1,
    critical: 2.5,
    special: "Deep Wounds",
  },
  {
    name: "Short Bow",
    type: "weapon",
    damage: 5,
    cost: 10,
    weight: 2,
    critical: 2.5,
    special: "Rapid Fire",
  },
  {
    name: "Long Bow",
    type: "weapon",
    damage: 10,
    cost: 10,
    weight: 4,
    critical: 2.5,
    special: "Precision Shot",
  },
  {
    name: "Crossbow",
    type: "weapon",
    damage: 15,
    cost: 10,
    weight: 6,
    critical: 2.5,
    special: "Rapid Fire",
  },
  {
    name: "Staff",
    type: "weapon",
    damage: 2,
    cost: 10,
    weight: 3,
    critical: 2.5,
    special: "Spell Charge",
  },
  {
    name: "Wand",
    type: "weapon",
    damage: 5,
    cost: 10,
    weight: 1,
    critical: 2.5,
    special: "Spell Charge",
  },
  { name: "Wooden Shield", type: "shield", block: 5, cost: 10, weight: 4 },
  { name: "Iron Shield", type: "shield", block: 10, cost: 10, weight: 6 },
  { name: "Tower Shield", type: "shield", block: 15, cost: 10, weight: 8 },
  { name: "Leather Armor", type: "armor", defense: 5, cost: 10, weight: 5 },
  { name: "Scale Armor", type: "armor", defense: 15, cost: 10, weight: 15 },
  { name: "Chainmail Armor", type: "armor", defense: 25, cost: 10, weight: 25 },
  { name: "Ruby Ring", type: "ring", magic: 5, cost: 10, weight: 0.5 },
  { name: "Mind Ring", type: "ring", perception: 5, cost: 10, weight: 0.5 },
  {
    name: "Spirit Talisman",
    type: "amulet",
    magicDefense: 10,
    cost: 10,
    weight: 0.5,
  },
  {
    name: "Health Talisman",
    type: "amulet",
    maxHealth: 10,
    cost: 10,
    weight: 0.5,
  },
  { name: "Mana Talisman", type: "amulet", maxMana: 10, cost: 10, weight: 0.5 },
];

export const consumables = [
  {
    name: "Health Potion",
    type: "potion",
    onUse: (player.health += 10),
    amount: 10,
    cost: 10,
    weight: 1,
  },
  {
    name: "Mana Potion",
    type: "potion",
    onUse: (player.mana = player.mana + 10),
    amount: 10,
    cost: 10,
    weight: 1,
  },
  {
    name: "Antidote",
    type: "potion",
    onUse: player.condition.poison === false,
    amount: 10,
    cost: 10,
    weight: 1,
  },
  {
    name: "Beast Pellets",
    type: "potion",
    onUse: (player.strength += 10),
    amount: 10,
    cost: 10,
    weight: 1,
  },
  {
    name: "Throwing Knife",
    type: "throwing",
    onUse: (damage = 10) && (evade += 0.5),
    amount: 10,
    cost: 10,
    weight: 1,
  },
];

/* export const enemyStats = {
  name: "Enemy",
  health: 100,
  maxHealth: 100,
  strength: 10,
  defense: 10,
  magic: 10,
  magicDefense: 10,
  dexterity: 10,
  perception: 10,
}; */

// Path: src\data\characters.js
// Compare this snippet from src\App.js:
// import "./App.css";
// import React, { useState } from "react";
// import Engine from "./components/Engine/Engine";
// import StartMenu from "./components/StartMenu/StartMenu";
// import Ending from "./components/Ending/Ending";
//
