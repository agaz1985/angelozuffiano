---
title: "The misterious disappearance of dropped things"
excerpt: "Where physics hides your pen: the bounce, the roll, and the gap under the sofa."
category: "Physics"
date: "2026-06-15"
author:
  name: "Angelo Zuffianò"
  role: "Senior Machine Learning Researcher"
---

You have seen this movie before. A pen rolls off the edge of the desk. You watch it fall. You hear it land. You reach down to where it landed — and there is nothing there. Not near it, not under it, not anywhere. For the next three days the pen is Schrödinger's pen: simultaneously lost and, in some Platonic sense, still lying on your living-room floor.

This post is my attempt to convince you (and, honestly, myself) that none of this is supernatural. The object did not vanish. It obeyed Newton's laws with a precision that borders on spite.

## The moment of loss

When something leaves the edge of a table, it is never falling straight down. It is a projectile. The same nudge that pushed it over the edge also gave it a horizontal speed $v_x$, and from the moment it clears the edge the horizontal motion is almost decoupled from the fall.

The time to reach the floor is set entirely by gravity and the height of the table:

$$
t = \sqrt{\frac{2h}{g}}
$$

and while it is falling, it keeps drifting sideways:

$$
x = v_x \sqrt{\frac{2h}{g}}
$$

A desk is roughly 0.75 m high, so $t \approx 0.39$ s. If the pen left the edge with even a lazy 0.5 m/s of sideways speed, it lands about 20 cm away from the desk — not directly beneath it. "Right where it fell" is already wrong, and we have not even reached the interesting part.

## The bounce nobody budgets for

This is the part your memory skips. The object hits the floor and — unless the floor is carpet, the great neutralizer — it bounces. How much of its speed survives the collision is captured by the coefficient of restitution:

$$
e = -\frac{v'_y}{v_y}, \qquad 0 \le e \le 1
$$

A marble on tile has $e \approx 0.9$; a pen on hardwood maybe 0.6–0.7; a phone on carpet barely 0.1. The rebound height after one bounce scales with the square:

$$
h' = e^2 h
$$

| Object | Floor | Typical e |
| --- | --- | --- |
| Marble | Tile | ≈ 0.90 |
| Bouncy ball | Hardwood | ≈ 0.85 |
| Pen | Hardwood | ≈ 0.65 |
| Phone | Carpet | ≈ 0.10 |

After $n$ bounces the vertical motion decays like $e^{2n}$ — fast, which is why the thing stops bouncing quickly. But here is the part that matters: the horizontal velocity barely notices the floor. A mostly-vertical collision leaves the tangential component almost untouched, and friction at the contact point can even convert a slice of vertical speed into horizontal spin. The object does not just bounce — it bounces forward, and then it rolls.

![The crime scene: a pen launches off a desk, bounces, and rolls under a cabinet](/dropped-things/crime-scene.svg)
<p align="center"><em>The full trajectory, minus the part you remember. Grey X: where you look. Red dot: where it is.</em></p>

![A ball bouncing with decreasing rebound heights](/dropped-things/bounce.svg)
<p align="center"><em>Each rebound recovers only e² of the height — but the sideways speed is barely reduced, so the object scoots.</em></p>

That is why the thing ends up a metre away. It was never a drop. It was a low-velocity launch with bad intentions.

## The geometry of invisibility

Even a modest final displacement is enough to hide an object, because you search from the wrong coordinate system. You search standing up, from eye height, in a room that is mostly flat floor.

Two effects conspire against you. The first is parallax. From 1.6 m up, the strip of floor you can actually see next to a piece of furniture is tiny: everything tucked under the front lip is hidden by the furniture's own face. The object is not missing; it is inside your blind spot, twenty centimetres behind the edge where you would never think to look.

![Cross-section of why an object under the front lip of furniture is hidden](/dropped-things/hidden-geometry.svg)
<p align="center"><em>Standing up, the near edge of the gap occludes the strip where the object actually rests. Get low and the geometry changes.</em></p>

The second effect is contrast. The object is small, roughly the colour of the floor, and it has come to rest in the darkest, dustiest, least-likely-looking crevice in the house. Your eye is a pattern-matching machine, and the pattern "pen on floor" has been destroyed by "pen under radiator, in shadow."

There is a cold logic to where it stops, though. It rolls until something says no — a wall, a leg, the gap under the fridge. Those are the resting points, and the object always ends up at the nearest one.

## A survival guide

- Trust your ears, not your eyes. The bounce makes a sound, and the direction of that sound is more honest than your memory of the trajectory.
- Get low. Change the parallax. The floor looks completely different from twenty centimetres up — because that is where the object lives now.
- Search the boundaries first: along walls, under edges, behind legs. Projectiles conserve horizontal momentum until the room stops them.
- Accept that it is always in the last place you look. That is not fate; you simply stop looking once you find it.

## The verdict

You did not lose anything. The universe is just extremely good at applying three laws of motion to small objects on smooth floors. The pen is exactly where physics left it — under the sofa, 1.2 m from the spot where you were absolutely certain it fell.

*No pens were harmed in the making of this investigation. They have simply been placed in witness protection.*
