import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import Post from "./post";
import "../../styles/main.css";
import CreateForm from "../createPost/createForm";

export interface Post {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
  image: string;
}

const Main = () => {
  const [postsList, setPostsList] = useState<Post[] | null>(null);
  const postsRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    );
  };
  useEffect(() => {
    getPosts();
  }, [postsList]);
  return (
    <div className="main">
      <div className="main__formContainer">
        <CreateForm />
      </div>
      <div className="main__postsContainer">
        {postsList?.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </div>
  );
};

export default Main;
