import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import Order from "./Order";
import "./Orders.css";
import { useStateValue } from "./StateProvider";

const Orders = () => {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState();

  useEffect(() => {
    const getOrders = async () => {
      if (user) {
        const orders = db
          .collection("users")
          .doc(user?.uid)
          .collection("orders")
          .orderBy("created", "desc");

        orders.onSnapshot((snapshot) => {
          if (snapshot.docs) {
            setOrders(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }))
            );
          }
        });
      } else {
        setOrders([]);
      }
    };

    getOrders();
  }, [user, setOrders]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order, i) => {
          return <Order key={i} order={order} />;
        })}
      </div>
    </div>
  );
};

export default Orders;
