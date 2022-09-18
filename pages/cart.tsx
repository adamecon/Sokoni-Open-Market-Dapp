import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";
import Link from "next/link";
import Image from "next/image";
import { XCircleIcon } from "@heroicons/react/outline";

const CartScreen = () => {
  const { state, dispatch }: any = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  return (
    <Layout title="Your Shopping Cart">
      <h1 className="mb-4 text-xl font-bold">Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div>
          Your Shopping Cart Is Empty
          <Link href="/">Shop Now</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full ">
              <thead className="border-b">
                <tr>
                  <th className="px-5 text-left">Item</th>
                  <th className="p-5 text-right">Quantity</th>
                  <th className="p-5 text-right">price</th>
                  <th className="p-5">Action</th>
                </tr>
              </thead>
            </table>
            <tbody>
              {cartItems.map((item: any) => (
                <tr key={item.slug} className="border-b">
                  <td>
                    <Link href={`/product/${item.slug}`}>
                      <a className="flex items-center">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                        ></Image>
                        &nbsp;
                        {item.name}
                      </a>
                    </Link>
                  </td>
                  <td className="p-5 text-right">{item.quantity}</td>
                  <td className="p-5 text-right">${item.price}</td>
                  <td className="p-5 text-center">
                    <button className="primary-button">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CartScreen;