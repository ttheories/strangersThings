import {useState} from "react";
import { useParams } from "react-router";




function CreatePost(){
    const 
    const [title, setTitle]=useState("");
    const [description, setDescription]=useState("");;
    const [price, setPrice]=useState("");
    const [location, setLocation]=useState("");
    
    return (
        <div>
            <form  onSubmit={async (e) => {
                e.preventDefault();
                await CreatePost(title, description, price, location);

                                            }> 
                <input placeholder="Title"  type="text"></input>
                <input placeholder="Description"  type="text"></input>
                <input placeholder="Price "  type="text"></input>
                <input placeholder="Location"  type="text"></input>          
            
           
            }
            </form>
        </div>
    );


}

export default CreatePost;