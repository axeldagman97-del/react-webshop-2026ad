import React from 'react';

export function TraditionalGreeting(props) {
  return (
    <div className="greetingBox">
      <h1>Hej, {props.name}! </h1>
      <p> detta är en traditionell funktionell komponent.</p>
    </div>
  );
}

export const ArrowGreeting = ({ name }) => {
  return (
    <div className="greetingBox">
      <p> Hej! {name} Arrow greeting, lite mer modernt</p>
    </div>
  );
};
