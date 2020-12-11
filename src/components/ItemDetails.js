import React, { useState, useEffect} from "react";
import Axios from "axios";
import Comment from "./Comment"
import Details from "./Details"
import Author from "./Author"

export default function ItemDetails(props) {
    const id = props.match.params.id;
    const [details, setDetails] = useState({});
    const [comments, setComments] = useState([]);
    const [author,setAuthor]=useState([]);

    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/posts/" + id).then(
            (response) => {
                const data = response.data;
                setDetails(data);
            }
        );
    }, []);

    useEffect(() => {
        if (details.id && comments.length == 0) {
            Axios.get(
                "https://jsonplaceholder.typicode.com/posts/" + id + "/comments"
            ).then((response) => {
              setComments(response.data)
            });
        }
    },[details]);

  const data=comments.filter((item,index) => index == id)
  console.log(data)

    useEffect(() => {
        if (details.id && author.length == 0) {
            Axios.get(
                "https://jsonplaceholder.typicode.com/users/" + id
            ).then((response) => {
              setAuthor(response.data);
            });
        }
    },[comments]);

    return (
        <div className="container">
        < Details title={details.title} id={details.id} body={details.body} />
        {data.map((item)=>(
          <Comment
          name={item.name}
          email={item.email}
          body={item.body}
           />
        ))}
        <Author name={author.name} username={author.username} email={author.email} address={author.address} phone={author.phone}/>
        </div>
    );
}
