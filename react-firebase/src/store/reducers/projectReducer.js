const initState = {
  projects: [
    { id: "1", title: "bai viet so 1", content: "nội dung bài viết số 1 đây" },
    { id: "2", title: "bai viet so 2", content: "nội dung bài viết số 1 đây" },
    { id: "3", title: "bai viet so 3", content: "nội dung bài viết số 1 đây" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT_SUCCESS":
      console.log("create project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.type);
      return state;
    default:
      return state;
  }
  return state;
};
export default projectReducer;
