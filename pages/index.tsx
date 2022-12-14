import type { NextPage } from "next";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import data from "../utils/data";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
  return (
    <Layout title="Sokoni">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductCard product={product} key={product.slug} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
