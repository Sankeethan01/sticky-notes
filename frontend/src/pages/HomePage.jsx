import { toast } from "react-hot-toast"

const HomePage = () => {
  return (
    <div>
      Home page
      <button onClick={() => toast.success("This is a success message!")} className="bg-red">click me</button>
    </div>
  )
}

export default HomePage
