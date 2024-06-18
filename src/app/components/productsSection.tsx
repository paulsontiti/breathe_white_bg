import React from "react";
import Product from "./product";

function ProductSection() {
  return (
    <div className="lg:flex justify-between">
      <Product
        title="1 bottle of breathe"
        imgSrc="/assets/th.jpeg"
        description="At Breathe, we understand how crucial easy breathing is for a fulfilling life. Our supplement is suitable for everyone aged five and above, making it a perfect addition to your family's daily wellness routine. With each dose, you can experience the soothing benefits of ingredients like mullein, known for its lung-cleansing properties, and nettle leaf, which supports healthy histamine levels and reduces allergy symptoms."
      />
      <Product
        title="3 bottles of breathe"
        imgSrc="/assets/images/3-bottles-of-breathe-with-bonuses@2x.png"
        description="Quality and safety are our top priorities. Breathe is made from premium, non-GMO ingredients and is free from artificial additives. Each batch is carefully tested to ensure purity and potency, so you can trust that you're providing the best for your respiratory health. Our easy-to-swallow capsules are designed for convenience, allowing you to effortlessly incorporate Breathe into your daily regimen."
      />
      <Product
        title="6 bottles of breathe"
        imgSrc="/assets/images/6-bottles-of-breathe-with-bonuses@2x.png"
        description="Don’t let respiratory issues hold you back any longer. Take a proactive step towards better breathing with Breathe. Embrace the freedom of easier, more comfortable respiration and enjoy the activities you love without the worry of breathlessness. Breathe deeply, live fully, and let our supplement support your journey to optimal lung health."
      />
    </div>
  );
}

export default ProductSection;
