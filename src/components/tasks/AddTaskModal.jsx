import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";

const AddTaskModal = ({isOpen,setIsOpen}) => {
    const {register,handleSubmit,reset} = useForm();
    const onCancel = ()=>{
        reset();
        setIsOpen(false)
    }
    const onSubmit = (data)=>{
        console.log(data)
        onCancel();
    };

    return ( 
         <Modal isOpen = {isOpen} setIsOpen = {setIsOpen} title= {"Shakib Sarar Arnab"}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-5">
                <label htmlFor="title" className="mb-2">Title</label>
                <input className="w-full rounded-md" type="text" id ="title" {...register("name")}/>
            </div>
            <div className="flex flex-col mb-5">
                <label htmlFor="description" className="mb-2">Descrioption</label>
                <input className="w-full rounded-md" type="text" id ="description" {...register("description")}/>
            </div>
            <div className="flex flex-col mb-5">
                <label htmlFor="title" className="mb-2">Deadline</label>
                <input className="w-full rounded-md" type="date" id ="date" {...register("date")}/>
            </div>

            <div className="flex flex-col mb-5">
                <label htmlFor="assignedTo" className="mb-2">Assign To</label>
                <select className="w-full rounded-md" id ="assignedTo" {...register("assignedTo")}>
                <option value="Shakib Sarar Arnab">Shakib Sarar Arnab</option>
                <option value="Hasn Mahmud">Hasn Mahmud</option>
                <option value="Md. Najmuzzaman">Md. Najmuzzaman</option>
                <option value="Sabyasachi Halder">Sabyasachi Halder</option>
                </select>
            </div>
            <div className="flex flex-col mb-5">
                <label htmlFor="priority" className="mb-2">Priority</label>
                <select className="w-full rounded-md" id ="priority" {...register("priority")}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
                </select>
            </div>
            <div className="flex gap-3 justify-end">
                <button type="button" className="btn btn-danger" onClick={()=>onCancel()}>Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>

        </form>
        </Modal>
  );
}
 
export default AddTaskModal;