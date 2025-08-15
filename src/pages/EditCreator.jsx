import { Outlet, Link, useParams } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../client";

const EditCreator = (props) => {
  const { id } = useParams();
  const [currCreator, getCreator] = useState({});
  const [creator, setCreator] = useState({});

  useEffect(() => {
    // READ current Creator from table
    const fetchCreator = async () => {
      const { data } = await supabase.from("Creators").select().eq("id", id);
      // set state of Creator
      getCreator(data[0]);
      setCreator(data[0]);
    };
    fetchCreator();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCreator((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const updateCreator = async (event) => {
    event.preventDefault();

    await supabase
      .from("Creators")
      .update({
        name: creator.name,
        url: creator.url,
        description: creator.description,
        imageURL: creator.imageURL,
      })
      .eq("id", id);

    window.location = `/EditCreator/${id}`;
  };

  const deleteCreator = async (event) => {
    event.preventDefault();

    await supabase.from("Creators").delete().eq("id", id);

    window.location = "/";
  };

  return (
    <div className="EditCreator">
      <form>
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          defaultValue={currCreator.name}
        />
        <label for="description">Description</label>
        <textarea
          rows="5"
          cols="100"
          id="description"
          name="description"
          defaultValue={currCreator.description}
          onChange={handleChange}
        ></textarea>
        <label for="imageURL">Image URL</label> <br />
        <input type="text" id="imageURL" name="imageURL" defaultValue={currCreator.imageURL} onChange={handleChange} />
        <label for="url">Creator Page</label> <br />
        <input type="text" id="url" name="url" defaultValue={creator.url} onChange={handleChange} />
        <input type="submit" value="Submit Update" onClick={updateCreator} />
        <button className="deleteButton" onClick={deleteCreator}>
          Delete Creator
        </button>
      </form>
    </div>
  );
};

export default EditCreator;
