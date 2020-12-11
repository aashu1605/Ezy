import React, { useState, useEffect } from "react";
import Axios from "axios";
import Item from "./Item";
import { Link, withRouter } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'

const Homepage = () => {
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        if (itemList && itemList.length === 0) {
            Axios.get("https://jsonplaceholder.typicode.com/posts/").then(
                (response) => {
                    const data = response.data;
                    setItemList(data);
                }
            );
        }
    });

    return (
        <div>
        <Navbar expand="lg">
    <h2>POSTS</h2>
  </Navbar>
            {itemList &&
                itemList.map((item) => (
                    <Link to={"/posts/" + item.id}>
                        <Item
                            title={item.title}
                            id={item.id}
                            body={item.body}
                            userId={item.userId}
                        />
                    </Link>
                ))}
        </div>
    );
};

export default withRouter(Homepage);
