import { React } from "react";
import { useState, useEffect } from "react";
import Creator from '../components/Creator';
import { supabase } from '../client';

const ShowCreators = () => {

  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase
        .from('creators')
        .select().order("created_at", {ascending: false});
        setCreators(data)
    }
    fetchCreators()
  }, [])

  return (
    <div className="show-creators">
      {
        creators && creators.length > 0 ?
          creators.map((creator, index) => 
            <Creator
            name = {creator.name}
            url = {creator.url}
            description = {creator.description}
            imageURL = {creator.imageURL}
            />
          ) : <p>Nothing here for now...</p>
      }
    </div>
  );
};

export default ShowCreators;