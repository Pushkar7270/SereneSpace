**🌌 SereneSpace: Low-Anxiety Collaborative Learning Engine**

* A professional web application designed to eliminate "communication noise" in student environments. This project demonstrates a transition from chaotic, high-pressure chat streams to a Structured, Thread-Based    Architecture using a decoupled Frontend/Backend stack and direct JDBC persistence.

**🚀 The Architectural Shift (Noise vs. Signal)**

* This repository showcases a specialized workflow to reduce cognitive load:
* Global Communication Layer: A "Main Street" chat for general presence, featuring built-in "Slow Mode" logic to prevent scrolling anxiety.
* Threaded Problem Solving: An advanced /doubt system that extracts technical queries into isolated side-panels, preventing "chat hijacking" and allowing for deep-dive focus.
* Vanilla-First Design: A framework-free frontend that ensures zero build-tool friction and maximum UI responsiveness.

**✨ Key Technical Features**

* Dual-State Persistence: Utilizes MySQL and JDBC for robust, transparent data management (Users, Doubts, Resources).
* Discord-Style Threading: Implements a parent_id logic in the database to nest replies within specific "Doubt Cards," keeping the main feed clean.
* No-Cost AI Prompting: A built-in logic utility that generates high-fidelity LLM prompts (Subject, Stuck-Point, Tone) using standard JS string concatenation.
* RESTful Spring Boot Backend: A scalable Java API that orchestrates the flow between the UI, the SQL database, and the local file system.
* Polling Synchronization: Uses an optimized setInterval mechanism to fetch updates, bypassing the complexity of WebSockets for a stable Hackathon MVP.
