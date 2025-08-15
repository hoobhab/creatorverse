import { Outlet, Link, useParams } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../client";

const DetailView = ({}) => {
  const { id } = useParams();
  const [creator, getCreator] = useState({});

  useEffect(() => {
    // READ selected post from table
    const fetchCreator = async () => {
      const { data } = await supabase.from("Creators").select().eq("id", id);
      // set state of post
      getCreator(data[0]);
    }
    fetchCreator();
  }, [id]);

  const deleteCreator = async (event) => {
    event.preventDefault();

    await supabase.from("Creator").delete().eq("id", id);

    window.location = "/";
  };


  return (
    <div>
      <div className="detail-page">
        <div className="detail-header">
          <h2>{creator.name}</h2>
        </div>
        <Link to={"/" + "EditCreator/" + id} style={{color: "black"}}>
          Update creator
        </Link>
        <img
        alt="Image of content creator"
        src={creator.imageURL} />
        <p className="description">{creator.description}</p>
      </div>
    </div>
  );
};

export default DetailView;
