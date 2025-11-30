#include <bits/stdc++.h>
using namespace std;

// =======================
// 1. STRATEGY INTERFACES
// =======================

class Flyable {
public:
    virtual void fly() = 0;
    virtual ~Flyable() {}
};

class Walkable {
public:
    virtual void walk() = 0;
    virtual ~Walkable() {}
};

class Runnable {
public:
    virtual void run() = 0;
    virtual ~Runnable() {}
};

// =======================
// 2. CONCRETE STRATEGIES
// =======================

class NormalFly : public Flyable {
public:
    void fly() { cout << "Flying normally..." << endl; }
};

class NoFly : public Flyable {
public:
    void fly() { cout << "Cannot fly..." << endl; }
};

class NormalWalk : public Walkable {
public:
    void walk() { cout << "Walking normally..." << endl; }
};

class NoWalk : public Walkable {
public:
    void walk() { cout << "Cannot walk..." << endl; }
};

class NormalRun : public Runnable {
public:
    void run() { cout << "Running normally..." << endl; }
};

class NoRun : public Runnable {
public:
    void run() { cout << "Cannot run..." << endl; }
};

// =======================
// 3. CONTEXT (ROBOT)
// =======================

class Roboat {
protected:
    Flyable* flyable;
    Walkable* walkable;
    Runnable* runnable;

public:
    Roboat(Flyable* f, Walkable* w, Runnable* r) {
        flyable = f;
        walkable = w;
        runnable = r;
    }

    virtual ~Roboat() {}

    void fly() { flyable->fly(); }
    void walk() { walkable->walk(); }
    void run() { runnable->run(); }

    // Allow changing behavior at runtime
    void setFlyable(Flyable* f) { flyable = f; }
    void setWalkable(Walkable* w) { walkable = w; }
    void setRunnable(Runnable* r) { runnable = r; }

    virtual void projection() = 0;
};

// =======================
// 4. CONCRETE ROBOT
// =======================

class WorkerRobot : public Roboat {
public:
    WorkerRobot(Flyable* f, Walkable* w, Runnable* r)
        : Roboat(f, w, r) {}

    void projection() {
        cout << "Displaying worker efficiency stats..." << endl;
    }
};

// =======================
// 5. MAIN
// =======================

int main() {
    Roboat* robot = new WorkerRobot(
        new NormalFly(),
        new NoWalk(),
        new NormalRun()
    );

    robot->walk();
    robot->fly();
    robot->run();
    robot->projection();

    cout << "\n--- Changing behavior at runtime ---\n";
    robot->setWalkable(new NormalWalk());
    robot->walk();

    return 0;
}
