#include <iostream>
using namespace std;

class Car {
public:
    string brand;
    int speed;

    void drive() {
        cout << brand << " is driving at " << speed << " km/h\n";
    }
};

int main() {
    Car c1;        // object created
    c1.brand = "BMW";
    c1.speed = 120;

    c1.drive();    // calling method

    return 0;
}
