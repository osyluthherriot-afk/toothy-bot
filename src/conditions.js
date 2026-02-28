module.exports = {
    "blinded": {
        name: "Blinded",
        description: "The creature cannot see and automatically fails any ability check that requires sight. Attack rolls against the creature have Advantage, and the creature’s own attack rolls have Disadvantage.",
        recovery: "Healing effects that restore senses, *Lesser Restoration*, or removal of the blinding source"
    },
    "charmed": {
        name: "Charmed",
        description: "The creature cannot attack the charmer or target the charmer with harmful abilities or magical effects. The charmer has Advantage on all Charisma-based checks made to interact socially with the creature. **Weak:** Psychic damage or mind-affecting disruption.",
        recovery: "*Stillness of Mind*, *Dispel Evil and Good*, breaking concentration, or removing the charmer"
    },
    "cursed": {
        name: "Cursed",
        description: "The creature is afflicted by a persistent magical effect that imposes penalties defined by the curse (disadvantage on rolls, damage triggers, narrative limitations, etc.). **Weak:** Radiant damage.",
        recovery: "*Remove Curse*, *Greater Restoration*, destroying or dispelling the source"
    },
    "dominated": {
        name: "Dominated",
        description: "The creature is under magical control and must follow the mental commands of the controller. Typical commands include attacking allies, moving to specific locations, or refraining from certain actions. **Weak:** Psychic damage.",
        recovery: "*Stillness of Mind*, *Dispel Evil and Good*, incapacitating or killing the controller"
    },
    "diseased": {
        name: "Diseased",
        description: "The creature suffers from a supernatural or natural disease. Effects vary by disease and may include ability score reduction, recurring damage, exhaustion, or impaired healing.",
        recovery: "Lay on Hands, *Lesser Restoration*, long rest with medical care"
    },
    "frightened": {
        name: "Frightened",
        description: "The creature has Disadvantage on ability checks and attack rolls while the source of its fear is within line of sight. The creature cannot willingly move closer to the source of its fear.",
        recovery: "*Stillness of Mind*, *Dispel Evil and Good*, eliminating or escaping the fear source"
    },
    "incapacitated": {
        name: "Incapacitated",
        description: "The creature cannot take Actions or Reactions. Movement may still be possible depending on the source of the condition.",
        recovery: "Typically ends when the source effect ends or is removed"
    },
    "paralyzed": {
        name: "Paralyzed",
        description: "The creature is incapacitated and cannot move or speak. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have Advantage, and any attack that hits from within melee range is a critical hit.",
        recovery: "*Lesser Restoration*, greater healing"
    },
    "petrified": {
        name: "Petrified",
        description: "The creature is transformed into solid stone. It is incapacitated, unaware of its surroundings, and does not age. All carried equipment is petrified as well.",
        recovery: "*Greater Restoration*, *Wish*"
    },
    "poisoned": {
        name: "Poisoned",
        description: "The creature has Disadvantage on attack rolls and ability checks. The creature takes `2d6 Poison` damage at the start of each turn while poisoned.",
        recovery: "Antidote, *Lesser Restoration*"
    },
    "polymorphed": {
        name: "Polymorphed",
        description: "The creature is magically transformed into a beast form. Its game statistics are replaced by those of the new form, except for alignment and personality.",
        recovery: "Ends when reduced to 0 HP in beast form or via *Greater Restoration*"
    },
    "prone": {
        name: "Prone",
        description: "The creature is knocked to the ground. The creature is denied an Action, Bonus Action, and Reaction. Its only movement option is to crawl at half speed. Melee attacks against the creature have Advantage, while ranged attacks against it have Disadvantage. **Weak:** Bludgeoning damage",
        recovery: "The creature stands up at the start of their next turn."
    },
    "dazed": {
        name: "Dazed",
        description: "Has Disadvantage on Wisdom Saving throws, can't take Reactions, and loses the Dexterity bonus to their Armour Class.",
        recovery: "Healing or Help Bonus Action."
    },
    "restrained": {
        name: "Restrained",
        description: "The creature’s speed becomes 0, and it cannot benefit from bonuses to speed. Attack rolls against the creature have Advantage, and the creature’s own attack rolls have Disadvantage.",
        recovery: "Help Action, breaking restraints, *Freedom of Movement*"
    },
    "grappled": {
        name: "Grappled",
        description: "The creature’s speed becomes 0 while grappled. The condition ends if the grappler is incapacitated or if the creature escapes using an Action on their turn. **Weak:** Piercing damage",
        recovery: "Athletics or Acrobatics to escape."
    },
    "stunned": {
        name: "Stunned",
        description: "The creature is incapacitated, cannot move, and can speak only falteringly. It automatically fails Strength and Dexterity saving throws, and attack rolls against it have Advantage.",
        recovery: "*Greater Restoration*, powerful disruption"
    },
    "unconscious": {
        name: "Unconscious",
        description: "The creature drops whatever it is holding and falls prone. It is unaware of its surroundings, automatically fails Strength and Dexterity saving throws, and melee attacks against it are critical hits.",
        recovery: "Taking damage, being shaken, healing, water"
    },
    "hamstrung": {
        name: "Hamstrung",
        description: "The creature’s movement speed is reduced by half due to leg injury or similar impairment. Jump distances are also halved.",
        recovery: "Magical healing or a DC 18 Medicine check."
    },
    "maimed": {
        name: "Maimed",
        description: "The creature is severely injured, reducing speed to 0 and causing automatic failure on Dexterity saving throws. **Weak:** Poison.",
        recovery: "Magical healing or regeneration"
    },
    "momentum": {
        name: "Momentum",
        description: "If a creature Dashes on two or more consecutive rounds, it gains +5 ft movement speed per round, stacking up to +15 ft.",
        recovery: "Ends immediately if the creature does not Dash on their turn"
    },
    "wet": {
        name: "Wet",
        description: "The creature or area is soaked with water. Flames cannot take hold, and existing fire effects are suppressed. **Vulnerable:** Lightning, Cold. Cannot be Burning.",
        recovery: "Drying, heat, wind"
    },
    "burning": {
        name: "Burning",
        description: "The creature is on fire and takes `1d4 Fire` damage at the start of each turn. Multiple applications do not stack. Ends immediately if Wet is applied.",
        recovery: "Help action, potions, dropping prone"
    },
    "greased": {
        name: "Greased",
        description: "The creature or area is coated in oil or grease, increasing the chance of slipping or falling prone. **Vulnerable:** Fire, which escalates the condition into *Scorched*.",
        recovery: "Cleaning, time"
    },
    "scorched": {
        name: "Scorched",
        description: "The creature suffers intense heat damage, taking `1d6 Fire` damage at the start of each turn. Medium or Heavy armor becomes **Vulnerable:** Acid",
        recovery: "Extinguishing flames, cooling magic"
    },
    "smothered": {
        name: "Smothered",
        description: "The creature is engulfed in thick smoke or fog, impairing breathing and vision. **Vulnerable:** Thunder, which disperses smoke",
        recovery: "Wind, movement"
    },
    "chilled": {
        name: "Chilled",
        description: "The creature’s muscles stiffen and reactions slow, reducing movement and Dexterity-based responses. **Vulnerable:** Force, Thunder, Bludgeoning",
        recovery: "Heat, fire"
    },
    "jolted": {
        name: "Jolted",
        description: "Electrical energy courses through metal armor or conductive surfaces. The creature takes `1d6 Lightning` damage at the start of each turn. Additional Lightning damage escalates severity",
        recovery: "Remove metal armor, grounding"
    },
    "bleeding": {
        name: "Bleeding",
        description: "Open wounds cause continuous blood loss. The creature takes `1d4 Slashing` damage at the start of each turn and has Disadvantage on Constitution saving throws. **Weak:** Poison"
    },
    "gaping_wounds": {
        name: "Gaping Wounds",
        description: "Severe injuries expose vital areas. Attacks against the creature deal an additional `1d4 Piercing` damage that ignores resistance. **Weak:** Poison, Acid"
    },
    "bloodied": {
        name: "Bloodied",
        description: "The creature is below 50% of its maximum hit points. Certain abilities may trigger or gain bonuses while the creature is bloodied. **Weak:** Poison"
    },
    "ambushed": {
        name: "Ambushed",
        description: "The creature is caught off guard. Attacks against it have Advantage, and it has Disadvantage on Strength and Dexterity checks until the condition ends."
    },
    "arcane_acuity": {
        name: "Arcane Acuity",
        description: "The creature’s magical focus intensifies, granting +1 to spell attack rolls and spell save DCs per turn, stacking up to +10. Taking damage reduces stacks by 2."
    },
    "arcane_charge": {
        name: "Arcane Charge",
        description: "The creature’s spells are empowered against threatened targets, dealing +2 bonus spell damage."
    },
    "arcane_hunger": {
        name: "Arcane Hunger",
        description: "Unstable magic ravages the body. The creature has Disadvantage on Constitution saves, and all damage it takes is doubled."
    },
    "arcane_synergy": {
        name: "Arcane Synergy",
        description: "Weapon attacks deal additional damage equal to affected entity's Spell Casting Ability Modifier."
    },
    "bloodless": {
        name: "Bloodless",
        description: "Severe blood loss weakens the creature, imposing a −1 penalty to all rolls and checks until recovery."
    },
    "confused": {
        name: "Confused",
        description: "The creature’s thoughts fracture into chaotic impulses and distorted perceptions. It cannot take Reactions, automatically fails Concentration checks, and its sense of friend and foe becomes unreliable. At the start of each of its turns, roll **1d8** to determine its behavior for that turn.\n\n**1.** Violent Frenzy: attack nearest creature.\n**2.** Self-Destructive: 1d12 Psychic damage and Prone.\n**3.** Panic Flight: flee in random direction.\n**4.** Hallucinatory Assault: attack imaginary threat.\n**5.** Paranoia: disadvantage on attacks against creature.\n**6.** Catatonia: Incapacitated.\n**7.** Chaotic Clarity: act normally, gain temporary HP.\n**8.** Mind Break: roll twice apply both, if rolled again Stunned."
    }
};
