import React from "react";
import Product from "./product";

function ProductSection() {
  return (
    <div className="lg:flex justify-between">
      <Product
        title="1 bottle of breathe"
        imgSrc="/assets/th.jpeg"
        description=" quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt."
      />
      <Product
        title="3 bottles of breathe"
        imgSrc="/assets/images/3-bottles-of-breathe-with-bonuses@2x.png"
        description=" quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt."
      />
      <Product
        title="6 bottles of breathe"
        imgSrc="/assets/images/6-bottles-of-breathe-with-bonuses@2x.png"
        description=" quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt."
      />
    </div>
  );
}

export default ProductSection;
