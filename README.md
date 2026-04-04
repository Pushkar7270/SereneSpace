# 🌌 SereneSpace: A Low-Anxiety Collaborative Learning Engine

*A professional web application designed to eliminate "communication noise" in student environments. This project demonstrates a transition from chaotic, high-pressure chat streams to a Structured, Thread-Based Architecture designed specifically for introverts and focused learners.*

## 🚀 The Core Philosophy (Noise vs. Signal)

Traditional chat apps (Discord, Slack) trigger anxiety with fast-moving "Main Street" chat rooms, fear of judgment, and the pressure of real-time typing indicators. **SereneSpace** removes the noise entirely. 

There is no main chat. Every interaction is an isolated, anonymous, deep-dive problem-solving thread.

## ✨ Key Hackathon Features

* **Anonymous-by-Default Architecture:** To remove the fear of asking "dumb" questions, user identities are completely abstracted from the UI. Users are represented by generated aliases or remain entirely anonymous, ensuring a zero-judgment environment.
* **Isolated Threaded Problem Solving:** An advanced doubt system that extracts technical queries into isolated side-panels. We completely removed the global chat to prevent "chat hijacking" and allow for deep-dive focus.
* **One-Click "Soft AI" Prompt Generator:** Waiting for human replies causes anxiety. Instead of complex API integrations, SereneSpace features a built-in logic utility that generates high-fidelity LLM prompts (Subject, Stuck-Point, Empathetic Tone) from the user's doubt. Users can instantly copy this prompt to get immediate help while waiting for peers.
* **Visual Debugging:** Full support for embedding image URLs directly into Doubt Cards, allowing users to share screenshots of code errors or math problems without typing long explanations.
* **"Mark as Resolved" State Management:** Clear visual indicators for questions that have been answered, reducing cognitive load on people looking to help others.

## 🛠️ Technical Stack & Engineering Decisions

* **Vanilla-First Frontend:** A framework-free UI that ensures zero build-tool friction, maximum responsiveness, and a clean, minimalist "Serene" aesthetic.
* **RESTful Spring Boot Backend:** A scalable Java API that orchestrates the flow between the UI and the database.
* **Dual-State Persistence (JDBC + MySQL):** Robust, transparent data management bypassing heavy ORMs to maintain total control over the query structure.
* **Optimized Polling Synchronization:** Uses an optimized `setInterval` mechanism to fetch updates, bypassing the fragility of WebSockets to guarantee a stable, crash-free Hackathon MVP.
