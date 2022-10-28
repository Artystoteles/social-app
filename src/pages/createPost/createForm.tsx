import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "../../styles/createForm.css";

interface CreateFormData {
  title: string;
  description: string;
}

const CreateForm = () => {
  const [user] = useAuthState(auth);

  const schema = yup.object().shape({
    title: yup.string().required("You must add a title"),
    description: yup.string().required("You must add a description"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  });

  const postsRef = collection(db, "posts");

  const onCreatePost = async (data: CreateFormData) => {
    await addDoc(postsRef, {
      ...data,
      username: user?.displayName,
      userId: user?.uid,
      image: user?.photoURL,
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit(onCreatePost)}>
      <input
        className="form__title"
        placeholder="Title..."
        {...register("title")}
      />
      <p style={{ color: "red" }}>{errors.title?.message}</p>
      <textarea
        className="form__description"
        placeholder="Description..."
        {...register("description")}
      />
      <p style={{ color: "red" }}> {errors.description?.message}</p>
      <input className="form__submit" type="submit" />
    </form>
  );
};

export default CreateForm;
