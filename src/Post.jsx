import { VscAccount, VscGithub } from "react-icons/vsc";

export const Post = () => {
  return (
    <button
      onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/posts/12")
          .then((response) => response.json())
          .then((json) => console.log(json.id))
          .catch((error) => console.error(error));
      }}
    >
      Get Data <VscAccount /> <VscGithub />
    </button>
  );
};
