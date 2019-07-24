import { NextPage } from 'next';

import Main from '../layouts/Main';
import { getProducts } from '../api/products';
import { ProductType } from '../interfaces';
import FlavorCollectionsBillboard from '../components/FlavorCollectionsBillboard';
import ExploreBlock from '../components/ExploreBlock';
import Headline from '../components/Headline';
import PromoCard from '../components/PromoCard';
import ProductsList from '../components/ProductsList';

const HomePage: NextPage<{ products: Array<ProductType> }> = ({
  products,
}) => (
  <Main title="Case Frontend Engineer blu.com">
    <FlavorCollectionsBillboard
      title="The Best Seller Collection"
      text="Our most popular flavors made the list for good reason"
      imageUrl="/static/images/flavor-collections-billboard.webp" 
      anchor="learn-more-best"
    />
    <ExploreBlock
      title="Explore our Best Seller Collection"
      imageUrl="/static/images/best-seller-flavor-collection.webp"
      imageAlt="Best Seller Flavor Collection"
      hasNegativeOffset={true}
      anchor="shopNow"
    />
    <Headline
      title="Vape our most popular flavors"
      text="You can find our Best Seller Collection of <em>my</em>blu™ and <em>my</em>blu™ INTENSE flavors in multiple nicotine strengths, ranging from 0% to 4.5%. From fruity to fresh and everything in between, you’re sure to find a flavor that satisfies."
      anchor="learn-more-best"
    />
    <PromoCard
      title="Popular picks"
      text="Our Best Seller Collection is made up of our seven top sellers that span from classics like Gold Leaf to fruity flavors like Citra Zing."
      imageUrl="/static/images/cards-image-01.webp"
      imageAlt="a woman using her myblu vaping device"
    />
    <PromoCard
      title="A formula for success"
      text="All of our flavors are formulated to provide optimal flavor delivery and smooth satisfaction."
      imageUrl="/static/images/cards-image-02.webp"
      imageAlt="a man vaping his myblu device"
      alignment="right"
    />
    <Headline
      title="Taste it for yourself"
      text="Ready to try our Best Seller Collection? Shop our selection of flavors available in a variety of nicotine strengths, from 0% to 4.5%."
      anchor="shopNow"
    />
    {products && products.length
      ? <ProductsList products={products} />
      : null}
  </Main>
);

HomePage.getInitialProps = async () => {
  let products: [ProductType] = null;

  try {
    products = await getProducts('/products');
  } catch (error) {
    console.log('Error', error);
  }

  return { products };
}

export default HomePage;