const initState = {
  projects: [
    { id: "1", title: "Hi There", content: " blah blah" },
    { id: "2", title: "Hi There2", content: " blah blah" },
    { id: "3", title: "Hi There3", content: " blah blah" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
