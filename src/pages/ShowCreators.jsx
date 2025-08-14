import { React } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Creator from '../components/Creator';
import { supabase } from '../client';

const ShowCreators = () => {

  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase
        .from('Creators')
        .select().order("created_at", {ascending: false});
        setCreators(data)
    }
    fetchCreators()
  }, [])

  return (
    <div>
    <div className="add-creator">
      <Link to={"AddCreator"}>
      <button>Add creator</button>
      </Link>
    </div>
    <div className="show-creators">
      {
        creators && creators.length > 0 ?
          creators.map((creator, index) => 
            <Creator
            id = {creator.id}
            name = {creator.name}
            url = {creator.url}
            description = {creator.description}
            imageURL = {creator.imageURL}
            />
          ) : <p>Nothing here for now...</p>
      }
    </div>
    </div>
  );
};

export default ShowCreators;