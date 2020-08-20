import React from "react";
import Carousel from "../home/Carousel";
import { Philosopy } from "./Philosophy";

const AboutPage = () => (
  <>
    <Carousel />
    <Philosopy />
    <div className="wrapper ">
      <div class="wrapper-item-about fabrics">
        <div class="fabric-section-one">
          <h1 className="font-Futura-medium text-capitalize">Our Fabrics</h1>
          <p className="fabrics-p">
            At Nadaasi, we are committed to provide the highest quality dresses
            made of natural fabrics, trendy timeless designs and fashionable
            look to make you feel the beauty of standing out in a crowd and be
            the centre of attention
          </p>
        </div>
        <div class="fabric-section fabric-section-two">
          <img
            src="data:image/png;base64,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"
            alt="Chiffon"
          />
          <h1>Chiffon/ Silk Chiffon</h1>
          <p className="fabrics-p ">
            Cotton is the world's most widely used natural fibre and still the
            undisputed "king" of the global textiles industry. Cotton is almost
            pure cellulose, with softness and breathability that have made it
            the world's most popular natural fibre.
          </p>
        </div>
        <div class="fabric-section fabric-section-three">
          <img
            src="data:image/png;base64,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"
            alt="Geogette"
          />
          <h1>Geogette</h1>
          <p className="fabrics-p">
            It was named after the early 20th century French dressmaker
            Georgette de la Plante. Georgette is originally made of silk which
            is a sheer, lightweight, dull-finished crêpe fabric. Its crinkly
            crepe-light texture makes it one of the most distinctive fabrics.
          </p>
        </div>
        <div class="fabric-section fabric-section-four">
          <img
            src="data:image/png;base64,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"
            alt="PureCotton"
          />
          <h1>Pure Cotton</h1>
          <p className="fabrics-p">
            Cotton is the world's most widely used natural fibre and still the
            undisputed "king" of the global textiles industry. Cotton is almost
            pure cellulose, with softness and breathability that have made it
            the world's most popular natural fibre.
          </p>
        </div>
        <div class="fabric-section fabric-section-five">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABZCAYAAABVC4ivAAAABHNCSVQICAgIfAhkiAAAAz5JREFUeF7tnM2NVDEMgO0KoAM4cF1BB7AdQAWsxJUDVAAdwIErEh1AB7AdgLhyoASowCijkWZ5m7e2k0y0M/NF2tPa+fni58ROJiqdxcyeisjnSjXnqvqts/qwuplZRfhSVZ+EK9mToPbWC2SfIJB9Rt0SQO5G6FcAZJ9Rt8QIyGci8qLSkw+q+qu7h8EKjnrhCzLYuxiQ945YBMhAnkBgQhNYMpD7CJjZIxF5V6nltap+j9RuZhci8nwpq6rnEf0i02vJI8ax1tcRW7iSG/jak7sws7ci8qYCOdy/AZC7xwFk55MwMyB7bgNL9q3ouN2FmT32rMT5f1n43ldkXolIaOETkbLwlb9lyeSCa7nr0n7pR6SkxqGql5FKi4yufGZR/ZOVU9XwogzkRjMBciO4jBqQM7QaZYHcCC6jloWcWcFr/VgNq5O7i2thtYiEw+qVqPNHcndRTQ/UxpE5iQ+vkGuzPCJSIqz2A4nucBTIQO6+pIO72BrRCLdHFm7CFwlkIJO0v9EGRvgydhcTPjMgA3nuFm57qnxvwf3+SsL9k4j8DuYDSkBTC+/LiUm01GRL+6UfkTJiHNV2UvtkMyunD70nKZEBH5UMkCdMJ5CBPIHAhCaw5NsGudYfghF/llKWDGQfaE0CyKQ64xdIuAvnh+bHfReuzcvstFj4fIL4ZHwyPnljA7gL3EX4vYsRxrKGG588wydzCdz/3KtRHJfA28BltLK3Omtv92TaO0lZIE+YdiDfQsi9z4rdFZGHlXGVC9h/guMtJ8XLU/CiGv4Z18oB79/ERfTUODJPobGFm7GFC1raqtiITTw3iPw0JTftHUa4C9wFWTiycMEFDXeBu8Bd4C5wFxsCh5e03z7rdWcxgakXT1Ym/+Bebgka8UYstfBxCTyDdicL5DZuKS0gp3C1CQO5jVtKC8gpXG3CWchlJ1GS21fLSb7cksGdglyrmHyyjxvI5C7IXZC78D1FPuLDJwepLsS6fXJbs/9rjThIHdGPfdUB5H2RvVIvkIEc311MYNXcBJbcjC6uCORdMPJARF5W0H1U1Z9xpNclgexHfM9U9QuQewgAed7Cd0OiC0seYMReegDIhwD5H7Y4OmNly1vvAAAAAElFTkSuQmCC"
            alt="Silk"
          />
          <h1>Silk Organza</h1>
          <p className="fabrics-p">
            Silk Organza Fabric is naturally thin, sheer, lightweight and crisp
            woven from lustrous silk yarns. Organza Fabric has an incredible
            sheen without any stiffness.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default AboutPage;
