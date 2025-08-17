import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Creator from '../components/Creator';
import { supabase } from '../client';

const AddCreator = () => {

  const [newCreator, setNewCreator] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: ""
  })

  const handleChange = (event) => {
    const{ name, value } = event.target;
    setNewCreator((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const createNewCreator = async (event) => {
    event.preventDefault();

    await supabase
      .from("Creators")
      .insert({
        name: newCreator.name,
        url: newCreator.url,
        description: newCreator.description,
        imageURL: newCreator.imageURL
      })
      .select()

    window.location = "/"
  }

  return (
    <div>
    <div className="AddCreator">
        <h1>Add new creator</h1>
        <form className="add-creator-form">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" onChange={handleChange} />
          <label for="description">Description</label>
          <textarea
            rows="10"
            cols="100"
            id="description"
            name="description"
            placeholder="Enter a description of the content creator here"
            onChange={handleChange}
          ></textarea>
          <label for="url">Creator page URL</label>
          <input type="text" id="url" name="url" onChange={handleChange} />
          <label for="image">Image (optional)</label>
          <input type="text" id="imageURL" name="imageURL" onChange={handleChange} />
          <input type="submit" value="Submit" onClick={createNewCreator} />
        </form>
    </div>
    </div>
  );
};

export default AddCreator;