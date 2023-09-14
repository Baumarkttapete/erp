import React from "react";
import { ColorTheme } from "../theme/Colors";
import { Size } from "../theme/Sizes";

const About: React.FC<{}> = ({}) => {
  return (
    <div>
      <h2>Über uns</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu lectus
        eu mauris venenatis fermentum. Mauris eu purus id tellus placerat
        bibendum vel in orci. Fusce a ullamcorper erat. Sed vitae nisi finibus,
        dignissim tellus eu, ultricies odio. Nam ut quam nec nisl faucibus
        interdum.
      </p>
      <p>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Sed eu vehicula mauris, vitae gravida ligula. Etiam ut
        arcu vel elit accumsan sagittis. Integer a massa ac odio malesuada
        eleifend vel vel turpis. Integer finibus lorem eu velit consequat, in
        ullamcorper neque ullamcorper. Aenean eget nunc sed nisl gravida
        ultricies.
      </p>
    </div>
  );
};

export default About;
