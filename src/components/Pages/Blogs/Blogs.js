import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-20 grid gap-8 mx-4'>
            <div className="card bg-base-100  shadow-2xl">
                <div className="card-body">
                    <h2 className="card-title">What are the different ways to manage a state in react application?</h2>
                    <p>There are four main types of state you need to properly manage in your React apps: Local state, Global state, Server state, URL state, Global (UI) state, Communication State, Data State, Control State, Session State, Location State</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="card bg-base-100  shadow-2xl">
                <div className="card-body">
                    <h2 className="card-title">How does prototypical inheritance work?</h2>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="card bg-base-100  shadow-2xl">
                <div className="card-body">
                    <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="card bg-base-100  shadow-2xl">
                <div className="card-body">
                    <h2 className="card-title">React vs. Angular vs. Vue?</h2>
                    <p>Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works.</p>
                    <p>React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality. However, learning to use React does not necessarily mean that you are using the best practices</p>
                    <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. However, simplicity and flexibility of Vue is a double-edged sword ??? it allows poor code, making it difficult to debug and test.</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;