#include<bits/stdc++.h>
using namespace std;


class Animal {
private:
    int age;
public:
    Animal(int age){
        this->age = age;
    }
    void speak() {
        cout << "Animal speaks" << endl;
    }
};

class Dog : public Animal {
private: 
    string breed;
public:
    Dog(string breed): Animal(5){
        this->breed = breed;
    }
    void bark() {
        cout << "Dog barks" << endl;
    }
};

int main(){
    // Animal *animal = new Animal();
    // animal->speak();


    Dog *dog = new Dog("Bulldog", 6);
    dog->speak(); // Inherited method
    dog->bark();
}