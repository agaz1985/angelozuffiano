---
title: "The Physics of a Coffee ☕️"
description: ""
date: "2026-02-16"
tags:
  - coffee
  - physics
  - moka pot
---

## A 90-Year-Old Device

![Alfonso Bialetti](/blog/moka_physics/alfonso_bialetti.avif)
<p align="center"><em>Alfonso Bialetti, inventor of the Moka Express (1933)</em></p>

When in 1933 <a href="https://en.wikipedia.org/wiki/Alfonso_Bialetti" target="_blank" rel="noopener noreferrer">Alfonso Bialetti</a> invented the moka pot, reportedly inspired by watching his wife use a primitive laundry machine, he could not have imagined that he was designing one of the most iconic and recognizable coffee devices in history. The famous <a href="https://en.wikipedia.org/wiki/Moka_pot" target="_blank" rel="noopener noreferrer">Moka Express</a>, produced by <a href="https://en.wikipedia.org/wiki/Bialetti" target="_blank" rel="noopener noreferrer">Bialetti</a>, has since sold more than 300 million units worldwide, bringing style, ritual, and joy to the breakfast tables of millions.

The moka pot is an extraordinary device from a technical, stylistic, sensorial, and emotional point of view. It does not simply generate coffee. It guides you through the entire experience of brewing. It makes you the main actor. You start by filling and assembling it carefully. You wait. You listen to the sound of pressure building. You hear the first coffee emerging from the bottom chamber. And finally, you breathe in the smell of fresh, warm, embracing coffee ready to be consumed.

> *It almost feels like magic, the power to transform water and coffee powder into the perfect dark liquid that millions of people drink every day, the same liquid that fuels our fast-moving world. Bialetti surely could not have imagined how iconic and game-changing his invention would become.*

As an Italian, not that young anymore, the moka pot has been part of my existence and childhood. Before capsule machines slowly took over many kitchens, the moka was there. It is intertwined with warm moments spent with my parents, with friends, in ordinary and extraordinary circumstances alike. The moka pot is not just a tool for making coffee; it is a device that brings back sensations and emotions.

And as an engineer, I eventually became fascinated by its technical side. I wanted to understand how it really works, and which physical laws regulate its functioning. How can such a simple aluminum device generate pressure, control flow, and extract flavor so consistently?

That is how this post was born. If you are thrilled to discover the surprisingly mind-blowing world of the moka pot, stay with me, and let's jump together into this journey through its functioning principles.

---

## Design and Technology

The moka pot's design is deceptively simple. It is a metal device made of two screwable parts: a bottom chamber and a collecting chamber at the top. Between them sits the coffee basket, which holds the ground coffee on top of a built-in filter. The bottom chamber holds water, the coffee basket holds the ground coffee, and the collecting chamber eventually receives the brewed coffee.

![Moka pot design and components](/blog/moka_physics/moka_design.png)
<p align="center"><em>The three main components of the moka pot: bottom chamber, coffee basket, and collecting chamber</em></p>

Its working principle is elegant and intuitive. The water in the bottom chamber is heated by an external heat source, typically a stove. As the water warms, it starts to generate steam, increasing the pressure inside the bottom chamber. This pressure forces the water upward through the coffee basket, passing through the ground coffee and filter, rising up the vertical spout, and finally reaching the collecting chamber where the aromatic coffee awaits.

![How the moka pot works](/blog/moka_physics/moka_animation.gif)
<p align="center"><em>Animated cross-section showing the full brewing cycle from heat input to coffee collection</em></p>

Two subtle points make this process possible:

1. **The moka pot is sealed tightly**, so pressure can build in the bottom chamber.
2. **The filter and coffee grounds provide resistance** to control flow, allowing extraction of flavor and oils from the coffee.

---

## The Physics Behind the Brew

The moka pot is not just a simple brewer. It is a miniature thermodynamic laboratory in your kitchen. At its heart, the process is driven by pressure, heat transfer, and phase change, each governed by compact but powerful physical laws.

---

### 1. Heat Transfer

![Heat Transfer](/blog/moka_physics/step1.png)
<p align="center"><em>Heat flowing from the stove into the metal body and water, with losses to the surrounding air</em></p>

The water in the bottom chamber heats up from the metal walls of the pot, absorbing energy at a rate:

$$Q_{metal \to water} = k_{mw} (T_{metal} - T_{water})$$

while simultaneously losing a small amount of heat to the surroundings:

$$Q_{loss} = k_{loss} (T_{metal} - T_{room})$$

These equations represent the lumped form of <a href="https://en.wikipedia.org/wiki/Newton%27s_law_of_cooling" target="_blank" rel="noopener noreferrer">Newton's Law of Cooling</a>, where heat flow is proportional to a temperature difference.

| Variable | Description |
|---|---|
| $Q_{metal \to water}$ | Heat power transferred from metal to water (W) |
| $Q_{loss}$ | Heat power lost to surrounding air (W) |
| $k_{mw}$ | Thermal conductance between metal and water (W/K) |
| $k_{loss}$ | Effective heat loss coefficient to the room (W/K) |
| $T_{metal}$ | Temperature of the moka pot body (K) |
| $T_{water}$ | Temperature of the liquid water (K) |
| $T_{room}$ | Ambient temperature (K) |

These two heat flows compete: one warms the water, the other dissipates energy into the kitchen.

---

### 2. Pressure and Boiling

![Pressure and Boiling](/blog/moka_physics/step2.png)
<p align="center"><em>Steam accumulating in the sealed bottom chamber, raising pressure above atmospheric</em></p>

As the water warms, its temperature approaches the boiling point at the local chamber pressure, approximated by a <a href="https://en.wikipedia.org/wiki/Clausius%E2%80%93Clapeyron_relation" target="_blank" rel="noopener noreferrer">Clausius-Clapeyron scaling</a>:

$$T_{boil} \approx 373.15\,\text{K} \left( \frac{P_{chamber}}{P_{atm}} \right)^{0.12}$$

Because pressure rises inside the sealed base, water boils above 100 °C. The chamber pressure itself is determined by the <a href="https://en.wikipedia.org/wiki/Ideal_gas_law" target="_blank" rel="noopener noreferrer">ideal gas law</a> applied to the steam:

$$P_{steam} = \frac{m_{steam} R T_{water}}{V_{steam}}$$

$$P_{chamber} = \max(P_{steam},\; P_{atm})$$

| Variable | Description |
|---|---|
| $T_{boil}$ | Boiling temperature at chamber pressure (K) |
| $P_{chamber}$ | Total pressure inside the lower chamber (Pa) |
| $P_{atm}$ | Atmospheric pressure (Pa) |
| $P_{steam}$ | Partial pressure generated by steam (Pa) |
| $m_{steam}$ | Mass of steam in the chamber (kg) |
| $R$ | Specific gas constant for water vapor (J/kg·K) |
| $V_{steam}$ | Free volume available to steam (m³) |

As steam mass increases, pressure rises, and the system enters a feedback loop: more pressure raises the boiling point, which influences further steam production.

---

### 3. Fluid Dynamics

![Fluid Dynamics](/blog/moka_physics/step3.png)
<p align="center"><em>Pressurized water being forced through the coffee bed, acting as a porous flow resistor</em></p>

This pressure is what drives water through the coffee bed. The coffee grounds act as a porous medium, resisting flow and creating a two-stage process. Once the bed is fully saturated, flow begins according to a pressure-driven power law inspired by <a href="https://en.wikipedia.org/wiki/Darcy%27s_law" target="_blank" rel="noopener noreferrer">Darcy's law for porous flow</a>:

$$\dot{m}_{flow} = k_{bed} \;(\Delta P)^n \qquad \text{where} \quad \Delta P = P_{chamber} - P_{atm}$$

| Variable | Description |
|---|---|
| $\dot{m}_{flow}$ | Mass flow rate of liquid coffee (kg/s) |
| $k_{bed}$ | Permeability coefficient of the coffee bed |
| $n$ | Empirical flow exponent (approx. 1 for Darcy-like flow, >1 for nonlinear resistance) |
| $\Delta P$ | Pressure difference driving extraction (Pa) |

Meanwhile, phase change from water to steam is limited by the available heat:

$$\dot{m}_{steam} = \min\!\left( \frac{0.8\; Q_{metal \to water}}{L_v},\; k_{boil}(P_{sat} - P_{steam}) \right)$$

| Variable | Description |
|---|---|
| $\dot{m}_{steam}$ | Steam mass generation rate (kg/s) |
| $L_v$ | <a href="https://en.wikipedia.org/wiki/Latent_heat" target="_blank" rel="noopener noreferrer">Latent heat of vaporization</a> of water (J/kg) |
| $k_{boil}$ | Empirical boiling response coefficient |
| $P_{sat}$ | <a href="https://en.wikipedia.org/wiki/Vapour_pressure_of_water" target="_blank" rel="noopener noreferrer">Saturation vapor pressure</a> at $T_{water}$ (Pa) |

The first term represents a heat-limited boiling rate; the second a pressure-limited evaporation rate. Steam cannot form faster than energy allows, nor faster than <a href="https://en.wikipedia.org/wiki/Thermodynamic_equilibrium" target="_blank" rel="noopener noreferrer">thermodynamic equilibrium</a> permits.

---

### 4. The Final Brew

![The Final Brew](/blog/moka_physics/step4.png)
<p align="center"><em>Hot coffee rising through the spout and mixing with the liquid already collected in the top chamber</em></p>

As hot water passes through the grounds and reaches the top chamber, it mixes thermally with the coffee already collected, governed by <a href="https://en.wikipedia.org/wiki/Conservation_of_energy" target="_blank" rel="noopener noreferrer">conservation of thermal energy</a>:

$$T_{coffee,new} = \frac{ m_{coffee}\; T_{coffee} + dm_{new}\; T_{water} }{ m_{coffee} + dm_{new} }$$

| Variable | Description |
|---|---|
| $m_{coffee}$ | Existing brewed coffee mass (kg) |
| $dm_{new}$ | Newly added coffee mass (kg) |
| $T_{coffee}$ | Previous coffee temperature (K) |
| $T_{water}$ | Incoming liquid temperature (K) |

Through this elegant interplay of heat transfer, gas expansion, phase change, and porous flow resistance, the moka pot transforms cold water and ground coffee into a rich, aromatic brew. It is not just a brewer. It is a tightly coupled thermodynamic engine that just happens to make excellent coffee.

---

## The Simulation Engine

![Simulator](/blog/moka_physics/simulator.gif)
<p align="center"><em>The interactive moka pot simulator, showing real-time pressure curves, flow rates, and extraction dynamics</em></p>

The equations above are, of course, a simplification of reality. A real moka pot involves turbulent two-phase flow, microscopic interactions, complex geometry, and material imperfections. But the model is physically grounded enough to capture the essential dynamics: heat transfer, pressure build-up, phase change, and porous flow, with surprising fidelity.

Using this framework, I built a fully fledged moka pot simulator driven by real thermodynamic parameters. You can adjust heat input, thermal conductances, and coffee bed permeability, then observe how pressure curves, flow rates, and extraction timing respond. Even the characteristic moka gurgling sound is included — so as the extraction reaches its final steam-driven phase, you don’t just see the pressure dynamics, you hear them too.

**<a href="https://mokapotsimulator.vercel.app" target="_blank" rel="noopener noreferrer">Try the MokaPotSimulator</a>**

Experiment with it. Break it. Push the parameters to extremes. And if you have ideas, suggestions, or notice something that could be improved, I would genuinely love to hear your feedback. The simulator is a living project, and thoughtful input helps refine both the physics and the experience.

*Make coffee, explore the model... just don't overdo it, or you might spend the entire day vibrating at caffeine frequency.*

---

## References

- <a href="https://arxiv.org/abs/2601.03663" target="_blank" rel="noopener noreferrer">A Minimal Thermo-Fluid Model for Pressure-Driven Extraction in a Moka Pot</a>
- <a href="https://www.comunicaffe.it/wp-content/uploads/2013/06/la-Fisica-del-buon-caff%C3%A81.pdf" target="_blank" rel="noopener noreferrer">La Fisica del buon caffè</a>
- <a href="https://www.researchgate.net/publication/243492775_Experimental_analysis_of_the_Italian_coffee_pot_moka" target="_blank" rel="noopener noreferrer">Experimental analysis of the Italian coffee pot "moka"</a>