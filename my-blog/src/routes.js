import AddBlog from "./components/AddBlog"
import ShowBlogs from "./components/ShowBlogs"
import SingleBlog from "./components/SingleBlog"
import EditBlog from "./components/EditBlog"

export default [
  {path:"/",component:ShowBlogs},
  {path:"/AddBlog",component:AddBlog},
  {path:"/blog/:id",component:SingleBlog},
  {path:"/edit/:id",component:EditBlog}
]
