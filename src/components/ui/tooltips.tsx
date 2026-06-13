import { T } from "@/components/ui/t";

type Props = { children?: string };

export const Concentration = ({ children = "Concentration" }: Props) => (
  <T title={children}>
    A concentration spell remains active only while its caster maintains focus. Whenever a creature concentrating on a
    spell takes damage, it must immediately make a saving throw. On a failure, concentration ends and the spell is
    dispelled.
  </T>
);

export const AoE = ({ children = "Area of Effect" }: Props) => (
  <T title={children}>
    An Area of Effect spell affects every creature within a defined area. Each affected creature resolves the spell's
    effects separately.
  </T>
);

export const MultiTarget = ({ children = "Multi-Target" }: Props) => (
  <T title={children}>
    Each projectile, beam, bolt, or strike created by the spell is treated as a separate hit and is resolved
    independently.
  </T>
);

export const Debuff = ({ children = "Debuff" }) => (
  <T title={children}>A harmful magical effect that weakens, impairs, restricts, or otherwise hinders a creature.</T>
);

export const Buff = ({ children = "Buff" }) => (
  <T title={children}>
    A beneficial magical effect that improves a creature's capabilities, attributes, defenses, movement, or other
    statistics.
  </T>
);

export const Ritual = ({ children = "Ritual" }) => (
  <T title={children}>
    A ritual remains active over multiple rounds. Once started, the caster must spend the ritual's listed Action Point
    cost at the start of each turn to continue powering it. Rituals cannot be counterspelled after they begin, but
    immediately fail if the caster dies, becomes unable to cast spells, becomes unable to perform actions, or fails to
    pay the required Action Point cost. Rituals and Concentration are separate properties and do not inherently depend
    on one another.
  </T>
);

export const InnateSpeed = ({ children = "Innate Speed" }: Props) => (
  <T title={children}>
    Each creature has a base speed of 5. This number is further expanded by the dexterity modifier and increases by +1
    for every 4 levels the creature possesses.
  </T>
);

export const PhysicalAttributes = ({ children = "Physical Attributes" }: Props) => (
  <T title={children}>
    Each creature has a base jump distance of 2. This distance is further expanded by its dexterity and strength
    modifiers.
  </T>
);

export const Initiative = ({ children = "Initiative" }: Props) => (
  <T title={children}>
    A check rolled at the start of combat to determine the turn order. Characters act in descending order of their
    results.
  </T>
);

export const ActionPoints = ({ children = "Action Points" }: Props) => (
  <T title={children}>
    A resource replenished at the start of your turn, determined by your Level and Class, spent to execute maneuvers,
    martial arts, or spells.
  </T>
);

export const Reactions = ({ children = "Reactions" }: Props) => (
  <T title={children}>
    A limited resource pool used out of turn to cast defensive spells, perform counterattacks, evade attacks, or
    activate special triggers.
  </T>
);

export const Advantage = ({ children = "Advantage" }: Props) => (
  <T title={children}>
    When you have Advantage, roll a second d20 alongside your primary roll and use the higher of the two results.
  </T>
);

export const Disadvantage = ({ children = "Disadvantage" }: Props) => (
  <T title={children}>
    When you have Disadvantage, roll a second d20 alongside your primary roll and use the lower of the two results.
  </T>
);

export const Contest = ({ children = "Contest" }: Props) => (
  <T title={children}>
    A direct opposition of efforts where both participants roll ability checks and compare their totals instead of
    beating a static DC.
  </T>
);

export const LightWeapon = ({ children = "Light Weapon" }: Props) => (
  <T title={children}>
    A weapon designed for speed and coordination. A creature wielding two light weapons can strike with both at the same
    time during the same attack, making it ideal for aggressive dual-wielding styles.
  </T>
);

export const StandardWeapon = ({ children = "Standard Weapon" }: Props) => (
  <T title={children}>
    A balanced weapon that can attack once per action. Its off-hand remains free for a shield, a spell focus, or other
    hand-held tools unless a special class feature changes how it is used.
  </T>
);

export const HeavyWeapon = ({ children = "Heavy Weapon" }: Props) => (
  <T title={children}>
    A large, demanding weapon that must be carried and used with both hands. A creature normally cannot wield another
    weapon, shield, or hand-held item at the same time unless a feature specifically allows it.
  </T>
);

export const Finesse = ({ children = "Finesse" }: Props) => (
  <T title={children}>
    A weapon property that allows the attack to use Dexterity instead of Strength, reflecting precision, timing, and
    control rather than raw force.
  </T>
);

export const Arcane = ({ children = "Arcane" }: Props) => (
  <T title={children}>
    A weapon property that uses Intelligence for its attack rolls, treating the weapon as an extension of studied magic
    and technical understanding.
  </T>
);

export const Spiritual = ({ children = "Spiritual" }: Props) => (
  <T title={children}>
    A weapon property that uses Wisdom for its attack rolls, representing instinct, discipline, and a deep connection to
    inner balance or divine force.
  </T>
);

export const Eloquent = ({ children = "Eloquent" }: Props) => (
  <T title={children}>
    A weapon property that uses Charisma for its attack rolls, turning confidence, force of personality, and dramatic
    presence into martial accuracy.
  </T>
);

export const VenaticArts = ({ children = "Venatic Arts" }: Props) => (
  <T title={children}>
    The discipline of ranged combat. Venatic weapons attack by launching projectiles through space, usually from a bow
    or crossbow, and rely on timing, distance, and precision instead of direct melee pressure.
  </T>
);

export const Bow = ({ children = "Bow" }: Props) => (
  <T title={children}>
    A ranged weapon that draws and releases in the same attack. A bow creates its shot as part of the attack itself, so
    it is ready to fire whenever the wielder spends the action.
  </T>
);

export const Crossbow = ({ children = "Crossbow" }: Props) => (
  <T title={children}>
    A ranged weapon that must be preloaded before it can fire. Some crossbows automatically reload at the end of the
    turn, while others require the wielder to spend an action to load them again. The exact number of bolts that can be
    loaded depends on the weapon's design and the wielder's skill.
  </T>
);

export const Reload = ({ children = "Reload" }: Props) => (
  <T title={children}>
    The act of preparing a ranged weapon for its next shot. A weapon that needs reloading cannot be fired again until
    the reload requirement has been satisfied.
  </T>
);

export const Spellcasting = ({ children = "Spellcasting" }: Props) => (
  <T title={children}>
    The core process of invoking magic through class-specific rules. A spellcaster's class determines the attribute used
    for spell rolls and the resource paid to cast spells.
  </T>
);

export const ArcaneMemory = ({ children = "Arcane Memory" }: Props) => (
  <T title={children}>
    A wizard's trained capacity to retain active spells in mind. Casting higher spells strains this memory, causing many
    prepared spells to fade after use unless they are basic cantrips.
  </T>
);

export const Cantrip = ({ children = "Cantrip" }: Props) => (
  <T title={children}>
    A basic spell form that carries minimal strain and can be repeated freely. Cantrips are treated as level 0 spells
    for scaling and cost rules unless stated otherwise.
  </T>
);

export const LifeCost = ({ children = "Life Cost" }: Props) => (
  <T title={children}>
    The health a caster must pay to invoke certain magic. If a spell uses life cost, the caster loses Health equal to
    the listed amount when the spell is cast.
  </T>
);

export const EquippedAbility = ({ children = "Equipped Ability" }: Props) => (
  <T title={children}>
    An art or effect granted by equipped gear instead of permanent class training. These abilities usually have limited
    uses, such as once per day, once per rest, or a fixed number of uses per battle.
  </T>
);

export const SavingThrow = ({ children = "Saving Throw" }: Props) => (
  <T title={children}>
    A defensive roll made to resist or mitigate a harmful effect. The target rolls a d20, adds their relevant attribute
    modifier, and compares it against the effect's save DC. Meeting or exceeding the DC means the effect is resisted or
    reduced.
  </T>
);

export const CriticalHit = ({ children = "Critical Hit" }: Props) => (
  <T title={children}>
    An exceptionally accurate strike that deals maximum damage dice before applying modifiers. Critical hits occur when
    an attack roll results in a natural 20 on the d20.
  </T>
);

export const AttackRoll = ({ children = "Attack Roll" }: Props) => (
  <T title={children}>
    A d20 roll made to determine if a weapon strike or ranged attack successfully connects with its target. The roll is
    modified by the attacker's relevant attributes and bonuses from abilities or equipment. The result is compared
    against the target's Armor Class.
  </T>
);

export const ArmorClass = ({ children = "Armor Class" }: Props) => (
  <T title={children}>
    A numerical value representing how difficult a creature is to hit in combat. Higher Armor Class indicates better
    protection through armor, agility, or magical defenses. An incoming attack must meet or exceed this value to
    successfully land.
  </T>
);
