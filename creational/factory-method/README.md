# Factory Method

## What It Is
A design pattern that moves object creation into a dedicated method — the factory.  
Client code no longer decides which concrete class to instantiate.

## The Problem It Solves
Your system needs to create objects of the same family (transport, notifications, widgets), but:

- in different parts of the code you manually instantiate concrete classes (`new Truck()`, `new EmailNotification()`, `new SystemWidget()`), making the code tightly coupled to specific implementations;
- `if/switch` blocks appear everywhere to determine the type;
- adding new implementations is difficult because it requires modifying existing code.

This leads to strong coupling with concrete classes and violates the Open/Closed Principle (OCP).

## How the Problem Is Solved
Factory Method extracts object creation into a separate method (the factory method)  
that returns an abstraction — a shared interface or a base class.

Subclasses or dedicated factory classes decide which concrete object to create.  
Client code works only with the abstraction and does not depend on specific implementations.

## Real-Life Analogy
Imagine you're in a pizzeria.  
You say:  
“*Give me a **Margherita** pizza*.”

You don’t think about:

- which sauce is used,
- how much dough is needed,
- which cheese to take,
- what temperature to set.

You simply get a ready pizza.

The factory method == the kitchen that decides what and how to create.  
You == the client who doesn't care about the details.

## Examples
- [JavaScript](./javascript/)
- [TypeScript](./typescript/)
- [Python](./python/)